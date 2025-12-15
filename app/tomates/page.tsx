'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, Droplet, Sun, CheckCircle, Package, TrendingUp } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import SectionTitle from '../components/SectionTitle';

export default function TomatesPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <HeroSection />
      <ProductionSection />
      <BenefitsSection />
      <QualitySection />
      <SalesSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/tomates/WhatsApp Image 2025-12-15 at 10.17.12.jpeg"
          alt="Estufas de tomate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-emerald-900/85 to-green-950/90" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tomates de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> Estufa</span>
          </h1>

          <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Produção própria em estufas controladas. Tomates frescos, saborosos
            e de alta qualidade direto do produtor.
          </p>

          <WhatsAppButton 
            text="Fale Conosco"
            message="Olá! Gostaria de comprar tomates frescos."
            className="text-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ProductionSection() {
  const features = [
    {
      icon: Sun,
      title: "Estufas Modernas",
      description: "Ambiente controlado com temperatura e irrigação ideais para o melhor desenvolvimento"
    },
    {
      icon: Droplet,
      title: "Irrigação Controlada",
      description: "Sistema de irrigação preciso que garante a qualidade e o sabor característico"
    },
    {
      icon: Leaf,
      title: "Cultivo Sustentável",
      description: "Práticas agrícolas responsáveis que respeitam o meio ambiente"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Da Nossa Estufa Direto Para Você
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              Cultivamos tomates de alta qualidade em estufas com tecnologia moderna.
              Cada tomate é cuidadosamente acompanhado desde o plantio até a colheita,
              garantindo frescor e sabor incomparáveis.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Nossa produção própria nos permite oferecer produtos frescos colhidos
              diariamente, mantendo todas as propriedades nutricionais e o sabor natural.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-96 bg-zinc-200 rounded-3xl overflow-hidden border-2 border-green-200 shadow-xl">
              <Image
                src="/images/tomates/WhatsApp Image 2025-12-15 at 10.33.01.jpeg"
                alt="Estufa de tomates"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-xl">Produção 100% controlada</p>
                <p className="text-green-200 text-sm mt-1">Estufas modernas com tecnologia avançada</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-8 border border-green-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      title: "Rico em Nutrientes",
      description: "Fonte de vitaminas A, C, K e minerais essenciais como potássio",
      image: "/images/tomates/WhatsApp Image 2025-12-15 at 10.12.39.jpeg"
    },
    {
      title: "Antioxidantes Poderosos",
      description: "Alto teor de licopeno, que combate radicais livres",
      image: "/images/tomates/WhatsApp Image 2025-12-15 at 10.50.51.jpeg"
    },
    {
      title: "Saúde do Coração",
      description: "Ajuda a reduzir colesterol e pressão arterial",
      image: "/images/tomates/WhatsApp Image 2025-12-15 at 10.22.33.jpeg"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Saúde e sabor em cada tomate">
          Benefícios dos Tomates
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 bg-zinc-200 overflow-hidden">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Tomates Frescos Todos os Dias
          </h3>
          <p className="text-green-100 text-lg max-w-3xl mx-auto">
            Nossos tomates são colhidos diariamente nas estufas, garantindo máximo frescor, 
            sabor intenso e todos os nutrientes preservados. Da estufa direto para sua mesa!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function QualitySection() {
  const benefits = [
    "Colheita diária para máximo frescor",
    "Controle rigoroso de qualidade",
    "Sabor natural e intenso",
    "Textura firme e consistente",
    "Cor vibrante e atraente",
    "Livre de produtos químicos prejudiciais"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="O compromisso com a excelência em cada tomate">
          Garantia de Qualidade
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm border border-green-100"
            >
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-zinc-700 font-medium text-lg">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SalesSection() {
  const options = [
    {
      icon: Package,
      title: "Varejo",
      description: "Pequenas quantidades para consumo familiar",
      features: ["Ideal para residências", "Produto sempre fresco", "Entrega local"]
    },
    {
      icon: TrendingUp,
      title: "Atacado",
      description: "Grandes volumes para comércio e indústria",
      features: ["Preços competitivos", "Fornecimento regular", "Qualidade garantida"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Atendemos diferentes necessidades de compra">
          Venda Direta
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-zinc-50 to-green-50 rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <option.icon className="w-8 h-8 text-black" />
              </div>

              <h3 className="text-2xl font-bold text-black mb-3">
                {option.title}
              </h3>

              <p className="text-zinc-600 mb-6 leading-relaxed">
                {option.description}
              </p>

              <ul className="space-y-3">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-zinc-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-900 to-emerald-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experimente a Diferença
          </h2>
          
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            Entre em contato agora para comprar tomates frescos e de qualidade superior.
            Atendemos atacado e varejo com o melhor preço!
          </p>

          <WhatsAppButton 
            text="Fale Conosco"
            message="Olá! Gostaria de fazer um pedido de tomates."
            className="text-lg"
          />

          <p className="mt-8 text-green-200">
            Colheita diária • Produto fresco • Venda direta do produtor
          </p>
        </motion.div>
      </div>
    </section>
  );
}