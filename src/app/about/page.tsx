'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye, Heart, Users, Award, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[12vh] min-h-[100px] flex items-center bg-white border-b border-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f3f4f6_1px,transparent_1px)] [background-size:20px:20px] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-xl md:text-2xl font-black text-primary mb-0.5 tracking-tighter">About Us</h1>
            <p className="text-[10px] md:text-xs text-secondary font-bold uppercase tracking-[0.2em]">A Project of AES Education System</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/ags1.jpeg" alt="Abexsun Grammar School Campus" width={800} height={600} className="w-full h-auto object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-secondary font-bold tracking-wider uppercase mb-2">Our Story</h4>
              <h2 className="text-4xl font-extrabold text-primary mb-6">A Legacy of Excellence</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 1995, Abexsun Grammar School began with a simple yet powerful vision — to provide quality education that shapes the leaders of tomorrow. What started as a small institution with a handful of students has grown into one of the most respected schools in the region.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the past three decades, we have nurtured thousands of students, guiding them to academic excellence, personal growth, and meaningful careers. Our alumni network spans across the globe, contributing to every field from medicine and engineering to arts and public service.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "1995", label: "Year Founded" },
                  { value: "5,000+", label: "Alumni Network" },
                  { value: "25+", label: "Years of Excellence" },
                  { value: "98%", label: "Board Pass Rate" },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                    <h3 className="text-2xl font-extrabold text-primary">{stat.value}</h3>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide a stimulating and inclusive learning environment that empowers students with knowledge, skills, and values to become responsible global citizens and lifelong learners." },
              { icon: Eye, title: "Our Vision", desc: "To be the leading educational institution recognized for academic excellence, innovative teaching, and the holistic development of every student who walks through our doors." },
              { icon: Heart, title: "Our Values", desc: "Integrity, Excellence, Respect, Innovation, and Community — these core values guide every decision we make and every interaction within our school family." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h4 className="text-secondary font-bold tracking-wider uppercase mb-2">Leadership</h4>
            <h2 className="text-4xl font-extrabold text-primary mb-6">Our Leadership Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Kamran Ahmed Shah", role: "Founder & CEO", img: "/images/AnyDesk/WhatsApp Image 2026-04-28 at 7.25.50 PM.jpeg" },
              { name: "Zeeshan Ahmed Shah", role: "Co-Founder", img: "/images/AnyDesk/WhatsApp Image 2026-04-28 at 7.25.58 PM.jpeg" },
              { name: "Nusrat Kamran", role: "Principal", img: "https://images.unsplash.com/photo-1580894732230-28e193399e83?q=80&w=2070&auto=format&fit=crop" },
            ].map((person, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group flex flex-col items-center"
              >
                <div className="relative h-[320px] w-full max-w-[280px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 bg-gray-50">
                  <Image 
                    src={person.img} 
                    alt={person.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-extrabold text-primary mb-1 tracking-tight">{person.name}</h3>
                  <p className="text-secondary font-bold uppercase tracking-[0.15em] text-[10px]">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-primary mb-8 tracking-tight">Want to Be Part of Our Story?</h2>
          <Link href="/admissions" className="inline-block px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-secondary hover:text-primary transition-all text-lg">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
}
