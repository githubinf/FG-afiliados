/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Layers, 
  Zap, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Cpu, 
  Share2, 
  Brain,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import React, { useState } from "react";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-display font-bold text-[#174532] mb-4 tracking-tight leading-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[#1b1b1b]/70 max-w-2xl text-base md:text-lg leading-relaxed font-serif italic"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-16 h-1 bg-[#f4b925] mt-6" />
  </div>
);

const Card = ({ icon: Icon, title, description, highlight }: { icon: any, title: string, description: string, highlight?: string }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="editorial-card p-6 md:p-8 flex flex-col h-full shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300 border border-[#174532]/5"
  >
    <div className="w-12 h-12 bg-[#174532] flex items-center justify-center mb-6 shadow-md">
      <Icon className="w-6 h-6 text-[#f4b925]" />
    </div>
    <h3 className="text-xl font-display font-bold text-[#174532] mb-3">{title}</h3>
    <p className="text-[#1b1b1b]/80 text-base leading-relaxed mb-6 flex-grow font-serif">{description}</p>
    {highlight && (
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#4db380]" />
        <span className="text-[#4db380] font-bold text-xs uppercase tracking-widest">{highlight}</span>
      </div>
    )}
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#174532]/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base md:text-lg font-display font-bold text-[#174532] group-hover:text-[#4db380] transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#f4b925] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-[#1b1b1b]/70 leading-relaxed font-serif text-base md:text-lg">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-[#4db380]/20 pt-20">
      {/* Hero Section */}
      <header className="relative pt-20 pb-24 px-8 md:px-12 bg-[#dae7df]/20 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#174532] text-[#f4b925] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-md">
                <Zap className="w-3 h-3" /> Programa de Afiliados
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-[#174532] leading-tight mb-8 tracking-tight">
                Diseña ingresos recomendando <span className="italic text-[#4db380]">sistemas</span>, no productos.
              </h1>
              <p className="text-lg md:text-xl text-[#1b1b1b]/70 mb-6 leading-relaxed font-serif">
                No necesitamos más afiliados. Necesitamos personas que entiendan que FG Perspectiva no es una tienda. Es una arquitectura.
              </p>
              <p className="text-base md:text-lg text-[#174532] mb-10 font-serif italic border-l-4 border-[#f4b925] pl-6 py-2">
                "No se trata de vender libros. Se trata de ayudar a otros a construir activos digitales reales."
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#join" 
                  onClick={(e) => scrollToSection(e, 'join')}
                  className="bg-[#174532] text-[#f4b925] px-10 py-5 font-bold text-sm flex items-center justify-center gap-3 hover:bg-[#1f513a] transition-all group uppercase tracking-[0.1em] shadow-lg"
                >
                  Unirse al Programa <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#architecture" 
                  onClick={(e) => scrollToSection(e, 'architecture')}
                  className="border-2 border-[#174532] text-[#174532] px-10 py-5 font-bold text-sm flex items-center justify-center gap-3 hover:bg-[#174532] hover:text-white transition-all uppercase tracking-[0.1em]"
                >
                  Ver arquitectura
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#174532]/5 -skew-x-12 translate-x-1/4" />
      </header>

      {/* Philosophy Section */}
      <section className="relative py-20 px-8 md:px-12 scroll-mt-24" id="philosophy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTitle subtitle="La mayoría de los programas fallan porque se enfocan en el producto. Nosotros nos enfocamos en el sistema.">
                🧠 Perspectiva antes que promoción
              </SectionTitle>
              <div className="space-y-8 text-[#1b1b1b]/80 leading-relaxed text-xl font-serif">
                <p>
                  FG Perspectiva no es una tienda. Es una arquitectura. Este programa no está diseñado para quien busca promociones rápidas… sino para quien quiere construir un sistema de ingresos alineado con una visión profunda del marketing.
                </p>
                <div className="bg-[#dae7df]/50 p-10 border-l-4 border-[#f4b925] italic text-[#174532] font-bold">
                  "Integra conocimiento dentro de una estructura que genere resultados sostenibles. Eso cambia todo."
                </div>
                <p>
                  Cuando alguien compra dentro del ecosistema FG Perspectiva, no está adquiriendo información aislada… Está entrando en un proceso. Y ahí es donde nace la verdadera conversión.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card 
                icon={Target}
                title="Puente Estratégico"
                description="Posiciónate entre personas con intención de cambio y sistemas diseñados para resultados."
              />
              <Card 
                icon={Layers}
                title="Flujos, no Ventas"
                description="Deja de perseguir ventas individuales y empieza a construir flujos de ingresos."
              />
              <Card 
                icon={Brain}
                title="Dirección"
                description="Comprende que el marketing no es persuasión agresiva, es dirección estratégica."
              />
              <Card 
                icon={TrendingUp}
                title="Escalabilidad"
                description="Un sistema diseñado para que no necesites empezar desde cero cada vez."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commissions Section */}
      <section className="relative py-20 px-8 md:px-12 bg-[#174532] scroll-mt-24" id="commissions">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 tracking-tight leading-tight">
              💸 Modelo de comisiones
            </h2>
            <p className="text-white/60 max-w-2xl text-base md:text-lg leading-relaxed font-serif italic">
              Diseñado para escalar y alineado con resultados reales.
            </p>
            <div className="w-16 h-1 bg-[#f4b925] mt-6" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-lg border border-[#174532]/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#f4b925] translate-x-10 -translate-y-10 rotate-45 group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-2 py-0.5 bg-[#174532] text-[#f4b925] text-[9px] font-bold uppercase tracking-widest">Eje Central</div>
                  <h3 className="text-xl font-display font-bold text-[#174532]">Experto en PLR Premium</h3>
                </div>
                <div className="text-5xl font-display font-bold text-[#174532] mb-6">75% <span className="text-xs text-[#1b1b1b]/40 font-sans font-normal uppercase tracking-[0.2em]">Comisión</span></div>
                <ul className="space-y-3 text-[#1b1b1b]/70 mb-8 text-sm font-serif">
                  <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#4db380] shrink-0" /> Eje central del ecosistema</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#4db380] shrink-0" /> Punto donde todo converge</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#4db380] shrink-0" /> Rol en tu estrategia: conversión principal</li>
                </ul>
                <p className="text-[9px] text-[#174532]/50 uppercase tracking-[0.2em] font-bold">Este producto no es un complemento. Es el sistema.</p>
              </div>
            </div>

            <div className="bg-[#1f513a] p-8 border border-white/10 shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-2 py-0.5 bg-[#f4b925] text-[#174532] text-[9px] font-bold uppercase tracking-widest">Entrada</div>
                  <h3 className="text-xl font-display font-bold text-white">Biblioteca FG Perspectiva</h3>
                </div>
                <div className="text-5xl font-display font-bold text-[#f4b925] mb-6">50% <span className="text-xs text-white/40 font-sans font-normal uppercase tracking-[0.2em]">Comisión</span></div>
                <ul className="space-y-3 text-white/70 mb-8 text-sm font-serif">
                  <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#4db380] shrink-0" /> Educación progresiva</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#4db380] shrink-0" /> Generadores de confianza</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#4db380] shrink-0" /> No promociones productos. Diseña recorridos.</li>
                </ul>
                <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">Cada libro funciona como entrada al sistema.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="relative py-20 px-8 md:px-12 scroll-mt-24" id="architecture">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Cada ruta responde a una fase dentro de la construcción de activos digitales.">
            📚 La Arquitectura de la Biblioteca
          </SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              icon={BookOpen}
              title="Fundamentos"
              description="Construcción del activo. No con herramientas, sino con estructura para entender qué se construye y por qué."
              highlight="Construcción del Activo"
            />
            <Card 
              icon={TrendingUp}
              title="Monetización"
              description="Activación del sistema. Modelos de afiliación y CPA integrados dentro de una estructura lógica."
              highlight="Activación de Ingresos"
            />
            <Card 
              icon={Cpu}
              title="Inteligencia Artificial"
              description="Aceleración. La IA no sustituye el sistema, lo amplifica para crear más rápido y automatizar."
              highlight="Aceleración"
            />
            <Card 
              icon={Share2}
              title="Tráfico y Contenido"
              description="Flujo constante. Atraer atención y convertirla en algo útil. No visitas, sino flujo real."
              highlight="Flujo Constante"
            />
            <Card 
              icon={Brain}
              title="Mentalidad y Creación"
              description="Sostenibilidad. Trabaja lo invisible: decisiones, enfoque y persistencia para sostener el proceso."
              highlight="Sostenibilidad"
            />
            <div className="bg-[#174532] p-8 flex flex-col justify-center items-center text-center shadow-lg group">
              <Zap className="w-12 h-12 text-[#f4b925] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-display font-bold text-white mb-3">Punto de Convergencia</h3>
              <p className="text-white/60 text-sm font-serif italic">Todo lleva al usuario hacia el Experto en PLR Premium como sistema final.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="relative py-20 px-8 md:px-12 bg-[#dae7df]/30">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="No necesitas volumen. Necesitas dirección estratégica.">
            🎯 Estrategia de Afiliación
          </SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Atracción", desc: "Contenido que responda a preguntas reales sobre ingresos y sistemas." },
              { step: "02", title: "Profundización", desc: "Introduce piezas del ecosistema que encajan en el problema del usuario." },
              { step: "03", title: "Conversión", desc: "La decisión se vuelve natural cuando se entiende el problema real." },
              { step: "04", title: "Escalado", desc: "El propio ecosistema hace el resto. No empiezas de cero cada vez." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-7xl font-display font-black text-[#174532]/5 mb-6">{item.step}</div>
                <h4 className="text-xl font-display font-bold text-[#174532] mb-4">{item.title}</h4>
                <p className="text-[#1b1b1b]/70 leading-relaxed font-serif">{item.desc}</p>
                {i < 3 && <ArrowRight className="hidden md:block absolute top-1/2 -right-6 w-6 h-6 text-[#f4b925]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="relative py-20 px-8 md:px-12 scroll-mt-24" id="join">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>🚀 Cómo empezar</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
            {[
              "Regístrate en ClickBank",
              "Accede a los productos FG Perspectiva",
              "Genera tus enlaces de afiliado",
              "Construye contenido con intención"
            ].map((text, i) => (
              <div key={i} className="bg-white p-8 shadow-md border-t-4 border-[#174532] flex items-center gap-6 group hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#174532] text-[#f4b925] flex items-center justify-center font-display font-bold text-xl group-hover:scale-110 transition-transform">{i + 1}</div>
                <span className="font-display font-bold text-base text-[#174532]">{text}</span>
              </div>
            ))}
          </div>
          <button className="bg-[#174532] text-[#f4b925] px-12 py-6 font-bold text-base hover:bg-[#1f513a] transition-all shadow-xl uppercase tracking-[0.2em]">
            Registrarme en ClickBank
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-8 md:px-12 border-t border-[#174532]/5">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>❓ Preguntas frecuentes</SectionTitle>
          <div className="space-y-2">
            <FAQItem 
              question="¿Necesito experiencia previa?" 
              answer="No. Pero entender el enfoque sistémico acelerará tus resultados. El programa está diseñado para guiarte en esa comprensión." 
            />
            <FAQItem 
              question="¿Puedo promocionar todos los productos?" 
              answer="Sí. De hecho, el sistema está diseñado para que lo hagas. Cada producto cumple una función dentro del recorrido del cliente." 
            />
            <FAQItem 
              question="¿Dónde recibo mis comisiones?" 
              answer="Todas las comisiones se gestionan y pagan a través de ClickBank, garantizando transparencia y puntualidad." 
            />
            <FAQItem 
              question="¿Cuál es la mejor forma de empezar?" 
              answer="Crear contenido que conecte problemas reales con soluciones estructuradas. No intentes vender, intenta guiar." 
            />
            <FAQItem 
              question="¿Esto funciona a largo plazo?" 
              answer="Sí. Porque no depende de tácticas pasajeras, sino de diseño arquitectónico y necesidades humanas reales." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-8 md:px-12 bg-[#174532]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-left">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white flex items-center justify-center font-display font-bold text-[#174532] text-lg shadow-xl">FG</div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl tracking-tight text-white leading-none">Perspectiva</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#4db380] font-bold mt-1">Editorial Digital</span>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed max-w-md text-sm">
                Editorial digital moderna dedicada a la creación de sistemas y transformación real. 
                Construimos puentes entre la idea y el activo digital.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Navegación</h4>
              <ul className="space-y-3 text-xs text-[#4db380] font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-white transition-colors">Biblioteca</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sistemas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-xs font-display italic">
              "Sistemas que transforman realidades."
            </p>
            <p className="text-white/20 text-[9px] uppercase tracking-[0.4em]">
              © 2026 FG Perspectiva.
            </p>
          </div>
        </div>
      </footer>

      {/* Navigation - Placed at the end for absolute stacking priority */}
      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-[#174532]/5 bg-white/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#174532] flex items-center justify-center font-display font-bold text-[#f4b925] text-lg shadow-sm">FG</div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-[#174532] leading-none">Perspectiva</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#4db380] font-bold mt-1">Editorial Digital</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-[#174532]/60">
            <a 
              href="#philosophy" 
              onClick={(e) => scrollToSection(e, 'philosophy')}
              className="hover:text-[#174532] transition-colors cursor-pointer py-2"
            >
              Filosofía
            </a>
            <a 
              href="#commissions" 
              onClick={(e) => scrollToSection(e, 'commissions')}
              className="hover:text-[#174532] transition-colors cursor-pointer py-2"
            >
              Comisiones
            </a>
            <a 
              href="#architecture" 
              onClick={(e) => scrollToSection(e, 'architecture')}
              className="hover:text-[#174532] transition-colors cursor-pointer py-2"
            >
              Arquitectura
            </a>
          </div>
          <a 
            href="#join" 
            onClick={(e) => scrollToSection(e, 'join')}
            className="bg-[#174532] text-[#f4b925] px-6 py-2.5 font-bold text-[10px] uppercase tracking-widest hover:bg-[#1f513a] transition-all shadow-md cursor-pointer"
          >
            Unirse ahora
          </a>
        </div>
      </nav>
    </div>
  );
}
