import Image from 'next/image';
import { Trophy, Users, Sun, Heart } from 'lucide-react';

export default function PlaygroundPage() {
  return (
    <>
      <section className="relative h-[25vh] min-h-[200px] flex items-center justify-center bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-8">
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-2 tracking-tighter">Our Playground</h1>
          <p className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest">Fitness, Teamwork & Fun</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h4 className="text-secondary font-bold tracking-wider uppercase mb-2">Sports & Recreation</h4>
              <h2 className="text-4xl font-extrabold text-primary mb-6">A Playground That Inspires</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our sprawling playground spans over 2 acres, providing ample space for cricket, football, basketball, athletics, and free play. We believe physical activity is essential to a child&apos;s development and well-being.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Trophy, title: "Cricket Ground", desc: "Full-size pitch with practice nets" },
                  { icon: Users, title: "Basketball Court", desc: "Professional-standard court" },
                  { icon: Sun, title: "Open Fields", desc: "Football and athletics tracks" },
                  { icon: Heart, title: "Play Area", desc: "Safe play equipment for juniors" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4">
                    <item.icon className="text-secondary mb-2" size={24} />
                    <h4 className="font-bold text-primary text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/AnyDesk/WhatsApp%20Image%202026-04-27%20at%202.13.03%20AM.jpeg" alt="Cricket ground" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg mt-8">
                  <Image src="/images/AnyDesk/WhatsApp%20Image%202026-04-27%20at%202.13.04%20AM.jpeg" alt="Sports activities" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-primary mb-12 text-center">Sports Activities</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Cricket", "Football", "Basketball", "Badminton", "Table Tennis", "Athletics", "Swimming", "Martial Arts"].map((sport, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3">
                  <Trophy size={24} />
                </div>
                <h3 className="font-bold text-primary">{sport}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
