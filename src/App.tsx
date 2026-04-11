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
  MessageSquare,
  Info,
  Lightbulb
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
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </motion.div>
    </div>
  );
};

const RotatingBanner = () => {
  const banners = [
    {nombre:"Cómo crear un Blog optimizado", url:"https://i.ibb.co/q3TTrp45/1-como-crear-un-blog-optimizado-libro-400.jpg"},
    {nombre:"Mi Blog y los Programas de Afiliados", url:"https://i.ibb.co/gFByygV3/4-mi-blog-y-los-programas-de-afiliados-libro-400.jpg"},
    {nombre:"Guía Completa de Inbound Marketing", url:"https://i.ibb.co/FL81k56f/11-guia-inbound-marketing-libro-400.jpg"},
    {nombre:"Dominando el marketing de afiliados", url:"https://i.ibb.co/848rmyCx/3-marketing-de-afiliados-libro-400.jpg"},
    {nombre:"Marketing CPA Para Emprendedores y Profesionales Digitales", url:"https://i.ibb.co/dFbZCmH/21-marketing-cpa-libro-400-2.jpg"},
    {nombre:"Cpa Marketing Fórmula Smartlink", url:"https://i.ibb.co/fV1pc13f/6-cpa-marketing-smartlink-libro-400.jpg"},
    {nombre:"Dinero con Clickbank", url:"https://i.ibb.co/YBzVsvGZ/2-dinero-con-clickbank-libro-400.jpg"},
    {nombre:"Tips de Marketing para Afiliados", url:"https://i.ibb.co/5hqN1ycg/5-tips-de-marketing-para-afiliados-libro-400.jpg"},
    {nombre:"Cómo ganar dinero con CHATGPT", url:"https://i.ibb.co/s9kNwj06/12-dinero-con-chatgpt-libro-400.jpg"},
    {nombre:"Desbloquea tu inspiración con ChatGPT", url:"https://i.ibb.co/qY3WJ4bN/16-chatgpt-para-escritores-libro-400.jpg"},
    {nombre:"Inteligencia Artificial", url:"https://i.ibb.co/20gchR86/15-inteligencia-artificial-libro-400.jpg"},
    {nombre:"El futuro del marketing (IA)", url:"https://i.ibb.co/Kx6WXKQ7/7-marketing-IA-futuro-libro-400.jpg"},
    {nombre:"Ideas y consejos de Tráfico Web", url:"https://i.ibb.co/7dKDNLZG/13-ideas-y-consejos-de-trafico-web-libro-400.jpg"},
    {nombre:"Ideas Maestras de Tráfico Web", url:"https://i.ibb.co/KjkrJZVk/27-ideas-maestras-de-trafico-web-libro-400.jpg"},
    {nombre:"El Poder Del Marketing De Contenidos", url:"https://i.ibb.co/hJ7WccPy/18-marketing-de-contenidos-libro-400.jpg"},
    {nombre:"Dominando el Arte del Email Marketing", url:"https://i.ibb.co/FbxVRfGY/26-dominando-el-arte-del-email-marketing-libro-400.jpg"},
    {nombre:"El Vendedor hipnótico", url:"https://i.ibb.co/20bRD4Gt/8-el-vendedor-hypnotico-libro-400.jpg"},
    {nombre:"El arte de atraer la abundancia", url:"https://i.ibb.co/8nLGZsX4/14-el-arte-de-atraer-la-abundancia-ebook-libro-400.jpg"},
    {nombre:"De la Pluma al Dinero", url:"https://i.ibb.co/hFkMt4cm/23-de-la-pluma-al-dinero-libro-400.jpg"},
    {nombre:"Cómo crear Ebooks", url:"https://i.ibb.co/MxcXwpc4/9-como-crear-ebooks-de-no-ficcion-libro-400.jpg"},
    {nombre:"Ebook en 24 horas", url:"https://i.ibb.co/DH0zJcrp/10-ebook-en-24-horas-libro-400.jpg"},
    {nombre:"Experto en PLR Premium", url:"https://i.ibb.co/QFGfhgGL/25-experto-en-plr-producto-400.jpg"},
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="banner-wrapper w-full max-w-[300px] md:max-w-[400px] mx-auto overflow-hidden rounded-xl shadow-2xl bg-white/10 backdrop-blur-sm p-2">
      <div className="banner-container overflow-hidden rounded-lg">
        <motion.img 
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={banners[index].url} 
          alt={banners[index].nombre}
          className="banner-image w-full h-auto block rounded-lg banner-zoom-animation"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

const ProductTable = ({ title, description, products, showRole = false }: { title: string, description?: string, products: { name: string, commission: string, role?: string, buttonText?: string, customLink?: string, isFeatured?: boolean }[], showRole?: boolean }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-4">
      <h3 className="text-xl md:text-2xl font-display font-bold text-[#f4b925]">{title}</h3>
    </div>
    {description && <p className="text-white/70 mb-8 font-serif italic text-base leading-relaxed max-w-3xl">{description}</p>}
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
        <thead>
          <tr className="bg-white/10 text-[#f4b925]">
            <th className="p-4 font-display font-bold uppercase tracking-wider text-xs">Producto</th>
            <th className="p-4 font-display font-bold uppercase tracking-wider text-xs">Comisión</th>
            <th className="p-4 font-display font-bold uppercase tracking-wider text-xs text-center">Enlace de Afiliado (ClickBank)</th>
            {showRole && <th className="p-4 font-display font-bold uppercase tracking-wider text-xs">Rol en la Arquitectura</th>}
          </tr>
        </thead>
        <tbody className="text-white/80">
          {products.map((p, i) => (
            <tr key={i} className={`border-b border-white/5 transition-colors ${p.isFeatured ? 'bg-[#f4b925]/20 hover:bg-[#f4b925]/30' : 'hover:bg-white/5'}`}>
              <td className={`p-4 font-bold ${p.isFeatured ? 'text-lg md:text-xl text-[#f4b925]' : 'text-sm'}`}>{p.name}</td>
              <td className={`p-4 font-bold ${p.isFeatured ? 'text-lg md:text-xl text-white' : 'text-[#f4b925] text-sm'}`}>{p.commission}</td>
              <td className="p-4 text-center">
                {p.customLink ? (
                  <div className="flex flex-col items-center">
                    <div className={`p-2 rounded break-all font-mono border select-all max-w-[300px] mx-auto ${p.isFeatured ? 'bg-white/20 text-white border-white/20 text-base' : 'bg-white/10 text-white/50 border-white/5 text-sm'}`}>
                      {p.customLink}
                    </div>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 bg-[#f4b925] text-[#174532] px-4 py-2 rounded font-bold text-[10px] uppercase tracking-widest shadow-md">
                    🔗 {p.buttonText || "PRÓXIMAMENTE"}
                  </div>
                )}
              </td>
              {showRole && <td className={`p-4 italic opacity-80 leading-relaxed ${p.isFeatured ? 'text-sm md:text-base' : 'text-xs'}`}>{p.role}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#174532] text-[#f4b925] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-md">
                <Zap className="w-3 h-3" /> Programa de Afiliados
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-[#174532] leading-tight mb-8 tracking-tight">
                Programa de Afiliados FG Perspectiva: Convierte Sistemas en Ingresos
              </h1>
              <p className="text-lg md:text-xl text-[#1b1b1b]/70 mb-10 leading-relaxed font-serif">
                No promociones productos aislados. Integra a tus usuarios en una arquitectura digital que les cambie la vida... y hazte con comisiones de hasta el 75%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#commissions" 
                  onClick={(e) => scrollToSection(e, 'commissions')}
                  className="border-2 border-[#174532] text-[#174532] px-10 py-5 font-bold text-sm flex items-center justify-center gap-3 hover:bg-[#174532] hover:text-white transition-all uppercase tracking-[0.1em]"
                >
                  Explorar la Arquitectura de Comisiones
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <RotatingBanner />
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
              <SectionTitle subtitle="La mayoría de los programas de afiliados te enseñan a lanzar links. Nosotros te enseñamos a construir puentes.">
                🏗️ No Buscamos Vendedores. Buscamos Arquitectos de Resultados.
              </SectionTitle>
              <div className="space-y-8 text-[#1b1b1b]/80 leading-relaxed text-xl font-serif">
                <p>
                  Cuando promocionas FG Perspectiva, no estás vendiendo un ebook; estás guiando a alguien hacia la primera pieza de su propio sistema digital. Esto se traduce en mayor confianza, menos objeciones y conversiones más altas y sostenibles.
                </p>
                <div className="bg-[#dae7df]/50 p-10 border-l-4 border-[#f4b925] italic text-[#174532] font-bold">
                  "Tu Contenido (Puente) → Libro (Entrada al Sistema) → Experto en PLR Premium (El Sistema Completo) → Cliente Fidelizado + Tu Comisión."
                </div>
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
              💸 Modelo de Comisiones y Productos Estrella
            </h2>
            <p className="text-white/60 max-w-2xl text-base md:text-lg leading-relaxed font-serif italic">
              Claridad y Transparencia: Los enlaces son a través de ClickBank. Regístrate gratis y empieza a construir.
            </p>
            <div className="w-16 h-1 bg-[#f4b925] mt-6" />
          </div>
          
          <ProductTable 
            title="🎯 Eje Central del Ecosistema"
            showRole={true}
            products={[
              { 
                name: "Experto en PLR Premium", 
                commission: "75%", 
                role: "El Sistema Final. Punto de convergencia de toda la arquitectura. El producto que integra todo el conocimiento en un sistema completo.",
                customLink: "https://hop.clickbank.net/?affiliate=XXXXX&vendor=fcofrancis",
                isFeatured: true
              }
            ]}
          />

          <ProductTable 
            title="📚 Ruta Fundamentos Digitales (Iniciación)"
            description="Para quienes quieren construir su primer activo online con bases sólidas."
            products={[
              { 
                name: "Cómo crear un Blog optimizado", 
                commission: "50%",
                customLink: "https://hop.clickbank.net/?affiliate=XXXXX&vendor=fcofrancis&cbpage=lp3"
              },
              { 
                name: "Mi Blog y los Programas de Afiliados", 
                commission: "50%",
                customLink: "https://hop.clickbank.net/?affiliate=XXXXX&vendor=fcofrancis&cbpage=lp6"
              },
              { 
                name: "Guía Completa de Inbound Marketing", 
                commission: "50%",
                customLink: "https://hop.clickbank.net/?affiliate=XXXXX&vendor=fcofrancis&cbpage=lp13"
              }
            ]}
          />

          <ProductTable 
            title="💰 Ruta Monetización y Afiliación (Ingresos)"
            description="Estrategias prácticas para transformar tráfico e ideas en ingresos reales."
            products={[
              { 
                name: "Dominando el marketing de afiliados", 
                commission: "50%",
                customLink: "https://hop.clickbank.net/?affiliate=XXXXX&vendor=fcofrancis&cbpage=lp5"
              },
              { 
                name: "Marketing CPA Para Emprendedores y Profesionales Digitales", 
                commission: "50%",
                customLink: "https://hop.clickbank.net/?affiliate=XXXXX&vendor=fcofrancis&cbpage=lp2"
              },
              { 
                name: "Cpa Marketing Fórmula Smartlink", 
                commission: "50%",
                customLink: "https://hop.clickbank.net/?affiliate=XXXXX&vendor=fcofrancis&cbpage=lp8"
              },
              { 
                name: "Dinero con Clickbank en minutos", 
                commission: "50%",
                customLink: "https://hop.clickbank.net/?affiliate=XXXXX&vendor=fcofrancis&cbpage=lp4"
              },
              { 
                name: "Tips de Marketing para Afiliados", 
                commission: "50%",
                customLink: "https://hop.clickbank.net/?affiliate=XXXXX&vendor=fcofrancis&cbpage=lp7"
              }
            ]}
          />

          <ProductTable 
            title="🤖 Ruta Inteligencia Artificial Aplicada (Tecnología)"
            description="Cómo integrar IA en tus procesos digitales para crear más rápido y escalar."
            products={[
              { name: "Cómo ganar dinero con CHATGPT", commission: "50%" },
              { name: "Desbloquea tu inspiración con ChatGPT", commission: "50%" },
              { name: "Inteligencia Artificial", commission: "50%" },
              { 
                name: "El futuro del marketing (IA)", 
                commission: "50%",
                customLink: "https://hop.clickbank.net/?affiliate=XXXXX&vendor=fcofrancis&cbpage=lp9"
              }
            ]}
          />

          <ProductTable 
            title="🚀 Ruta Tráfico, Contenidos y Crecimiento (Crecimiento)"
            description="Métodos probados para atraer visitantes cualificados y convertir contenido en crecimiento constante."
            products={[
              { name: "Ideas y consejos de Tráfico Web", commission: "50%" },
              { name: "Ideas Maestras de Tráfico Web", commission: "50%" },
              { name: "El Poder Del Marketing De Contenidos", commission: "50%" },
              { name: "Dominando el Arte del Email Marketing", commission: "50%" }
            ]}
          />

          <ProductTable 
            title="🧠 Ruta Mentalidad y Creación (Mindset)"
            description="Desarrollo personal, enfoque creativo y mentalidad estratégica para sostener cualquier proyecto digital."
            products={[
              { 
                name: "El Vendedor hipnótico", 
                commission: "50%",
                customLink: "https://fcofrancis.pay.clickbank.net/?cbitems=10"
              },
              { name: "El arte de atraer la abundancia", commission: "50%" },
              { name: "De la Pluma al Dinero", commission: "50%" },
              { 
                name: "Cómo crear Ebooks (de no ficción)", 
                commission: "50%",
                customLink: "https://hop.clickbank.net/?affiliate=XXXXX&vendor=fcofrancis&cbpage=lp11"
              },
              { 
                name: "Ebook en 24 horas", 
                commission: "50%",
                customLink: "https://hop.clickbank.net/?affiliate=XXXXX&vendor=fcofrancis&cbpage=lp12"
              }
            ]}
          />

          {/* Note and Strategy */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white/5 backdrop-blur-sm p-8 border-l-4 border-[#f4b925] rounded-r-lg">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-[#f4b925]" />
                <h4 className="text-lg font-display font-bold text-white">Nota Importante para los Afiliados</h4>
              </div>
              <p className="text-white/70 text-sm font-serif leading-relaxed">
                📌 <span className="font-bold text-white">Recuerda:</span> Todos los enlaces de afiliado se generan a través de ClickBank. Si aún no tienes cuenta, puedes <a href="https://www.clickbank.com/" target="_blank" rel="noopener noreferrer" className="text-[#f4b925] underline hover:text-white transition-colors">crearla gratis aquí</a>. Una vez registrado, sustituye los enlaces de la tabla por tus propios "hoplinks" personalizados.
              </p>
              <p className="text-white/70 text-sm font-serif leading-relaxed mt-4">
                Para recoger links personalizados entra en tu cuenta de Clickbank, ve al mercaplace, escribe "Experto en PLR", da clic en "Get affiliate link", selecciona la landing page de tu agrado.
              </p>
            </div>
            
            <div className="bg-[#f4b925]/10 backdrop-blur-sm p-8 border-l-4 border-[#4db380] rounded-r-lg">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-[#4db380]" />
                <h4 className="text-lg font-display font-bold text-white">💡 Estrategia recomendada</h4>
              </div>
              <div className="space-y-4 text-white/70 text-sm font-serif leading-relaxed">
                <p>No promociones libros de forma aislada. Diseña un recorrido para tu audiencia. Por ejemplo:</p>
                <ul className="space-y-3">
                  <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#4db380] shrink-0" /> <span className="font-bold text-white">Atrae</span> con contenido sobre "cómo empezar un blog" (promociona <span className="italic">Cómo crear un Blog optimizado</span>).</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#4db380] shrink-0" /> <span className="font-bold text-white">Profundiza</span> con estrategias de monetización (promociona <span className="italic">Dominando el marketing de afiliados</span>).</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[#4db380] shrink-0" /> <span className="font-bold text-white">Convierte</span> con el sistema completo (promociona <span className="italic">Experto en PLR Premium</span> al 75%).</li>
                </ul>
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

      {/* Resources Section */}
      <section className="relative py-20 px-8 md:px-12 bg-[#dae7df]/30 scroll-mt-24" id="resources">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Inspirado en tu referencia. Aquí encontrarás todo lo necesario para promocionar con éxito.">
            🛠️ Herramientas y Recursos para el Afiliado
          </SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-md border-b-4 border-[#4db380] flex flex-col items-center text-center">
              <MessageSquare className="w-10 h-10 text-[#174532] mb-4" />
              <h3 className="text-lg font-display font-bold text-[#174532] mb-2">Kit de Copys</h3>
              <p className="text-sm text-[#1b1b1b]/70 font-serif">Textos listos para usar en tus redes sociales y correos electrónicos.</p>
              <span className="mt-4 text-[10px] uppercase tracking-widest font-bold text-[#4db380]">Próximamente</span>
            </div>
            <div className="bg-white p-8 shadow-md border-b-4 border-[#4db380] flex flex-col items-center text-center">
              <Layers className="w-10 h-10 text-[#174532] mb-4" />
              <h3 className="text-lg font-display font-bold text-[#174532] mb-2">Creativos Visuales</h3>
              <p className="text-sm text-[#1b1b1b]/70 font-serif">Banners, imágenes y vídeos optimizados para conversión.</p>
              <span className="mt-4 text-[10px] uppercase tracking-widest font-bold text-[#4db380]">Próximamente</span>
            </div>
            <div className="bg-white p-8 shadow-md border-b-4 border-[#4db380] flex flex-col items-center text-center">
              <ExternalLink className="w-10 h-10 text-[#174532] mb-4" />
              <h3 className="text-lg font-display font-bold text-[#174532] mb-2">Guías de Estrategia</h3>
              <p className="text-sm text-[#1b1b1b]/70 font-serif">Aprende a construir puentes efectivos con nuestro contenido.</p>
              <span className="mt-4 text-[10px] uppercase tracking-widest font-bold text-[#4db380]">Próximamente</span>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="relative pt-20 pb-10 px-8 md:px-12 scroll-mt-24" id="join">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>🚀 ¿Cómo Empezar? (Pasos Simples)</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { title: "Regístrate en ClickBank", desc: "Si no tienes cuenta, créala gratis." },
              { title: "Obtén tus Enlaces", desc: "Usa la tabla de arriba para obtener tus enlaces personalizados para todos los productos FG Perspectiva." },
              { title: "Construye tu Contenido con Intención", desc: "Usa nuestros recursos para crear artículos, vídeos o emails que eduquen sobre 'construir activos digitales', no que solo 'vendan un libro'." },
              { title: "Comienza a Ganar", desc: "Cada vez que alguien entre a nuestro ecosistema a través de tu enlace y compre, recibirás tu comisión." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 shadow-md border-t-4 border-[#174532] flex flex-col gap-4 group hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 shrink-0 bg-[#174532] text-[#f4b925] flex items-center justify-center font-display font-bold text-lg group-hover:scale-110 transition-transform">{i + 1}</div>
                  <span className="font-display font-bold text-base text-[#174532]">{item.title}</span>
                </div>
                <p className="text-sm text-[#1b1b1b]/70 font-serif leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative pt-10 pb-20 px-8 md:px-12 border-t border-[#174532]/5">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>❓ Preguntas Frecuentes (FAQ)</SectionTitle>
          <div className="space-y-2">
            <FAQItem 
              question="¿Necesito experiencia previa en marketing de afiliados?" 
              answer="No es obligatoria, pero valoramos la intención de aprender. Si entiendes la filosofía de construir sistemas, tendrás una gran ventaja." 
            />
            <FAQItem 
              question="¿Puedo promocionar todos los productos de la biblioteca?" 
              answer="Sí. Puedes promocionar cualquier libro o el producto central 'Experto en PLR Premium'. La tabla superior tiene todos los enlaces." 
            />
            <FAQItem 
              question="¿Dónde recibo mis comisiones?" 
              answer="Todas las comisiones son gestionadas y pagadas directamente por ClickBank." 
            />
            <FAQItem 
              question="¿Hay un soporte para afiliados?" 
              answer="¡Por supuesto! Puedes contactarnos en <a href='mailto:afiliados@fgperspectiva.com' class='text-[#174532] font-bold underline hover:text-[#4db380] transition-colors'>afiliados@fgperspectiva.com</a> para cualquier duda o para recibir consejos de promoción." 
            />
            <FAQItem 
              question="¿Cuál es la mejor forma de empezar?" 
              answer="Te recomendamos empezar por un nicho que domines (ej. blogging, IA, marketing de contenidos), usar los artículos que te proporcionamos en el kit, y promocionar los libros de esa ruta como la solución estructurada que tu audiencia necesita." 
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
                <li><a href="https://fgperspectiva.vercel.app/#biblioteca" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Biblioteca</a></li>
                <li><a href="https://fgperspectiva.vercel.app/#sistemas" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sistemas</a></li>
                <li><a href="https://despertarindomable.blogspot.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blog</a></li>
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
              Enfoque
            </a>
            <a 
              href="#commissions" 
              onClick={(e) => scrollToSection(e, 'commissions')}
              className="hover:text-[#174532] transition-colors cursor-pointer py-2"
            >
              Comisiones
            </a>
            <a 
              href="#resources" 
              onClick={(e) => scrollToSection(e, 'resources')}
              className="hover:text-[#174532] transition-colors cursor-pointer py-2"
            >
              Recursos
            </a>
          </div>
          <a 
            href="#join" 
            onClick={(e) => scrollToSection(e, 'join')}
            className="bg-[#174532] text-[#f4b925] px-6 py-2.5 font-bold text-[10px] uppercase tracking-widest hover:bg-[#1f513a] transition-all shadow-md cursor-pointer"
          >
            Empezar
          </a>
        </div>
      </nav>
    </div>
  );
}
