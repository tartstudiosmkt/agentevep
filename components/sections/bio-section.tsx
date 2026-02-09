import Image from "next/image"

export function BioSection() {
  return (
    <section className="bg-brand-brown py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-brand-terracotta/30 bg-brand-cream/10 flex items-center justify-center">
                {/* Placeholder visual (trocar pela Image real quando você tiver a foto) */}
                <span className="font-sans text-brand-cream/70 text-sm">
                  Foto da Thayná
                </span>

                {/*
                Quando você tiver a imagem em /public/images/thayna-bio.jpg,
                substitua o placeholder por isso:

                <Image
                  src="/images/thayna-bio.jpg"
                  alt="Thayná Santos - Publicitária e Estrategista de Marketing"
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-cream mb-6">
                Quem é Thayná Santos?
              </h2>

              <p className="font-sans text-lg text-brand-cream/80 leading-relaxed mb-6">
                Publicitária e Estrategista de Marketing. Recentemente, concluiu seu MBA em
                Marketing com Inteligência Artificial pela V4 Company, aprendendo diretamente
                com os maiores players do Brasil.
              </p>

              <p className="font-sans text-lg text-brand-cream/80 leading-relaxed mb-8">
                Especialista em posicionamento digital para a área da saúde, já ajudou inúmeros
                profissionais a transformarem seguidores em pacientes com a metodologia VEP.
                Sua missão é devolver a autonomia para quem realmente entende de saúde: você.
              </p>

              {/* Signature */}
              <div className="flex justify-center lg:justify-start">
                <div className="font-serif text-2xl text-brand-terracotta italic">
                  Thayná Santos
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
