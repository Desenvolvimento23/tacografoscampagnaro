import { Scale, Bus, AlertTriangle } from 'lucide-react'

export const WhyAferir = () => {
    return (
        <section id="obrigatoriedade" className="py-12 md:py-14 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center text-secondary mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-0.5 after:bg-primary">
                    Por que a Aferição é Obrigatória?
                </h2>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-5 rounded-lg border border-black/10 text-center">
                        <Scale className="mx-auto h-9 w-9 text-primary mb-4" />
                        <h3 className="text-base font-bold mb-2 text-secondary">Legalidade</h3>
                        <p className="text-sm text-secondary/70">
                            Aferição obrigatória por lei (Resoluções CONTRAN e Portarias INMETRO), normalmente a cada <strong>2 anos</strong> ou após reparos.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-black/10 text-center">
                        <Bus className="mx-auto h-9 w-9 text-primary mb-4" />
                        <h3 className="text-base font-bold mb-2 text-secondary">Veículos Obrigatórios</h3>
                        <p className="text-sm text-secondary/70">
                            Passageiros (+10 lugares), escolar, carga (PBT &gt; 4.536 kg) e veículos com CMT &gt;= 19t.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-black/10 text-center">
                        <AlertTriangle className="mx-auto h-9 w-9 text-primary mb-4" />
                        <h3 className="text-base font-bold mb-2 text-secondary">Riscos</h3>
                        <p className="text-sm text-secondary/70">
                            Evite multas graves (Art. 230 CTB), pontos na CNH, retenção do veículo e sanções do INMETRO.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
