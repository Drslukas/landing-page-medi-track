'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4DB6AC]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00897B]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="bg-gradient-to-br from-[#003B46] via-[#00695C] to-[#00897B] rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#4DB6AC] font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Comece sua jornada hoje
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Pronto para transformar o acompanhamento dos seus pacientes?
            </h2>

            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 text-pretty">
              Junte-se a milhares de profissionais de saúde que já estão 
              revolucionando a adesão medicamentosa com o MediTrack.
            </p>

            <div className="flex justify-center">
              <Button 
                size="lg"
                className="bg-white text-[#003B46] hover:bg-[#F5F7FA] px-8 py-6 text-lg rounded-xl font-semibold"
                asChild
              >
                <a href="#contato">
                  Entre em Contato
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                Teste grátis por 14 dias
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                Sem cartão de crédito
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                Suporte dedicado
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
