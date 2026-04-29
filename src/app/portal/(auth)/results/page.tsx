"use client";

import { useEffect, useState } from 'react';
import { FileDown, Trophy, Search, ChevronRight, Award, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Results() {
  const [student, setStudent] = useState<any>(null);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const auth = localStorage.getItem("portalAuth");
    if (auth) {
      const parsed = JSON.parse(auth);
      setStudent(parsed);
      const allResults = JSON.parse(localStorage.getItem("ags_results") || "[]");
      const myResults = allResults.filter((r: any) => r.studentId === parsed.id);
      setResults(myResults);
    }
  }, []);

  const totalObtained = results.reduce((acc, curr) => {
    const score = parseFloat(curr.marks.split('/')[0]) || 0;
    return acc + score;
  }, 0);
  
  const totalMarks = results.reduce((acc, curr) => {
    const total = parseFloat(curr.marks.split('/')[1]) || 100;
    return acc + total;
  }, 0);

  const percentage = totalMarks > 0 ? ((totalObtained / totalMarks) * 100).toFixed(1) : "0.0";

  return (
    <div className="space-y-10 pb-12">
      {/* Result Overview - High Impact Branded */}
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-[#1B1464] rounded-[3rem] p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#00AEEF]/10 rounded-full blur-[100px] -ml-24 -mb-24"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-28 h-28 bg-white/5 rounded-[2.5rem] flex items-center justify-center text-[#00AEEF] border border-white/10 backdrop-blur-xl shadow-2xl group hover:scale-105 transition-transform duration-500">
              <Trophy size={56} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00AEEF] text-[#1B1464] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-lg">
                 Academic Achievement
              </div>
              <h2 className="text-3xl lg:text-4xl font-black mb-3 tracking-tighter uppercase leading-none">Examination Results</h2>
              <p className="text-white/40 font-black text-[11px] uppercase tracking-[0.3em] mb-6">Excellence through dedication and discipline.</p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                 <div className="px-5 py-2 bg-white/10 rounded-2xl border border-white/10">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/50 block mb-1">Rank</span>
                    <span className="text-xl font-black text-white">N/A</span>
                 </div>
                 <div className="px-5 py-2 bg-white/10 rounded-2xl border border-white/10">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/50 block mb-1">Status</span>
                    <span className="text-xl font-black text-[#25D366]">Evaluated</span>
                 </div>
              </div>
            </div>
            <div className="text-center md:text-right bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm min-w-[180px]">
              <div className="text-5xl font-black text-[#00AEEF] tracking-tighter">{percentage}%</div>
              <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mt-2">Aggregate</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[3rem] p-10 border border-blue-50 shadow-2xl shadow-blue-900/5 flex flex-col justify-center items-center text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 text-[#00AEEF]/5 group-hover:scale-110 transition-transform duration-700">
             <Award size={120} />
          </div>
          <div className="w-20 h-20 bg-[#F8FAFC] rounded-3xl flex items-center justify-center text-[#1B1464] mb-6 border border-blue-50 shadow-sm group-hover:bg-[#1B1464] group-hover:text-white transition-all duration-500">
            <FileDown size={36} />
          </div>
          <h3 className="text-xl font-black text-[#1B1464] mb-3 uppercase tracking-tight">Official Transcript</h3>
          <p className="text-[11px] text-[#1B1464]/30 font-black uppercase tracking-[0.2em] mb-10 max-w-[200px]">Download your verified academic performance record (PDF)</p>
          <button className="w-full py-5 bg-[#1B1464] text-white font-black text-[10px] uppercase tracking-[0.4em] rounded-[2rem] hover:bg-[#00AEEF] transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3">
            <ShieldCheck size={18} />
            Generate PDF
          </button>
        </motion.div>
      </div>

      {/* Detailed Marks Table - High Contrast */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-[3rem] border border-blue-50 shadow-2xl shadow-blue-900/5 overflow-hidden"
      >
        <div className="p-10 border-b border-blue-50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <h3 className="text-xl font-black text-[#1B1464] uppercase tracking-tight flex items-center gap-4">
            <div className="w-2 h-8 bg-[#00AEEF] rounded-full"></div>
            Transcript Details
          </h3>
          <div className="flex items-center gap-4 bg-[#F8FAFC] px-6 py-3 rounded-2xl border border-blue-50 w-full sm:w-80 transition-all focus-within:bg-white focus-within:border-[#1B1464] group">
            <Search size={18} className="text-[#1B1464]/20 group-focus-within:text-[#1B1464]" />
            <input type="text" placeholder="Filter by subject..." className="bg-transparent border-none outline-none text-[11px] font-black uppercase tracking-widest text-[#1B1464] placeholder:text-[#1B1464]/10 w-full" />
          </div>
        </div>
        <div className="overflow-x-auto">
          {results.length === 0 ? (
            <div className="p-10 text-center text-gray-500 font-bold">No results have been published for you yet.</div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-[#F8FAFC] border-b border-blue-50">
                <tr>
                  <th className="px-10 py-6 text-[10px] font-black text-[#1B1464]/20 uppercase tracking-[0.3em]">Course Title</th>
                  <th className="px-10 py-6 text-[10px] font-black text-[#1B1464]/20 uppercase tracking-[0.3em]">Marks (Obt/Max)</th>
                  <th className="px-10 py-6 text-[10px] font-black text-[#1B1464]/20 uppercase tracking-[0.3em]">Grade</th>
                  <th className="px-10 py-6 text-[10px] font-black text-[#1B1464]/20 uppercase tracking-[0.3em]">Performance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50/50">
                {results.map((row, i) => {
                  const obt = parseFloat(row.marks.split('/')[0]) || 0;
                  const tot = parseFloat(row.marks.split('/')[1]) || 100;
                  const perc = (obt / tot) * 100;
                  const remarks = perc >= 90 ? "Excellent" : perc >= 80 ? "Very Good" : perc >= 70 ? "Good" : "Needs Improvement";

                  return (
                    <tr key={i} className="hover:bg-[#F0F7FF]/30 transition-colors group">
                      <td className="px-10 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-[#00AEEF] opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100"></div>
                          <span className="font-black text-[#1B1464] tracking-tight group-hover:text-[#00AEEF] transition-colors">{row.subject || row.sub}</span>
                        </div>
                      </td>
                      <td className="px-10 py-6 font-black text-[#1B1464]">{row.marks}</td>
                      <td className="px-10 py-6">
                        <span className={`px-4 py-1.5 rounded-xl font-black text-[10px] uppercase tracking-widest ${
                          row.grade === 'A+' ? 'bg-green-50 text-[#25D366] border border-green-100' : 'bg-[#1B1464]/5 text-[#1B1464] border border-blue-50'
                        }`}>{row.grade}</span>
                      </td>
                      <td className="px-10 py-6">
                        <span className="text-[10px] font-black text-[#1B1464]/40 uppercase tracking-[0.2em] italic">{remarks}</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot className="bg-[#F8FAFC]/50 font-black text-[#1B1464]">
                <tr>
                  <td className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.4em] text-[#1B1464]/40">Aggregate Statistics</td>
                  <td className="px-10 py-8 text-lg font-black">{totalObtained} / {totalMarks}</td>
                  <td colSpan={2} className="px-10 py-8 text-right">
                    <div className="inline-flex items-center gap-4 bg-[#1B1464] text-white px-8 py-3 rounded-[2rem] shadow-xl shadow-blue-900/20">
                      <TrendingUp size={20} className="text-[#00AEEF]" />
                      <span className="text-xl font-black tracking-tighter">{percentage}%</span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </motion.div>
    </div>
  );
}
