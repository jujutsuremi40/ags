'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Logic: Save inquiry to localStorage for Admin Dashboard
    const savedInquiries = JSON.parse(localStorage.getItem('ags_inquiries') || '[]');
    const newInquiry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      ...form,
      status: 'new'
    };
    localStorage.setItem('ags_inquiries', JSON.stringify([newInquiry, ...savedInquiries]));
    
    setSent(true);
  };

  return (
    <div className="bg-white pt-24 pb-8">
      <div className="container mx-auto px-4">
        {/* Header - Minimal */}
        <div className="mb-6 text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-2xl md:text-3xl font-black text-[#1B1464] tracking-tight mb-1">Contact Abexsun</h1>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">A Project of Ten Sun Education System</p>
          </motion.div>
        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: MapPin, title: "Location", info: "Mughalpura, Lahore", bg: "bg-blue-50", text: "text-blue-600" },
            { icon: Phone, title: "Contact", info: "+92 321 6226665", bg: "bg-green-50", text: "text-green-600" },
            { icon: Mail, title: "Email", info: "abexsungrammarinfo@gmail.com", bg: "bg-orange-50", text: "text-orange-600" },
            { icon: Clock, title: "Hours", info: "8AM - 3PM", bg: "bg-purple-50", text: "text-purple-600" },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4 transition-all">
              <div className={`w-10 h-10 ${item.bg} ${item.text} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <item.icon size={18} />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-black text-[#1B1464]">{item.info}</p>
                <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content: Form | Map (Compact Height) */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch h-[400px]">
          
          {/* Form Side - Reduced Height */}
          <div className="bg-gray-50/50 rounded-[2.5rem] p-8 border border-gray-100 flex flex-col justify-center">
             <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                   <div className="w-1 h-5 bg-[#00AEEF] rounded-full"></div>
                   <h2 className="text-lg font-black text-[#1B1464] uppercase tracking-tight">Send an Inquiry</h2>
                </div>

                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                    <CheckCircle className="text-[#25D366] mx-auto mb-2" size={32} />
                    <h3 className="text-lg font-black text-[#1B1464] mb-0.5">Inquiry Sent!</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Admin will contact you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" required placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-5 py-3 rounded-2xl bg-white border border-black focus:border-[#00AEEF] outline-none transition-all font-bold text-sm text-[#1B1464]" />
                      <input type="email" required placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-5 py-3 rounded-2xl bg-white border border-black focus:border-[#00AEEF] outline-none transition-all font-bold text-sm text-[#1B1464]" />
                    </div>
                    <input type="text" placeholder="Subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full px-5 py-3 rounded-2xl bg-white border border-black focus:border-[#00AEEF] outline-none transition-all font-bold text-sm text-[#1B1464]" />
                    <textarea rows={2} required placeholder="How can we help?" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-5 py-3 rounded-2xl bg-white border border-black focus:border-[#00AEEF] outline-none transition-all font-bold text-sm text-[#1B1464] resize-none"></textarea>
                    
                    <button type="submit" className="w-full py-4 bg-[#1B1464] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#00AEEF] transition-all flex items-center justify-center gap-2">
                      <Send size={16} /> Transmit Inquiry
                    </button>
                  </form>
                )}
             </div>
          </div>

          {/* Map Side */}
          <div className="rounded-[2.5rem] overflow-hidden border border-gray-100 relative h-full">
              <iframe
                src="https://maps.google.com/maps?q=31.575527,74.376794&z=15&output=embed"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
                className="w-full h-full"
              ></iframe>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-between">
                <div>
                   <p className="text-[10px] font-black text-[#1B1464] uppercase tracking-widest">Abexsun Main Campus</p>
                   <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Behind Shalimar Hospital, Mughalpura, Lahore</p>
                </div>
                <div className="w-8 h-8 bg-[#00AEEF] text-white rounded-lg flex items-center justify-center">
                   <MapPin size={16} />
                </div>
              </div>
          </div>

        </div>

        {/* Footer Info */}
        <div className="mt-10 pt-8 border-t border-gray-50 flex justify-between items-center text-[9px] font-black text-gray-300 uppercase tracking-[0.4em]">
           <span>ABEXSUN EDUCATION SYSTEM</span>
           <span>&copy; 2026 ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </div>
  );
}
