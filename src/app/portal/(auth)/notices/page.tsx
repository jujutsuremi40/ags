'use client';

import { Bell, Calendar, Clock, Megaphone, FileText, Gift, Info } from 'lucide-react';

export default function Notices() {
  const notices = [
    {
      id: 1,
      title: "Summer Vacation Schedule 2026",
      date: "Apr 25, 2026",
      time: "10:30 AM",
      category: "Academic",
      icon: Calendar,
      color: "bg-blue-100 text-blue-600",
      content: "The summer vacations for the academic year 2026 will start from June 1st and end on August 15th. The school will reopen on August 16th with normal timings.",
      urgent: true
    },
    {
      id: 2,
      title: "Annual Sports Week 2026 - Registrations Open",
      date: "Apr 22, 2026",
      time: "02:15 PM",
      category: "Event",
      icon: Gift,
      color: "bg-purple-100 text-purple-600",
      content: "Registration for the Annual Sports Week is now open. Interested students can sign up for various sports like Cricket, Football, and Athletics with their House Captains.",
      urgent: false
    },
    {
      id: 3,
      title: "Fee Structure Revision for Next Session",
      date: "Apr 15, 2026",
      time: "09:00 AM",
      category: "Finance",
      icon: FileText,
      color: "bg-orange-100 text-orange-600",
      content: "Please be advised that the fee structure for the 2026-2027 academic session has been updated. You can view the details in the 'Fees' section of the portal.",
      urgent: false
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting (PTM) Reminder",
      date: "Apr 10, 2026",
      time: "11:45 AM",
      category: "General",
      icon: Info,
      color: "bg-green-100 text-green-600",
      content: "The PTM for the mid-term exams is scheduled for this Saturday. We encourage all parents to attend and discuss their child's progress with the faculty.",
      urgent: true
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-black text-primary tracking-tight uppercase flex items-center gap-4">
            <div className="w-2 h-10 bg-secondary rounded-full"></div>
            School Notices
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-2">Latest announcements and updates from the administration</p>
        </div>
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-primary relative">
          <Bell size={28} />
          <span className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-6">
        {notices.map((notice) => (
          <div key={notice.id} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 relative group overflow-hidden hover:border-primary/20 transition-all">
            {notice.urgent && (
              <div className="absolute top-0 right-0">
                <div className="bg-red-500 text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-6 rotate-45 translate-x-6 translate-y-2 shadow-lg">
                  Urgent
                </div>
              </div>
            )}
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className={`w-16 h-16 ${notice.color} rounded-[1.5rem] flex items-center justify-center flex-shrink-0`}>
                <notice.icon size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${notice.color}`}>
                    {notice.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    <Calendar size={14} /> {notice.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    <Clock size={14} /> {notice.time}
                  </div>
                </div>
                <h3 className="text-xl font-black text-primary mb-4 group-hover:text-secondary transition-colors">{notice.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">{notice.content}</p>
                <div className="flex items-center gap-6 pt-6 border-t border-gray-50">
                   <button className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-secondary transition-colors">
                     View Details
                   </button>
                   <button className="text-gray-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                     Download Attachment
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-10">
        <button className="px-10 py-4 bg-gray-50 text-gray-400 font-black text-xs uppercase tracking-widest rounded-2xl border border-gray-100 hover:bg-primary hover:text-white hover:border-primary transition-all">
          Load Previous Notices
        </button>
      </div>
    </div>
  );
}
