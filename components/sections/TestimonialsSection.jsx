'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dra. Mariana Costa',
    role: 'Cardiologista',
    location: 'São Paulo, SP',
    image: 'MC',
    rating: 5,
    text: 'O MediTrack revolucionou a forma como acompanho meus pacientes. A taxa de adesão aumentou significativamente e consigo intervir mais rapidamente quando necessário.',
  },
  {
    name: 'Roberto Almeida',
    role: 'Paciente',
    location: 'Rio de Janeiro, RJ',
    image: 'RA',
    rating: 5,
    text: 'Finalmente uma solução que me ajuda a lembrar de todos os medicamentos. Os lembretes são precisos e o app é muito fácil de usar. Minha saúde melhorou muito!',
  },
  {
    name: 'Fernanda Santos',
    role: 'Cuidadora',
    location: 'Belo Horizonte, MG',
    image: 'FS',
    rating: 5,
    text: 'Como cuidadora da minha mãe, o MediTrack me dá tranquilidade. Mesmo à distância, consigo acompanhar se ela está tomando os medicamentos corretamente.',
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 rounded-full bg-[#E0F2F1] text-[#00897B] font-medium text-sm mb-4"
          >
            Depoimentos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-[#003B46] mb-4 text-balance"
          >
            O que nossos usuários dizem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#6B7280] max-w-2xl mx-auto text-pretty"
          >
            Médicos, pacientes e cuidadores que já transformaram 
            sua experiência com a saúde digital.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-[#E0F2F1]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#6B7280] leading-relaxed mb-6 text-pretty">
                {`"${testimonial.text}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00897B] to-[#4DB6AC] flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.image}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#003B46]">{testimonial.name}</h4>
                  <p className="text-[#6B7280] text-sm">{testimonial.role}</p>
                  <p className="text-[#00897B] text-xs">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
