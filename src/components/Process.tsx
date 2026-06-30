export const Process = () => {
    const steps = [
        {
            num: "01",
            title: "Agendamento",
            desc: "Fale conosco pelo WhatsApp (54 3232-7422) e prepare a documentação."
        },
        {
            num: "02",
            title: "Ensaio e Teste",
            desc: "Testes rigorosos em pista ou dinamômetro para checar precisão."
        },
        {
            num: "03",
            title: "Selagem",
            desc: "Se aprovado, o equipamento é selado e lacrado conforme normas."
        },
        {
            num: "04",
            title: "Certificado",
            desc: "Emissão do Certificado de Verificação válido por 2 anos."
        }
    ]

    return (
        <section id="como-funciona" className="py-12 md:py-14 bg-white border-t border-black/10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center text-secondary mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-0.5 after:bg-primary">
                    Como funciona o processo?
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative bg-white border border-black/10 border-t-2 border-t-primary rounded-md p-5">
                            <span className="absolute top-2 right-4 text-3xl font-bold text-black/5 select-none">
                                {step.num}
                            </span>
                            <h3 className="text-base font-bold text-secondary mb-2 relative z-10">{step.title}</h3>
                            <p className="text-secondary/70 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
