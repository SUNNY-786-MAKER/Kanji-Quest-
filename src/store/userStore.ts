import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { JLPTLevel } from '../data/kanji';

export interface UserProfile {
  username: string;
  avatar: string;
  targetLevel: JLPTLevel;
}

export type Theme = 'light' | 'dark' | 'sakura' | 'tatami';

export interface UserProgress {
  xp: number;
  streak: number;
  longestStreak: number;
  kanjiMastered: string[];
  weakKanji: Record<string, number>;
  vocabularyLearned: string[];
  achievements: string[];
  quizzesCompleted: number;
  questionsAnswered: number;
  correctAnswers: number;
  lastActiveDate: string;
  theme: Theme;
  soundEnabled: boolean;
}

const defaultProfile: UserProfile = {
  username: '',
  avatar: 'ninja',
  targetLevel: 'N5'
};

const defaultProgress: UserProgress = {
  xp: 0,
  streak: 0,
  longestStreak: 0,
  kanjiMastered: [],
  weakKanji: {},
  vocabularyLearned: [],
  achievements: [],
  quizzesCompleted: 0,
  questionsAnswered: 0,
  correctAnswers: 0,
  lastActiveDate: '',
  theme: 'light',
  soundEnabled: true
};

interface UserStore {
  profile: UserProfile;
  progress: UserProgress;
  updateProfile: (updates: Partial<UserProfile>) => void;
  updateProgress: (updates: Partial<UserProgress>) => void;
  addXp: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  recordAnswer: (isCorrect: boolean, kanjiChar?: string) => void;
  getAccuracy: () => number;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      profile: defaultProfile,
      progress: defaultProgress,
      
      updateProfile: (updates) => set((state) => ({ 
        profile: { ...state.profile, ...updates } 
      })),
      
      updateProgress: (updates) => set((state) => ({ 
        progress: { ...state.progress, ...updates } 
      })),
      
      addXp: (amount) => set((state) => ({ 
        progress: { ...state.progress, xp: state.progress.xp + amount } 
      })),
      
      incrementStreak: () => set((state) => {
        const newStreak = state.progress.streak + 1;
        return {
          progress: {
            ...state.progress,
            streak: newStreak,
            longestStreak: Math.max(state.progress.longestStreak, newStreak)
          }
        };
      }),
      
      resetStreak: () => set((state) => ({
        progress: { ...state.progress, streak: 0 }
      })),
      
      recordAnswer: (isCorrect, kanjiChar) => set((state) => {
        const prev = state.progress;
        const newCorrect = prev.correctAnswers + (isCorrect ? 1 : 0);
        const newTotal = prev.questionsAnswered + 1;
        
        const updates: Partial<UserProgress> = {
          correctAnswers: newCorrect,
          questionsAnswered: newTotal
        };

        if (!isCorrect && kanjiChar) {
          updates.weakKanji = {
            ...prev.weakKanji,
            [kanjiChar]: (prev.weakKanji[kanjiChar] || 0) + 1
          };
        }

        return { progress: { ...prev, ...updates } };
      }),
      
      getAccuracy: () => {
        const state = get();
        if (state.progress.questionsAnswered === 0) return 0;
        return Math.round((state.progress.correctAnswers / state.progress.questionsAnswered) * 100);
      }
    }),
    {
      name: 'kanjiquest-storage',
    }
  )
);
