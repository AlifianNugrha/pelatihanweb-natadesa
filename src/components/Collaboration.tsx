import { Building2, Handshake } from "lucide-react";

export default function Collaboration() {
    const benefits = [
        { num: "01", title: "Fasilitas Kelas Dunia", desc: "Pelatihan dilaksanakan di fasilitas Solo Technopark yang modern, lengkap, dan representatif." },
        { num: "02", title: "Instruktur Bersertifikat", desc: "Tim instruktur gabungan dari Natadesa dan Solo Technopark yang berpengalaman." },
        { num: "03", title: "Jaringan Ekosistem", desc: "Akses jaringan ekosistem bisnis dan inovasi yang lebih kuat melalui kolaborasi ini." }
    ];

    return (
        <section id="kolaborasi" className="py-12 md:py-16 bg-white border-t border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-2xl mx-auto mb-10">
                    <div className="text-orange-600 font-bold text-xs tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
                        Kemitraan Strategis
                    </div>

                    <p className="text-slate-600 mb-6 max-w-lg mx-auto text-sm md:text-base">
                        Kolaborasi ini menjamin kualitas pelatihan terbaik dengan dukungan
                        fasilitas teknologi dan inovasi terkini di ekosistem Solo Technopark.
                    </p>
                </div>

                {/* Integration Graphic */}
                <div className="flex flex-col md:flex-row items-center justify-center mb-12 relative w-full">

                    {/* Logo Natadesa */}
                    <div className="z-10 flex-1 flex items-center justify-center md:justify-end h-24 md:h-32 transition hover:-translate-y-1 px-4 md:px-0 md:pr-20 lg:pr-24">
                        <img
                            src="/logo.png"
                            alt="Logo Natadesa"
                            className="w-48 md:w-60 max-h-full object-contain mix-blend-multiply"
                        />
                    </div>

                    {/* Ikon Kolaborasi */}
                    <div className="flex flex-col items-center justify-center z-10 w-28 shrink-0 my-6 md:my-0">
                        <div className="bg-green-600 text-white rounded-full p-3 shadow-md">
                            <Handshake size={24} />
                        </div>
                        <div className="font-bold text-green-950 text-[10px] mt-2 uppercase tracking-wider text-center w-full">Kolaborasi</div>
                    </div>

                    {/* Logo Solo Technopark */}
                    <div className="z-10 flex-1 flex items-center justify-center md:justify-start h-24 md:h-32 transition hover:-translate-y-1 px-4 md:px-0 md:pl-6 lg:pl-12">
                        <img
                            src="/solotech.jpg"
                            alt="Logo Solo Technopark"
                            className="w-48 md:w-80 max-h-full object-contain mix-blend-multiply md:scale-[1.15]"
                        />
                    </div>

                </div>

                {/* Benefits text */}
                <div className="grid md:grid-cols-3 gap-6">
                    {benefits.map((b, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 group hover:-translate-y-1 transition">
                            <div className="text-3xl font-extrabold text-slate-100 mb-3 group-hover:text-green-50 transition-colors">
                                {b.num}
                            </div>
                            <h4 className="text-lg font-bold text-green-950 mb-2">{b.title}</h4>
                            <p className="text-slate-600 leading-relaxed text-xs md:text-sm">{b.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
