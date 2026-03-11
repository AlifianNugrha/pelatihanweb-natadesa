"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, PlayCircle, BookOpen, Users, Award, MoveRight, Layers, FileVideo } from "lucide-react";

export default function TrainingSystem() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: "sistem", label: "Sistem Belajar", icon: <Layers size={18} /> },
        { id: "fasilitas", label: "Fasilitas & Fitur", icon: <Award size={18} /> },
        { id: "materi", label: "Contoh Materi", icon: <FileVideo size={18} /> },
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
            icon: <BookOpen className="text-orange-500" size={24} />,
        },
        {
            title: "Grup Diskusi",
            desc: "Komunitas bersama peserta dan mentor berpengalaman.",
            icon: <Users className="text-orange-500" size={24} />,
        },
        {
            title: "E-Sertifikat",
            desc: "Sertifikat resmi setelah menyelesaikan pembelajaran.",
            icon: <Award className="text-orange-500" size={24} />,
        },
        {
            title: "Akses Rekaman",
            desc: "Tonton ulang rekaman sesi mentoring tanpa batas.",
            icon: <PlayCircle className="text-orange-500" size={24} />,
        },
    ];

    return (
        <section className="py-12 md:py-16 bg-white relative">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-bl-full opacity-60 z-0 hidden md:block"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <div className="text-orange-600 font-bold text-xs tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
                        <span className="w-6 h-0.5 bg-orange-600"></span> Metode Pelatihan <span className="w-6 h-0.5 bg-orange-600"></span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-green-950 mb-4 leading-tight">
                        Sistem Belajar <span className="text-green-600">Terpadu</span>
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base">
                        Dirancang khusus dengan pendekatan praktis dan terstruktur sehingga mudah dipahami.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8 overflow-x-auto pb-2 hide-scrollbar">
                    <div className="flex space-x-2 bg-slate-50 p-1.5 rounded-full border border-slate-200">
                        {tabs.map((tab, idx) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(idx)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeTab === idx
                                    ? "bg-green-600 text-white shadow-md transform scale-105"
                                    : "text-slate-600 hover:text-green-700 hover:bg-green-50"
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    {/* Sistem Belajar - Flow */}
                    {activeTab === 0 && (
                        <div className="p-6 md:p-10 animate-in fade-in zoom-in duration-300">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-green-950">Alur Pembelajaran</h3>

                                    <div className="space-y-4">
                                        {flowSteps.map((step, idx) => (
                                            <div key={idx} className="flex border border-slate-100 rounded-xl p-4 bg-slate-50 hover:bg-white hover:border-green-200 transition-all shadow-sm hover:shadow-md group items-start">
                                                <div className="w-8 h-8 shrink-0 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold text-sm mr-4 group-hover:bg-green-600 group-hover:text-white transition-colors mt-0.5">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-green-950 text-base mb-1">{step.title}</h4>
                                                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative rounded-2xl overflow-hidden shadow-md h-64 md:h-full min-h-[400px] bg-green-950">
                                    <img
                                        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
                                        alt="Ilustrasi Kelas Natadesa"
                                        className="object-cover w-full h-full opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                                        <span className="bg-orange-500 text-white font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-md inline-block mb-3">
                                            Interaktif
                                        </span>
                                        <h4 className="text-xl md:text-2xl font-bold mb-2">Belajar Di Mana Saja</h4>
                                        <p className="text-sm text-green-100 leading-relaxed max-w-sm">
                                            Sistem fleksibel menyesuaikan rutinitas tanpa mengurangi esensi pembelajaran yang komprehensif.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Fasilitas */}
                    {activeTab === 1 && (
                        <div className="p-6 md:p-10 animate-in fade-in zoom-in duration-300 bg-slate-50">
                            <h3 className="text-xl font-bold text-green-950 text-center mb-8">Fasilitas Penunjang</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {facilities.map((fac, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                                        <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                                            {fac.icon}
                                        </div>
                                        <h4 className="font-bold text-green-950 text-base mb-2">{fac.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{fac.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Materi */}
                    {activeTab === 2 && (
                        <div className="p-6 md:p-10 animate-in fade-in zoom-in duration-300">
                            <div className="grid md:grid-cols-3 gap-6">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="bg-white border text-center border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                                        <div className="aspect-video bg-slate-200 relative">
                                            <img
                                                src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop&sig=${item}`}
                                                alt="Thumbnail"
                                                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-lg scale-75 group-hover:scale-100 transition transform">
                                                    <PlayCircle size={24} />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-md font-bold">
                                                12:45
                                            </div>
                                        </div>
                                        <div className="p-5 flex-grow flex flex-col">
                                            <h4 className="font-bold text-green-950 text-sm md:text-base mb-2 text-left line-clamp-2 group-hover:text-green-600 transition">
                                                {item === 1 ? "Panduan Lengkap Digitalisasi Koperasi Merah Putih" : item === 2 ? "Cara Mengelola BUMDes Yang Efektif" : "Menemukan & Mengembangkan Potensi Wisata Desa"}
                                            </h4>
                                            <p className="text-xs text-slate-500 text-left mt-auto flex items-center gap-1.5 font-medium">
                                                <CheckCircle2 size={14} className="text-green-500" /> Free Preview Available
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 text-center border-t border-slate-100 pt-6">
                                <button className="text-green-600 font-bold text-sm flex items-center justify-center gap-2 mx-auto hover:text-green-700 transition group/btn">
                                    <Link href="/layanan" className="px-8 py-3.5 bg-white border-2 border-slate-200 text-slate-700 rounded-md font-semibold text-base hover:border-slate-300 hover:bg-slate-50 transition flex items-center justify-center text-center">
                                        Lihat Selengkapnya <MoveRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
