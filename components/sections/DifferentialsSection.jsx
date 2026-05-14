'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Puzzle, 
  Link2, 
  Layers, 
  BarChart4 
} from 'lucide-react'

const differentials = [
  {
    icon: Puzzle,
    title: 'Plataforma Modular',
    description: 'Adapte a plataforma às necessidades específicas da sua prática médica.',
  },
  {
    icon: Link2,
    title: 'Integração Completa',
    description: 'Conecte médico, paciente e cuidador em um único ecossistema.',
  },
  {
    icon: Layers,
    title: 'Escalável',
    description: 'Pronto para crescer com novas especialidades e recursos.',
  },
  {
    icon: BarChart4,
    title: 'Dashboard Analítico',
    description: 'Insights poderosos para tomada de decisão baseada em dados.',
  },
]

export default function DifferentialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 rounded-full bg-[#E0F2F1] text-[#00897B] font-medium text-sm mb-4"
          >
            Diferenciais
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-[#003B46] mb-4 text-balance"
          >
            Por que escolher o MediTrack?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#6B7280] max-w-2xl mx-auto text-pretty"
          >
            Uma solução completa que se destaca pela inovação, 
            facilidade de uso e resultados comprovados.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00897B]/10 to-[#4DB6AC]/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-white rounded-3xl p-8 border border-[#E5E7EB] group-hover:border-[#00897B]/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00897B] to-[#4DB6AC] flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#00897B]/25 transition-shadow">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003B46] mb-3">{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
