import Link from 'next/link';
import { Users, Clock, BookOpen } from 'lucide-react';

const classes = [
  { name: "Playgroup", ageGroup: "2-3 years", students: 20, subjects: 3, timing: "8:00 AM - 11:30 AM", section: "Primary" },
  { name: "Nursery", ageGroup: "3-4 years", students: 25, subjects: 5, timing: "8:00 AM - 12:00 PM", section: "Primary" },
  { name: "KG", ageGroup: "4-5 years", students: 28, subjects: 6, timing: "8:00 AM - 12:30 PM", section: "Primary" },
  { name: "Class 1", ageGroup: "5-6 years", students: 30, subjects: 7, timing: "8:00 AM - 1:00 PM", section: "Primary" },
  { name: "Class 2", ageGroup: "6-7 years", students: 30, subjects: 7, timing: "8:00 AM - 1:00 PM", section: "Primary" },
  { name: "Class 3", ageGroup: "7-8 years", students: 30, subjects: 8, timing: "8:00 AM - 1:30 PM", section: "Primary" },
  { name: "Class 4", ageGroup: "8-9 years", students: 32, subjects: 8, timing: "8:00 AM - 1:30 PM", section: "Primary" },
  { name: "Class 5", ageGroup: "9-10 years", students: 32, subjects: 8, timing: "8:00 AM - 2:00 PM", section: "Primary" },
  { name: "Class 6", ageGroup: "10-11 years", students: 35, subjects: 9, timing: "8:00 AM - 2:00 PM", section: "Middle" },
  { name: "Class 7", ageGroup: "11-12 years", students: 35, subjects: 9, timing: "8:00 AM - 2:00 PM", section: "Middle" },
  { name: "Class 8", ageGroup: "12-13 years", students: 35, subjects: 9, timing: "8:00 AM - 2:30 PM", section: "Middle" },
  { name: "Class 9", ageGroup: "13-14 years", students: 30, subjects: 8, timing: "8:00 AM - 2:30 PM", section: "Senior" },
  { name: "Class 10", ageGroup: "14-15 years", students: 30, subjects: 8, timing: "8:00 AM - 2:30 PM", section: "Senior" },
];

export default function ClassesPage() {
  return (
    <>
      <section className="relative h-[25vh] min-h-[200px] flex items-center justify-center bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-8">
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-2 tracking-tighter">Our Classes</h1>
          <p className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest uppercase">Expert Academic Guidance</p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {["Primary", "Middle", "Senior"].map((section) => (
            <div key={section} className="mb-8 last:mb-0">
              <h2 className="text-3xl font-extrabold text-primary mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-secondary rounded-full"></div>
                {section} Section
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.filter(c => c.section === section).map((cls, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary">
                    <h3 className="text-xl font-bold text-primary mb-4">{cls.name}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users size={16} className="text-secondary" />
                        <span>Age Group: {cls.ageGroup} | Max Students: {cls.students}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <BookOpen size={16} className="text-secondary" />
                        <span>{cls.subjects} Subjects</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={16} className="text-secondary" />
                        <span>{cls.timing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">Enroll Your Child Today</h2>
          <Link href="/admissions" className="inline-block px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-secondary hover:text-primary transition-all text-lg">
            Apply for Admission
          </Link>
        </div>
      </section>
    </>
  );
}
