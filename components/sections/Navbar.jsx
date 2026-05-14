'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Funcionalidades', href: '#funcionalidades' },
  { name: 'Para Médicos', href: '#medicos' },
  { name: 'Segurança', href: '#seguranca' },
  { name: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00897B] to-[#4DB6AC] flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#003B46]">MediTrack</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#6B7280] hover:text-[#00897B] transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-[#003B46] hover:text-[#00897B]">
              Entrar
            </Button>
            <Button className="bg-[#00897B] hover:bg-[#00796B] text-white" asChild>
              <a href="#contato">Entre em Contato</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#F5F7FA] transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#003B46]" />
            ) : (
              <Menu className="w-6 h-6 text-[#003B46]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#E5E7EB]"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[#6B7280] hover:text-[#00897B] transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-2 border-t border-[#E5E7EB]">
                <Button variant="outline" className="w-full border-[#00897B] text-[#00897B]">
                  Entrar
                </Button>
                <Button className="w-full bg-[#00897B] hover:bg-[#00796B] text-white" asChild>
                  <a href="#contato">Entre em Contato</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
