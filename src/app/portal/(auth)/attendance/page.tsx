'use client';

import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, XCircle, Clock, ChevronLeft, ChevronRight, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Attendance() {
  const [user, setUser] = useState<any>(null);
  const [attendance, setAttendance] = useState<any>({});

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const auth = localStorage.getItem('portalAuth');
    if (auth) setUser(JSON.parse(auth));

    const saved = JSON.parse(localStorage.getItem('ags_attendance') || '{}');
    setAttendance(saved);
  }, []);

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Convert Sunday(0) to 6, Monday(1) to 0, etc. for Mon-Sun week
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOffset = getFirstDayOfMonth(year, month);

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const currentMonthStr = `${monthName} ${year}`;
  const monthPrefix = `${year}-${(month + 1).toString().padStart(2, '0')}`;

  const calculateStats = () => {
    if (!user) return { total: 0, present: 0, absent: 0, late: 0, perc: "0%" };

    let total = 0;
    let present = 0;
    let absent = 0;
    let late = 0;

    Object.keys(attendance).forEach(date => {
      if (date.startsWith(monthPrefix)) {
        const status = attendance[date][user.id];
        if (status) {
          total++;
          if (status === 'present') present++;
          else if (status === 'absent') absent++;
          else if (status === 'late') late++;
        }
      }
    });

    const perc = total > 0 ? Math.round(((present + late) / total) * 100) : 0;
    return { total, present, absent, late, perc: `${perc}%` };
  };

  const realStats = calculateStats();

  const stats = [
    { label: "Working Days", value: realStats.total.toString(), icon: CalendarIcon, color: "text-[#1B1464]", bg: "bg-[#1B1464]/5" },
    { label: "Present", value: realStats.present.toString(), icon: CheckCircle2, color: "text-[#25D366]", bg: "bg-green-50" },
    { label: "Absent", value: realStats.absent.toString(), icon: XCircle, color: "text-[#EF4444]", bg: "bg-red-50" },
    { label: "Attendance", value: realStats.perc, icon: Clock, color: "text-[#00AEEF]", bg: "bg-[#00AEEF]/5" },
  ];

  // Create array with empty slots for offset
  const emptyDays = Array.from({ length: firstDayOffset }, () => null);

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const dayNum = i + 1;
    const dateStr = `${monthPrefix}-${dayNum.toString().padStart(2, '0')}`;
    let status = 'none';

    // Calculate actual day of week (0 = Monday, 6 = Sunday based on our grid)
    const dayOfWeek = (firstDayOffset + i) % 7;
    const isWeekend = dayOfWeek === 5 || dayOfWeek === 6; // Sat or Sun

    if (attendance[dateStr] && user && attendance[dateStr][user.id]) {
      status = attendance[dateStr][user.id];
    } else if (isWeekend) {
      status = 'holiday';
    }
    return { date: dayNum, status, isBlank: false };
  });

  const allCalendarSlots = [...emptyDays.map(() => ({ date: "", status: "none", isBlank: true })), ...days];

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div className="space-y-8 pb-10">
      {/* Stats Section - Premium Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[2rem] border border-blue-50 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all group"
          >
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon size={22} />
            </div>
            <p className="text-[10px] font-black text-[#1B1464]/30 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-[#1B1464] tracking-tighter">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar - Branded High-End View */}
        <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 shadow-2xl shadow-blue-900/5 border border-blue-50 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-6">
            <h3 className="text-xl font-black text-[#1B1464] uppercase tracking-tight flex items-center gap-4">
              <div className="w-2 h-8 bg-[#00AEEF] rounded-full"></div>
              Attendance Record
            </h3>
            <div className="flex items-center gap-2 bg-[#F8FAFC] p-1.5 rounded-2xl border border-blue-50">
              <button onClick={handlePrevMonth} className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all text-[#1B1464]"><ChevronLeft size={18} /></button>
              <span className="font-black text-[#1B1464] uppercase tracking-widest text-[10px] px-4 w-28 text-center">{currentMonthStr}</span>
              <button onClick={handleNextMonth} className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all text-[#1B1464]"><ChevronRight size={18} /></button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="text-center py-3 text-[10px] font-black text-[#1B1464]/20 uppercase tracking-[0.3em]">{day}</div>
            ))}
            {allCalendarSlots.map((day, i) => (
              <motion.div
                key={i}
                whileHover={!day.isBlank ? { scale: 1.05 } : undefined}
                className={`
                  aspect-square rounded-[1.25rem] flex flex-col items-center justify-center gap-1.5 border transition-all relative overflow-hidden
                  ${day.isBlank ? 'bg-transparent border-transparent' :
                    day.status === 'present' ? 'bg-green-50 border-green-100 text-[#25D366] shadow-sm' :
                      day.status === 'absent' ? 'bg-red-50 border-red-100 text-[#EF4444] shadow-sm' :
                        day.status === 'late' ? 'bg-orange-50 border-orange-100 text-orange-500 shadow-sm' :
                          day.status === 'holiday' ? 'bg-[#F8FAFC] border-blue-50 text-[#1B1464]/10 opacity-40' :
                            'bg-white border-blue-50 text-[#1B1464]/20'}
                `}
              >
                {!day.isBlank && <span className="text-sm font-black">{day.date}</span>}
                {!day.isBlank && day.status !== 'holiday' && day.status !== 'none' && (
                  <div className={`w-1.5 h-1.5 rounded-full ${day.status === 'present' ? 'bg-[#25D366]' : day.status === 'late' ? 'bg-orange-500' : 'bg-[#EF4444]'}`}></div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-8 pt-10 border-t border-blue-50">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#25D366] shadow-lg shadow-green-100"></div>
              <span className="text-[10px] font-black text-[#1B1464]/40 uppercase tracking-[0.2em]">Present</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-orange-500 shadow-lg shadow-orange-100"></div>
              <span className="text-[10px] font-black text-[#1B1464]/40 uppercase tracking-[0.2em]">Late</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#EF4444] shadow-lg shadow-red-100"></div>
              <span className="text-[10px] font-black text-[#1B1464]/40 uppercase tracking-[0.2em]">Absent</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#F8FAFC] border border-blue-50"></div>
              <span className="text-[10px] font-black text-[#1B1464]/40 uppercase tracking-[0.2em]">Holiday / No Data</span>
            </div>
          </div>
        </div>

        {/* Analytics - Branded */}
        <div className="bg-[#1B1464] rounded-[3rem] p-10 shadow-2xl shadow-blue-900/20 text-white flex flex-col">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><TrendingUp size={20} className="text-[#00AEEF]" /></div>
            <h3 className="text-xl font-black uppercase tracking-tight">Performance</h3>
          </div>
          <div className="space-y-8 flex-1">
            {[
              { month: "April 2026", perc: realStats.perc, status: parseInt(realStats.perc) > 90 ? "OPTIMAL" : "SATISFACTORY" },
              { month: "March 2026", perc: "96%", status: "EXCELLENT" },
              { month: "February 2026", perc: "88%", status: "GOOD" },
              { month: "January 2026", perc: "92%", status: "EXCELLENT" },
            ].map((item, i) => (
              <div key={i} className="space-y-3 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black tracking-tight">{item.month}</p>
                    <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">{item.status}</p>
                  </div>
                  <p className="text-lg font-black text-[#00AEEF]">{item.perc}</p>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.perc }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-[#00AEEF] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-12 py-5 bg-[#00AEEF] text-[#1B1464] font-black text-[10px] uppercase tracking-[0.3em] rounded-[2rem] hover:bg-white transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-3">
            <ShieldCheck size={18} />
            Download Verification
          </button>
        </div>
      </div>
    </div>
  );
}
