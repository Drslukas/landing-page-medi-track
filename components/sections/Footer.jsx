'use client'

import { Activity, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  produto: [
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Para Médicos', href: '#medicos' },
    { name: 'Para Pacientes', href: '#' },
    { name: 'Preços', href: '#' },
  ],
  empresa: [
    { name: 'Sobre Nós', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Carreiras', href: '#' },
    { name: 'Imprensa', href: '#' },
  ],
  suporte: [
    { name: 'Central de Ajuda', href: '#' },
    { name: 'Documentação', href: '#' },
    { name: 'Status do Sistema', href: '#' },
    { name: 'Contato', href: '#contato' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '#' },
    { name: 'Política de Privacidade', href: '#' },
    { name: 'LGPD', href: '#seguranca' },
    { name: 'Cookies', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#003B46] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo and Contact */}
          <div className="col-span-2">
            <a href="#inicio" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00897B] to-[#4DB6AC] flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">MediTrack</span>
            </a>
            <p className="text-white/60 mb-6 max-w-xs">
              Transformando a adesão medicamentosa com tecnologia inteligente.
            </p>
            <div className="space-y-3">
              <a href="mailto:contato@meditrack.com.br" className="flex items-center gap-3 text-white/60 hover:text-[#4DB6AC] transition-colors">
                <Mail className="w-5 h-5" />
                contato@meditrack.com.br
              </a>
              <a href="tel:+551199999999" className="flex items-center gap-3 text-white/60 hover:text-[#4DB6AC] transition-colors">
                <Phone className="w-5 h-5" />
                +55 (11) 9999-9999
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Produto</h3>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-[#4DB6AC] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-[#4DB6AC] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-[#4DB6AC] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-[#4DB6AC] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} MediTrack. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00897B] transition-colors"
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
