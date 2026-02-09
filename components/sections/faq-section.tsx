export function FAQSection() {
  const faqs = [
    {
      question: "Tenho vergonha de aparecer.",
      answer:
        "Eu entendo. Mas enquanto você se esconde, profissionais ruins e antiéticos estão ocupando seu espaço e atraindo seus pacientes. É sua vez de assumir sua autoridade.",
    },
    {
      question: "Não tenho tempo.",
      answer:
        "O Agente VEP cria o roteiro em 30 segundos. A gravação leva 10 minutos. É menos tempo que você gasta rolando o feed.",
    },
    {
      question: "Não sei gravar ou não tenho equipamento.",
      answer:
        "Você só precisa do seu celular atual e uma janela. Nas aulas bônus eu ensino exatamente como fazer isso parecer profissional.",
    },
    {
      question: "E se não funcionar para mim?",
      answer:
        "Você tem 7 dias de Garantia Incondicional. Se não gostar, devolvemos 100% do seu dinheiro. Risco zero.",
    },
  ]

  return (
    <section className="bg-brand-beige py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-brown text-center mb-12 text-balance">
            Ainda com dúvida se é para você?
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-brand-cream rounded-xl border border-brand-terracotta/30 px-6 transition-shadow open:shadow-md"
              >
                <summary className="cursor-pointer list-none py-5 flex items-center justify-between gap-4">
                  <span className="font-serif text-lg text-brand-brown">
                    {faq.question}
                  </span>

                  <span className="text-brand-terracotta transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>

                <div className="pb-5 font-sans text-brand-brown/80 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
