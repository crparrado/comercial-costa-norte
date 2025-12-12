import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />

            <section className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto mb-12 text-center">
                        <span className="text-amber-600 font-bold tracking-wider uppercase text-sm mb-2 block">Blog & Noticias</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Nuestras Historias</h1>
                        <p className="text-slate-600 text-lg">
                            Descubre nuestros últimos proyectos, expediciones y novedades en el mundo textil y seguridad industrial.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
                                <div className="relative h-64 overflow-hidden bg-slate-200">
                                    {post.meta.coverImage ? (
                                        <Image
                                            src={post.meta.coverImage}
                                            alt={post.meta.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                                            Sin imagen
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="text-xs text-amber-600 font-medium mb-3 uppercase tracking-wide">
                                        {post.meta.date ? format(new Date(post.meta.date), 'dd MMMM, yyyy', { locale: es }) : ''}
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                                        {post.meta.title}
                                    </h2>
                                    <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
                                        {post.meta.excerpt}
                                    </p>
                                    <span className="text-amber-600 text-sm font-semibold flex items-center mt-auto">
                                        Leer más
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
