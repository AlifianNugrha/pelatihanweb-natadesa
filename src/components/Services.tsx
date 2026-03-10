import { CheckCircle2, Bookmark, BarChart, FileText } from "lucide-react";

export default function Services() {
    return (
        <section id="layanan" className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-2xl mx-auto mb-10">
                    <div className="text-orange-600 font-bold text-xs tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
                        <span className="w-6 h-0.5 bg-orange-600"></span> Program Pelatihan <span className="w-6 h-0.5 bg-orange-600"></span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-green-950 mb-4">
                        Layanan <span className="text-green-600">Unggulan</span> <br className="hidden md:block" />Natadesa Nusantara
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    {/* Card 1 - Featured (Webekspor style highlighting) */}
                    <div className="bg-green-950 text-white rounded-2xl p-6 relative overflow-hidden flex flex-col group transition hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-green-800 rounded-bl-full opacity-50 z-0"></div>
                        <div className="relative z-10 flex-col flex h-full">
                            <span className="bg-orange-500 text-white font-bold text-[9px] tracking-wider uppercase px-2 py-1 rounded-full w-max mb-4">
                                Prioritas Nasional
                            </span>
                            <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center mb-4 text-orange-400">
                                <Bookmark size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">KDMP</h3>
                            <p className="text-green-100 text-xs leading-relaxed mb-6 flex-grow">
                                Program pelatihan pembentukan dan pengelolaan Koperasi Desa Merah Putih sesuai regulasi.
                            </p>

                            <ul className="space-y-2 mb-6">
                                {['Struktur koperasi', 'Manajemen keuangan', 'Strategi usaha', 'Kepatuhan regulasi'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-green-100">
                                        <CheckCircle2 size={14} className="text-orange-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-2 bg-white text-green-950 text-sm font-bold rounded-md hover:bg-slate-100 transition mt-auto">
                                Pilih Program
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border rounded-2xl p-6 flex flex-col group transition hover:-translate-y-1 border-slate-200">
                        <span className="bg-green-100 text-green-700 font-bold text-[9px] tracking-wider uppercase px-2 py-1 rounded-full w-max mb-4">
                            Program Andalan
                        </span>
                        <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center mb-4 text-green-600 group-hover:bg-green-50 group-hover:border-green-100 transition">
                            <BarChart size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-green-950 mb-3">BUMDes</h3>
                        <p className="text-slate-600 text-xs leading-relaxed mb-6 flex-grow">
                            Pelatihan komprehensif pendirian, pengelolaan, dan pengembangan BUMDes secara maksimal.
                        </p>

                        <ul className="space-y-2 mb-6">
                            {['Pendirian & legalitas', 'Tata kelola admin', 'Diversifikasi usaha', 'Penguatan SDM'].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                    <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-2 bg-slate-50 border border-slate-200 text-green-950 text-sm font-bold rounded-md hover:border-slate-300 hover:bg-slate-100 transition mt-auto">
                            Lihat Detail
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border rounded-2xl p-6 flex flex-col group transition hover:-translate-y-1 border-slate-200">
                        <span className="bg-slate-100 text-slate-700 font-bold text-[9px] tracking-wider uppercase px-2 py-1 rounded-full w-max mb-4">
                            Layanan Opsional
                        </span>
                        <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center mb-4 text-slate-600 group-hover:bg-slate-100 transition">
                            <FileText size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-green-950 mb-3">Konsultasi</h3>
                        <p className="text-slate-600 text-xs leading-relaxed mb-6 flex-grow">
                            Konsultasi intensif dan pendampingan langsung di lapangan untuk memastikan implementasi maksimal.
                        </p>

                        <ul className="space-y-2 mb-6">
                            {['Asesmen wilayah', 'Rencana strategis', 'Monitoring evaluasi', 'Fasilitasi perizinan'].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                    <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-2 bg-slate-50 border border-slate-200 text-green-950 text-sm font-bold rounded-md hover:border-slate-300 hover:bg-slate-100 transition mt-auto">
                            Pelajari Lanjut
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
