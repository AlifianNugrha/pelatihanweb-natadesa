"use client";

import { useState } from "react";
import { CheckCircle2, PlayCircle, BookOpen, Users, Award, MoveRight, Layers, FileVideo } from "lucide-react";

export default function TrainingSystem() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: "sistem", label: "Sistem Belajar", icon: <Layers size={14} /> },
        { id: "fasilitas", label: "Fasilitas & Fitur", icon: <Award size={14} /> },
        { id: "materi", label: "Contoh Materi", icon: <FileVideo size={14} /> },
    ];

    const flowSteps = [
        {
            title: "Asesmen Awal (Pre-Test)",
            desc: "Mengetahui sejauh mana pemahaman peserta mengenai potensi desa atau koperasi.",
        },
        {
            title: "Materi Terapan & Interaktif",
            desc: "Belajar teori berbasis studi kasus riil didampingi praktisi ahli.",
        },
        {
            title: "Praktik Lapangan (Opsional)",
            desc: "Simulasi pengelolaan dan pendirian usaha langsung di lapangan.",
        },
        {
            title: "Evaluasi & Mentoring (Post-Test)",
            desc: "Ujian mengukur peningkatan serta sesi diskusi mendalam.",
        },
    ];

    const facilities = [
        {
            title: "Modul Lengkap",
            desc: "Materi belajar (Video, PDF) diakses kapan saja.",
            icon: <BookOpen className="text-orange-500" size={16} />,
        },
        {
            title: "Grup Diskusi",
            desc: "Komunitas bersama peserta dan mentor berpengalaman.",
            icon: <Users className="text-orange-500" size={16} />,
        },
        {
            title: "E-Sertifikat",
            desc: "Sertifikat resmi setelah menyelesaikan pembelajaran.",
            icon: <Award className="text-orange-500" size={16} />,
        },
        {
            title: "Akses Rekaman",
            desc: "Tonton ulang rekaman sesi mentoring tanpa batas.",
            icon: <PlayCircle className="text-orange-500" size={16} />,
        },
    ];

    return (
        <section className="py-8 bg-white relative">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-60 z-0 hidden md:block"></div>

            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <div className="text-center max-w-lg mx-auto mb-6">
                    <div className="text-orange-600 font-bold text-[9px] tracking-widest uppercase mb-1.5 flex items-center justify-center gap-1.5">
                        <span className="w-3 h-0.5 bg-orange-600"></span> Metode Pelatihan <span className="w-3 h-0.5 bg-orange-600"></span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-extrabold text-green-950 mb-1.5 leading-tight">
                        Sistem Belajar <span className="text-green-600">Terpadu</span>
                    </h2>
                    <p className="text-slate-600 text-[11px] md:text-xs">
                        Dirancang khusus dengan pendekatan praktis dan terstruktur sehingga mudah dipahami.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-5 overflow-x-auto pb-1 hide-scrollbar">
                    <div className="flex space-x-1 bg-slate-50 p-0.5 rounded-full border border-slate-200">
                        {tabs.map((tab, idx) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(idx)}
                                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-bold transition-all duration-300 whitespace-nowrap ${activeTab === idx
                                    ? "bg-green-600 text-white shadow transform scale-105"
                                    : "text-slate-600 hover:text-green-700 hover:bg-green-50"
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    {/* Sistem Belajar - Flow */}
                    {activeTab === 0 && (
                        <div className="p-4 md:p-6 animate-in fade-in zoom-in duration-300">
                            <div className="grid md:grid-cols-2 gap-5 items-center">
                                <div className="space-y-3">
                                    <h3 className="text-sm font-bold text-green-950">Alur Pembelajaran</h3>

                                    <div className="space-y-2">
                                        {flowSteps.map((step, idx) => (
                                            <div key={idx} className="flex border border-slate-100 rounded-md p-2 bg-slate-50 hover:bg-white hover:border-green-200 transition-all group items-center">
                                                <div className="w-5 h-5 shrink-0 bg-green-100 text-green-600 rounded flex items-center justify-center font-bold text-[10px] mr-2 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-green-950 text-[10px] mb-0.5">{step.title}</h4>
                                                    <p className="text-slate-500 text-[9px] leading-tight">{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative rounded-lg overflow-hidden shadow-sm h-40 md:h-full bg-green-950">
                                    <img
                                        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
                                        alt="Ilustrasi Kelas Natadesa"
                                        className="object-cover w-full h-full opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-3 text-white">
                                        <span className="bg-orange-500 text-white font-bold text-[8px] tracking-wider uppercase px-1.5 py-0.5 rounded inline-block mb-1">
                                            Interaktif
                                        </span>
                                        <h4 className="text-[11px] font-bold mb-0.5">Belajar Di Mana Saja</h4>
                                        <p className="text-[9px] text-green-100 leading-tight">
                                            Sistem fleksibel menyesuaikan rutinitas tanpa mengurangi esensi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Fasilitas */}
                    {activeTab === 1 && (
                        <div className="p-4 md:p-6 animate-in fade-in zoom-in duration-300 bg-slate-50">
                            <h3 className="text-sm font-bold text-green-950 text-center mb-4">Fasilitas Penunjang</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {facilities.map((fac, idx) => (
                                    <div key={idx} className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex flex-col items-center text-center">
                                        <div className="w-6 h-6 bg-orange-50 rounded flex items-center justify-center mb-2">
                                            {fac.icon}
                                        </div>
                                        <h4 className="font-bold text-green-950 text-[10px] mb-1">{fac.title}</h4>
                                        <p className="text-slate-500 text-[9px] leading-tight">{fac.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Materi */}
                    {activeTab === 2 && (
                        <div className="p-4 md:p-6 animate-in fade-in zoom-in duration-300">
                            <div className="grid md:grid-cols-3 gap-3">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="bg-white border text-center border-slate-200 rounded-lg overflow-hidden group">
                                        <div className="aspect-video bg-slate-200 relative">
                                            <img
                                                src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop&sig=${item}`}
                                                alt="Thumbnail"
                                                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-sm group-hover:scale-110 transition">
                                                    <PlayCircle size={12} />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[8px] px-1 py-0.5 rounded font-bold">
                                                12:45
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <h4 className="font-bold text-green-950 text-[9px] mb-1 text-left line-clamp-2 hover:text-green-600 transition">
                                                {item === 1 ? "Digitalisasi Koperasi Merah Putih" : item === 2 ? "Cara Mengelola BUMDes" : "Potensi Wisata Desa"}
                                            </h4>
                                            <p className="text-[8px] text-slate-500 text-left mt-1 flex items-center gap-0.5">
                                                <CheckCircle2 size={8} className="text-green-500" /> Free Preview
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 text-center">
                                <button className="text-green-600 font-bold text-[9px] flex items-center justify-center gap-1 mx-auto hover:text-green-700 transition">
                                    Lihat Semua <MoveRight size={10} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
