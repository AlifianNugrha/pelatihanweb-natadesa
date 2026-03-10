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

export default function LayananDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Header placeholder - using standard Navbar, though typical dashboards might have a custom header */}
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
                        <Link href="/layanan" className="flex items-center gap-3 px-3 py-2.5 bg-green-50 text-green-700 font-bold text-sm rounded-lg">
                            <Home size={18} />
                            Semua Kelas
                        </Link>
                        <Link href="/layanan" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-green-600 font-semibold text-sm rounded-lg transition-colors">
                            <BookOpen size={18} />
                            Kelas Saya
                        </Link>
                        <Link href="/layanan" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-green-600 font-semibold text-sm rounded-lg transition-colors">
                            <Award size={18} />
                            Sertifikat
                        </Link>
                        <Link href="/layanan" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-green-600 font-semibold text-sm rounded-lg transition-colors">
                            <MonitorPlay size={18} />
                            Jadwal Live
                        </Link>
                    </nav>

                    <div className="mt-8 pt-8 border-t border-slate-100">
                        <button className="flex items-center gap-3 px-3 py-2.5 text-red-500 hover:bg-red-50 font-semibold text-sm rounded-lg w-full transition-colors">
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
                            />
                        </div>
                        <div className="flex space-x-2 w-full sm:w-auto overflow-x-auto pb-1 hide-scrollbar">
                            <button className="px-4 py-2 text-xs font-bold rounded-full bg-green-950 text-white whitespace-nowrap">Semua Topik</button>
                            <button className="px-4 py-2 text-xs font-bold rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 whitespace-nowrap border border-slate-200">Koperasi (KDMP)</button>
                            <button className="px-4 py-2 text-xs font-bold rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 whitespace-nowrap border border-slate-200">BUMDes</button>
                            <button className="px-4 py-2 text-xs font-bold rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 whitespace-nowrap border border-slate-200">Live Class</button>
                            <button className="px-4 py-2 text-xs font-bold rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 whitespace-nowrap border border-slate-200 flex items-center gap-1">
                                <Filter size={12} /> Filter
                            </button>
                        </div>
                    </div>

                    {/* Available Classes Grid */}
                    <div>
                        <div className="flex justify-between items-end mb-4">
                            <h2 className="text-lg font-bold text-green-950 border-l-4 border-orange-500 pl-3">Rekomendasi Kelas</h2>
                            <Link href="#" className="text-sm font-bold text-green-600 hover:text-green-700 flex items-center">
                                Lihat Semua <ChevronRight size={16} />
                            </Link>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {/* Card 1 - Live Class */}
                            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition group flex flex-col">
                                <div className="aspect-video bg-green-950 relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" alt="Class" className="object-cover w-full h-full opacity-70 group-hover:scale-105 transition duration-500" />
                                    <div className="absolute top-2 left-2 bg-red-500 text-white font-bold text-[9px] uppercase px-2 py-0.5 rounded-sm flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div> Live
                                    </div>
                                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white font-bold text-[9px] px-2 py-0.5 rounded">
                                        <Users size={10} className="inline mr-1" />5 Tersisa
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                                        <div className="w-full">
                                            <span className="text-[10px] text-green-300 font-bold tracking-wider mb-1 block">MANAJEMEN KEUANGAN</span>
                                            <h3 className="text-white font-bold text-sm leading-tight group-hover:text-orange-400 transition">Panduan Lengkap Finansial BUMDes</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <p className="text-xs text-slate-500 mb-3 flex-1 line-clamp-2">Pelajari cara menyusun laporan keuangan BUMDes yang akurat bersama pakar akuntansi koperasi.</p>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
                                            <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white"></div>
                                        </div>
                                        <span className="text-[10px] text-slate-500 font-medium">+120 peserta mendaftar</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div>
                                            <p className="text-[10px] text-slate-400 line-through">Rp 1.500.000</p>
                                            <p className="font-extrabold text-orange-600 text-base">Rp 499.000</p>
                                        </div>
                                        <button className="bg-green-600 text-white text-[10px] font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition">
                                            Beli Kelas
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 - Video Class KDMP */}
                            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition group flex flex-col">
                                <div className="aspect-video bg-green-950 relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" alt="Class" className="object-cover w-full h-full opacity-70 group-hover:scale-105 transition duration-500" />
                                    <div className="absolute top-2 left-2 bg-green-500 text-white font-bold text-[9px] uppercase px-2 py-0.5 rounded-sm flex items-center gap-1">
                                        <Bookmark size={10} /> Bersertifikat
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-orange-500 shadow-lg scale-75 group-hover:scale-100 transition transform">
                                            <PlayCircle size={20} className="fill-current text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                                        <div className="w-full">
                                            <span className="text-[10px] text-green-300 font-bold tracking-wider mb-1 block">KOMPREHENSIF KDMP</span>
                                            <h3 className="text-white font-bold text-sm leading-tight group-hover:text-orange-400 transition">Pendirian Koperasi Desa Merah Putih</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <p className="text-xs text-slate-500 mb-3 flex-1 line-clamp-2">Langkah demi langkah membangun koperasi kuat di desa didukung regulasi pemerintah.</p>
                                    <div className="flex items-center gap-4 text-[10px] text-slate-500 font-medium mb-4">
                                        <span className="flex items-center gap-1"><BookOpen size={12} className="text-green-600" /> 24 Modul Vid</span>
                                        <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-600" /> Kuis</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div>
                                            <p className="font-extrabold text-orange-600 text-base">Gratis</p>
                                        </div>
                                        <button className="bg-slate-100 text-green-950 border border-slate-200 text-[10px] font-bold px-4 py-2 rounded-lg hover:bg-slate-200 transition">
                                            Mulai Belajar
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 - Video Class BUMDes */}
                            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition group flex flex-col">
                                <div className="aspect-video bg-green-950 relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop" alt="Class" className="object-cover w-full h-full opacity-70 group-hover:scale-105 transition duration-500" />
                                    <div className="absolute top-2 left-2 bg-orange-500 text-white font-bold text-[9px] uppercase px-2 py-0.5 rounded-sm flex items-center gap-1">
                                        <TrendingUp size={10} /> Populer
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-orange-500 shadow-lg scale-75 group-hover:scale-100 transition transform">
                                            <PlayCircle size={20} className="fill-current text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                                        <div className="w-full">
                                            <span className="text-[10px] text-orange-300 font-bold tracking-wider mb-1 block">MANAJEMEN BUMDES</span>
                                            <h3 className="text-white font-bold text-sm leading-tight group-hover:text-orange-400 transition">Digitalisasi Bisnis & Operasional BUMDes</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <p className="text-xs text-slate-500 mb-3 flex-1 line-clamp-2">Tingkatkan efisiensi dan transparansi unit usaha desa dengan ekosistem digital.</p>
                                    <div className="flex items-center gap-4 text-[10px] text-slate-500 font-medium mb-4">
                                        <span className="flex items-center gap-1"><BookOpen size={12} className="text-green-600" /> 18 Modul Vid</span>
                                        <span className="flex items-center gap-1"><Award size={12} className="text-green-600" /> Sertifikat</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div>
                                            <p className="font-extrabold text-orange-600 text-base">Rp 199.000</p>
                                        </div>
                                        <button className="bg-slate-100 text-green-950 border border-slate-200 text-[10px] font-bold px-4 py-2 rounded-lg hover:bg-slate-200 transition">
                                            Beli Kelas
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}
