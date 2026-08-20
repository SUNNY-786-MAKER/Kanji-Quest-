import { useUserStore } from '../store/userStore';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { profile, progress } = useUserStore();
  const navigate = useNavigate();

  const levels = [
    { id: 'N5', title: 'JLPT N5', desc: 'Beginner Level', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { id: 'N4', title: 'JLPT N4', desc: 'Basic Level', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
    { id: 'N3', title: 'JLPT N3', desc: 'Intermediate Level', color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
    { id: 'N2', title: 'JLPT N2', desc: 'Advanced Level', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Profile Section */}
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-theme-text">こんにちは、{profile.username} 👋</h1>
          <p className="text-theme-muted mt-1 font-medium">You're making great progress.</p>
        </div>
        <div className="w-16 h-16 bg-theme-panel border border-theme-border rounded-full flex items-center justify-center text-2xl shadow-sm">
          🥷
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-3 gap-4">
        <div className="bg-theme-panel p-4 rounded-2xl shadow-sm border border-theme-border flex flex-col items-center">
          <span className="text-2xl mb-1">🔥</span>
          <span className="font-bold text-lg text-theme-text">{progress.streak} Day</span>
          <span className="text-xs text-theme-muted">Streak</span>
        </div>
        <div className="bg-theme-panel p-4 rounded-2xl shadow-sm border border-theme-border flex flex-col items-center">
          <span className="text-2xl mb-1">⭐</span>
          <span className="font-bold text-lg text-theme-text">{progress.xp} XP</span>
          <span className="text-xs text-theme-muted">Total XP</span>
        </div>
        <div className="bg-theme-panel p-4 rounded-2xl shadow-sm border border-theme-border flex flex-col items-center">
          <span className="text-2xl mb-1">🈶</span>
          <span className="font-bold text-lg text-theme-text">{progress.kanjiMastered.length}</span>
          <span className="text-xs text-theme-muted">Mastered</span>
        </div>
      </section>

      {/* Level Selection */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-theme-text">Select a Level to Practice</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {levels.map((level) => (
            <motion.div 
              whileHover={{ y: -4 }}
              key={level.id}
              onClick={() => navigate(`/flashcards/${level.id}`)}
              className="bg-theme-panel p-6 rounded-2xl shadow-sm border border-theme-border cursor-pointer flex items-center gap-6 group transition-all"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold ${level.bg} ${level.color}`}>
                {level.id}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl group-hover:text-theme-accent transition-colors text-theme-text">{level.title}</h3>
                <p className="text-sm text-theme-muted">{level.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
