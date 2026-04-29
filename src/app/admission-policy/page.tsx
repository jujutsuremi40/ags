import Link from 'next/link';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function AdmissionPolicyPage() {
  return (
    <>
      <section className="relative h-[25vh] min-h-[200px] flex items-center justify-center bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-8">
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-2 tracking-tighter">Admission Policy</h1>
          <p className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest">Enrollment Guidelines & Criteria</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose-lg">
            {/* Eligibility */}
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-primary mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-secondary rounded-full"></div>
                Eligibility Criteria
              </h2>
              <div className="space-y-4">
                {[
                  { cls: "Nursery", criteria: "Child must be at least 3 years old by March 31 of the admission year." },
                  { cls: "KG", criteria: "Child must be at least 4 years old by March 31 of the admission year." },
                  { cls: "Class 1", criteria: "Child must be at least 5 years old. Basic literacy readiness assessment required." },
                  { cls: "Class 2-5", criteria: "Must have completed the previous class from a recognized school. Report card required." },
                  { cls: "Class 6-8", criteria: "Must pass the entrance assessment. Previous school report card and transfer certificate required." },
                  { cls: "Class 9-10", criteria: "Must clear the placement test in core subjects. Minimum 60% marks in previous class required." },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 flex items-start gap-4">
                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-primary">{item.cls}</h4>
                      <p className="text-gray-600 text-sm">{item.criteria}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* General Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-primary mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-secondary rounded-full"></div>
                General Admission Guidelines
              </h2>
              <ul className="space-y-3">
                {[
                  "Admissions are granted on a first-come, first-served basis subject to seat availability.",
                  "All admissions are subject to verification of submitted documents.",
                  "The school reserves the right to conduct an entrance test or interview.",
                  "Students with special needs will be assessed for appropriate support and accommodations.",
                  "Admission fee is non-refundable once the enrollment is confirmed.",
                  "Parents must agree to abide by the school rules and code of conduct.",
                  "False or misleading information in the application will result in cancellation of admission.",
                  "Re-admission after withdrawal requires a fresh application and is subject to availability.",
                ].map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Note */}
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-amber-800 mb-1">Important Note</h4>
                  <p className="text-amber-700 text-sm">Admissions for the 2026-2027 academic session are currently open. Seats are limited. Apply early to secure your child&apos;s place at Abexsun Grammar School.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/admissions" className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary hover:text-primary transition-all text-lg shadow-lg">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
