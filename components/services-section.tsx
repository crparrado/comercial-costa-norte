import { services } from "@/lib/services";

export function ServicesSection() {
    return (
        <section id="servicios" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Ofrecemos soluciones integrales en vestuario corporativo e industrial, desde el diseño hasta la entrega final.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div key={service.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-amber-200 transition-colors group">
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="text-amber-500 w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
