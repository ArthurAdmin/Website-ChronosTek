export default function SocialProof() {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'CEO, TechStart Brasil',
      text: 'A Chronos Tek transformou nossa operação. Reduzimos cancelamentos significativamente e aumentamos nossa receita recorrente em apenas 6 meses.',
    },
    {
      name: 'Mariana Oliveira',
      role: 'Diretora Comercial, Innova Corp',
      text: 'Finalmente entendemos onde nosso dinheiro estava sendo perdido. O dashboard financeiro é imprescindible para qualquer empresa.',
    },
    {
      name: 'Roberto Santos',
      role: 'Fundador, Growth SaaS',
      text: 'Os alertas de cancelamento nos ajudaram a reter clientes que iriam partir. Impacto real no nosso negócio.',
    },
  ];

  const companies = [
    'TechStart',
    'Innova Corp',
    'Growth SaaS',
    'DataVantage',
    'Cloudfy',
    'Nexus Digital',
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Empresas que <span className="gradient-text">Confiam</span> na ChronosTek
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyber-textMuted max-w-3xl mx-auto">
            Junte-se a centenas de empresas que já transformaram seus resultados com nossa plataforma.
          </p>
        </div>

        {/* Company logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16 xl:gap-20 mb-10 sm:mb-12 md:mb-16 opacity-70">
          {companies.map((company, index) => (
            <div key={index} className="text-lg sm:text-xl md:text-2xl font-bold text-cyber-textMuted hover:text-cyber-blue transition-colors">
              {company}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-10 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card card-hover p-4 sm:p-6 lg:p-8">
              {/* Quote icon */}
              <div className="text-cyber-blue text-4xl font-bold mb-4">"</div>
              <p className="text-cyber-textMuted mb-6 italic">
                {testimonial.text}
              </p>
              <div className="border-t border-cyber-border pt-4">
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-cyber-textMuted text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <p className="text-cyber-textMuted mb-4 sm:mb-6">
            Pronto para transformar os resultados da sua empresa?
          </p>
          <button className="btn-primary btn-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
}
