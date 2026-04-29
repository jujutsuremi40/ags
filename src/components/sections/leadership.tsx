'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, GraduationCap, Briefcase, MessageSquare } from 'lucide-react';

interface LeadershipMember {
  id: number;
  name: string;
  role: string;
  img: string;
  shortDesc: string;
  qualification: string;
  experience: string;
  message: string;
}

const leadershipData: LeadershipMember[] = [
  {
    id: 1,
    name: "Kamran Ahmed Shah",
    role: "Founder & CEO",
    img: "/images/AnyDesk/WhatsApp Image 2026-04-28 at 7.25.50 PM.jpeg",
    shortDesc: "Visionary leader dedicated to transforming educational standards through innovation.",
    qualification: "Masters in Educational Leadership & Management",
    experience: "Over 20 years in the education sector, pioneering new teaching methodologies.",
    message: "Our mission is to empower the next generation with not just knowledge, but the wisdom to lead and excel in a rapidly changing world."
  },
  {
    id: 2,
    name: "Zeeshan Ahmed Shah",
    role: "Co-Founder",
    img: "/images/AnyDesk/WhatsApp Image 2026-04-28 at 7.25.58 PM.jpeg",
    shortDesc: "Strategic administrator focused on operational excellence and student welfare.",
    qualification: "MBA in Business Administration & Strategic Planning",
    experience: "15+ years of experience in organizational management and educational development.",
    message: "Excellence is not an act, but a habit. At Abexsun, we cultivate this habit daily in our students and staff alike."
  },
  {
    id: 3,
    name: "Nusrat Kamran",
    role: "Principal",
    img: "https://images.unsplash.com/photo-1580894732230-28e193399e83?q=80&w=2070&auto=format&fit=crop",
    shortDesc: "Experienced educator committed to academic rigor and holistic student development.",
    qualification: "Ph.D. in Education with a focus on Curriculum Development",
    experience: "25 years of teaching and administrative leadership in premier educational institutions.",
    message: "Every child is a unique promise. Our role is to provide the nurturing soil and guidance they need to bloom into their full potential."
  },
  {
    id: 4,
    name: "Engr. Faisal Malik",
    role: "Director Operations",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    shortDesc: "Technical expert ensuring state-of-the-art facilities and safety systems.",
    qualification: "B.Sc. Civil Engineering, PMP Certified",
    experience: "12 years in project management and campus infrastructure development.",
    message: "A safe and modern environment is the foundation of effective learning. We ensure our campus meets the highest global standards."
  }
];

export function LeadershipSection() {
  const [selectedMember, setSelectedMember] = useState<LeadershipMember | null>(null);
  const [members, setMembers] = useState<LeadershipMember[]>(leadershipData);

  useEffect(() => {
    const saved = localStorage.getItem('ags_leadership');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.length > 0) {
          setMembers(parsed);
        }
      } catch (e) {
        console.error("Failed to load leadership data", e);
      }
    }
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated Gradient Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-black tracking-[0.2em] uppercase text-[10px]">
              School Guardians
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-primary mb-6 tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">Leadership</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 font-medium text-lg"
          >
            Pioneering the future of education with visionary leadership and dedicated service.
          </motion.p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer perspective-1000"
            >
              <div className="relative bg-white/40 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(109,40,217,0.15)] group-hover:-translate-y-4 group-hover:scale-[1.02]">
                
                {/* Glowing Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
                
                {/* Image Container */}
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    loading="lazy"
                  />
                  {/* Glassy Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700"></div>
                </div>

                {/* Content Area */}
                <div className="p-8 text-center relative z-10">
                  <h3 className="text-xl font-black text-primary mb-1 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-black uppercase tracking-[0.2em] text-[10px] mb-4 opacity-80">
                    {member.role}
                  </p>
                  
                  {/* Subtle Sparkle/Icon */}
                  <div className="flex justify-center">
                    <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 scale-0 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_10px_#8b5cf6]"></div>
                  </div>
                </div>

                {/* Hover Details reveal bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Overlay - Ultra Gemini Style */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            {/* Dark Blur Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl" onClick={() => setSelectedMember(null)}></div>

            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="bg-white/10 backdrop-blur-3xl w-full max-w-6xl rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/20 relative flex flex-col md:flex-row max-h-[92vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-8 right-8 z-30 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-md border border-white/10 group"
              >
                <X size={28} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>

              {/* Left: Dramatic Image Side */}
              <div className="md:w-5/12 relative h-72 md:h-auto overflow-hidden">
                <Image
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-pink-500 rounded-full mb-6"></div>
                  <h3 className="text-4xl font-black tracking-tighter mb-2">{selectedMember.name}</h3>
                  <p className="text-blue-300 font-bold uppercase tracking-[0.3em] text-xs">{selectedMember.role}</p>
                </div>
              </div>

              {/* Right: Info Side */}
              <div className="md:w-7/12 p-10 md:p-20 overflow-y-auto text-white">
                <div className="space-y-12">
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                        <GraduationCap size={20} />
                      </div>
                      <h5 className="font-black text-blue-400 uppercase tracking-[0.3em] text-[10px]">Qualifications</h5>
                    </div>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90">{selectedMember.qualification}</p>
                  </section>

                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30">
                        <Briefcase size={20} />
                      </div>
                      <h5 className="font-black text-purple-400 uppercase tracking-[0.3em] text-[10px]">Experience</h5>
                    </div>
                    <p className="text-lg leading-relaxed opacity-70">{selectedMember.experience}</p>
                  </section>

                  <section className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 border border-pink-500/30">
                        <MessageSquare size={20} />
                      </div>
                      <h5 className="font-black text-pink-400 uppercase tracking-[0.3em] text-[10px]">Visionary Message</h5>
                    </div>
                    <p className="text-2xl italic font-light leading-relaxed tracking-wide">
                      "{selectedMember.message}"
                    </p>
                  </section>
                </div>

                <div className="mt-16">
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="group relative px-12 py-5 bg-white text-primary font-black rounded-3xl overflow-hidden shadow-2xl transition-all"
                  >
                    <span className="relative z-10 uppercase tracking-widest text-xs">Return to Founders</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
