'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/90 backdrop-blur-md border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-row items-center justify-start gap-2">
              <img 
                src="/ChronosTekLogo.png" 
                alt="ChronosTek Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-white font-bold text-xl">ChronosTek</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-cyber-text hover:text-cyber-blue transition-colors">
              Funcionalidades
            </Link>
            <Link href="#about" className="text-cyber-text hover:text-cyber-blue transition-colors">
              Sobre Nós
            </Link>
            <Link href="#pricing" className="text-cyber-text hover:text-cyber-blue transition-colors">
              Planos
            </Link>
            <Link href="#contact" className="text-cyber-text hover:text-cyber-blue transition-colors">
              Contato
            </Link>
            <button 
              onClick={() => window.open('https://wa.me/5521969946426?text=Ola,%20gostaria%20de%20comecar', '_blank')}
              className="btn-primary btn-glow inline-block"
            >
              Começar Agora
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cyber-text hover:text-white p-3 min-w-[48px] min-h-[48px] flex items-center justify-center touch-manipulation"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-dark border-b border-cyber-border">
          <div className="px-4 py-3 space-y-1">
            <Link href="#features" onClick={() => setIsMenuOpen(false)} className="block text-cyber-text hover:text-cyber-blue transition-colors py-3 px-4 min-h-[48px] flex items-center touch-manipulation">
              Funcionalidades
            </Link>
            <Link href="#about" onClick={() => setIsMenuOpen(false)} className="block text-cyber-text hover:text-cyber-blue transition-colors py-3 px-4 min-h-[48px] flex items-center touch-manipulation">
              Sobre Nós
            </Link>
            <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="block text-cyber-text hover:text-cyber-blue transition-colors py-3 px-4 min-h-[48px] flex items-center touch-manipulation">
              Planos
            </Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-cyber-text hover:text-cyber-blue transition-colors py-3 px-4 min-h-[48px] flex items-center touch-manipulation">
              Contato
            </Link>
            <button 
              onClick={() => window.open('https://wa.me/5521969946426?text=Ola,%20gostaria%20de%20comecar', '_blank')}
              className="btn-primary w-full mt-3 py-4 min-h-[56px] inline-block text-center"
            >
              Começar Agora
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
