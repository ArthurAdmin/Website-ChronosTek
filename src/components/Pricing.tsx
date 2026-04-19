'use client';
import { useState } from "react";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  frontFeatures: string[];
  backFeatures: string[];
  demoLink: string;
  isSpecial: boolean;
}

const services: Service[] = [
  {
    id: 0,
    title: "Marketing & Performance",
    subtitle: "Aquisição de clientes",
    frontFeatures: ["Estratégias de tráfego pago (Ads) e SEO", "Leads qualificados para o funil"],
    backFeatures: ["Gestão estratégica de tráfego pago (Google/Meta)", "Foco total em ROI e redução de custo por lead", "Estratégias de SEO", "Análise de métricas para escala"],
    demoLink: "#demo-marketing",
    isSpecial: false,
  },
  {
    id: 1,
    title: "Websites Profissionais & Landing Pages",
    subtitle: "Presença Digital e Conversão",
    frontFeatures: ["Sites otimizados mobile", "Integrados ao fluxo de vendas"],
    backFeatures: ["Landing Pages de alta conversão", "Design ultra veloz otimizado para mobile", "Copywriting focado em vendas", "Integração direta com o CRM"],
    demoLink: "#demo-websites",
    isSpecial: false,
  },
  {
    id: 2,
    title: "CRM ChronosTek",
    subtitle: "O centro da sua operação",
    frontFeatures: ["Motor central: Leads, funil e vendas", "Relatórios em tempo real"],
    backFeatures: ["Dashboards de performance em tempo real", "Gestão centralizada de leads e funis", "Histórico inteligente de interações", "Interface focada em produtividade"],
    demoLink: "#demo-crm",
    isSpecial: false,
  },
  {
    id: 3,
    title: "Aplicativos Customizados",
    subtitle: "Experiência e Escalabilidade",
    frontFeatures: ["Apps Web e Mobile sob medida", "Digitalize seus processos"],
    backFeatures: ["Desenvolvimento de Apps (Web/Mobile) sob medida", "Sistemas SaaS multi-tenant", "Foco em UX/UI de alta retenção", "Arquitetura escalável"],
    demoLink: "#demo-apps",
    isSpecial: false,
  },
  {
    id: 4,
    title: "Automação de Processos",
    subtitle: "Eficiência e Ganho de Tempo",
    frontFeatures: ["WhatsApp, propostas e follow-up auto", "Régua de pós-venda"],
    backFeatures: ["Atendimento 24h via WhatsApp", "Envio automático de propostas/PDFs", "Régua de cobrança e pós-venda", "Integrações via API (Zapier/Make)"],
    demoLink: "#demo-automacao",
    isSpecial: false,
  },
];

export default function Pricing() {
  const [flippedStates, setFlippedStates] = useState<boolean[]>([false, false, false, false, false]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFlip = (index: number) => {
    setFlippedStates((prev) => prev.map((flipped, i) => (i === index ? !flipped : flipped)));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const CheckIcon = () => (
    <svg
      className="w-5 h-5 text-cyber-blue mr-3 flex-shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section id="pricing" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-cyber-darkSecondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-cyber-textMuted max-w-3xl mx-auto">
            Soluções completas para transformar seu negócio digitalmente.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const isFlipped = flippedStates[index];
            const isSpecial = service.isSpecial;
            const isCrm = service.id === 2;
            const baseCardClasses = "cyber-card card-hover flex flex-col h-full p-6 sm:p-8";
            const crmSpecialClasses = isCrm ? 'relative bg-cyber-darkSecondary/95 border border-cyber-blue/30 shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:border-cyber-blue/50' : '';
            const frontCardClasses = `cyber-card card-hover flex flex-col h-full p-6 sm:p-8 relative ${isCrm ? "bg-cyber-darkSecondary/95 border border-cyber-blue/30 shadow-glow-blue hover:shadow-glow-blue-lg hover:border-cyber-blue/50 hover:-translate-y-3" : ""}`;
            const backCardClasses = `${baseCardClasses} ${crmSpecialClasses} flex flex-col h-full`;
            const titleClasses = "text-xl sm:text-2xl font-bold text-white mb-3";
            const subtitleClasses = "text-lg font-bold gradient-text mb-4";
            const ulClasses = "space-y-2 mb-6 text-sm sm:text-base";

            return (
              <div key={service.id} className="h-[480px] sm:h-[520px] lg:h-[560px] flip-container [perspective:1000px]">
                <div
                  className={`flip-inner w-full h-full transition-transform duration-[0.6s] [transform-style:preserve-3d] ${
                    isFlipped ? "flipped" : ""
                  }`}
                >
                  {/* Front */}
                  <div className="flip-front absolute w-full h-full [backface-visibility:hidden]">
                    <div className={frontCardClasses}>
                      {isSpecial && (
                        <div className="text-center mb-4">
                          <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                            ★ O Coração da Operação
                          </span>
                        </div>
                      )}
                      <h3 className={titleClasses}>{service.title}</h3>
                      <div className="mb-4">
                        <span className={subtitleClasses}>{service.subtitle}</span>
                      </div>
                      <ul className={ulClasses}>
                        {service.frontFeatures.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start text-cyber-text">
                            <CheckIcon />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex-1 flex flex-col justify-end pt-4 px-2">
                        <div className="space-y-2">
                          <button
                            onClick={() => toggleFlip(index)}
                            className="w-full py-2.5 rounded-lg font-semibold transition-all show-more-btn text-sm"
                          >
                            + Mostrar mais
                          </button>
                          <a
                            href={service.demoLink}
                            className="block w-full py-2.5 rounded-lg font-semibold transition-all text-center bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 border border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/30 hover:text-white demo-btn text-sm"
                          >
                            ▶ Ver Demonstração
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-back absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className={`${backCardClasses} flex flex-col h-full relative`}>
                      {isSpecial && (
                        <div className="text-center mb-4">
                          <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                            ★ O Coração da Operação
                          </span>
                        </div>
                      )}
                      <h3 className={titleClasses}>{service.title}</h3>
                      {service.id === 1 && (
                        <div className="h-64 overflow-y-auto mt-4 pr-2 scrollbar-thin scrollbar-thumb-cyber-blue/50 scrollbar-track-cyber-dark/50">
                          <ul className="space-y-2 text-cyber-text text-sm sm:text-base pb-2">
                            {service.backFeatures.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-start">
                                <CheckIcon />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {service.id !== 1 && (
                        <ul className="space-y-2 text-cyber-text text-sm sm:text-base mt-4 pb-2 flex-grow pr-2">
                          {service.backFeatures.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start">
                              <CheckIcon />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="absolute bottom-6 left-0 right-0 px-2">
                        <div className="space-y-2">
                          <button
                            onClick={() => toggleFlip(index)}
                            className="w-full py-2.5 rounded-lg font-semibold transition-all bg-white/10 backdrop-blur-sm text-white back-btn text-sm border border-white/20 hover:bg-white/20"
                          >
                            ← Voltar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden px-2">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={service.id} className="w-full flex-shrink-0 px-1 h-[480px]">
                  <div className="h-full flip-container [perspective:1000px]">
                    <div className={`flip-inner w-full h-full transition-transform duration-[0.6s] [transform-style:preserve-3d] ${flippedStates[index] ? "flipped" : ""}`}>
                      {/* Front Mobile */}
                      <div className="flip-front absolute w-full h-full [backface-visibility:hidden]">
                        <div className={`cyber-card card-hover flex flex-col h-full p-4 sm:p-6 relative ${service.id === 2 ? "bg-cyber-darkSecondary/95 border border-cyber-blue/30 shadow-glow-blue" : ""}`}>
                          {service.id === 2 && (
                            <div className="absolute top-3 right-3 bg-cyber-blue/20 border border-cyber-blue/40 text-cyber-blue text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm z-10">
                              Core
                            </div>
                          )}
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2"> {service.title}</h3>
                          <div className="mb-3">
                            <span className="text-base font-bold gradient-text">{service.subtitle}</span>
                          </div>
                          <ul className="space-y-2 mb-6 text-sm">
                            {service.frontFeatures.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-start text-cyber-text">
                                <CheckIcon />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex-1 flex flex-col justify-end pt-2 px-1">
                            <div className="space-y-2">
                              <button onClick={() => toggleFlip(index)} className="w-full py-2 rounded-lg font-semibold transition-all show-more-btn text-sm">
                                + Mostrar mais
                              </button>
                              <a href={service.demoLink} className="block w-full py-2 rounded-lg font-semibold transition-all text-center bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 border border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/30 hover:text-white demo-btn text-sm">
                                ▶ Ver Demonstração
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Back Mobile */}
                      <div className="flip-back absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <div className={`cyber-card flex flex-col h-full p-4 sm:p-6 relative ${service.id === 2 ? "bg-cyber-darkSecondary/95 border border-cyber-blue/30 shadow-glow-blue" : ""}`}>
                          {service.id === 2 && (
                            <div className="absolute top-3 right-3 bg-cyber-blue/20 border border-cyber-blue/40 text-cyber-blue text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm z-10">
                              Core
                            </div>
                          )}
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{service.title}</h3>
                          <ul className="space-y-2 text-cyber-text text-sm mt-2 flex-1">
                            {service.backFeatures.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-start">
                                <CheckIcon />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex-1 flex flex-col justify-end pt-4 px-2">
                            <div className="space-y-2">
                              <button onClick={() => toggleFlip(index)} className="w-full py-2.5 rounded-lg font-semibold transition-all bg-white/10 backdrop-blur-sm text-white back-btn text-sm border border-white/20 hover:bg-white/20">
                                ← Voltar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyber-dark/80 rounded-full flex items-center justify-center text-white hover:bg-cyber-blue/20 transition-colors touch-manipulation -translate-x-1"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyber-dark/80 rounded-full flex items-center justify-center text-white hover:bg-cyber-blue/20 transition-colors touch-manipulation translate-x-1"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-cyber-blue w-8' : 'bg-cyber-textMuted/30 hover:bg-cyber-textMuted/50'}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
