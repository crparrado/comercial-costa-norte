import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { ProductsSection } from "@/components/products-section";
import { SustainabilitySection } from "@/components/sustainability-section";
import { ClientsSection } from "@/components/clients-section";
import { NewsSection } from "@/components/news-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Users, Award, Target } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <Hero />

            {/* Quiénes Somos Section - Inline implementation for simplicity */}
            <section id="quienes-somos" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <span className="text-amber-600 font-bold tracking-wider uppercase text-sm mb-2 block">Nuestra Historia</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tradición familiar al servicio de la industria</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Comercial Costa Norte nace como una respuesta a la necesidad de contar con proveedores confiables en el rubro textil industrial. Somos una empresa familiar que ha crecido gracias al compromiso con la calidad y el servicio personalizado.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Nos especializamos en entender los desafíos de cada faena y puesto de trabajo, entregando soluciones que combinan seguridad, comodidad y durabilidad.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <Target className="text-amber-500 mb-4 h-8 w-8" />
                                <h3 className="font-bold text-slate-900 mb-2">Misión</h3>
                                <p className="text-sm text-slate-600">Proveer soluciones textiles integrales que garanticen la seguridad y comodidad de los trabajadores.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <Award className="text-amber-500 mb-4 h-8 w-8" />
                                <h3 className="font-bold text-slate-900 mb-2">Visión</h3>
                                <p className="text-sm text-slate-600">Ser reconocidos como el socio estratégico líder en vestuario corporativo en la zona norte.</p>
                            </div>
                            <div className="col-span-2 bg-slate-900 text-white p-6 rounded-xl">
                                <Users className="text-amber-500 mb-4 h-8 w-8" />
                                <h3 className="font-bold mb-2">Valores</h3>
                                <p className="text-sm text-slate-300">Compromiso, Calidad, Integridad y Sustentabilidad son los pilares que guían nuestro trabajo diario.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesSection />
            <ProductsSection />
            <SustainabilitySection />
            <ClientsSection />
            <NewsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
