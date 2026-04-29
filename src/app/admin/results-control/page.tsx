"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Trophy,
  CheckCircle,
  Clock,
  ArrowLeft,
  AlertCircle,
  Eye,
  Send,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function ResultsControlPage() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [draftMarks, setDraftMarks] = useState<any[]>([]);
  const [publishedResults, setPublishedResults] = useState<any[]>([]);
  const [status, setStatus] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem("ags_admin_auth");
    if (!auth) {
      router.push("/admin/login");
      return;
    }
    setIsAdmin(true);
    
    // Load marks from teachers
    const loadDrafts = () => {
      const marks = JSON.parse(localStorage.getItem("ags_teacher_marks") || "[]");
      setDraftMarks(marks.filter((m: any) => m.status === "draft"));
    };
    
    const loadPublished = () => {
      setPublishedResults(JSON.parse(localStorage.getItem("ags_results") || "[]"));
    };

    loadDrafts();
    loadPublished();

    const handleStorage = () => {
      loadDrafts();
      loadPublished();
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [router]);

  const showStatus = (msg: string, type: "success" | "error" = "success") => {
    setStatus({ msg, type });
    setTimeout(() => setStatus(null), 3000);
  };

  const calculateGrade = (marksStr: string) => {
    if (!marksStr) return "N/A";
    const parts = marksStr.split("/");
    let score = 0, total = 100;
    
    if (parts.length >= 2) {
      score = parseFloat(parts[0]);
      total = parseFloat(parts[1]);
    } else {
      score = parseFloat(parts[0]);
    }

    if (isNaN(score) || isNaN(total) || total === 0) return "N/A";
    const perc = (score / total) * 100;
    if (perc >= 90) return "A+";
    if (perc >= 80) return "A";
    if (perc >= 70) return "B";
    if (perc >= 60) return "C";
    return "D";
  };

  const handleReleaseSubject = (cls: string, subject: string) => {
    // 1. Get all drafts for this class & subject
    const marksToRelease = draftMarks.filter(m => m.cls === cls && m.subject === subject);
    if (marksToRelease.length === 0) return;

    // 2. Generate final results
    const newResults = marksToRelease.map(m => ({
      id: m.id,
      studentId: m.studentId,
      name: m.name,
      cls: m.cls,
      subject: m.subject,
      marks: m.marks,
      grade: calculateGrade(m.marks)
    }));

    // 3. Update ags_results
    const currentResults = JSON.parse(localStorage.getItem("ags_results") || "[]");
    // Remove old results for this class+subject so we don't duplicate
    const filteredResults = currentResults.filter((r: any) => !(r.cls === cls && r.subject === subject));
    const finalResults = [...filteredResults, ...newResults];
    localStorage.setItem("ags_results", JSON.stringify(finalResults));

    // 4. Update ags_teacher_marks to set status = 'published'
    const allTeacherMarks = JSON.parse(localStorage.getItem("ags_teacher_marks") || "[]");
    const updatedTeacherMarks = allTeacherMarks.map((m: any) => {
      if (m.cls === cls && m.subject === subject) {
        return { ...m, status: "published" };
      }
      return m;
    });
    localStorage.setItem("ags_teacher_marks", JSON.stringify(updatedTeacherMarks));

    // 5. Update state
    setDraftMarks(updatedTeacherMarks.filter((m: any) => m.status === "draft"));
    setPublishedResults(finalResults);
    showStatus(`Results Released for ${cls} - ${subject}!`);
  };

  if (!isAdmin) return null;

  // Group drafts by Class + Subject
  const draftGroups: Record<string, { cls: string, subject: string, count: number }> = {};
  draftMarks.forEach(m => {
    const key = `${m.cls}-${m.subject}`;
    if (!draftGroups[key]) {
      draftGroups[key] = { cls: m.cls, subject: m.subject, count: 0 };
    }
    draftGroups[key].count++;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      {status && (
        <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 ${status.type === "success" ? "bg-[#25D366] text-white" : "bg-red-500 text-white"}`}>
          <CheckCircle size={16} /> {status.msg}
        </div>
      )}

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-[#1B1464]">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-2xl font-black text-[#1B1464] tracking-tight uppercase">Result Control Center</h1>
              <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mt-1">Review & Publish Teacher Marks</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-purple-500">
            <div className="flex justify-between items-start mb-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Draft Marks</p>
              <Trophy size={16} className="text-purple-500" />
            </div>
            <p className="text-3xl font-black text-[#1B1464]">{draftMarks.length}</p>
            <p className="text-[10px] font-bold text-gray-400 mt-1">Pending Release</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-[#25D366]">
            <div className="flex justify-between items-start mb-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Published</p>
              <CheckCircle size={16} className="text-[#25D366]" />
            </div>
            <p className="text-3xl font-black text-[#1B1464]">{publishedResults.length}</p>
            <p className="text-[10px] font-bold text-gray-400 mt-1">Visible to Students</p>
          </div>
        </div>

        {/* Drafts to Publish */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h3 className="text-lg font-black text-[#1B1464] uppercase tracking-tight flex items-center gap-2">
              <AlertCircle size={20} className="text-orange-500" /> Pending Releases
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Class</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Subject</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Students Evaluated</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {Object.keys(draftGroups).length === 0 ? (
                  <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-400 font-bold">No draft marks pending release.</td></tr>
                ) : (
                  Object.values(draftGroups).map((group, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50">
                      <td className="px-6 py-4 font-black text-[#1B1464]">{group.cls}</td>
                      <td className="px-6 py-4 font-bold text-[#00AEEF]">{group.subject}</td>
                      <td className="px-6 py-4 font-bold text-gray-500">{group.count} Students</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => handleReleaseSubject(group.cls, group.subject)} className="px-4 py-2 bg-[#1B1464] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#00AEEF] transition-all flex items-center gap-2">
                            <Send size={14} /> Publish Now
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recently Published */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <h3 className="text-lg font-black text-[#1B1464] uppercase tracking-tight flex items-center gap-2">
              <CheckCircle size={20} className="text-[#25D366]" /> Recently Published Results
            </h3>
            <Link href="/admin" className="text-[10px] font-black text-[#00AEEF] uppercase tracking-widest hover:underline">View All in Admin Dashboard</Link>
          </div>
          <div className="p-6">
            {publishedResults.length === 0 ? (
              <p className="text-gray-400 font-bold text-center">No results published yet.</p>
            ) : (
              <p className="text-sm font-bold text-gray-600">Total {publishedResults.length} result records are currently live in the Student & Parent portals.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
