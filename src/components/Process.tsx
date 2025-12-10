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
        <section id="como-funciona" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-black mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-accent after:rounded">
                    Como funciona o processo?
                </h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative bg-white border-l-4 border-accent p-6 shadow-sm hover:translate-y-[-4px] transition-transform">
                            <span className="absolute top-0 right-4 text-5xl font-bold text-gray-100 -z-10 select-none">
                                {step.num}
                            </span>
                            <h3 className="text-lg font-bold text-black mb-2 relative z-10">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
