import React from 'react';
import { Button } from '../components/ui/Button';

export default function Friends() {
  const demoFriends = [
    { name: 'Ali', level: 'N4', xp: 8420, streak: 12, avatar: '🦊' },
    { name: 'Sarah', level: 'N5', xp: 6300, streak: 5, avatar: '🐯' },
    { name: 'Rahul', level: 'N3', xp: 14200, streak: 27, avatar: '🐼' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-theme-text mb-2">Friends</h1>
        <p className="text-theme-muted">Challenge your friends to a Kanji Battle.</p>
      </header>

      <div className="flex gap-4 mb-8">
        <Button className="flex-1" size="lg">Create Game</Button>
        <Button variant="secondary" className="flex-1" size="lg">Join Game</Button>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4 text-theme-text">Leaderboard</h2>
        <div className="space-y-4">
          {demoFriends.sort((a, b) => b.xp - a.xp).map((friend, index) => (
            <div key={friend.name} className="bg-theme-panel p-4 rounded-2xl shadow-sm border border-theme-border flex items-center gap-4">
              <div className="w-8 text-center font-bold text-theme-muted">
                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
              </div>
              <div className="w-12 h-12 bg-gray-100/50 dark:bg-gray-800/50 border border-theme-border rounded-full flex items-center justify-center text-2xl">
                {friend.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-theme-text">{friend.name}</h3>
                <p className="text-sm text-theme-muted">JLPT {friend.level}</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-theme-accent">{friend.xp} XP</div>
                <div className="text-sm text-theme-muted">🔥 {friend.streak}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
