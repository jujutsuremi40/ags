'use client';

import { Wallet, CreditCard, Clock, CheckCircle2, AlertCircle, FileDown, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Fees() {
  const feeStatus = {
    total: "45,000",
    paid: "45,000",
    balance: "0",
    dueDate: "May 10, 2026",
    status: "Paid"
  };

  const history = [
    { id: "INV-2026-004", month: "April 2026", amount: "12,000", date: "Apr 05, 2026", method: "Online / Bank", status: "Paid" },
    { id: "INV-2026-003", month: "March 2026", amount: "12,000", date: "Mar 02, 2026", method: "Cash / Counter", status: "Paid" },
    { id: "INV-2026-002", month: "February 2026", amount: "10,500", date: "Feb 08, 2026", method: "Online / Bank", status: "Paid" },
    { id: "INV-2026-001", month: "January 2026", amount: "10,500", date: "Jan 04, 2026", method: "Online / Bank", status: "Paid" },
  ];

  return (
    <div className="space-y-10 pb-12">
      {/* Fee Summary Cards - Branded High Contrast */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-[2.5rem] border border-blue-50 shadow-xl shadow-blue-900/5 relative overflow-hidden flex flex-col justify-center"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#1B1464]/5 rounded-full -mr-12 -mt-12"></div>
          <p className="text-[10px] font-black text-[#1B1464]/30 uppercase tracking-[0.2em] mb-3">Verification Status</p>
          <div className="flex items-center gap-3">
             <span className={`px-5 py-2 rounded-2xl font-black text-[10px] uppercase tracking-widest ${
               feeStatus.status === 'Paid' ? 'bg-[#25D366] text-white shadow-lg shadow-green-100' : 'bg-[#EF4444] text-white'
             }`}>
               {feeStatus.status}
             </span>
             {feeStatus.status === 'Paid' && <CheckCircle2 className="text-[#25D366]" size={24} />}
          </div>
        </motion.div>
        
        {[
          { label: "Annual Fee Structure", value: "Rs. " + feeStatus.total, icon: Wallet, color: "text-[#1B1464]", bg: "bg-[#1B1464]/5" },
          { label: "Total Remitted", value: "Rs. " + feeStatus.paid, icon: CheckCircle2, color: "text-[#25D366]", bg: "bg-green-50" },
          { label: "Outstanding Dues", value: "Rs. " + feeStatus.balance, icon: AlertCircle, color: "text-[#1B1464]/20", bg: "bg-[#F8FAFC]" },
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[2.5rem] border border-blue-50 shadow-xl shadow-blue-900/5 group"
          >
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon size={22} />
            </div>
            <p className="text-[10px] font-black text-[#1B1464]/30 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-[#1B1464] tracking-tighter">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Payment History - Branded Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white rounded-[3rem] border border-blue-50 shadow-2xl shadow-blue-900/5 overflow-hidden"
        >
          <div className="p-10 border-b border-blue-50 flex items-center justify-between">
            <h3 className="text-xl font-black text-[#1B1464] uppercase tracking-tight flex items-center gap-4">
              <div className="w-2 h-8 bg-[#00AEEF] rounded-full"></div>
              Transaction History
            </h3>
            <button className="flex items-center gap-3 px-6 py-3 bg-[#F8FAFC] rounded-2xl text-[#1B1464] font-black text-[10px] uppercase tracking-widest hover:bg-[#1B1464] hover:text-white transition-all border border-blue-50">
              <FileDown size={18} /> Export Ledger
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F8FAFC] border-b border-blue-50">
                <tr>
                  <th className="px-10 py-6 font-black text-[#1B1464]/20 uppercase tracking-[0.3em] text-[10px]">Reference / Period</th>
                  <th className="px-10 py-6 font-black text-[#1B1464]/20 uppercase tracking-[0.3em] text-[10px]">Processing Date</th>
                  <th className="px-10 py-6 font-black text-[#1B1464]/20 uppercase tracking-[0.3em] text-[10px]">Net Amount</th>
                  <th className="px-10 py-6 font-black text-[#1B1464]/20 uppercase tracking-[0.3em] text-[10px]">Payment Mode</th>
                  <th className="px-10 py-6 font-black text-[#1B1464]/20 uppercase tracking-[0.3em] text-[10px]">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50/50">
                {history.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F0F7FF]/30 transition-colors group">
                    <td className="px-10 py-6">
                      <p className="font-black text-[#1B1464] tracking-tight group-hover:text-[#00AEEF] transition-colors">{row.month}</p>
                      <p className="text-[10px] text-[#1B1464]/30 font-black tracking-widest uppercase mt-0.5">{row.id}</p>
                    </td>
                    <td className="px-10 py-6 font-bold text-[#1B1464]/40">{row.date}</td>
                    <td className="px-10 py-6 font-black text-[#1B1464]">Rs. {row.amount}</td>
                    <td className="px-10 py-6">
                       <div className="flex items-center gap-3 text-[#1B1464]/30 font-black text-[10px] uppercase tracking-widest">
                         <CreditCard size={16} className="text-[#00AEEF]" /> {row.method}
                       </div>
                    </td>
                    <td className="px-10 py-6">
                      <span className="flex items-center gap-2 text-[#25D366] font-black text-[10px] uppercase tracking-[0.2em] bg-green-50 px-4 py-1.5 rounded-full border border-green-100">
                        <CheckCircle2 size={14} /> Verified
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Next Payment Card - High Impact Branded */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1B1464] rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-[60px] -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00AEEF]/10 rounded-full blur-[60px] -ml-16 -mb-16"></div>
            
            <h3 className="text-xl font-black mb-8 tracking-tight uppercase flex items-center gap-3">
               <Clock className="text-[#00AEEF]" size={20} />
               Upcoming Bill
            </h3>
            <div className="space-y-8 relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Maturity Date</span>
                <span className="font-black text-[#00AEEF] tracking-widest text-xs">{feeStatus.dueDate}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Pending Dues</span>
                <span className="font-black text-3xl tracking-tighter">Rs. 0.00</span>
              </div>
              <button className="w-full py-5 bg-[#00AEEF] text-[#1B1464] font-black text-[10px] uppercase tracking-[0.4em] rounded-[2rem] hover:bg-white transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-3 group">
                Digital Payment 
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2.5rem] p-10 border border-blue-50 shadow-2xl shadow-blue-900/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-[#1B1464]/5 pointer-events-none">
               <ShieldCheck size={100} />
            </div>
            <h4 className="font-black text-[#1B1464] uppercase tracking-tight mb-4 flex items-center gap-3">
               <div className="w-1.5 h-5 bg-[#00AEEF] rounded-full"></div>
               Authorized Channels
            </h4>
            <p className="text-[11px] text-[#1B1464]/30 font-bold mb-8 leading-relaxed uppercase tracking-wider">Please utilize official remittance channels for secure transaction processing.</p>
            <div className="grid grid-cols-2 gap-4">
              {['Bank Transfer', 'Mobile Portal', 'Remittance', 'AGS Counter'].map((m, i) => (
                <div key={i} className="bg-[#F8FAFC] px-4 py-3 rounded-2xl border border-blue-50 text-[9px] font-black text-[#1B1464] uppercase tracking-widest text-center shadow-sm hover:border-[#1B1464]/20 transition-all cursor-default">
                  {m}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
