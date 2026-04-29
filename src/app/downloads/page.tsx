import { Download, FileText, FileSpreadsheet, File } from 'lucide-react';

const downloads = [
  { name: "Admission Form 2026-27", category: "Admissions", size: "245 KB", type: "PDF", icon: FileText },
  { name: "School Prospectus", category: "General", size: "1.2 MB", type: "PDF", icon: FileText },
  { name: "Fee Structure 2026-27", category: "Fee", size: "180 KB", type: "PDF", icon: FileSpreadsheet },
  { name: "Academic Calendar 2026-27", category: "Academic", size: "320 KB", type: "PDF", icon: FileText },
  { name: "Transfer Certificate Application", category: "Forms", size: "95 KB", type: "PDF", icon: File },
  { name: "Character Certificate Application", category: "Forms", size: "88 KB", type: "PDF", icon: File },
  { name: "Leave Application Form", category: "Forms", size: "72 KB", type: "PDF", icon: File },
  { name: "Uniform & Dress Code Policy", category: "Policy", size: "150 KB", type: "PDF", icon: FileText },
  { name: "Parent Handbook", category: "General", size: "890 KB", type: "PDF", icon: FileText },
  { name: "Examination Schedule", category: "Academic", size: "210 KB", type: "PDF", icon: FileSpreadsheet },
];

export default function DownloadsPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div><div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-primary mb-3 tracking-tighter">Downloads</h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-medium">Access and download important school documents, forms, and resources.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {downloads.map((doc, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-100 transition-colors">
                      <doc.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">{doc.name}</h3>
                      <div className="flex gap-3 text-xs text-gray-500 mt-1">
                        <span className="bg-gray-200 px-2 py-0.5 rounded">{doc.category}</span>
                        <span>{doc.type} • {doc.size}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-secondary hover:text-primary transition-all">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
