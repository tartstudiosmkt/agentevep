import { Banknote, Clock } from "lucide-react"

export function TruthSection() {
  return (
    <section className="bg-brand-brown py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-cream mb-8 leading-tight">
            A verdade que ninguém te conta:
            <br />
            você não precisa de um social media de R$ 600/mês.
          </h2>

          {/* Supporting text */}
          <p className="font-sans text-lg md:text-xl text-brand-cream/80 mb-10 leading-relaxed">
            Eu falo isso como dona de uma agência nichada em saúde.
            Terceirizar sua voz pode parecer prático, mas geralmente leva a frustração,
            gasto desnecessário e zero conexão real.
          </p>

          {/* Quote */}
          <div className="bg-brand-cream/10 border-l-4 border-brand-terracotta px-6 py-4 rounded-lg mb-12">
            <p className="font-serif text-xl md:text-2xl text-brand-cream italic">
              “Ninguém comunica sua autoridade melhor do que você mesma.”
            </p>
          </div>

          {/* Pain Cards */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            
            {/* Card 1 */}
            <div className="bg-brand-terracotta/20 border border-brand-terracotta/40 rounded-xl p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-terracotta/30 flex items-center justify-center">
                  <Banknote className="w-6 h-6 text-brand-cream" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-brand-cream mb-2">
                    Dinheiro no lixo
                  </h3>
                  <p className="font-sans text-brand-cream/80">
                    Posts genéricos que não geram autoridade e não trazem pacientes reais.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-brand-terracotta/20 border border-brand-terracotta/40 rounded-xl p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-terracotta/30 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-cream" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-brand-cream mb-2">
                    Trabalho dobrado
                  </h3>
                  <p className="font-sans text-brand-cream/80">
                    Você vira revisora de conteúdo de quem não entende de saúde.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
