import { Link } from 'react-router-dom';
import { CheckCircle2, Factory, Wrench, Key, ShieldCheck, Building2, HardHat, GraduationCap, Heart, ShoppingBag, Calendar, Award, Clock, Users, TrendingUp, Check, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Barra de confianza - Prueba social
  const trustIndicators = [
    { icon: CheckCircle2, text: '+5 años en proyectos industriales' },
    { icon: Factory, text: 'Fabricación propia' },
    { icon: ShieldCheck, text: 'Cumplimiento normativo' },
    { icon: Key, text: 'Soluciones llave en mano' }
  ];

  // Números y métricas
  const metrics = [
    { number: '150+', label: 'Proyectos completados', icon: Award },
    { number: '45,000m²', label: 'Construidos', icon: Building2 },
    { number: '60%', label: 'Más rápido que construcción tradicional', icon: Clock },
    { number: '85%', label: 'Clientes recurrentes', icon: Users }
  ];

  // Clientes
  const clients = [
    { name: 'Amazon México', logo: 'https://logo.clearbit.com/amazon.com.mx' },
    { name: 'NIVEA', logo: 'https://logo.clearbit.com/nivea.com' },
    { name: 'Hertz México', logo: 'https://logo.clearbit.com/hertz.com.mx' },
    { name: 'GKN Automotive', logo: 'https://logo.clearbit.com/gknautomotive.com' },
    { name: 'Farmacias Guadalajara', logo: 'https://logo.clearbit.com/farmaciasguadalajara.com' },
    { name: 'Asturiano', logo: null },
    { name: 'Tres Banderas', logo: null },
    { name: 'ZARÚ Residencial', logo: null },
    { name: 'Gatores', logo: null }
  ];

  // Certificaciones
  const certifications = [
    'NOM-001-SEDE (Instalaciones Eléctricas)',
    'NOM-002-STPS (Seguridad y Prevención)',
    'Código de Edificación Local',
    'Certificación ISO 9001 (en proceso)',
    'Normativa contra incendios',
    'Cumplimiento ambiental'
  ];

  // Comparativa
  const comparison = [
    { aspect: 'Tiempo de ejecución', traditional: '8-12 meses', modular: '3-5 meses', better: 'modular' },
    { aspect: 'Control de calidad', traditional: 'Variable en sitio', modular: 'Controlado en planta', better: 'modular' },
    { aspect: 'Impacto climático', traditional: 'Alto (obra abierta)', modular: 'Mínimo (prefabricado)', better: 'modular' },
    { aspect: 'Flexibilidad futura', traditional: 'Limitada', modular: 'Reubicable/ampliable', better: 'modular' },
    { aspect: 'Desperdicio material', traditional: '15-20%', modular: '5-8%', better: 'modular' },
    { aspect: 'Supervisión requerida', traditional: 'Constante en sitio', modular: 'Reducida (planta+montaje)', better: 'modular' }
  ];

  // FAQs
  const faqs = [
    {
      question: '¿Cuánto tiempo toma fabricar e instalar un proyecto modular?',
      answer: 'Depende del alcance, pero en promedio entregamos 60% más rápido que construcción tradicional. Un proyecto típico de 500m² puede estar listo en 3-4 meses desde aprobación de diseño hasta entrega funcional.'
    },
    {
      question: '¿Los módulos cumplen con todas las normativas mexicanas?',
      answer: 'Sí, todos nuestros proyectos cumplen con NOM vigentes, códigos de edificación locales y normativas específicas del sector. Gestionamos permisos y certificaciones como parte del servicio llave en mano.'
    },
    {
      question: '¿Qué tan personalizables son los diseños?',
      answer: 'Altamente personalizables. Aunque trabajamos con sistemas modulares estandarizados, cada proyecto se adapta a especificaciones técnicas, imagen corporativa y necesidades operativas del cliente.'
    },
    {
      question: '¿Qué incluye el servicio llave en mano?',
      answer: 'Desde planeación, permisos, diseño ejecutivo, fabricación, obra civil, instalaciones (eléctrica, HVAC, hidráulica, contra incendio), hasta entrega final con pruebas y puesta en marcha. Todo con un solo responsable.'
    },
    {
      question: '¿Ofrecen garantía y mantenimiento?',
      answer: 'Sí, incluimos garantía estructural y de instalaciones, además de planes de mantenimiento programado y respuesta técnica para asegurar continuidad operativa.'
    },
    {
      question: '¿Los módulos son permanentes o temporales?',
      answer: 'Ambos. Diseñamos para instalación permanente con cimentación definitiva, o para configuraciones temporales/reubicables según necesidad del proyecto.'
    },
    {
      question: '¿Cómo se comparan los costos vs construcción tradicional?',
      answer: 'El costo por m² es competitivo, y al considerar reducción de tiempos, menor supervisión, predictibilidad y menor desperdicio, el ROI suele ser superior. Cada proyecto se cotiza según especificaciones.'
    }
  ];

  // Sectores que atendemos
  const sectors = [
    {
      icon: HardHat,
      title: 'Minería',
      application: 'Campamentos, dormitorios, sanitarios'
    },
    {
      icon: Factory,
      title: 'Industria & energía',
      application: 'Oficinas, mantenimiento'
    },
    {
      icon: Building2,
      title: 'Automotriz',
      application: 'Capacitación, inspección'
    },
    {
      icon: GraduationCap,
      title: 'Educación',
      application: 'Aulas y laboratorios'
    },
    {
      icon: Heart,
      title: 'Salud',
      application: 'Clínicas y módulos médicos'
    },
    {
      icon: Wrench,
      title: 'Construcción',
      application: 'Oficinas de obra'
    },
    {
      icon: Calendar,
      title: 'Eventos',
      application: 'Módulos temporales'
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      application: 'Puntos de venta'
    }
  ];

  // Casos de éxito
  const successCases = [
    {
      title: 'Campamento minero de alta montaña',
      sector: 'Minería',
      scope: 'Dormitorios, comedores y sanitarios para 120 personas',
      result: 'Entregado en 4 meses en condiciones climáticas extremas',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1200'
    },
    {
      title: 'Centro de capacitación automotriz',
      sector: 'Automotriz',
      scope: 'Aulas técnicas, talleres y oficinas administrativas',
      result: 'Instalación operativa en 3 meses',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200'
    },
    {
      title: 'Oficinas corporativas modulares',
      sector: 'Industria',
      scope: 'Espacios de trabajo, salas de juntas y áreas comunes',
      result: 'Reducción de 50% en tiempo de construcción',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200'
    }
  ];

  // Diferencial competitivo
  const differentiators = [
    {
      title: 'Modelo llave en mano real',
      description: 'Gestión integral sin intermediarios ni coordinación externa.'
    },
    {
      title: 'Reducción de tiempos de ejecución',
      description: 'Fabricación simultánea y estandarizada que acelera entrega.'
    },
    {
      title: 'Ingeniería integrada',
      description: 'Equipos técnicos propios para control total del proyecto.'
    },
    {
      title: 'Fabricación controlada',
      description: 'Producción en planta con supervisión de calidad permanente.'
    },
    {
      title: 'Cumplimiento normativo',
      description: 'Adherencia certificada a NOM, códigos locales y estándares.'
    },
    {
      title: 'Acompañamiento postventa',
      description: 'Mantenimiento programado y respuesta técnica garantizada.'
    }
  ];

  // Proceso - Cómo trabajamos
  const processSteps = [
    {
      number: '01',
      title: 'Planeación y factibilidades',
      description: 'Análisis de requerimientos, sitio y viabilidad técnica.'
    },
    {
      number: '02',
      title: 'Gestoría y permisos',
      description: 'Tramitología completa ante autoridades competentes.'
    },
    {
      number: '03',
      title: 'Proyecto ejecutivo',
      description: 'Ingeniería detallada, especificaciones y documentación técnica.'
    },
    {
      number: '04',
      title: 'Fabricación y obra',
      description: 'Manufactura modular y trabajos en sitio simultaneos.'
    },
    {
      number: '05',
      title: 'Instalaciones y equipamiento',
      description: 'Integración de sistemas eléctricos, HVAC y especiales.'
    },
    {
      number: '06',
      title: 'Entrega y puesta en marcha',
      description: 'Verificación final, pruebas y habilitación operativa.'
    },
    {
      number: '07',
      title: 'Postventa y mantenimiento',
      description: 'Seguimiento técnico y servicios de continuidad.'
    }
  ];

  return (
    <div>
      {/* 1. HERO PRINCIPAL */}
      <section className="relative bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1759647028384-1efcc6e0eff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2R1bGFyJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY2Nzk0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              CONSTRUCCIÓN MODULAR PREFABRICADA CON INGENIERÍA MEXICANA
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Diseñamos, fabricamos y ejecutamos proyectos de construcción modular e industrial bajo un modelo llave en mano, integrando ingeniería precisa, estructuras metálicas y sistemas prefabricados para operaciones seguras, eficientes y listas para operar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-10 py-4 transition-colors text-lg text-center"
              >
                Solicitar asesoría técnica
              </Link>
              <Link
                to="/projects"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-10 py-4 transition-colors text-lg text-center"
              >
                Ver proyectos realizados
              </Link>
            </div>
            <p className="mt-6 text-yellow-400 text-lg font-semibold">
              ⚡ 60% más rápido que construcción tradicional
            </p>
          </div>
        </div>
      </section>

      {/* 2. BARRA DE CONFIANZA / PRUEBA SOCIAL */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustIndicators.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-gray-900 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5. NÚMEROS Y MÉTRICAS */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
                <div className="text-4xl md:text-5xl font-bold mb-2">{metric.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTORES QUE ATENDEMOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SECTORES QUE ATENDEMOS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 hover:border-gray-900 transition-colors">
                <sector.icon className="w-8 h-8 mb-3 text-gray-900" />
                <h3 className="text-lg font-bold mb-2">{sector.title}</h3>
                <p className="text-sm text-gray-600">{sector.application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5. CLIENTES */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CLIENTES</h2>
            <p className="text-gray-600 text-lg">Empresas que confían en nuestras soluciones</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div className={client.logo ? 'hidden text-center' : 'text-center'}>
                  <span className="text-gray-700 font-semibold text-sm">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.7. CASOS DE ÉXITO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">PROYECTOS DESTACADOS</h2>
            <p className="text-gray-600 text-lg">Casos de éxito que demuestran nuestra capacidad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successCases.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 overflow-hidden hover:border-gray-900 transition-colors">
                <div className="relative h-56 bg-gray-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-yellow-600 text-white text-xs font-semibold px-3 py-1">
                      {project.sector}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{project.scope}</p>
                  <p className="text-gray-900 font-semibold text-sm">✓ {project.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-3 transition-colors"
            >
              Ver todos los proyectos →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CERTIFICACIONES Y NORMATIVAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CERTIFICACIONES Y CUMPLIMIENTO NORMATIVO</h2>
            <p className="text-gray-600 text-lg">Adherencia a estándares mexicanos e internacionales</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 border border-gray-200 p-6">
                <ShieldCheck className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5. DIFERENCIAL COMPETITIVO – POR QUÉ ELEGIRNOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">POR QUÉ ELEGIRNOS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.7. COMPARATIVA: TRADICIONAL VS MODULAR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CONSTRUCCIÓN TRADICIONAL VS MODULAR</h2>
            <p className="text-gray-600 text-lg">Comparativa de ventajas competitivas</p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-4 font-bold">ASPECTO</th>
                  <th className="text-left p-4 font-bold">TRADICIONAL</th>
                  <th className="text-left p-4 font-bold bg-yellow-600">MODULAR</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-4 font-semibold">{item.aspect}</td>
                    <td className="p-4 text-gray-600">{item.traditional}</td>
                    <td className="p-4 bg-yellow-50 font-semibold text-gray-900">{item.modular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. CÓMO TRABAJAMOS – PROCESO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CÓMO TRABAJAMOS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 border-2 border-gray-900 flex items-center justify-center">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.5. PREGUNTAS FRECUENTES */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">PREGUNTAS FRECUENTES</h2>
            <p className="text-gray-600 text-lg">Respuestas a las dudas más comunes sobre construcción modular</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA COMERCIAL FINAL */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿TIENES UN PROYECTO INDUSTRIAL O MODULAR EN PUERTA?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Habla con un asesor técnico
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-10 py-4 transition-colors text-lg"
          >
            Solicitar asesoría técnica
          </Link>
        </div>
      </section>
    </div>
  );
}
