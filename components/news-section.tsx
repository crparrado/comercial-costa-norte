import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Image from "next/image";

export function NewsSection() {
    const posts = getAllPosts().slice(0, 3); // Get latest 3 posts

    return (
        <section id="noticias" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-amber-600 font-bold tracking-wider uppercase text-sm mb-2 block">Blog & Novedades</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Últimas Noticias</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Mantente informado sobre las últimas tendencias en seguridad industrial, nuestras expediciones y nuevos lanzamientos.
                    </p>
                </div>

                {posts.length > 0 ? (
                    <div className="grid md:grid-cols-3 gap-8 mb-10">
                        {posts.map((post) => (
                            <div key={post.slug} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-slate-100 group flex flex-col h-full">
                                <div className="relative h-48 overflow-hidden bg-slate-200">
                                    {post.meta.coverImage ? (
                                        <Image
                                            src={post.meta.coverImage}
                                            alt={post.meta.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                                            Sin imagen
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <span className="text-xs text-amber-600 font-semibold mb-2 block uppercase tracking-wide">
                                        {post.meta.date ? format(new Date(post.meta.date), 'dd MMM yyyy', { locale: es }) : ''}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                                        {post.meta.title}
                                    </h3>
                                    <p className="text-slate-600 mb-4 text-sm line-clamp-3 flex-grow">
                                        {post.meta.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-slate-900 font-bold hover:text-amber-600 transition-colors mt-auto text-sm">
                                        Leer artículo <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-slate-500 py-10">
                        <p>No hay noticias disponibles por el momento.</p>
                    </div>
                )}

                <div className="text-center">
                    <Link href="/blog" className="inline-block border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300">
                        Ver todo el blog
                    </Link>
                </div>
            </div>
        </section>
    );
}
