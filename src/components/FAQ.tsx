import { ChevronDown } from 'lucide-react'

const questions = [
    {
        question: 'Por que a aferição do tacógrafo é obrigatória?',
        answer: 'A aferição é obrigatória por lei, conforme Resoluções do CONTRAN e Portarias do INMETRO. Normalmente deve ser realizada a cada dois anos ou após reparos no equipamento.',
    },
    {
        question: 'Como iniciar o processo de aferição?',
        answer: 'Consulte a placa no site do INMETRO, preencha os dados, gere a GRU e realize o pagamento. A compensação pode levar até 24 horas.',
    },
    {
        question: 'Como faço o agendamento?',
        answer: 'Depois da compensação da GRU, entre em contato com a Campagnaro Truck Center pelo WhatsApp (54) 3232-7422 para escolher o horário.',
    },
    {
        question: 'Por quanto tempo o resultado é válido?',
        answer: 'Após a aprovação, o resultado da verificação do tacógrafo é válido por dois anos. Uma nova aferição também pode ser necessária depois de reparos no equipamento.',
    },
    {
        question: 'Onde consulto o resultado da aferição?',
        answer: 'O resultado fica disponível para consulta no site Cronotacógrafo após a conclusão do processo.',
    },
    {
        question: 'Quais veículos precisam de tacógrafo aferido?',
        answer: 'Entre os veículos obrigatórios estão os de transporte coletivo com mais de dez lugares, escolares, veículos de carga com PBT acima de 4.536 kg e veículos com CMT igual ou superior a 19 toneladas.',
    },
    {
        question: 'Quais são os riscos de circular sem a aferição válida?',
        answer: 'O veículo pode receber multa grave conforme o Art. 230 do CTB, gerar pontos na CNH, ser retido e ainda sofrer sanções do INMETRO.',
    },
]

export const FAQ = () => {
    return (
        <section id="faq" className="py-12 md:py-14 bg-[#f5f5f5] border-t border-black/10">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center text-secondary mb-7 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-0.5 after:bg-primary">
                    Perguntas Frequentes
                </h2>

                <div className="bg-white border border-black/10 rounded-lg px-5 md:px-7 shadow-sm">
                    {questions.map((item) => (
                        <details key={item.question} className="group border-b border-black/10 last:border-b-0">
                            <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none text-sm font-semibold text-secondary hover:text-primary transition-colors">
                                <span>{item.question}</span>
                                <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="pb-4 pr-8 text-sm text-secondary/70 leading-relaxed">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}