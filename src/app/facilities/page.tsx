import Image from 'next/image';
import Link from 'next/link';
import { Monitor, BookOpen, Laptop, Wifi, Shield, Dumbbell } from 'lucide-react';

export default function FacilitiesPage() {
  return (
    <>
      <section className="relative h-[25vh] min-h-[200px] flex items-center justify-center bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-8">
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-2 tracking-tighter">Our Facilities</h1>
          <p className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest">World-Class Infrastructure</p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Laptop, title: "Computer Lab", desc: "A state-of-the-art computer lab with the latest hardware and high-speed internet to foster digital literacy and coding skills.", img: "/images/AnyDesk/WhatsApp%20Image%202026-04-27%20at%202.13.01%20AM.jpeg" },
              { icon: BookOpen, title: "Central Library", desc: "A vast collection of books, journals, and digital resources in a quiet, comfortable reading environment.", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop" },
              { icon: Monitor, title: "Smart Classrooms", desc: "Interactive whiteboards, projectors, and multimedia tools that make learning engaging and effective.", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" },
              { icon: Dumbbell, title: "Vast Playground", desc: "Sprawling playground for sports like cricket, football, and athletics, encouraging physical fitness and teamwork.", img: "/images/AnyDesk/WhatsApp%20Image%202026-04-27%20at%202.13.03%20AM.jpeg" },
              { icon: Shield, title: "Safe Campus", desc: "CCTV surveillance, trained security personnel, boundary walls, and controlled access points for complete safety.", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032&auto=format&fit=crop" },
            ].map((facility, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-52 overflow-hidden">
                  <Image src={facility.img} alt={facility.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary">
                      <facility.icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-primary mb-8 tracking-tight">Experience Our Campus</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Schedule a visit to see our world-class facilities in person.</p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-secondary hover:text-primary transition-all text-lg">
            Book a Campus Tour
          </Link>
        </div>
      </section>
    </>
  );
}
