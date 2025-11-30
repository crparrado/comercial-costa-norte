import { clients, testimonials } from "@/lib/clients";
import { Quote } from "lucide-react";

export function ClientsSection() {
    return (
        <section id="clientes" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Confían en Nosotros</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Trabajamos con empresas líderes en diversos sectores industriales.
                    </p>
                </div>

                {/* Clients Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
                    {clients.map((client, index) => (
                        <div key={index} className="bg-slate-50 p-4 rounded-lg text-center flex flex-col items-center justify-center h-32 border border-slate-100">
                            <span className="font-bold text-slate-700">{client.name}</span>
                            <span className="text-xs text-slate-500 mt-1">{client.type}</span>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-slate-50 p-8 rounded-xl relative">
                            <Quote className="text-amber-500 mb-4 h-8 w-8 opacity-50" />
                            <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                            <div>
                                <p className="font-bold text-slate-900">{testimonial.name}</p>
                                <p className="text-sm text-slate-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
