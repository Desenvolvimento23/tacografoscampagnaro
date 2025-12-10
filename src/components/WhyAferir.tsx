import { Scale, Bus, AlertTriangle } from 'lucide-react'

export const WhyAferir = () => {
    return (
        <section id="obrigatoriedade" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-primary mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-accent after:rounded">
                    Por que a Aferição é Obrigatória?
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                        <Scale className="mx-auto h-12 w-12 text-primary mb-6" />
                        <h3 className="text-xl font-bold mb-4 text-primary">Legalidade</h3>
                        <p className="text-gray-600">
                            Aferição obrigatória por lei (Resoluções CONTRAN e Portarias INMETRO), normalmente a cada <strong>2 anos</strong> ou após reparos.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                        <Bus className="mx-auto h-12 w-12 text-primary mb-6" />
                        <h3 className="text-xl font-bold mb-4 text-primary">Veículos Obrigatórios</h3>
                        <p className="text-gray-600">
                            Passageiros (+10 lugares), escolar, carga (PBT > 4.536 kg) e veículos com CMT >= 19t.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                        <AlertTriangle className="mx-auto h-12 w-12 text-primary mb-6" />
                        <h3 className="text-xl font-bold mb-4 text-primary">Riscos</h3>
                        <p className="text-gray-600">
                            Evite multas graves (Art. 230 CTB), pontos na CNH, retenção do veículo e sanções do INMETRO.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
