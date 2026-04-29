'use client';

import { useState, useEffect } from 'react';
import { Trophy, Medal, TrendingUp, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResultsPage() {
  const [allResults, setAllResults] = useState<any[]>([]);
  const [selectedClass, setSelectedClass] = useState('Class 10');

  useEffect(() => {
    const saved = localStorage.getItem('ags_results');
    if (saved) {
      setAllResults(JSON.parse(saved));
    } else {
      // Sample data if empty
      setAllResults([
        { name: "Hania Farooq", cls: "Class 10", marks: "1085/1100", grade: "A+" },
        { name: "Muhammad Owais", cls: "Class 10", marks: "1078/1100", grade: "A+" },
        { name: "Fatima Zahra", cls: "Class 10", marks: "1065/1100", grade: "A+" },
        { name: "Ahmed Hassan", cls: "Class 10", marks: "1052/1100", grade: "A+" },
        { name: "Ayesha Khan", cls: "Class 10", marks: "1040/1100", grade: "A+" },
      ]);
    }
  }, []);

  // Filter and Rank Logic
  const classResults = allResults
    .filter(r => r.cls === selectedClass)
    .sort((a, b) => {
      const getScore = (s: string) => parseFloat(s.split('/')[0]) || 0;
      return getScore(b.marks) - getScore(a.marks);
    });

  const getRankIcon = (index: number) => {
    if (index === 0) return <Trophy className="text-yellow-500" size={24} />;
    if (index === 1) return <Medal className="text-gray-400" size={24} />;
    if (index === 2) return <Award className="text-orange-500" size={24} />;
    return <span className="text-gray-300 font-black">#{index + 1}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center bg-[#1B1464] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:32px:32px] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter uppercase">Board of Honor</h1>
            <p className="text-lg text-blue-200/80 max-w-2xl mx-auto font-medium uppercase tracking-[0.3em]">Excellence is not an act, but a habit.</p>
          </motion.div>
        </div>
      </section>

      {/* Class Selector */}
      <section className="py-12 -mt-16 relative z-30">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="bg-white p-2 rounded-[2rem] shadow-2xl border border-gray-100 flex gap-2">
            {['Class 9', 'Class 10'].map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-8 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all ${selectedClass === cls ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Table */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
               <div>
                  <h2 className="text-2xl font-black text-primary uppercase tracking-tight">{selectedClass} Ranking</h2>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Academic Session 2026</p>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-xl text-[10px] font-black uppercase tracking-widest border border-yellow-100">
                  <Star size={14} /> Merit List
               </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-10 py-6 text-left text-[10px] font-black uppercase tracking-widest">Position</th>
                    <th className="px-10 py-6 text-left text-[10px] font-black uppercase tracking-widest">Student Name</th>
                    <th className="px-10 py-6 text-left text-[10px] font-black uppercase tracking-widest">Obtained / Total</th>
                    <th className="px-10 py-6 text-left text-[10px] font-black uppercase tracking-widest">Percentage</th>
                    <th className="px-10 py-6 text-left text-[10px] font-black uppercase tracking-widest">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {classResults.map((result, i) => {
                    const parts = result.marks.split('/');
                    const perc = parts.length === 2 ? ((parseFloat(parts[0]) / parseFloat(parts[1])) * 100).toFixed(1) : '0';
                    
                    return (
                      <tr key={i} className={`hover:bg-gray-50 transition-colors ${i < 3 ? 'bg-yellow-50/20' : ''}`}>
                        <td className="px-10 py-6">
                           <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm">
                             {getRankIcon(i)}
                           </div>
                        </td>
                        <td className="px-10 py-6">
                           <p className={`font-black uppercase tracking-tight ${i < 3 ? 'text-primary text-lg' : 'text-gray-600 text-sm'}`}>{result.name}</p>
                           {i < 3 && <p className="text-[9px] text-secondary font-black uppercase tracking-[0.2em] mt-0.5">Top Performer</p>}
                        </td>
                        <td className="px-10 py-6 font-black text-primary">{result.marks}</td>
                        <td className="px-10 py-6">
                           <div className="flex items-center gap-3">
                              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden max-w-[80px]">
                                 <div className="h-full bg-primary" style={{ width: `${perc}%` }}></div>
                              </div>
                              <span className="font-black text-primary text-sm">{perc}%</span>
                           </div>
                        </td>
                        <td className="px-10 py-6">
                           <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${i < 3 ? 'bg-primary text-white border-primary' : 'bg-green-100 text-green-700 border-green-200'}`}>
                             {result.grade}
                           </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {classResults.length === 0 && (
              <div className="py-32 text-center">
                 <div className="w-20 h-20 bg-gray-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-6">
                    <Trophy className="text-gray-200" size={40} />
                 </div>
                 <p className="text-gray-400 font-black uppercase tracking-widest">No results announced yet for {selectedClass}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
