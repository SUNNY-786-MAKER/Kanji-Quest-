export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (stats: UserStats) => boolean;
}

export interface UserStats {
  totalXp: number;
  longestStreak: number;
  kanjiMastered: string[];
  vocabularyLearned: string[];
  quizzesCompleted: number;
  accuracy: number;
}

export const achievements: Achievement[] = [
  {
    id: 'first_kanji',
    title: 'First Step',
    description: 'Master your first Kanji',
    icon: '🏆',
    condition: (stats) => stats.kanjiMastered.length >= 1,
  },
  {
    id: 'streak_10',
    title: 'On Fire',
    description: 'Achieve a 10-answer streak',
    icon: '🔥',
    condition: (stats) => stats.longestStreak >= 10,
  },
  {
    id: 'kanji_50',
    title: 'Kanji Explorer',
    description: 'Master 50 Kanji',
    icon: '📚',
    condition: (stats) => stats.kanjiMastered.length >= 50,
  },
  {
    id: 'kanji_100',
    title: 'Kanji Specialist',
    description: 'Master 100 Kanji',
    icon: '🈶',
    condition: (stats) => stats.kanjiMastered.length >= 100,
  },
  {
    id: 'accuracy_90',
    title: 'Sharpshooter',
    description: 'Maintain 90% accuracy over 50 questions',
    icon: '🎯',
    condition: (stats) => stats.quizzesCompleted >= 50 && stats.accuracy >= 90,
  },
  {
    id: 'n5_master',
    title: 'N5 Master',
    description: 'Complete the N5 journey',
    icon: '🌱',
    condition: () => false, // Will be checked specifically
  },
  {
    id: 'n2_master',
    title: 'N2 Kanji Master',
    description: 'Conquer the final level',
    icon: '⚔️',
    condition: () => false, // Will be checked specifically
  },
];
