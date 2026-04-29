'use client';

import { CheckCircle, DollarSign, FileText, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const fees = [
  { cls: "Playgroup & Nursery", admission: "5,000", monthly: "2,500", security: "2,000" },
  { cls: "KG & Class 1-2", admission: "5,000", monthly: "2,800", security: "2,000" },
  { cls: "Class 3-5", admission: "6,000", monthly: "3,200", security: "2,000" },
  { cls: "Class 6-8", admission: "6,000", monthly: "3,800", security: "3,000" },
  { cls: "Class 9-10", admission: "8,000", monthly: "4,500", security: "3,000" },
];

export default function FeeStructurePage() {
  return (
    <div className="bg-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-[#1B1464] mb-4 tracking-tight">Fee Structure</h1>
            <div className="w-20 h-1.5 bg-[#00AEEF] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 font-medium leading-relaxed">
              We believe in providing high-quality education at an affordable cost. Our fee structure is designed to be transparent and accessible for all families.
            </p>
          </motion.div>
        </div>

        {/* Fee Table */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#1B1464] text-white">
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Class Level</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-center">Admission Fee (PKR)</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-center">Monthly Tuition (PKR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {fees.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 font-bold text-[#1B1464]">{item.cls}</td>
                    <td className="px-8 py-6 text-center text-gray-600 font-medium">{item.admission}</td>
                    <td className="px-8 py-6 text-center text-[#00AEEF] font-black">{item.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center">
            * Security deposit (refundable) and annual charges are applied separately at the time of admission.
          </p>
        </div>

        {/* Policies */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { 
              icon: ShieldCheck, 
              title: "Payment Policy", 
              desc: "Fees must be paid by the 10th of every month. A late fee fine will be applicable after the due date." 
            },
            { 
              icon: DollarSign, 
              title: "Sibling Discount", 
              desc: "We offer a 20% discount on the tuition fee for the second sibling and 30% for subsequent siblings." 
            },
            { 
              icon: FileText, 
              title: "Withdrawal", 
              desc: "One month's notice is required for withdrawal, or one month's fee must be paid in lieu of notice." 
            }
          ].map((policy, i) => (
            <div key={i} className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
               <div className="w-12 h-12 bg-[#1B1464] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                  <policy.icon size={24} />
               </div>
               <h3 className="text-xl font-black text-[#1B1464] mb-3">{policy.title}</h3>
               <p className="text-sm text-gray-500 font-medium leading-relaxed">{policy.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
