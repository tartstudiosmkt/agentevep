"use client"
import Image from "next/image"

export function SolutionSection() {
  const methodSteps = [
    { emoji: "🧲", title: "Gancho Magnético", step: 1 },
    { emoji: "💔", title: "Conexão com a Dor", step: 2 },
    { emoji: "💡", title: "Ponto de Virada", step: 3 },
    { emoji: "📅", title: "CTA de Agendamento", step: 4 },
  ]

  return (
    <section className="bg-brand-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-brown text-center mb-6 text-balance">
            Na saúde, CONFIANÇA não se terceiriza.
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-lg md:text-xl text-brand-brown/80 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
            Seu conteúdo precisa transmitir sua verdade. Por isso, criei o MÉTODO que devolve sua
            autonomia e gera resultados reais, em pouco tempo:
          </p>

          {/* Testimonial Block */}
          <div className="bg-brand-beige-100 rounded-2xl p-8 lg:p-10 mb-16 border border-brand-terracotta/20">
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
              O Resultado:
            </p>
            <div className="bg-brand-beige rounded-xl overflow-hidden">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/images/solution.jpg"
                    alt="Resultado do Método VEP"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Method VEP */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl text-neutral-900 mb-4">
              Conheça o Sistema V.E.P. (Vídeo Em Paciente)
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Uma estrutura desenhada para converter visualização em desejo de atendimento real.
              Nada de vídeos genéricos de apresentação.
            </p>
          </div>

          {/* Method Steps */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
            {methodSteps.map(({ emoji, title, step }) => (
              <div
                key={step}
                className="bg-brand-beige rounded-xl p-5 lg:p-6 text-center border border-brand-terracotta/20 hover:border-brand-terracotta/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center mx-auto mb-3 text-xl">
                  {emoji}
                </div>
                <span className="text-sm text-neutral-500 font-medium">{step}.</span>
                <p className="text-sm lg:text-base text-neutral-800 mt-1">
                  {title}
                </p>
              </div>
            ))}
          </div>

          {/* Agent Presentation */}
          <div className="bg-brand-beige-900 rounded-2xl p-8 lg:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 text-2xl">
              🤖
            </div>
            <h3 className="text-2xl md:text-3xl text-brand-brown/80 mb-4">
              E para aplicar isso em segundos: O Agente VEP.
            </h3>
            <p className="font-sans text-lg md:text-xl text-brand-brown/80 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              Meu cérebro estratégico treinado em uma IA que te dá infinitas ideias e roteiros
              prontos para o seu nicho.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}