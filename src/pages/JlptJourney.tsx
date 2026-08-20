import React from 'react';
import { motion } from 'framer-motion';
import { validKanjiData, JLPTLevel } from '../data/kanji';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function JlptJourney() {
  const navigate = useNavigate();

  const levels = [
    { level: 'N5', title: 'Beginner', icon: '🌱', kanji: validKanjiData.filter(k => k.jlptLevel === 'N5').length, progress: 72 },
    { level: 'N4', title: 'Elementary', icon: '🌿', kanji: validKanjiData.filter(k => k.jlptLevel === 'N4').length, progress: 34 },
    { level: 'N3', title: 'Intermediate', icon: '🔥', kanji: validKanjiData.filter(k => k.jlptLevel === 'N3').length, progress: 0 },
    { level: 'N2', title: 'Upper Intermediate', icon: '⚔️', kanji: validKanjiData.filter(k => k.jlptLevel === 'N2').length, progress: 0 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-theme-text mb-2">JLPT Journey</h1>
        <p className="text-theme-muted">Master the levels from N5 to N2.</p>
      </header>

      <div className="relative max-w-2xl mx-auto">
        {/* Journey Line */}
        <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-theme-border -z-10" />

        <div className="space-y-8">
          {levels.map((l, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              key={l.level} 
              className="flex gap-6"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shrink-0 z-10 border-4 border-theme-bg ${l.progress > 0 ? 'bg-theme-accent text-white' : 'bg-theme-border text-theme-muted'}`}>
                {l.icon}
              </div>
              <div className="flex-1 bg-theme-panel p-6 rounded-3xl shadow-sm border border-theme-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-theme-text">{l.level}</h2>
                    <p className="text-theme-muted font-medium">{l.title}</p>
                  </div>
                  <span className="font-bold text-lg text-theme-text">{l.progress}%</span>
                </div>
                
                <div className="flex gap-4 text-sm mb-6 text-theme-muted">
                  <span>🈶 {l.kanji} Kanji</span>
                  <span>📚 Vocab</span>
                </div>

                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 mb-6">
                  <div 
                    className="bg-theme-accent h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${l.progress}%` }}
                  />
                </div>

                <Button 
                  onClick={() => navigate(`/quiz/classic?level=${l.level}`)}
                  variant={l.progress > 0 ? 'primary' : 'secondary'}
                >
                  {l.progress > 0 ? 'Continue' : 'Start Level'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
