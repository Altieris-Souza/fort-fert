'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, Leaf, ArrowRight, Droplet, Sprout, Award } from 'lucide-react';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <HeroSection />
      <ServicesSection />
      <HistorySection />
      <TrustSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(234,179,8,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(234,179,8,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >


          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Força no campo
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Qualidade, comprometimento e eficácia.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Serviços especializados de caminhão e produção própria de tomates de estufa.
            Atendimento profissional e confiável.
          </p>

          <WhatsAppButton 
            text="Fale Conosco"
            message="Olá! Gostaria de solicitar um orçamento."
            className="text-lg"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent"
      />
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: 'Serviços de Caminhão',
      description: 'Caminhão-pipa, esterco de qualidade e limpeza de fossas. Atendimento rural e urbano com equipamentos modernos.',
      features: ['Caminhão-Pipa', 'Esterco Curtido', 'Limpeza de Fossas'],
      href: '/caminhoes',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Leaf,
      title: 'Estufas de Tomate',
      description: 'Produção própria em estufas controladas. Tomates frescos e saborosos, disponíveis em atacado e varejo.',
      features: ['Produção Própria', 'Colheita Diária', 'Atacado e Varejo'],
      href: '/tomates',
      gradient: 'from-green-500/10 to-emerald-500/10'
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
            Frentes de trabalho, um mesmo compromisso com excelência
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={service.href}>
                <div className="group relative bg-zinc-50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 h-full border border-zinc-200 hover:border-yellow-500/30">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative h-64 bg-zinc-200 overflow-hidden">
                    <Image
                      src={index === 0 ? "/images/caminhoes/WhatsApp Image 2025-12-15 at 10.22.49.jpeg" : "/images/tomates/WhatsApp Image 2025-12-15 at 10.22.33.jpeg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  
                  <div className="relative p-8 md:p-10">
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-black">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-zinc-600 mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                          <span className="text-zinc-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-yellow-600 font-semibold group-hover:gap-4 transition-all duration-300">
                      <span>Saiba Mais</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HistorySection() {
  return (
    <section className="-mt-16 pb-8 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 md:gap-16 items-center">
          {/* Coluna da Esquerda - Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[300px] md:h-[500px]">
              <Image
                src="/images/logo.png"
                alt="Fort Fert - Nossa História"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Coluna da Direita - Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Nossa História
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full" />
            </div>

            <p className="text-lg text-zinc-700 leading-relaxed">
              A <span className="font-bold text-black">Fort Fert</span> nasceu do sonho de uma família empreendedora 
              que viu na agricultura familiar uma oportunidade de cultivar qualidade e tradição.
            </p>

            <p className="text-lg text-zinc-700 leading-relaxed">
              Iniciamos nossa jornada com a produção de tomates em estufas modernas, 
              trazendo produtos frescos e de qualidade direto do campo. 
              Com o crescimento e a confiança conquistada, expandimos nossos serviços para 
              atender outras necessidades da zona rural, oferecendo caminhão-pipa e transporte de esterco 
              com a mesma dedicação e compromisso.
            </p>

            <p className="text-lg text-zinc-700 leading-relaxed">
              Hoje, somos uma empresa familiar que une tradição e inovação, 
              sempre priorizando o atendimento personalizado e a satisfação de cada cliente. 
              Nossa missão é continuar crescendo, mantendo os valores que nos trouxeram até aqui: 
              <span className="font-bold text-yellow-600"> honestidade, qualidade e compromisso</span>.
            </p>

            <div className="pt-4">
              <WhatsAppButton 
                text="Conheça Mais"
                message="Olá! Gostaria de conhecer mais sobre a história da Fort Fert."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const stats = [
    { icon: Award, number: "100%", label: "Compromisso com Qualidade" },
    { icon: Truck, number: "500+", label: "Clientes Satisfeitos" },
    { icon: Sprout, number: "Diário", label: "Colheita Fresca" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black to-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Confiança Construída ao Longo dos Anos
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Comprometidos com qualidade e atendimento excepcional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
            >
              <stat.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
                {stat.number}
              </div>
              <div className="text-zinc-300 font-medium text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <WhatsAppButton 
            text="Fale Conosco"
            message="Olá! Gostaria de falar com um especialista."
            className="text-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
