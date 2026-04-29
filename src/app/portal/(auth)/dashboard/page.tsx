'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  GraduationCap,
  CalendarCheck,
  Wallet,
  FileText,
  Bell,
  ArrowRight,
  TrendingUp,
  Clock
} from 'lucide-react';
import Image from 'next/image';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [diary, setDiary] = useState<string>('');
  const [attendancePerc, setAttendancePerc] = useState('94%');

  useEffect(() => {
    const auth = localStorage.getItem('portalAuth');
    if (auth) {
      const parsedAuth = JSON.parse(auth);
      setUser(parsedAuth);

      const today = new Date().toISOString().split('T')[0];
      const savedDiaries = JSON.parse(localStorage.getItem('ags_diaries') || '{}');
      if (savedDiaries[today] && savedDiaries[today][parsedAuth.class]) {
        setDiary(savedDiaries[today][parsedAuth.class]);
      } else {
        setDiary("No homework updated for today yet. Check back later!");
      }

      const savedAttendance = JSON.parse(localStorage.getItem('ags_attendance') || '{}');
      let totalDays = 0;
      let presentDays = 0;
      Object.keys(savedAttendance).forEach(date => {
        if (savedAttendance[date][parsedAuth.id]) {
          totalDays++;
          if (savedAttendance[date][parsedAuth.id] === 'present') presentDays++;
        }
      });
      if (totalDays > 0) {
        setAttendancePerc(`${Math.round((presentDays / totalDays) * 100)}%`);
      }
    }
  }, []);

  const stats = [
    { label: "Attendance", value: attendancePerc, icon: CalendarCheck, color: "text-[#1B1464]", bg: "bg-[#1B1464]/5" },
    { label: "Fee Status", value: "Paid", icon: Wallet, color: "text-[#25D366]", bg: "bg-green-50" },
    { label: "Last Result", value: "A+", icon: TrendingUp, color: "text-[#00AEEF]", bg: "bg-[#00AEEF]/5" },
    { label: "Notices", value: "3 New", icon: Bell, color: "text-[#1B1464]", bg: "bg-[#1B1464]/5" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Card - High Contrast Branded */}
      <section className="bg-[#1B1464] rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00AEEF]/10 rounded-full blur-[120px] -ml-24 -mb-24"></div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
          <div className="w-28 h-28 rounded-[2rem] border-4 border-white/10 overflow-hidden shadow-2xl bg-white/5 flex-shrink-0 flex items-center justify-center text-4xl font-black text-white group hover:scale-105 transition-all duration-500">
            {user?.name?.[0]}
          </div>
          <div className="text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-widest mb-4 border border-white/5">
              <div className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full animate-pulse"></div>
              Academic Year 2026-27
            </div>
            <h1 className="text-3xl lg:text-4xl font-black mb-2 tracking-tighter uppercase leading-none">Welcome, {user?.name}!</h1>
            <p className="text-white/40 font-black text-[10px] mb-6 uppercase tracking-[0.3em]">Excellence is not an act, but a habit.</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <div className="px-5 py-2 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest text-[#1B1464] shadow-lg">Class {user?.class}</div>
              <div className="px-5 py-2 bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white border border-white/10">Section {user?.section}</div>
              <div className="px-5 py-2 bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white border border-white/10">Roll: {user?.rollNo}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats - Premium Branded */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[2rem] border border-blue-50 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all group"
          >
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
              <stat.icon size={24} />
            </div>
            <p className="text-[10px] font-black text-[#1B1464]/30 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-[#1B1464] tracking-tight">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Daily Diary - Premium Style */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-4">
            <h3 className="text-xs font-black text-[#1B1464] uppercase tracking-[0.3em]">Academic Journal</h3>
            <span className="text-[10px] font-black text-[#00AEEF] uppercase tracking-widest">
              {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <div className="bg-white rounded-[3rem] border border-blue-50 shadow-2xl shadow-blue-900/5 p-10 min-h-[300px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-[#00AEEF]/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 pointer-events-none">
              <FileText size={150} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 bg-[#00AEEF] rounded-full"></div>
                <h4 className="text-xl font-black text-[#1B1464] tracking-tight uppercase">Daily Homework & Notices</h4>
              </div>
              <p className="text-[#1B1464]/70 font-bold text-lg leading-relaxed whitespace-pre-wrap">
                {diary}
              </p>
              {diary.includes("No homework") && (
                <div className="mt-10 flex items-center gap-3 text-[#25D366] text-[10px] font-black uppercase tracking-[0.3em] bg-green-50 w-fit px-6 py-2 rounded-full border border-green-100">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
                  System Optimized & Current
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recent Notices - Compact & Branded */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-4">
            <h3 className="text-xs font-black text-[#1B1464] uppercase tracking-[0.3em]">Announcements</h3>
            <button className="text-[10px] font-black text-[#00AEEF] hover:text-[#1B1464] transition-colors uppercase tracking-widest">Archive</button>
          </div>
          <div className="space-y-4">
            {[
              { title: "Summer Vacation Schedule 2026", date: "2 days ago", type: "Urgent" },
              { title: "Annual Sports Week Registration", date: "5 days ago", type: "Event" },
              { title: "Fee Clearance Deadline", date: "1 week ago", type: "Notice" },
            ].map((notice, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-[#1B1464]/20 transition-all group cursor-pointer relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${notice.type === 'Urgent' ? 'bg-red-50 text-red-500' : 'bg-[#00AEEF]/10 text-[#00AEEF]'}`}>
                    {notice.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#1B1464]/30 text-[8px] font-black uppercase tracking-widest">
                    <Clock size={10} />
                    {notice.date}
                  </div>
                </div>
                <h4 className="font-black text-[#1B1464] group-hover:text-[#00AEEF] transition-colors text-[13px] leading-snug tracking-tight">{notice.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
