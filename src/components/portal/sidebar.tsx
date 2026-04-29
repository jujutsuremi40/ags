'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  UserCircle,
  CalendarCheck,
  FileText,
  Wallet,
  Bell,
  LogOut,
  X,
  Menu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/portal/dashboard" },
  { icon: UserCircle, label: "Profile", href: "/portal/profile" },
  { icon: CalendarCheck, label: "Attendance", href: "/portal/attendance" },
  { icon: FileText, label: "Results", href: "/portal/results" },
  { icon: Wallet, label: "Fees", href: "/portal/fees" },
  { icon: Bell, label: "Notices", href: "/portal/notices" },
];

export function PortalSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('portalAuth');
    router.push('/portal');
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-primary text-white rounded-lg shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-[50] lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-[60] w-72 bg-[#1B1464] text-white transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-10 px-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1.5">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-lg font-black tracking-tight leading-none">ABEXSUN</h2>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mt-1">Portal</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="lg:hidden text-white/60 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 group
                    ${isActive ? 'bg-secondary text-primary shadow-xl shadow-secondary/10' : 'text-white/60 hover:bg-white/5 hover:text-white'}
                  `}
                >
                  <item.icon size={20} className={isActive ? 'text-primary' : 'text-secondary'} />
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="mt-auto flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm text-red-400 hover:bg-red-500/10 transition-all duration-300"
          >
            <LogOut size={20} />
            Logout Session
          </button>
        </div>
      </aside>
    </>
  );
}
