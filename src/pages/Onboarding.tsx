import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';

export default function Onboarding() {
  const [username, setUsername] = useState('');
  const { updateProfile } = useUserStore();
  const navigate = useNavigate();

  const handleComplete = () => {
    updateProfile({ username });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-theme-bg flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-theme-panel p-8 rounded-3xl shadow-soft"
      >
        <div className="text-center mb-8">
          <span className="text-5xl font-japanese text-theme-accent block mb-4">学</span>
          <h1 className="text-2xl font-bold text-theme-text">Welcome to KanjiQuest</h1>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-xl mb-4 font-medium text-theme-text">Create your player</h2>
          <input 
            type="text" 
            placeholder="Username" 
            className="w-full p-4 mb-6 rounded-xl border border-theme-border bg-theme-bg focus:outline-none focus:ring-2 focus:ring-theme-accent text-theme-text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && username.trim() && handleComplete()}
            autoFocus
          />
          <Button 
            className="w-full" 
            size="lg"
            disabled={!username.trim()}
            onClick={handleComplete}
          >
            Start Playing
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
