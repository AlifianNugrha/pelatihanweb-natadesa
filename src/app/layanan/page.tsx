"use client";

import { useState } from "react";
import {
    BookOpen,
    MonitorPlay,
    CheckCircle2,
    Search,
    Filter,
    PlayCircle,
    Users,
    TrendingUp,
    Bookmark,
    Home,
    LogOut,
    ChevronRight,
    Award
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dummy data for classes
const DUMMY_CLASSES = [
    {
        id: 1,
        type: "live",
        category: "Koperasi (KDMP)",
        topic: "MANAJEMEN KEUANGAN",
        title: "Panduan Lengkap Finansial BUMDes",
        description: "Pelajari cara menyusun laporan keuangan BUMDes yang akurat bersama pakar akuntansi koperasi.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
        students: "+120 peserta mendaftar",
        remaining: "5 Tersisa",
        originalPrice: "Rp 1.500.000",
        price: "Rp 499.000",
        isFree: false
    },
    {
        id: 2,
        type: "video",
        category: "Koperasi (KDMP)",
        topic: "KOMPREHENSIF KDMP",
        title: "Pendirian Koperasi Desa Merah Putih",
        description: "Langkah demi langkah membangun koperasi kuat di desa didukung regulasi pemerintah.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
        modules: 24,
        features: ["Kuis"],
        price: "Gratis",
        isFree: true,
        certified: true,
    },
    {
        id: 3,
        type: "video",
        category: "BUMDes",
        topic: "MANAJEMEN BUMDES",
        title: "Digitalisasi Bisnis & Operasional BUMDes",
        description: "Tingkatkan efisiensi dan transparansi unit usaha desa dengan ekosistem digital.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop",
        modules: 18,
        features: ["Sertifikat"],
        price: "Rp 199.000",
        isFree: false,
        popular: true,
    }
];

export default function LayananDashboard() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("Semua Topik");

    const filters = ["Semua Topik", "Koperasi (KDMP)", "BUMDes", "Live Class"];

    const filteredClasses = DUMMY_CLASSES.filter((cls) => {
        const matchesSearch = 
            cls.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            cls.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cls.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        let matchesFilter = true;
        if (activeFilter === "Koperasi (KDMP)") {
            matchesFilter = cls.category === "Koperasi (KDMP)";
        } else if (activeFilter === "BUMDes") {
            matchesFilter = cls.category === "BUMDes";
        } else if (activeFilter === "Live Class") {
            matchesFilter = cls.type === "live";
        }

        return matchesSearch && matchesFilter;
    });

    const handleActionClick = (actionName: string) => {
        alert(`Fungsi "${actionName}" sedang dalam pengembangan.`);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />

            <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">

                {/* Sidebar */}
                <aside className="w-full md:w-64 shrink-0 bg-white rounded-2xl shadow-sm border border-slate-100 p-5 hidden md:block h-max sticky top-28">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
                            U
                        </div>
                        <div>
                            <h3 className="font-bold text-green-950 text-sm">User Member</h3>
                            <p className="text-xs text-slate-500">Premium Plan</p>
                        </div>
                    </div>

                    <nav className="space-y-1 mt-4">
                        <button onClick={() => handleActionClick('Semua Kelas')} className="w-full flex items-center gap-3 px-3 py-2.5 bg-green-50 text-green-700 font-bold text-sm rounded-lg">
                            <Home size={18} />
                            Semua Kelas
                        </button>
                        <button onClick={() => handleActionClick('Kelas Saya')} className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-green-600 font-semibold text-sm rounded-lg transition-colors">
                            <BookOpen size={18} />
                            Kelas Saya
                        </button>
                        <button onClick={() => handleActionClick('Sertifikat')} className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-green-600 font-semibold text-sm rounded-lg transition-colors">
                            <Award size={18} />
                            Sertifikat
                        </button>
                        <button onClick={() => handleActionClick('Jadwal Live')} className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-green-600 font-semibold text-sm rounded-lg transition-colors">
                            <MonitorPlay size={18} />
                            Jadwal Live
                        </button>
                    </nav>

                    <div className="mt-8 pt-8 border-t border-slate-100">
                        <button onClick={() => handleActionClick('Keluar')} className="flex items-center gap-3 px-3 py-2.5 text-red-500 hover:bg-red-50 font-semibold text-sm rounded-lg w-full transition-colors">
                            <LogOut size={18} />
                            Keluar
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 space-y-8">
                    {/* Header Dashboard Area */}
                    <div className="bg-gradient-to-r from-green-950 to-green-800 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden flex items-center justify-between shadow-lg">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                        <div className="relative z-10 w-full md:w-3/4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold px-2 py-0.5 bg-white/20 rounded-md tracking-wider">HALO!</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-extrabold mb-2">Mulai Perjalanan Belajarmu</h1>
                            <p className="text-sm text-green-100 max-w-lg">Temukan kelas terbaik seputar Koperasi, BUMDes, dan pemberdayaan ekonomi desa untuk meningkatkan kapasitas desamu.</p>
                        </div>
                    </div>

                    {/* Search and Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full sm:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Cari kelas, materi, atau live session..."
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm shadow-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex space-x-2 w-full sm:w-auto overflow-x-auto pb-1 hide-scrollbar">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap border transition-colors ${
                                        activeFilter === filter
                                            ? "bg-green-950 text-white border-green-950"
                                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200"
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                            <button onClick={() => handleActionClick('Filter Advanced')} className="px-4 py-2 text-xs font-bold rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 whitespace-nowrap border border-slate-200 flex items-center gap-1">
                                <Filter size={12} /> Filter
                            </button>
                        </div>
                    </div>

                    {/* Available Classes Grid */}
                    <div>
                        <div className="flex justify-between items-end mb-4">
                            <h2 className="text-lg font-bold text-green-950 border-l-4 border-orange-500 pl-3">Rekomendasi Kelas</h2>
                            <button onClick={() => handleActionClick('Lihat Semua Rekomendasi')} className="text-sm font-bold text-green-600 hover:text-green-700 flex items-center">
                                Lihat Semua <ChevronRight size={16} />
                            </button>
                        </div>

                        {filteredClasses.length === 0 ? (
                            <div className="text-center py-10 text-slate-500">
                                Tidak ada kelas yang cocok dengan pencarian atau filter saat ini.
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {filteredClasses.map((cls) => (
                                    <div key={cls.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition group flex flex-col">
                                        <div className="aspect-video bg-green-950 relative overflow-hidden">
                                            <img src={cls.image} alt="Class" className="object-cover w-full h-full opacity-70 group-hover:scale-105 transition duration-500" />
                                            
                                            {cls.type === "live" && (
                                                <div className="absolute top-2 left-2 bg-red-500 text-white font-bold text-[9px] uppercase px-2 py-0.5 rounded-sm flex items-center gap-1">
                                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div> Live
                                                </div>
                                            )}
                                            {cls.certified && (
                                                <div className="absolute top-2 left-2 bg-green-500 text-white font-bold text-[9px] uppercase px-2 py-0.5 rounded-sm flex items-center gap-1">
                                                    <Bookmark size={10} /> Bersertifikat
                                                </div>
                                            )}
                                            {cls.popular && (
                                                <div className="absolute top-2 left-2 bg-orange-500 text-white font-bold text-[9px] uppercase px-2 py-0.5 rounded-sm flex items-center gap-1">
                                                    <TrendingUp size={10} /> Populer
                                                </div>
                                            )}

                                            {cls.type === "live" && (
                                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white font-bold text-[9px] px-2 py-0.5 rounded">
                                                    <Users size={10} className="inline mr-1" />{cls.remaining}
                                                </div>
                                            )}

                                            {cls.type === "video" && (
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-orange-500 shadow-lg scale-75 group-hover:scale-100 transition transform">
                                                        <PlayCircle size={20} className="fill-current text-white" />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                                                <div className="w-full">
                                                    <span className={`text-[10px] font-bold tracking-wider mb-1 block ${cls.topic.includes('MANAJEMEN KEUANGAN') ? 'text-green-300' : cls.topic.includes('BUMDES') ? 'text-orange-300' : 'text-green-300'}`}>{cls.topic}</span>
                                                    <h3 className="text-white font-bold text-sm leading-tight group-hover:text-orange-400 transition">{cls.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 flex flex-col flex-1">
                                            <p className="text-xs text-slate-500 mb-3 flex-1 line-clamp-2">{cls.description}</p>
                                            
                                            {cls.type === "live" ? (
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="flex -space-x-2">
                                                        <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
                                                        <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white"></div>
                                                    </div>
                                                    <span className="text-[10px] text-slate-500 font-medium">{cls.students}</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-4 text-[10px] text-slate-500 font-medium mb-4">
                                                    <span className="flex items-center gap-1"><BookOpen size={12} className="text-green-600" /> {cls.modules} Modul Vid</span>
                                                    {cls.features?.map((feature, idx) => (
                                                        <span key={idx} className="flex items-center gap-1">
                                                            {feature === 'Sertifikat' ? <Award size={12} className="text-green-600" /> : <CheckCircle2 size={12} className="text-green-600" />} {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between mt-auto">
                                                <div>
                                                    {cls.originalPrice && (
                                                        <p className="text-[10px] text-slate-400 line-through">{cls.originalPrice}</p>
                                                    )}
                                                    <p className="font-extrabold text-orange-600 text-base">{cls.price}</p>
                                                </div>
                                                <button onClick={() => handleActionClick(`Beli Kelas / Mulai Relajar: ${cls.title}`)} className={`${cls.isFree ? 'bg-slate-100 text-green-950 border border-slate-200 hover:bg-slate-200' : 'bg-green-600 text-white hover:bg-green-700'} text-[10px] font-bold px-4 py-2 rounded-lg transition`}>
                                                    {cls.isFree ? 'Mulai Belajar' : 'Beli Kelas'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}
