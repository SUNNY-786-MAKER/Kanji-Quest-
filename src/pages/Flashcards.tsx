import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { validKanjiData } from '../data/kanji';
import { Button } from '../components/ui/Button';

export default function Flashcards() {
  const { level } = useParams<{ level: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const queue = useMemo(() => {
    let filtered = validKanjiData;
    if (level) {
      filtered = filtered.filter(k => k.level === level);
    }
    
    // Shuffle the array so it's different every time
    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
  }, [level]);

  if (queue.length === 0) return <div>No cards to review for {level || 'this level'}.</div>;

  const currentCard = queue[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex(i => (i + 1) % queue.length);
    }, 150);
  };

  return (
    <div className="space-y-8 max-w-xl mx-auto pt-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-theme-text mb-2">Smart Review</h1>
        <p className="text-theme-muted">Practice your weak Kanji.</p>
      </header>

      <div className="relative h-96 w-full perspective-1000 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex + (isFlipped ? '-back' : '-front')}
            initial={{ rotateY: isFlipped ? -90 : 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: isFlipped ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 w-full h-full bg-theme-panel rounded-3xl shadow-lg border border-theme-border flex flex-col items-center justify-center p-8 backface-hidden"
          >
            {!isFlipped ? (
              // Front
              <span className="text-9xl font-japanese font-bold text-theme-text">
                {currentCard.kanji}
              </span>
            ) : (
              // Back
              <div className="text-center w-full">
                <div className="text-3xl font-bold mb-4 text-theme-text">{currentCard.meanings.join(', ')}</div>
                <div className="text-xl text-theme-muted mb-2">{currentCard.onyomi.join(', ')}</div>
                <div className="text-xl text-theme-muted mb-8">{currentCard.kunyomi.join(', ')}</div>
                
                {currentCard.vocabulary[0] && (
                  <div className="bg-gray-50/50 dark:bg-gray-800/50 border border-theme-border p-4 rounded-xl text-left">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-2xl font-bold text-theme-text">{currentCard.vocabulary[0].word}</span>
                      <span className="text-theme-muted">{currentCard.vocabulary[0].reading}</span>
                    </div>
                    <div className="text-theme-text opacity-80">{currentCard.vocabulary[0].meaning}</div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-4 opacity-100 transition-opacity">
        <Button variant="danger" className="flex-1" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
          Need Practice
        </Button>
        <Button variant="primary" className="flex-1 bg-green-500 hover:bg-green-600" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
          Know It
        </Button>
      </div>
    </div>
  );
}
