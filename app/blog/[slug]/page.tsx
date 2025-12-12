import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export async function generateStaticParams() {
    const posts = getPostSlugs();
    return posts.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ''),
    }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const { meta, content } = getPostBySlug(params.slug);

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />

            <article className="flex-grow pt-32 pb-20">
                {/* Header */}
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-amber-600 transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver al Blog
                    </Link>

                    <div className="mb-8">
                        <span className="text-amber-600 font-medium tracking-wide uppercase text-sm mb-4 block">
                            {meta.date ? format(new Date(meta.date), 'dd MMMM, yyyy', { locale: es }) : ''}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            {meta.title}
                        </h1>
                    </div>
                </div>

                {/* Cover Image */}
                {meta.coverImage && (
                    <div className="w-full h-[400px] md:h-[600px] relative mb-12 bg-slate-200">
                        <Image
                            src={meta.coverImage}
                            alt={meta.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Content */}
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-amber-600 hover:prose-a:text-amber-700 prose-img:rounded-xl prose-strong:text-slate-900">
                        <MDXRemote source={content} components={{ Image }} />
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
