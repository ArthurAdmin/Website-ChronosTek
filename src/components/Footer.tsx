export default function Footer() {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 xl:gap-12 gap-6 sm:gap-8">
          {/* Company info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-row items-center gap-2 mb-4">
              <img 
                src="/ChronosTekLogo.png" 
                alt="ChronosTek Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <h3 className="text-white font-bold text-lg">ChronosTek</h3>
            </div>
            <p className="text-cyber-textMuted mb-4 max-w-md">
              Ajudamos empresas a crescer com previsibilidade, reduzir cancelamentos e aumentar a receita.
              Transformamos dados em decisões estratégicas para que você possa construir uma base de 
              clientes mais sólida e lucrativa, com operações organizadas e crescimento sustentável.
            </p>
            <h4 className="text-white font-semibold mb-3 sm:mb-4">Siga-nos</h4>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-cyber-textMuted hover:text-cyber-blue transition-colors touch-manipulation p-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/chronos.tek?igsh=MXVqZ2ViNHVlYXdzbA==" target="_blank" rel="noopener noreferrer" className="text-cyber-textMuted hover:text-cyber-blue transition-colors touch-manipulation p-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-cyber-textMuted hover:text-cyber-blue transition-colors touch-manipulation p-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@chronostek" target="_blank" rel="noopener noreferrer" className="text-cyber-textMuted hover:text-cyber-blue transition-colors touch-manipulation p-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4">Links Rápidos</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#features" className="text-cyber-textMuted hover:text-cyber-blue transition-colors block py-2 sm:py-1 touch-manipulation">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#about" className="text-cyber-textMuted hover:text-cyber-blue transition-colors block py-2 sm:py-1 touch-manipulation">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-cyber-textMuted hover:text-cyber-blue transition-colors block py-2 sm:py-1 touch-manipulation">
                  Planos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cyber-textMuted hover:text-cyber-blue transition-colors block py-2 sm:py-1 touch-manipulation">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className="text-cyber-textMuted hover:text-cyber-blue transition-colors block py-2 sm:py-1 touch-manipulation">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-cyber-textMuted hover:text-cyber-blue transition-colors block py-2 sm:py-1 touch-manipulation">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-cyber-textMuted hover:text-cyber-blue transition-colors block py-2 sm:py-1 touch-manipulation">
                  LGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyber-border mt-8 pt-8 text-center">
          <p className="text-cyber-textMuted">
            © {new Date().getFullYear()} ChronosTek. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
