'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AcademicsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-7xl font-black text-primary mb-4 tracking-tighter">Academics</h1>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium px-4">Always Be Excellent By Ten Sun Education System. A Project of AES.</p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-secondary font-bold tracking-wider uppercase mb-2">Curriculum</h4>
            <h2 className="text-4xl font-extrabold text-primary mb-6">Our Academic Framework</h2>
            <p className="text-gray-600 text-lg">We follow a comprehensive curriculum aligned with national education standards, enhanced with modern pedagogical practices and co-curricular enrichment.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Primary Section", grades: "Nursery – Class 5", subjects: ["English", "Mathematics", "Urdu", "Islamiat", "General Science", "Social Studies", "Art & Craft", "Physical Education"], img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", color: "bg-blue-500" },
              { title: "Middle Section", grades: "Class 6 – Class 8", subjects: ["English", "Mathematics", "Urdu", "Science", "Social Studies", "Computer Science", "Arabic", "Islamiat"], img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop", color: "bg-purple-500" },
              { title: "Senior Section", grades: "Class 9 – Class 12", subjects: ["English", "Physics", "Chemistry", "Biology/Computer Sci", "Mathematics", "Urdu", "Islamiat", "Pak Studies"], img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop", color: "bg-indigo-500" },
            ].map((section, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-52">
                  <Image src={section.img} alt={section.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">{section.grades}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">{section.title}</h3>
                  <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">Subjects Offered</h4>
                  <ul className="space-y-2">
                    {section.subjects.map((subject, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h4 className="text-secondary font-bold tracking-wider uppercase mb-2">Our Approach</h4>
              <h2 className="text-4xl font-extrabold text-primary mb-6">Modern Teaching Methods</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Abexsun, we blend traditional teaching with innovative methodologies. Our classrooms are equipped with smart boards, projectors, and digital learning tools that make lessons interactive and engaging.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Interactive Smart Classrooms", desc: "Technology-enhanced learning with smart boards and multimedia." },
                  { title: "Project-Based Learning", desc: "Hands-on projects that develop critical thinking and collaboration." },
                  { title: "Personalized Attention", desc: "Small class sizes ensuring individual attention for every student." },
                  { title: "Regular Assessments", desc: "Continuous evaluation to track progress and address learning gaps." },
                ].map((method, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-bold text-primary mb-1">{method.title}</h4>
                    <p className="text-sm text-gray-600">{method.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" alt="Smart classroom" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-primary mb-8 tracking-tight">Give Your Child the Best Education</h2>
          <Link href="/admissions" className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-white font-black rounded-2xl hover:bg-secondary hover:text-primary transition-all text-lg shadow-xl">
            Apply Now <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </>
  );
}
