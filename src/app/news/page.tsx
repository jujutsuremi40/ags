'use client';

import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Bell } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    const savedNews = localStorage.getItem('ags_news');
    const savedNotices = localStorage.getItem('ags_notices');
    
    if (savedNews) setNews(JSON.parse(savedNews));
    else setNews([
      { date: "Apr 20, 2026", title: "Board Exam Results: 98% Pass Rate!", desc: "Abexsun Grammar School achieves outstanding results in the 2026 board examinations.", category: "Results" },
    ]);

    if (savedNotices) setNotices(JSON.parse(savedNotices));
    else setNotices([
      { title: "Summer vacation from June 15 to August 10, 2026" },
      { title: "PTM for all classes on May 30, 2026" },
    ]);
  }, []);

  return (
    <>
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center bg-white border-b border-gray-100 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-7xl font-black text-primary mb-3 tracking-tighter">News & Updates</h1>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto font-medium px-4">Always Be Excellent By Ten Sun Education System. A Project of AES.</p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {/* Notice Board */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 mb-8 shadow-md">
            <h3 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
              <Bell size={20} /> Notice Board
            </h3>
            <ul className="space-y-3 text-yellow-900 text-sm">
              {notices.map((n, i) => (
                <li key={i} className="flex items-start gap-2 font-medium">
                  <span className="text-yellow-400 font-bold">•</span>
                  {n.title}
                </li>
              ))}
              {notices.length === 0 && <li>No active notices at the moment.</li>}
            </ul>
          </div>

          <div className="space-y-8">
            {news.map((item, i) => (
              <article key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all border border-transparent hover:border-secondary/20 group">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {item.url && (
                    <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3 font-bold">
                      <Calendar size={16} className="text-secondary" />
                      <span>{item.date}</span>
                    </div>
                    <span className="text-[10px] font-black text-white bg-primary px-3 py-1 rounded-full mb-3 inline-block uppercase tracking-widest">{item.category || 'Updates'}</span>
                    <h2 className="text-xl font-black text-primary mb-2 group-hover:text-secondary transition-colors uppercase tracking-tight">{item.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-sm font-medium">{item.content || item.desc}</p>
                  </div>
                </div>
              </article>
            ))}
            {news.length === 0 && (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-bold uppercase tracking-widest">No news posted yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
