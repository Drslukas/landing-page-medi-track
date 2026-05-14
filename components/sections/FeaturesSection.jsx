'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  LayoutDashboard, 
  FileText, 
  Bell, 
  Video, 
  Star, 
  Heart, 
  BarChart3, 
  HeartPulse 
} from 'lucide-react'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard Médico Inteligente',
    description: 'Visualize todos os seus pacientes em um único painel com métricas em tempo real.',
    color: '#00897B',
  },
  {
    icon: FileText,
    title: 'Prescrição Digital',
    description: 'Crie e envie prescrições digitais de forma rápida e segura.',
    color: '#4DB6AC',
  },
  {
    icon: Bell,
    title: 'Alertas e Lembretes',
    description: 'Notificações personalizadas para garantir que nenhuma dose seja esquecida.',
    color: '#003B46',
  },
  {
    icon: Video,
    title: 'Telemedicina',
    description: 'Consultas por vídeo integradas para atendimento remoto de qualidade.',
    color: '#00897B',
  },
  {
    icon: Star,
    title: 'Avaliação de Médicos',
    description: 'Sistema de avaliações para manter a qualidade do atendimento.',
    color: '#4DB6AC',
  },
  {
    icon: Heart,
    title: 'Perfil do Cuidador',
    description: 'Acesso especial para cuidadores acompanharem seus pacientes.',
    color: '#003B46',
  },
  {
    icon: BarChart3,
    title: 'Relatórios de Adesão',
    description: 'Análises detalhadas sobre o comportamento de adesão dos pacientes.',
    color: '#00897B',
  },
  {
    icon: HeartPulse,
    title: 'Módulo de Saúde Feminina',
    description: 'Acompanhamento especializado para saúde reprodutiva e bem-estar feminino.',
    color: '#4DB6AC',
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="funcionalidades" className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 rounded-full bg-[#E0F2F1] text-[#00897B] font-medium text-sm mb-4"
          >
            Funcionalidades
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-[#003B46] mb-4 text-balance"
          >
            Tudo que você precisa em uma única plataforma
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#6B7280] max-w-2xl mx-auto text-pretty"
          >
            Recursos poderosos desenvolvidos para revolucionar o acompanhamento medicamentoso 
            e a conexão entre profissionais de saúde e pacientes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: `linear-gradient(135deg, ${feature.color}08 0%, transparent 60%)` 
                }}
              />
              
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </motion.div>
                
                <h3 className="font-semibold text-[#003B46] mb-2 group-hover:text-[#00897B] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: feature.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
