import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Building2,
  Wrench,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Factory,
  GraduationCap,
  Heart,
  Landmark,
  Mountain,
  Car,
  Award,
  Clock,
  Target,
  TrendingUp,
  CheckCircle2,
  Shield,
  Zap
} from 'lucide-react';

export function ProjectsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Métricas de impacto
  const impactStats = [
    { number: '150+', label: 'Proyectos completados', icon: Award },
    { number: '60%', label: 'Reducción de tiempo promedio', icon: Clock },
    { number: '9', label: 'Sectores industriales', icon: Target },
    { number: '5+', label: 'Años de experiencia', icon: TrendingUp }
  ];

  // Proyectos reales de Structainer V Group
  const projects = [
    {
      name: 'Centro Geriátrico Sinankay',
      location: 'Jurica, Querétaro',
      sector: 'Salud',
      solution: 'Infraestructura modular para centro de atención geriátrica',
      scope: [
        'Módulos habitacionales y de atención médica',
        'Instalaciones hidrosanitarias y eléctricas certificadas',
        'Áreas comunes, comedores y espacios de rehabilitación'
      ],
      result: 'Espacio entregado funcional y listo para operar según requerimientos del cliente.',
      image: '/src/assets/img/habitacionales.jpeg'
    },
    {
      name: 'Colegio John F. Kennedy',
      location: 'Jurica, Querétaro',
      sector: 'Educativo',
      solution: 'Aulas modulares y edificios educativos',
      scope: [
        'Aulas prefabricadas con mobiliario educativo',
        'Instalaciones eléctricas, iluminación y ventilación',
        'Áreas administrativas y espacios comunes'
      ],
      result: 'Espacio entregado funcional y listo para operar según requerimientos del cliente.',
      image: '/src/assets/img/escuelas.jpeg'
    },
    {
      name: 'Proyecto Zakia / Zevana',
      location: 'Querétaro',
      sector: 'Corporativo',
      solution: 'Oficinas modulares y casetas de ventas',
      scope: [
        'Módulos de oficinas administrativas',
        'Casetas de ventas y atención a clientes',
        'Instalaciones completas llave en mano'
      ],
      result: 'Espacio entregado funcional y listo para operar según requerimientos del cliente.',
      image: '/src/assets/img/modulos_ventas.jpg'
    },
    {
      name: 'GKN',
      location: 'Celaya, Guanajuato',
      sector: 'Industrial',
      solution: 'Infraestructura modular para planta industrial automotriz',
      scope: [
        'Módulos de oficinas y áreas administrativas',
        'Instalaciones industriales certificadas',
        'Sistemas eléctricos y de seguridad'
      ],
      result: 'Espacio entregado funcional y listo para operar según requerimientos del cliente.',
      image: '/src/assets/img/oficinas_corporativas.jpeg'
    },
    {
      name: 'KS',
      location: 'Celaya, Guanajuato',
      sector: 'Industrial',
      solution: 'Soluciones modulares para operaciones industriales',
      scope: [
        'Infraestructura modular industrial',
        'Instalaciones operativas certificadas',
        'Equipamiento y sistemas integrados'
      ],
      result: 'Espacio entregado funcional y listo para operar según requerimientos del cliente.',
      image: '/src/assets/img/contrucion_modular_prefebricada.jpg'
    },
    {
      name: 'NIVEA',
      location: 'Silao, Guanajuato',
      sector: 'Industrial',
      solution: 'Infraestructura modular para planta de manufactura',
      scope: [
        'Módulos operativos y administrativos',
        'Instalaciones con acabados industriales',
        'Sistemas de climatización y servicios'
      ],
      result: 'Espacio entregado funcional y listo para operar según requerimientos del cliente.',
      image: '/src/assets/img/oficinas_corporativas.jpeg'
    },
    {
      name: 'Proyecto La Ruina',
      location: 'Hermosillo, Sonora',
      sector: 'Corporativo',
      solution: 'Oficinas modulares y espacios operativos',
      scope: [
        'Módulos de oficinas corporativas',
        'Instalaciones completas y mobiliario',
        'Sistemas eléctricos y climatización'
      ],
      result: 'Espacio entregado funcional y listo para operar según requerimientos del cliente.',
      image: '/src/assets/img/oficinas_corporativas.jpeg'
    },
    {
      name: 'Proyecto La Griega',
      location: 'El Marqués, Querétaro',
      sector: 'Corporativo',
      solution: 'Infraestructura modular corporativa',
      scope: [
        'Oficinas administrativas modulares',
        'Instalaciones y equipamiento completo',
        'Entrega llave en mano'
      ],
      result: 'Espacio entregado funcional y listo para operar según requerimientos del cliente.',
      image: '/src/assets/img/oficinas_corporativas.jpeg'
    },
    {
      name: 'Teletón',
      location: 'Estado de México',
      sector: 'Institucional',
      solution: 'Bodegas y espacios operativos modulares',
      scope: [
        'Módulos de almacenamiento y logística',
        'Infraestructura modular funcional',
        'Instalaciones certificadas'
      ],
      result: 'Espacio entregado funcional y listo para operar según requerimientos del cliente.',
      image: '/src/assets/img/bodega_teleton.jpeg'
    }
  ];

  // Sectores atendidos
  const sectors = [
    {
      title: 'INDUSTRIAL / AUTOMOTRIZ',
      icon: Factory,
      description: 'Plantas de manufactura, almacenes y centros de distribución',
      projects: 'GKN, KS, NIVEA'
    },
    {
      title: 'CORPORATIVO / OFICINAS',
      icon: Building2,
      description: 'Oficinas administrativas, casetas de ventas y espacios corporativos',
      projects: 'Zakia, La Ruina, La Griega'
    },
    {
      title: 'EDUCATIVO / CAPACITACIÓN',
      icon: GraduationCap,
      description: 'Aulas, talleres técnicos y centros de formación',
      projects: 'Colegio John F. Kennedy'
    },
    {
      title: 'SALUD / CLÍNICO',
      icon: Heart,
      description: 'Clínicas, consultorios y centros de atención médica',
      projects: 'Centro Geriátrico Sinankay'
    },
    {
      title: 'INSTITUCIONAL / GUBERNAMENTAL',
      icon: Landmark,
      description: 'Proyectos para instituciones y organismos públicos',
      projects: 'Teletón'
    },
    {
      title: 'MINERÍA / ALTA MONTAÑA',
      icon: Mountain,
      description: 'Campamentos, comedores y dormitorios en zonas remotas',
      projects: 'En desarrollo'
    }
  ];

  const processPhases = [
    {
      number: '01',
      title: 'PLANEACIÓN Y LEVANTAMIENTO TÉCNICO',
      description: 'Análisis de necesidades, levantamiento de sitio, definición de alcances y cronograma maestro.'
    },
    {
      number: '02',
      title: 'GESTORÍA Y NORMATIVIDAD',
      description: 'Trámites de permisos, licencias municipales, protección civil y normativas aplicables.'
    },
    {
      number: '03',
      title: 'PROYECTO EJECUTIVO E INGENIERÍAS',
      description: 'Desarrollo completo de ingenierías (estructural, eléctrica, hidrosanitaria, HVAC, contra incendio).'
    },
    {
      number: '04',
      title: 'FABRICACIÓN Y EJECUCIÓN EN SITIO',
      description: 'Fabricación en planta, transporte, instalación en sitio y supervisión de obra.'
    },
    {
      number: '05',
      title: 'EQUIPAMIENTO Y MOBILIARIO',
      description: 'Equipamiento interior: oficinas, áreas operativas, almacenes y zonas comunes.'
    },
    {
      number: '06',
      title: 'SISTEMAS DE SEGURIDAD',
      description: 'Instalación de sistemas contra incendio, detección de humo, señalética y equipos de emergencia.'
    },
    {
      number: '07',
      title: 'ENTREGA Y PUESTA EN MARCHA',
      description: 'Pruebas de sistemas, certificaciones, capacitación al cliente y puesta en marcha operativa.'
    },
    {
      number: '08',
      title: 'SOPORTE POSTVENTA Y MANTENIMIENTO',
      description: 'Mantenimiento preventivo, correctivo, atención a garantías y soporte técnico continuo.'
    }
  ];

  // Por qué elegirnos
  const advantages = [
    {
      icon: CheckCircle2,
      title: 'EXPERIENCIA COMPROBADA',
      description: '150+ proyectos completados en múltiples sectores industriales, corporativos e institucionales.'
    },
    {
      icon: Wrench,
      title: 'MODELO 360° LLAVE EN MANO',
      description: 'Desde gestoría y permisos hasta instalación, equipamiento y soporte postventa. Sin intermediarios.'
    },
    {
      icon: Shield,
      title: 'CUMPLIMIENTO NORMATIVO GARANTIZADO',
      description: 'Todos los proyectos certificados bajo NOM aplicables, protección civil y normativas sectoriales.'
    },
    {
      icon: Zap,
      title: 'REDUCCIÓN DOCUMENTADA DE TIEMPOS',
      description: 'Hasta 60% menos tiempo vs. construcción tradicional. Fabricación simultánea en planta controlada.'
    }
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo tarda un proyecto modular vs. construcción tradicional?',
      answer: 'La construcción modular permite fabricación simultánea en planta mientras se prepara el terreno, lo que reduce significativamente los tiempos de entrega en comparación con obra tradicional.'
    },
    {
      question: '¿Structainer gestiona permisos y cumplimiento normativo?',
      answer: 'Sí. Nuestro servicio llave en mano incluye gestoría completa: permisos municipales, licencias de construcción, certificaciones de protección civil y cumplimiento de normativas según sector.'
    },
    {
      question: '¿Qué garantías ofrecen y cómo funciona la atención postventa?',
      answer: 'Ofrecemos garantías sobre estructura, instalaciones y sistemas desde entrega. Incluimos atención postventa con mantenimiento preventivo programado, correctivo de emergencia y soporte técnico.'
    },
    {
      question: '¿Puedo expandir o modificar mi proyecto en el futuro?',
      answer: 'Sí. El diseño modular permite escalabilidad: añadir módulos, reubicar secciones o ampliar instalaciones sin afectar operaciones actuales.'
    }
  ];

  return (
    <div>
      {/* Hero Section - REDISEÑADO */}
      <section className="relative bg-gray-900 text-white py-32 border-b-4 border-yellow-600">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1623428454598-1bfe414bac03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3RlZWwlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY2Nzk0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-none tracking-tight">
              PROYECTOS EJECUTADOS
            </h1>
            <div className="border-t-4 border-b-4 border-yellow-600 py-8 mb-8">
              <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
                INFRAESTRUCTURA MODULAR E INDUSTRIAL CERTIFICADA Y LISTA PARA OPERAR
              </p>
            </div>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Casos reales de proyectos para industria, corporativos, educación, salud e instituciones, ejecutados bajo modelo llave en mano con control técnico y normativo total.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-10 py-5 text-center transition-colors text-lg"
              >
                Solicitar cotización
              </Link>
              <Link
                to="/contact"
                className="inline-block border-4 border-white hover:bg-white hover:text-gray-900 text-white font-bold px-10 py-5 text-center transition-colors text-lg"
              >
                Agendar llamada técnica
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: IMPACTO EN NÚMEROS */}
      <section className="py-20 bg-white border-b-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">IMPACTO EN NÚMEROS</h2>
            <p className="text-gray-600 text-lg">Resultados medibles y verificables</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-gray-900" />
                <div className="text-5xl md:text-6xl font-black mb-2 text-gray-900">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: SECTORES ATENDIDOS */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">SECTORES ATENDIDOS</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Experiencia comprobada en múltiples industrias y aplicaciones especializadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-900 p-8 hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                <sector.icon className="w-16 h-16 mb-6 text-gray-900 group-hover:text-yellow-600 transition-colors" />
                <h3 className="text-xl font-black mb-4 uppercase tracking-wide">{sector.title}</h3>
                <p className="text-gray-700 group-hover:text-gray-300 mb-4">{sector.description}</p>
                <div className="pt-4 border-t-2 border-gray-300 group-hover:border-gray-700">
                  <p className="text-sm font-semibold text-gray-600 group-hover:text-yellow-400">
                    Ejemplo: {sector.projects}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Reales - REDISEÑADO */}
      <section className="py-28 bg-white border-t-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">PROYECTOS EJECUTADOS</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Casos reales que demuestran nuestra capacidad operativa en construcción modular e ingeniería integral
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-900 hover:border-4 hover:border-yellow-600 transition-all overflow-hidden"
              >
                {/* Imagen del proyecto */}
                <div className="w-full h-64 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Contenido del proyecto */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-black mb-4">{project.name}</h3>
                    <div className="flex flex-col gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-semibold">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-semibold">Sector: {project.sector}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wrench className="w-4 h-4" />
                        <span className="font-semibold">{project.solution}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-black text-gray-900 mb-3 uppercase text-sm">Alcance del proyecto:</p>
                    <ul className="space-y-2">
                      {project.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0 text-yellow-600" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-gray-50 border-l-4 border-yellow-600">
                    <p className="text-sm font-black text-gray-900 uppercase mb-2">Resultado operativo:</p>
                    <p className="text-sm text-gray-700">{project.result}</p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-gray-900 hover:text-yellow-600 font-bold transition-colors"
                  >
                    Solicitar proyecto similar
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de 8 Fases - REDISEÑADO */}
      <section className="py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">CÓMO DESARROLLAMOS CADA PROYECTO</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Modelo de 8 fases que garantiza control total desde la planificación inicial hasta el soporte postventa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processPhases.map((phase, index) => (
              <div
                key={index}
                className="bg-gray-800 border-2 border-gray-700 p-6 hover:border-4 hover:border-yellow-600 transition-all"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 border-4 border-yellow-600 bg-gray-900">
                    <span className="text-3xl font-black text-yellow-600">{phase.number}</span>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-black uppercase leading-tight">{phase.title}</h3>
                <p className="text-gray-300 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: POR QUÉ ELEGIRNOS */}
      <section className="py-28 bg-white border-t-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">POR QUÉ ELEGIR STRUCTAINER V GROUP</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Diferenciales operativos que generan valor real en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((item, index) => (
              <div key={index} className="border-2 border-gray-900 p-8 hover:bg-gray-900 hover:text-white transition-all group">
                <item.icon className="w-12 h-12 mb-6 text-gray-900 group-hover:text-yellow-600 transition-colors" />
                <h3 className="mb-4 text-xl font-black uppercase">{item.title}</h3>
                <p className="text-gray-700 group-hover:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs - REDISEÑADO */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">PREGUNTAS FRECUENTES</h2>
            <p className="text-gray-600 text-lg">
              Respuestas directas a las dudas más comunes de clientes B2B
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-gray-900 hover:border-yellow-600 transition-colors">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-black text-gray-900 pr-8">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-900 flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 border-t-2 border-gray-200">
                    <p className="text-gray-700 pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - REDISEÑADO */}
      <section className="bg-white py-32 border-t-8 border-yellow-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest font-bold text-gray-900 mb-8">
            LISTO PARA INICIAR TU PROYECTO
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
            ¿NECESITAS UN PROYECTO SIMILAR?
          </h2>
          <p className="text-xl mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Solicita una cotización técnica o agenda una llamada con nuestro equipo de ingeniería. Te damos un siguiente paso claro y un plan de ejecución concreto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold px-12 py-5 text-lg transition-colors"
            >
              Solicitar cotización
            </Link>
            <Link
              to="/contact"
              className="inline-block border-4 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold px-12 py-5 text-lg transition-colors"
            >
              Agendar llamada técnica
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
