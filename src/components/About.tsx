import { Target, Leaf, Users } from "lucide-react";

export default function About() {
    const values = [
        {
            icon: <Target className="text-orange-500" size={24} />,
            title: "Fokus & Terukur",
            desc: "Program pelatihan dirancang dengan metodologi yang terstruktur dan berorientasi pada hasil nyata di lapangan."
        },
        {
            icon: <Leaf className="text-green-500" size={24} />,
            title: "Berkelanjutan",
            desc: "Kami memastikan setiap desa binaan mampu mandiri dan terus berkembang setelah program pelatihan selesai dijalankan."
        },
        {
            icon: <Users className="text-green-500" size={24} />,
            title: "Kolaboratif",
            desc: "Bermitra dengan lembaga terpercaya seperti Solo Technopark untuk menghadirkan ekosistem pelatihan terbaik dan unggul."
        }
    ];

    return (
        <section id="about" className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Text Content */}
                    <div>
                        <div className="text-orange-600 font-bold text-xs tracking-widest uppercase mb-2 flex items-center gap-2">
                            <span className="w-6 h-0.5 bg-orange-600"></span> Tentang Kami
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-green-950 mb-4 leading-tight">
                            Konsultan Desa yang <br />
                            <span className="text-green-600">Berpengalaman & Teruji</span>
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                            Natadesa Nusantara adalah perusahaan konsultan desa yang didedikasikan
                            untuk mendampingi desa-desa di seluruh Nusantara dalam mengembangkan
                            potensi ekonomi lokal. Kami percaya bahwa desa yang kuat adalah fondasi
                            bangsa yang kokoh.
                        </p>

                        <div className="space-y-4">
                            {values.map((v, i) => (
                                <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-100 transition hover:-translate-y-0.5 hover:shadow-sm">
                                    <div className="p-2.5 bg-slate-50 rounded-lg shrink-0">
                                        {v.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-green-950 text-sm mb-1">{v.title}</h4>
                                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="relative mx-auto w-full max-w-sm md:max-w-md mt-6 md:mt-0">
                        <div className="w-full h-[380px] md:h-[420px] bg-green-950 rounded-3xl relative overflow-hidden flex items-center justify-center">
                            {/* Decorative patterned background */}
                            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] bg-[length:20px_20px]"></div>

                            <div className="relative z-10 text-center px-8">
                                <div className="text-white opacity-80 mb-4 mx-auto w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-2xl">🌾</div>
                                <h3 className="text-white font-bold text-xl md:text-2xl tracking-wide">Solusi Nyata <br />Pemberdayaan Desa</h3>
                            </div>
                        </div>

                        {/* Quote element extending outward */}
                        <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-5 md:p-6 rounded-2xl shadow-lg border border-slate-100 max-w-[260px] md:max-w-xs transition hover:-translate-y-1">
                            <p className="text-green-950 font-medium italic text-xs md:text-sm leading-relaxed mb-3">
                                &ldquo;Desa yang mandiri secara ekonomi adalah kunci ketahanan dan kemajuan bangsa Indonesia.&rdquo;
                            </p>
                            <cite className="block text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest not-italic">
                                &mdash; Visi Natadesa
                            </cite>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
