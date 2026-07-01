

import campagnaroBg from '../assets/campagnaro.png';
import tacografoVideo from '../assets/tacografo.mp4';

export const Hero = () => {
    return (
        <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-secondary text-white overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0 bg-secondary">
                {/* Ideally replace with real image via 'backgroundImage' style */}
                <img
                    src={campagnaroBg}
                    alt="Oficina de caminhões"
                    className="w-full h-full object-cover opacity-30 blur-md scale-105"
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-[1.05fr_0.95fr] items-center gap-8 lg:gap-12">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <span className="text-primary text-xs font-bold uppercase mb-3">
                        Posto autorizado pelo INMETRO
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white max-w-2xl">
                        Aferição de Tacógrafo: Garanta a segurança sem se preocupar com multas!
                    </h1>
                    <p className="text-sm md:text-base text-white/80 mb-6 max-w-xl">
                        Posto de Ensaio Autorizado pelo INMETRO. Evite multas e retenção do veículo com nossa experiente equipe.
                    </p>
                    <a
                        href="https://wa.me/555432327422"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors"
                    >
                        Agende sua Verificação Agora
                        <span className="block text-xs font-normal mt-0.5 opacity-90">WhatsApp: 54 3232-7422</span>
                    </a>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-[460px] aspect-[4/3] rounded-lg overflow-hidden border border-white/20 bg-black">
                        <video
                            src={tacografoVideo}
                            poster={campagnaroBg}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            aria-label="Demonstração do serviço de aferição de tacógrafo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
