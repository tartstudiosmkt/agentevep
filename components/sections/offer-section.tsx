"use client"

export function OfferSection() {
  const bonuses = [
    {
      emoji: "🎥",
      title: "Aula Destrava Gravação",
      description: "Como gravar com naturalidade sem parecer um robô.",
    },
    {
      emoji: "✂️",
      title: "Edição Descomplicada",
      description: "O passo a passo objetivo para editar no celular em minutos.",
    },
  ]

  const benefits = ["Acesso imediato", "Roteiros ilimitados", "Suporte por WhatsApp"]

  return (
    <section id="oferta" className="bg-brand-beige py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-brown text-center mb-12 text-balance">
            Sua autonomia pelo valor de um jantar fora.
          </h2>

          {/* Price Box */}
          <div className="bg-brand-cream rounded-2xl p-8 lg:p-12 text-center mb-12 border-2 border-brand-terracotta/30 shadow-lg">
            
            {/* Anchor Price */}
            <p className="font-sans text-lg text-brand-brown/60 mb-2">
              De <span className="line-through text-brand-terracotta">R$ 500,00</span>
            </p>

            {/* Final Price */}
            <div className="mb-4">
              <p className="font-sans text-xl text-brand-brown/80 mb-1">
                Por apenas 12x
              </p>
              <p className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-brown font-bold">
                R$ 25,40
              </p>
            </div>

            {/* Subtitle */}
            <p className="font-sans text-lg text-brand-terracotta font-medium mb-6">
              Ou R$247 a vista. Acesso vitalício.
            </p>

            {/* Benefits List */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <span className="text-brand-terracotta">✓</span>
                  <span className="font-sans text-brand-brown/80">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reason Why */}
          <div className="bg-brand-cream rounded-xl p-6 mb-12 border border-brand-terracotta/30">
            <h4 className="font-serif text-lg text-brand-brown mb-2">
              O “porquê” do preço
            </h4>
            <p className="font-sans text-brand-brown/80 leading-relaxed">
              Por que tão acessível? Quero democratizar o marketing para profissionais da saúde
              e criar o maior número de cases de sucesso para minha metodologia.
            </p>
          </div>

          {/* Bonuses Section */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl md:text-3xl text-brand-brown text-center mb-8">
              E você ainda leva 2 bônus para garantir a execução:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {bonuses.map(({ emoji, title, description }) => (
                <div
                  key={title}
                  className="bg-brand-cream rounded-xl p-6 border border-brand-terracotta/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-terracotta/20 flex items-center justify-center flex-shrink-0 text-xl">
                      {emoji}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-brand-brown mb-1">
                        {title}
                      </h4>
                      <p className="font-sans text-brand-brown/80">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <button
              type="button"
              className="bg-brand-brown text-brand-cream hover:bg-brand-brown/90 font-sans text-lg md:text-xl px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            onClick={() => {
  window.open("https://payfast.greenn.com.br/4q2zdu9", "_blank", "noopener,noreferrer")
}}

            >
              QUERO MEU AGENTE VEP AGORA
            </button>

            <p className="mt-4 text-sm font-sans text-brand-brown/60">
              (Depois a gente conecta esse botão ao link do checkout.)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
