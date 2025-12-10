import { ShieldCheck } from 'lucide-react'

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 bg-primary text-white overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0 bg-blue-900/90">
                {/* Ideally replace with real image via 'backgroundImage' style */}
                <img
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Oficina de caminhões"
                    className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                        Aferição de Tacógrafo Válida: Garanta a Conformidade e a Segurança.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
                        Posto de Ensaio Autorizado pelo INMETRO. Evite multas e retenção do veículo com nossa experiente equipe.
                    </p>
                    <a
                        href="https://wa.me/555432327422"
                        target="_blank"
                        className="inline-block bg-accent hover:bg-accent-hover text-white text-lg font-semibold px-8 py-4 rounded-lg transition-transform hover:-translate-y-1 shadow-lg"
                    >
                        Agende sua Verificação Agora
                        <span className="block text-sm font-normal mt-1 opacity-90">(WhatsApp: 54 3232-7422)</span>
                    </a>
                </div>

                <div className="flex-1 flex justify-center">
                    <div className="w-80 h-80 border-4 border-dashed border-white/30 rounded-full flex flex-col items-center justify-center text-center p-6 bg-white/10 backdrop-blur-sm">
                        <ShieldCheck size={80} className="mb-4 text-accent" />
                        <span className="text-2xl font-bold">Posto Autorizado INMETRO</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
