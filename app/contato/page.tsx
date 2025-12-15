'use client';

import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Clock, Phone } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <HeroSection />
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-600 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MessageCircle className="w-20 h-20 text-black mx-auto mb-6" />
          
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Entre em Contato
          </h1>

          <p className="text-xl md:text-2xl text-black/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você. Fale conosco agora!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "A forma mais rápida de nos contatar",
      detail: "Resposta imediata"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      description: "Segunda a Sexta: 7h às 18h",
      detail: "Sábado: 7h às 12h"
    },
    {
      icon: MapPin,
      title: "Atendimento",
      description: "Zona Rural e Urbana",
      detail: "Região completa"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Fort Fert
          </h2>
          <p className="text-xl text-zinc-600">
            Serviços de Caminhão e Estufas de Tomate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-zinc-50 rounded-2xl p-8 border border-zinc-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <info.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {info.title}
              </h3>
              <p className="text-zinc-600 mb-1">
                {info.description}
              </p>
              <p className="text-sm text-zinc-500">
                {info.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-black to-zinc-900 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Precisa de Nossos Serviços?
          </h3>
          
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Clique no botão abaixo e fale diretamente conosco pelo WhatsApp.
            Teremos prazer em atendê-lo!
          </p>

          <WhatsAppButton 
            text="Fale Conosco"
            message="Olá! Gostaria de mais informações sobre os serviços."
            className="text-lg"
          />

          <div className="mt-10 pt-10 border-t border-zinc-700">
            <p className="text-zinc-400 mb-4">
              Atendemos com rapidez e qualidade
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
              <span>✓ Orçamento sem compromisso</span>
              <span>✓ Atendimento personalizado</span>
              <span>✓ Resposta rápida</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 text-lg mb-4">
            Nossos Serviços
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-zinc-100 rounded-full text-zinc-700 font-medium">
              Caminhão-Pipa
            </span>
            <span className="px-4 py-2 bg-zinc-100 rounded-full text-zinc-700 font-medium">
              Caminhão de Esterco
            </span>
            <span className="px-4 py-2 bg-zinc-100 rounded-full text-zinc-700 font-medium">
              Limpeza de Fossas
            </span>
            <span className="px-4 py-2 bg-zinc-100 rounded-full text-zinc-700 font-medium">
              Tomates de Estufa
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}