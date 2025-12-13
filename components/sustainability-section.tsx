import { Leaf, Recycle, Heart } from "lucide-react";
import Image from "next/image";

export function SustainabilitySection() {
    return (
        <section id="sustentabilidad" className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestro compromiso con la sustentabilidad</h2>
                        <p className="text-slate-300 mb-8 text-lg">
                            En Comercial Costa Norte, entendemos que la industria textil tiene un impacto en el medio ambiente. Por eso, nos esforzamos por implementar prácticas que reduzcan nuestra huella de carbono y promuevan un futuro más verde.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-500 p-2 rounded-full text-slate-900">
                                    <Recycle size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Reducción de Desperdicios</h3>
                                    <p className="text-slate-400">Optimizamos nuestros cortes y procesos para minimizar el desperdicio de tela.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-500 p-2 rounded-full text-slate-900">
                                    <Leaf size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Materiales Durables</h3>
                                    <p className="text-slate-400">Priorizamos telas de alta resistencia para alargar la vida útil de cada prenda.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-500 p-2 rounded-full text-slate-900">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Responsabilidad Social</h3>
                                    <p className="text-slate-400">Trabajamos con proveedores certificados que respetan las normas laborales y ambientales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-96 bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center">
                        <Image
                            src="/images/sustent.png"
                            alt="Compromiso con la sustentabilidad"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
