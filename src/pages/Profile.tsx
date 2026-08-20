import { useUserStore, Theme } from '../store/userStore';

export default function Profile() {
  const { profile, progress, updateProgress } = useUserStore();

  const themes: { id: Theme, name: string, icon: string }[] = [
    { id: 'light', name: 'Light', icon: '☀️' },
    { id: 'dark', name: 'Dark', icon: '🌙' },
    { id: 'sakura', name: 'Sakura Light', icon: '🌸' },
    { id: 'tatami', name: 'Tatami Light', icon: '🍵' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex items-center gap-6 bg-theme-panel p-6 rounded-3xl shadow-sm border border-theme-border">
        <div className="w-24 h-24 bg-gray-100/50 dark:bg-gray-800/50 rounded-full flex items-center justify-center text-4xl shadow-sm border border-theme-border">
          🥷
        </div>
        <div>
          <h1 className="text-3xl font-bold text-theme-text mb-1">{profile.username}</h1>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-theme-panel p-6 rounded-3xl shadow-sm border border-theme-border">
          <div className="text-theme-muted mb-2">Total XP</div>
          <div className="text-3xl font-bold text-theme-text">{progress.xp}</div>
        </div>
        <div className="bg-theme-panel p-6 rounded-3xl shadow-sm border border-theme-border">
          <div className="text-theme-muted mb-2">Longest Streak</div>
          <div className="text-3xl font-bold text-theme-text">{progress.longestStreak}</div>
        </div>
        <div className="bg-theme-panel p-6 rounded-3xl shadow-sm border border-theme-border">
          <div className="text-theme-muted mb-2">Kanji Mastered</div>
          <div className="text-3xl font-bold text-theme-text">{progress.kanjiMastered.length}</div>
        </div>
        <div className="bg-theme-panel p-6 rounded-3xl shadow-sm border border-theme-border">
          <div className="text-theme-muted mb-2">Accuracy</div>
          <div className="text-3xl font-bold text-theme-text">
            {progress.questionsAnswered > 0 ? Math.round((progress.correctAnswers / progress.questionsAnswered) * 100) : 0}%
          </div>
        </div>
      </div>

      <section className="bg-theme-panel p-6 rounded-3xl shadow-sm border border-theme-border">
        <h2 className="text-xl font-bold mb-4 text-theme-text">Appearance</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {themes.map(t => (
              <button 
                key={t.id}
                onClick={() => updateProgress({ theme: t.id })}
                className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                  progress.theme === t.id 
                    ? 'border-theme-accent bg-theme-accent-bg text-theme-accent' 
                    : 'border-theme-border text-theme-muted hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <span className="text-2xl">{t.icon}</span>
                <span className="font-semibold">{t.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
