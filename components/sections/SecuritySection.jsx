'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Lock, FileCheck, Server } from 'lucide-react'

const securityFeatures = [
  {
    icon: Shield,
    title: 'Segurança de Dados',
    description: 'Proteção completa de todas as informações dos pacientes com as melhores práticas do mercado.',
  },
  {
    icon: Lock,
    title: 'Criptografia Avançada',
    description: 'Todos os dados são criptografados em trânsito e em repouso com tecnologia de ponta.',
  },
  {
    icon: FileCheck,
    title: 'Conformidade LGPD',
    description: 'Totalmente adequado à Lei Geral de Proteção de Dados brasileira.',
  },
  {
    icon: Server,
    title: 'Infraestrutura Segura',
    description: 'Servidores em nuvem com certificações internacionais de segurança.',
  },
]

export default function SecuritySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="seguranca" className="py-20 lg:py-32 bg-gradient-to-br from-[#003B46] to-[#00695C] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 rounded-full bg-white/10 text-[#4DB6AC] font-medium text-sm mb-4"
          >
            Segurança
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance"
          >
            Seus dados estão protegidos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-pretty"
          >
            Levamos a segurança das informações médicas a sério. Nossa plataforma 
            foi desenvolvida com os mais altos padrões de proteção de dados.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4DB6AC] to-[#00897B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-[#4DB6AC]" />
            <span className="text-white font-medium">LGPD</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
