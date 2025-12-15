'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Droplet, Sprout, Truck, CheckCircle, Clock, Shield, Users } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import SectionTitle from '../components/SectionTitle';

export default function CaminhoesPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <HeroSection />
      <ServicesSection />
      <DiferenciaisSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-900 overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/caminhoes/WhatsApp Image 2025-12-15 at 10.12.35.jpeg"
          alt="Caminhões de serviço"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-zinc-900/90" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_70%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Serviços de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> Caminhão</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Atendimento profissional e equipamentos modernos para zona rural e urbana.
            Rapidez, confiança e qualidade garantida.
          </p>

          <WhatsAppButton 
            text="Fale Conosco"
            message="Olá! Gostaria de contratar um serviço de caminhão."
            className="text-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Droplet,
      title: "Caminhão-Pipa",
      description: "Fornecimento de água potável e não potável para diversas finalidades.",
      features: [
        "Abastecimento de propriedades rurais",
        "Fornecimento para obras e construções",
        "Água de qualidade certificada",
        "Entregas pontuais e programadas",
        "Diferentes volumes disponíveis",
        "Atendimento emergencial"
      ]
    },
    {
      icon: Sprout,
      title: "Caminhão de Esterco",
      description: "Esterco curtido de alta qualidade para adubação orgânica eficiente.",
      features: [
        "Esterco curtido e pronto para uso",
        "Ideal para lavouras e jardins",
        "Melhora a fertilidade do solo",
        "Quantidade personalizada",
        "Entrega em propriedades rurais",
        "Produto 100% orgânico"
      ]
    },
    {
      icon: Truck,
      title: "Limpeza de Fossas",
      description: "Limpeza e retirada especializada de fossas sépticas com descarte correto.",
      features: [
        "Equipamento especializado e moderno",
        "Atendimento residencial e comercial",
        "Descarte ambientalmente correto",
        "Profissionais qualificados",
        "Serviço rápido e limpo",
        "Manutenção preventiva"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Três serviços essenciais, um padrão de excelência">
          Nossos Serviços
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
            >
              <div className="relative h-48 bg-zinc-200 overflow-hidden">
                <Image
                  src={index === 0 ? "/images/caminhoes/WhatsApp Image 2025-12-15 at 10.28.07.jpeg" : index === 1 ? "/images/caminhoes/WhatsApp Image 2025-12-15 at 10.28.09.jpeg" : "/images/caminhoes/WhatsApp Image 2025-12-15 at 10.50.58.jpeg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                <h3 className="text-2xl font-bold text-black">
                  {service.title}
                </h3>
              </div>

              <p className="text-zinc-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700">{feature}</span>
                  </li>
                ))}
              </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiferenciaisSection() {
  const diferenciais = [
    {
      icon: Clock,
      title: "Rapidez no Atendimento",
      description: "Respondemos com agilidade e cumprimos prazos estabelecidos"
    },
    {
      icon: Shield,
      title: "Equipamentos Modernos",
      description: "Frota bem mantida e equipamentos de última geração"
    },
    {
      icon: Users,
      title: "Equipe Experiente",
      description: "Profissionais qualificados com anos de experiência no setor"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Por que escolher nossos serviços de caminhão">
          Diferenciais
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black to-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Precisa de Algum Serviço?
          </h2>
          
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Entre em contato agora pelo WhatsApp e receba atendimento imediato.
            Orçamento rápido e sem compromisso!
          </p>

          <WhatsAppButton 
            text="Fale Conosco"
            message="Olá! Gostaria de contratar um serviço de caminhão."
            className="text-lg"
          />

          <p className="mt-8 text-zinc-400">
            Atendimento rural e urbano • Disponível de segunda a sábado
          </p>
        </motion.div>
      </div>
    </section>
  );
}