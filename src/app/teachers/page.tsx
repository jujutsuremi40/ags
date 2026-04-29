import Image from 'next/image';

const teachers = [
  { name: "Mr. Usman Tariq", subject: "Mathematics", qualification: "M.Sc Mathematics", experience: "12 years", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
  { name: "Mrs. Zainab Malik", subject: "English", qualification: "M.A English Literature", experience: "10 years", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
  { name: "Mr. Faisal Ahmed", subject: "Physics", qualification: "M.Sc Physics", experience: "15 years", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
  { name: "Mrs. Ayesha Siddiqui", subject: "Chemistry", qualification: "M.Sc Chemistry", experience: "8 years", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
  { name: "Mr. Hassan Raza", subject: "Computer Science", qualification: "BS Computer Science", experience: "6 years", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
  { name: "Mrs. Nadia Qureshi", subject: "Biology", qualification: "M.Sc Zoology", experience: "11 years", img: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?q=80&w=1974&auto=format&fit=crop" },
];

export default function TeachersPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div><div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-primary mb-3 tracking-tighter">Our Teachers</h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-medium">Passionate educators dedicated to inspiring and guiding every student.</p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image src={t.img} alt={t.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{t.name}</h3>
                  <p className="text-secondary font-bold mb-3">{t.subject}</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Qualification:</strong> {t.qualification}</p>
                    <p><strong>Experience:</strong> {t.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
