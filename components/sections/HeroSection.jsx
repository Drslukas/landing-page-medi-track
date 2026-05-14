'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Users, Calendar, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { icon: Users, value: '10K+', label: 'Pacientes Ativos' },
  { icon: Calendar, value: '98%', label: 'Taxa de Adesão' },
  { icon: Shield, value: '100%', label: 'LGPD Compliant' },
]

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F7FA] via-white to-[#E0F2F1]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#4DB6AC]/20 to-[#00897B]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#00897B]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00897B]/10 text-[#00897B] font-medium text-sm mb-6"
            >
              <CheckCircle2 className="w-4 h-4" />
              Plataforma aprovada por profissionais de saúde
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#003B46] leading-tight text-balance"
            >
              Transformando a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00897B] to-[#4DB6AC]">
                adesão medicamentosa
              </span>{' '}
              com tecnologia inteligente
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-[#6B7280] max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              O MediTrack conecta pacientes, médicos e cuidadores em uma plataforma moderna 
              de acompanhamento medicamentoso e telemedicina.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-[#00897B] hover:bg-[#00796B] text-white px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <a href="#contato">
                  Entre em Contato
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-[#00897B]" />
                    <span className="text-2xl font-bold text-[#003B46]">{stat.value}</span>
                  </div>
                  <p className="text-sm text-[#6B7280]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 border border-[#E5E7EB]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-[#003B46]">Dashboard Médico</h3>
                    <p className="text-sm text-[#6B7280]">Visão geral dos pacientes</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00897B] to-[#4DB6AC] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">DR</span>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#F5F7FA] to-[#E0F2F1] rounded-2xl flex items-end justify-around p-4">
                  {[60, 80, 45, 90, 75, 85, 95].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                      className="w-6 bg-gradient-to-t from-[#00897B] to-[#4DB6AC] rounded-t-lg"
                    />
                  ))}
                </div>

                {/* Patient cards */}
                <div className="mt-6 space-y-3">
                  {[
                    { name: 'Maria Silva', status: 'Alta adesão', color: '#00897B' },
                    { name: 'João Santos', status: 'Monitorando', color: '#F59E0B' },
                  ].map((patient, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      className="flex items-center justify-between p-3 bg-[#F5F7FA] rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E0F2F1] flex items-center justify-center">
                          <span className="text-[#00897B] font-semibold">{patient.name[0]}</span>
                        </div>
                        <span className="font-medium text-[#003B46]">{patient.name}</span>
                      </div>
                      <span 
                        className="text-sm font-medium px-3 py-1 rounded-full"
                        style={{ backgroundColor: `${patient.color}20`, color: patient.color }}
                      >
                        {patient.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-[#E5E7EB]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00897B] to-[#4DB6AC] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280]">Lembrete enviado</p>
                    <p className="font-semibold text-[#003B46]">Medicação às 8h</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-gradient-to-br from-[#4DB6AC]/30 to-[#00897B]/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
