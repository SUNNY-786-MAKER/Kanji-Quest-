import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { validKanjiData, Kanji } from '../data/kanji';
import { useUserStore } from '../store/userStore';
import { Button } from '../components/ui/Button';
import { X, Check } from 'lucide-react';

type QuestionType = 'meaning' | 'reading' | 'reverse';

interface Question {
  kanji: Kanji;
  type: QuestionType;
  options: string[];
  correctAnswer: string;
}

export default function QuizMode() {
  const { mode } = useParams();
  const [searchParams] = useSearchParams();
  const level = searchParams.get('level') || 'N5';
  const navigate = useNavigate();
  const { addXp, incrementStreak, resetStreak, recordAnswer, progress } = useUserStore();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Generate Questions
  useEffect(() => {
    // Basic question generator for MVP
    const pool = validKanjiData.filter(k => k.level === level || mode === 'mixed');
    if (pool.length === 0) {
        navigate('/');
        return;
    }

    const generated: Question[] = [];
    const count = mode === 'rush' ? 20 : 10; // Simplify

    for (let i = 0; i < count; i++) {
      const k = pool[Math.floor(Math.random() * pool.length)];
      const type: QuestionType = Math.random() > 0.5 ? 'meaning' : 'reading';
      
      let correctAnswer = '';
      let options: string[] = [];

      if (type === 'meaning') {
        correctAnswer = k.meanings[0];
        options = [correctAnswer];
        while(options.length < 4) {
          const rand = pool[Math.floor(Math.random() * pool.length)].meanings[0];
          if (!options.includes(rand)) options.push(rand);
        }
      } else {
        correctAnswer = k.onyomi[0] || k.kunyomi[0];
        options = [correctAnswer];
        while(options.length < 4) {
          const randK = pool[Math.floor(Math.random() * pool.length)];
          const randR = randK.onyomi[0] || randK.kunyomi[0];
          if (randR && !options.includes(randR)) options.push(randR);
        }
      }

      options.sort(() => Math.random() - 0.5);

      generated.push({
        kanji: k,
        type,
        options,
        correctAnswer
      });
    }

    setQuestions(generated);
  }, [mode, level, navigate]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    
    const correct = answer === questions[currentIndex].correctAnswer;
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    recordAnswer(correct, questions[currentIndex].kanji.kanji);

    if (correct) {
      addXp(100);
      incrementStreak();
      setScore(s => s + 100);
    } else {
      resetStreak();
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setSelectedAnswer(null);
      setIsCorrect(null);
      setCurrentIndex(i => i + 1);
    } else {
      setGameOver(true);
    }
  };

  if (questions.length === 0) return <div className="p-8 text-center">Loading...</div>;

  const currentQ = questions[currentIndex];

  if (gameOver) {
    return (
      <div className="min-h-screen bg-theme-bg flex flex-col items-center justify-center p-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-theme-panel p-8 rounded-3xl text-center max-w-md w-full shadow-lg border border-theme-border">
          <h1 className="text-3xl font-bold mb-2 text-theme-text">🎉 Challenge Complete!</h1>
          <p className="text-theme-muted mb-8">Great job practicing today.</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50/50 dark:bg-gray-800/50 border border-theme-border p-4 rounded-xl">
              <span className="text-xs text-theme-muted block mb-1">XP Earned</span>
              <span className="text-2xl font-bold text-theme-accent">+{score}</span>
            </div>
            <div className="bg-gray-50/50 dark:bg-gray-800/50 border border-theme-border p-4 rounded-xl">
              <span className="text-xs text-theme-muted block mb-1">Best Streak</span>
              <span className="text-2xl font-bold text-theme-text">{progress.longestStreak}</span>
            </div>
          </div>

          <div className="space-y-4">
            <Button className="w-full" onClick={() => window.location.reload()}>Play Again</Button>
            <Button variant="secondary" className="w-full" onClick={() => navigate('/')}>Back to Dashboard</Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-theme-bg flex flex-col p-4 md:p-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8 max-w-2xl mx-auto w-full">
        <button onClick={() => navigate('/')} className="p-2 bg-theme-panel rounded-full shadow-sm border border-theme-border hover:bg-gray-50/50">
          <X className="w-6 h-6 text-theme-text" />
        </button>
        <div className="flex gap-4">
          <div className="bg-theme-panel border border-theme-border px-4 py-2 rounded-full font-bold shadow-sm text-theme-text">
            🔥 {progress.streak}
          </div>
          <div className="bg-theme-panel border border-theme-border px-4 py-2 rounded-full font-bold text-theme-accent shadow-sm">
            {currentIndex + 1} / {questions.length}
          </div>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 flex flex-col items-center max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full text-center mb-12"
          >
            <h2 className="text-theme-muted font-medium mb-8">
              {currentQ.type === 'meaning' ? 'What does this Kanji mean?' : 'What is the correct reading?'}
            </h2>
            <div className="text-[120px] leading-none font-japanese font-bold text-theme-text drop-shadow-sm mb-4">
              {currentQ.kanji.kanji}
            </div>
            
            {/* Context/Hint if needed in future */}
          </motion.div>
        </AnimatePresence>

        {/* Options */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQ.options.map((opt, i) => {
            let stateClass = 'bg-theme-panel hover:bg-gray-50/50 dark:hover:bg-gray-800/50 border-theme-border text-theme-text';
            if (selectedAnswer) {
              if (opt === currentQ.correctAnswer) {
                stateClass = 'bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-100';
              } else if (opt === selectedAnswer) {
                stateClass = 'bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-100';
              } else {
                stateClass = 'bg-gray-50/50 dark:bg-gray-900/50 opacity-50 border-theme-border text-theme-text';
              }
            }

            return (
              <button
                key={i}
                disabled={selectedAnswer !== null}
                onClick={() => handleAnswer(opt)}
                className={`p-6 text-xl font-bold rounded-2xl border-2 transition-all shadow-sm ${stateClass}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Feedback Area */}
        <AnimatePresence>
          {selectedAnswer && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full mt-8 p-6 bg-theme-panel rounded-3xl shadow-lg border border-theme-border"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {isCorrect ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />}
                  </div>
                  <h3 className={`text-xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrect ? 'Correct!' : 'Not quite.'}
                  </h3>
                </div>
                {isCorrect && <span className="font-bold text-theme-accent bg-theme-accent-bg px-3 py-1 rounded-full">+100 XP</span>}
              </div>

              {!isCorrect && (
                <div className="bg-gray-50/50 dark:bg-gray-800/50 border border-theme-border p-4 rounded-xl mb-6 text-theme-text">
                  <div className="text-sm text-theme-muted mb-1">Meaning</div>
                  <div className="font-bold mb-3">{currentQ.kanji.meanings.join(', ')}</div>
                  <div className="text-sm text-theme-muted mb-1">On'yomi / Kun'yomi</div>
                  <div className="font-bold">{currentQ.kanji.onyomi.join(', ')} / {currentQ.kanji.kunyomi.join(', ')}</div>
                </div>
              )}

              <Button className="w-full" size="lg" onClick={nextQuestion}>
                {currentIndex < questions.length - 1 ? 'Next Kanji →' : 'Finish →'}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
