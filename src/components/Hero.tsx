

import campagnaroBg from '../assets/campagnaro.png';
import tacografoVideo from '../assets/tacografo.MOV';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 bg-primary text-white overflow-hidden md:h-screen md:min-h-[600px] md:max-h-[900px] flex items-center">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-gray-800 to-white opacity-90">
                {/* Ideally replace with real image via 'backgroundImage' style */}
                <img
                    src={campagnaroBg}
                    alt="Oficina de caminhões"
                    className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 w-full">
                <div className="flex-1 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                        Aferição de Tacógrafo: Garanta a segurança sem se preocupar com multas!
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

                <div className="flex-1 flex justify-center pt-8 md:pt-0">
                    <div className="w-80 h-80 md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-white flex items-center justify-center transform md:translate-y-8">
                        <video
                            src={tacografoVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
