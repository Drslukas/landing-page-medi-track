'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle, Clock, Unlink, UserX, ArrowRight, Sparkles } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Falta de adesão medicamentosa',
    description: 'Mais de 50% dos pacientes não seguem corretamente suas prescrições médicas.',
  },
  {
    icon: Clock,
    title: 'Esquecimento de medicamentos',
    description: 'Rotinas agitadas levam ao esquecimento frequente de doses importantes.',
  },
  {
    icon: Unlink,
    title: 'Dificuldade no acompanhamento',
    description: 'Médicos não conseguem monitorar seus pacientes de forma remota e eficiente.',
  },
  {
    icon: UserX,
    title: 'Falta de integração',
    description: 'Desconexão entre médico, paciente e cuidadores prejudica o tratamento.',
  },
]

const solutions = [
  'Lembretes inteligentes e personalizados',
  'Dashboard de acompanhamento em tempo real',
  'Conexão direta entre médico e paciente',
  'Relatórios automatizados de adesão',
]

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problems */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm mb-4"
          >
            O Problema
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-[#003B46] text-balance"
          >
            Os desafios da saúde tradicional
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group p-6 bg-[#F5F7FA] rounded-2xl hover:bg-red-50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                <problem.icon className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="font-semibold text-[#003B46] mb-2">{problem.title}</h3>
              <p className="text-[#6B7280] text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Arrow transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center mb-20"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00897B] to-[#4DB6AC] flex items-center justify-center shadow-lg">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Solution */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="inline-block px-4 py-2 rounded-full bg-[#E0F2F1] text-[#00897B] font-medium text-sm mb-4"
          >
            A Solução
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-3xl lg:text-4xl font-bold text-[#003B46] text-balance"
          >
            MediTrack resolve tudo isso
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#00897B] to-[#003B46] rounded-3xl p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-[#4DB6AC]" />
              <h3 className="text-2xl font-bold text-white">Nossa plataforma oferece</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#4DB6AC] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-white font-medium">{solution}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
