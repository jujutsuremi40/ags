'use client';

import { useEffect, useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, Heart, Shield, GraduationCap, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function Profile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const auth = localStorage.getItem('portalAuth');
    if (auth) setUser(JSON.parse(auth));
  }, []);

  const infoGroups = [
    {
      title: "Personal Information",
      items: [
        { label: "Full Name", value: user?.name, icon: User },
        { label: "Father's Name", value: "Muhammad Saleem", icon: Briefcase },
        { label: "Mother's Name", value: "Zainab Bibi", icon: Heart },
        { label: "Date of Birth", value: "12 May 2010", icon: Calendar },
        { label: "Gender", value: "Male", icon: User },
        { label: "Blood Group", value: "O+", icon: Heart },
      ]
    },
    {
      title: "Contact Details",
      items: [
        { label: "Phone Number", value: "+92 300 1234567", icon: Phone },
        { label: "Email Address", value: "abdul.raheem@abexsun.edu", icon: Mail },
        { label: "Address", value: "H# 45, Street 12, Begampura, Lahore", icon: MapPin },
      ]
    },
    {
      title: "Academic Information",
      items: [
        { label: "Admission No", value: "AGS-2024-089", icon: Shield },
        { label: "Current Class", value: user?.cls || "N/A", icon: GraduationCap },
        { label: "Section", value: user?.section, icon: Shield },
        { label: "Roll Number", value: user?.rollNo, icon: Shield },
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
        <div className="relative group">
          <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-primary/10 shadow-xl">
            <Image src="/images/AnyDesk/WhatsApp Image 2026-04-27 at 2.13.13 AM (1).jpeg" alt="Student" width={128} height={128} className="w-full h-full object-cover" />
          </div>
          <button className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-xl shadow-lg border-2 border-white hover:scale-110 transition-transform">
            <User size={16} />
          </button>
        </div>
        <div className="text-center md:text-left flex-1">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-2">
            <h1 className="text-3xl font-black text-primary tracking-tight">{user?.name}</h1>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full">Active Student</span>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">Student ID: {user?.id} | Joined: Aug 2024</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
             <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
               <GraduationCap size={16} className="text-secondary" /> {user?.class} ({user?.section})
             </div>
             <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
               <MapPin size={16} className="text-secondary" /> Lahore, Pakistan
             </div>
          </div>
        </div>
        <button className="px-8 py-3 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-secondary hover:text-primary transition-all shadow-lg shadow-primary/10">
          Edit Profile
        </button>
      </div>

      {/* Info Sections */}
      <div className="grid md:grid-cols-2 gap-8">
        {infoGroups.map((group, i) => (
          <div key={i} className={`bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 ${i === infoGroups.length - 1 ? 'md:col-span-2' : ''}`}>
            <h3 className="text-lg font-black text-primary mb-6 uppercase tracking-tight flex items-center gap-3">
              <div className="w-1.5 h-6 bg-secondary rounded-full"></div>
              {group.title}
            </h3>
            <div className={`grid gap-6 ${i === infoGroups.length - 1 ? 'md:grid-cols-2 lg:grid-cols-4' : ''}`}>
              {group.items.map((item, j) => (
                <div key={j} className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">
                    <item.icon size={12} className="text-secondary" />
                    {item.label}
                  </div>
                  <p className="text-sm font-bold text-primary">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
