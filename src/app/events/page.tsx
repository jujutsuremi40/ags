'use client';

import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventsPage() {
  const [eventItems, setEventItems] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('ags_events');
    if (saved) {
      setEventItems(JSON.parse(saved));
    } else {
      setEventItems([
        { date: "2026-05-15", title: "Annual Science Fair", location: "Main Auditorium", time: "9:00 AM", desc: "Students showcase innovative science projects.", status: "upcoming" },
        { date: "2026-03-23", title: "Pakistan Day Celebration", location: "Assembly Ground", time: "8:30 AM", desc: "Patriotic speeches and flag hoisting.", status: "past" },
      ]);
    }
  }, []);

  // Sort events by date
  const sortedEvents = [...eventItems].sort((a, b) => {
    const dateA = new Date(a.date).getTime() || 0;
    const dateB = new Date(b.date).getTime() || 0;
    return dateB - dateA;
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = sortedEvents.filter(e => {
    const eventDate = new Date(e.date);
    return isNaN(eventDate.getTime()) || eventDate >= today;
  });

  const past = sortedEvents.filter(e => {
    const eventDate = new Date(e.date);
    return !isNaN(eventDate.getTime()) && eventDate < today;
  });

  return (
    <>
      <section className="relative h-[25vh] min-h-[200px] flex items-center justify-center bg-white border-b border-gray-100 overflow-hidden pt-8">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-2 tracking-tighter uppercase">Events</h1>
          <p className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest">Campus Highlights & Celebrations</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-primary mb-10 flex items-center gap-3 uppercase tracking-tight">
            <div className="w-2 h-8 bg-secondary rounded-full"></div>
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {upcoming.map((event, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-transparent hover:border-secondary/20">
                <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary text-white rounded-2xl p-4 text-center min-w-[80px] shadow-lg shadow-primary/20">
                      <div className="text-2xl font-black">{new Date(event.date).getDate()}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-primary mb-2 uppercase tracking-tight">{event.title}</h3>
                      <p className="text-gray-500 text-sm mb-4 font-medium leading-relaxed">{event.desc || event.content}</p>
                      <div className="flex flex-wrap gap-4 text-[10px] text-gray-400 font-black uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-secondary" /> {event.location || 'Campus'}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-secondary" /> {event.time || 'TBA'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {upcoming.length === 0 && <p className="text-gray-400 font-bold uppercase tracking-widest">No upcoming events scheduled.</p>}
          </div>

          <h2 className="text-3xl font-black text-primary mb-10 flex items-center gap-3 uppercase tracking-tight opacity-50">
            <div className="w-2 h-8 bg-gray-300 rounded-full"></div>
            Past Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {past.map((event, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 shadow-md opacity-60 border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="bg-gray-400 text-white rounded-2xl p-4 text-center min-w-[80px]">
                    <div className="text-2xl font-black">{new Date(event.date).getDate()}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-700 mb-2 uppercase tracking-tight">{event.title}</h3>
                    <p className="text-gray-500 text-sm font-medium">{event.desc || event.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
