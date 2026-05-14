'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Activity, 
  TrendingUp, 
  FileBarChart, 
  CalendarDays, 
  Trophy,
  CheckCircle2,
  Users,
  Clock
} from 'lucide-react'

const benefits = [
  {
    icon: Activity,
    title: 'Acompanhamento em tempo real',
    description: 'Monitore seus pacientes 24/7 com dados atualizados constantemente.',
  },
  {
    icon: TrendingUp,
    title: 'Indicadores de adesão',
    description: 'Métricas claras sobre o comportamento de cada paciente.',
  },
  {
    icon: FileBarChart,
    title: 'Relatórios automatizados',
    description: 'Receba relatórios semanais e mensais completos.',
  },
  {
    icon: CalendarDays,
    title: 'Calendário visual',
    description: 'Visualização intuitiva dos medicamentos de cada paciente.',
  },
  {
    icon: Trophy,
    title: 'Ranking e avaliações',
    description: 'Sistema de feedback para melhorar continuamente seu atendimento.',
  },
]

export default function DoctorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="medicos" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-[#003B46] to-[#00695C] rounded-3xl p-6 lg:p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white font-bold">DR</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Dr. Carlos Mendes</p>
                    <p className="text-white/60 text-sm">Cardiologista</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#4DB6AC]" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { icon: Users, value: '142', label: 'Pacientes' },
                  { icon: CheckCircle2, value: '94%', label: 'Adesão' },
                  { icon: Clock, value: '15min', label: 'Resposta' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm"
                  >
                    <stat.icon className="w-5 h-5 text-[#4DB6AC] mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-white/60 text-xs">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-white/5 rounded-2xl p-4 mb-6">
                <p className="text-white/80 text-sm mb-4">Taxa de Adesão Semanal</p>
                <div className="flex items-end justify-between h-32 gap-2">
                  {[75, 82, 78, 90, 85, 88, 94].map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${value}%` } : {}}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-[#4DB6AC] to-[#80CBC4] rounded-t-lg relative group"
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs text-white font-medium">{value}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day, i) => (
                    <span key={i} className="text-white/40 text-xs flex-1 text-center">{day}</span>
                  ))}
                </div>
              </div>

              {/* Patient List */}
              <div className="space-y-2">
                {[
                  { name: 'Ana Oliveira', medication: 'Losartana 50mg', status: 'Tomou' },
                  { name: 'Pedro Costa', medication: 'Metformina 500mg', status: 'Pendente' },
                ].map((patient, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="flex items-center justify-between bg-white/10 rounded-xl p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#4DB6AC]/30 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">{patient.name[0]}</span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{patient.name}</p>
                        <p className="text-white/50 text-xs">{patient.medication}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      patient.status === 'Tomou' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {patient.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-[#E5E7EB]"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-[#6B7280]">Adesão média</p>
                  <p className="font-bold text-[#003B46]">+12% este mês</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#E0F2F1] text-[#00897B] font-medium text-sm mb-4">
              Para Médicos
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003B46] mb-6 text-balance">
              Acompanhe seus pacientes como nunca antes
            </h2>
            <p className="text-[#6B7280] mb-8 text-pretty">
              O MediTrack oferece ferramentas poderosas para que você tenha controle total 
              sobre a adesão medicamentosa dos seus pacientes, economizando tempo e 
              melhorando resultados clínicos.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F5F7FA] group-hover:bg-[#E0F2F1] flex items-center justify-center flex-shrink-0 transition-colors">
                    <benefit.icon className="w-6 h-6 text-[#00897B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#003B46] mb-1">{benefit.title}</h3>
                    <p className="text-[#6B7280] text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
