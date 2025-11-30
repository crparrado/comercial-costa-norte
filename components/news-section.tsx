import { news } from "@/lib/news";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function NewsSection() {
    return (
        <section id="noticias" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Noticias y Novedades</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Mantente informado sobre las últimas tendencias en seguridad industrial y nuestros nuevos lanzamientos.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="p-6">
                                <span className="text-sm text-amber-600 font-semibold mb-2 block">{item.date}</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 mb-4">{item.summary}</p>
                                <Link href="#" className="inline-flex items-center text-slate-900 font-medium hover:text-amber-600 transition-colors">
                                    Leer más <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
