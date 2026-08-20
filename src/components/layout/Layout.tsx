import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, Compass, LayoutDashboard, User, Users } from 'lucide-react';
import { useUserStore } from '../../store/userStore';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Layout: React.FC = () => {
  const { progress } = useUserStore();

  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <div className={twMerge(
      "min-h-screen bg-theme-bg text-theme-text transition-colors duration-300 font-sans pb-20 md:pb-0 md:pl-24"
    )}>
      {/* Side Nav for Desktop / Bottom Nav for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:right-auto md:w-24 bg-theme-panel border-t md:border-t-0 md:border-r border-theme-border z-50 shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.05)] md:shadow-[4px_0_20px_-2px_rgba(0,0,0,0.05)]">
        <div className="flex md:flex-col justify-around md:justify-start items-center h-16 md:h-full md:py-8">
          {/* Logo only on desktop */}
          <div className="hidden md:flex flex-col items-center mb-8 text-theme-accent">
            <span className="font-japanese text-3xl font-bold">学</span>
          </div>

          <div className="flex md:flex-col w-full justify-around md:gap-4 md:px-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => clsx(
                  "flex flex-col items-center p-2 md:p-3 rounded-xl transition-all duration-200",
                  isActive 
                    ? "text-theme-accent bg-theme-accent-bg" 
                    : "text-theme-muted hover:text-theme-text hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                )}
              >
                <item.icon className="w-6 h-6 md:w-7 md:h-7 mb-1 md:mb-2" />
                <span className="text-[10px] md:text-xs font-semibold">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto p-4 md:p-8 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};
