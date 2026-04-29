'use client';

import { Award, GraduationCap, Star, Users, Heart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScholarshipsPage() {
  const scholarshipTypes = [
    {
      icon: Star,
      title: "Merit-Based Scholarships",
      criteria: "Top 3 positions in annual board exams or internal school rankings.",
      benefit: "Up to 100% Tuition Fee Waiver",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Heart,
      title: "Need-Based Financial Aid",
      criteria: "Available for students from low-income families after thorough verification.",
      benefit: "25% to 50% Tuition Fee Support",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Award,
      title: "Sports & Extra-Curricular",
      criteria: "National or District level achievement in sports, debates, or arts.",
      benefit: "20% Tuition Fee Waiver",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Users,
      title: "Teacher's Child Discount",
      criteria: "Children of teaching and non-teaching staff of AES.",
      benefit: "50% Tuition Fee Waiver",
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <div className="bg-white pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#1B1464]/5 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B1464]/5 rounded-full text-[#1B1464] text-[10px] font-black uppercase tracking-widest mb-6">
              <Zap size={14} className="text-[#00AEEF]" /> Empowering Future Leaders
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#1B1464] mb-6 tracking-tight leading-tight">Scholarships & <br/><span className="text-[#00AEEF]">Financial Aid</span></h1>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              At Abexsun Grammar School, we believe every talented child deserves a world-class education, regardless of their financial background.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
           {scholarshipTypes.map((type, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
             >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-[5rem]`}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                   <type.icon size={32} />
                </div>

                <h3 className="text-2xl font-black text-[#1B1464] mb-4">{type.title}</h3>
                <div className="space-y-4">
                   <div>
                      <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Eligibility Criteria</p>
                      <p className="text-gray-600 font-medium">{type.criteria}</p>
                   </div>
                   <div className="pt-4 border-t border-gray-50">
                      <p className="text-[10px] font-black text-[#00AEEF] uppercase tracking-widest mb-1">Financial Benefit</p>
                      <p className="text-xl font-black text-[#1B1464]">{type.benefit}</p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-[#1B1464] rounded-[4rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/40">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,174,239,0.2),transparent_50%)]"></div>
           <div className="relative z-10">
              <GraduationCap size={64} className="mx-auto mb-6 text-[#00AEEF]" />
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Ready to Apply for a Scholarship?</h2>
              <p className="text-blue-200 max-w-2xl mx-auto mb-10 font-medium">
                Submit your application today along with the necessary documentation. Our committee reviews all cases with complete confidentiality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button className="px-10 py-5 bg-[#00AEEF] text-[#1B1464] font-black rounded-2xl hover:bg-white hover:scale-105 transition-all uppercase text-xs tracking-widest shadow-xl shadow-[#00AEEF]/20">
                    Download Scholarship Form
                 </button>
                 <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black rounded-2xl hover:bg-white/20 hover:scale-105 transition-all uppercase text-xs tracking-widest">
                    Contact Registrar
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
