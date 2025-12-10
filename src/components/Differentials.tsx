import { Award, Users, Timer, MessageCircle } from 'lucide-react'

export const Differentials = () => {
    return (
        <section id="diferenciais" className="py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-white after:rounded">
                    A Campagnaro é a sua Escolha Certa
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <Award className="h-12 w-12 text-accent" />
                        <h4 className="font-bold text-lg">Autorização INMETRO</h4>
                        <p className="text-sm opacity-80">Posto Credenciado e Fiscalizado.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Users className="h-12 w-12 text-accent" />
                        <h4 className="font-bold text-lg">Expertise</h4>
                        <p className="text-sm opacity-80">Técnicos especializados.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Timer className="h-12 w-12 text-accent" />
                        <h4 className="font-bold text-lg">Agilidade</h4>
                        <p className="text-sm opacity-80">Menor tempo parado.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <MessageCircle className="h-12 w-12 text-accent" />
                        <h4 className="font-bold text-lg">Contato Fácil</h4>
                        <p className="text-sm opacity-80">Agendamento via WhatsApp.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
