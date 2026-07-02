export const Process = () => {
    const steps = [
        {
            num: "01",
            title: "Consulte a placa e gere a GRU",
            desc: "Verifique a placa no site do INMETRO, preencha os dados e gere a GRU para realizar o pagamento."
        },
        {
            num: "02",
            title: "Aguarde e agende",
            desc: "Após a compensação do pagamento, que pode levar até 24 horas, agende a aferição pelo WhatsApp da Campagnaro Truck Center."
        },
        {
            num: "03",
            title: "Aferição e lacre",
            desc: "No dia agendado, realizamos a verificação, a aferição e o lacre do tacógrafo conforme as normas."
        },
        {
            num: "04",
            title: "Resultado disponível",
            desc: "O resultado fica disponível no site Cronotacógrafo e, após a aprovação, é válido por dois anos."
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
