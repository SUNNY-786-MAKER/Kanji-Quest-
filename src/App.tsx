import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { useUserStore } from './store/userStore';

// Lazy load pages for performance
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Onboarding = React.lazy(() => import('./pages/Onboarding'));
const QuizMode = React.lazy(() => import('./pages/QuizMode'));
const Flashcards = React.lazy(() => import('./pages/Flashcards'));
const Profile = React.lazy(() => import('./pages/Profile'));

function App() {
  const { profile, progress } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is onboarded
    if (!profile.username && location.pathname !== '/onboarding') {
      navigate('/onboarding');
    }
  }, [profile.username, navigate, location.pathname]);

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', progress.theme);
    if (progress.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [progress.theme]);

  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center font-japanese text-2xl text-kanji-red animate-pulse">読み込み中...</div>}>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="flashcards/:level" element={<Flashcards />} />
        </Route>

        {/* Full screen game modes without nav layout */}
        <Route path="/quiz/:mode" element={<QuizMode />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
