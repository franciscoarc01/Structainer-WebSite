import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, Building2, Wrench, ArrowRight, ChevronRight } from 'lucide-react';

export function ProjectsPage() {
  // Array de imágenes disponibles desde assets
  const projectImages = [
    '/src/assets/img/wcs.jpeg',
    '/src/assets/img/bodega_teleton.jpeg',
    '/src/assets/img/cabina_ambiente_controlado.jpg',
    '/src/assets/img/comedor_industrial.jpeg',
    '/src/assets/img/contrucion_modular_prefebricada.jpg',
    '/src/assets/img/escuelas.jpeg',
    '/src/assets/img/habitacionales.jpeg',
    '/src/assets/img/laboratorio.jpg',
    '/src/assets/img/modulos_ventas.jpg',
    '/src/assets/img/oficinas_corporativas.jpeg'
  ];

  const projects = [
    {
      name: 'Complejo Industrial Automotriz',
      location: 'Querétaro, México',
      sector: 'Industrial Automotriz',
      solution: 'Nave industrial modular prefabricada + sistemas contra incendio',
      scope: [
        'Diseño e ingeniería estructural, eléctrica e hidrosanitaria',
        'Fabricación e instalación de 2,500 m² de estructura modular',
        'Sistema completo contra incendio (red hidráulica + detección)',
        'Mobiliario de oficinas administrativas y área de descanso'
      ],
      result: 'Entrega en 4.5 meses | 2,500 m² operativos | Certificación de protección civil aprobada',
      image: projectImages[4] // construcción modular
    },
    {
      name: 'Centro Logístico Farmacéutico',
      location: 'Estado de México',
      sector: 'Logística y Almacenamiento',
      solution: 'Almacén prefabricado con zona de temperatura controlada',
      scope: [
        'Ingeniería HVAC para áreas de clima controlado',
        'Construcción modular de almacén 3,800 m²',
        'Instalación de sistemas eléctricos y tierras físicas',
        'Equipamiento de andenes de carga y oficinas operativas'
      ],
      result: 'Construcción en 5 meses | Ahorro 35% vs. obra tradicional | Operación certificada NOM-059-SSA1',
      image: projectImages[1] // bodega teleton
    },
    {
      name: 'Campus Corporativo Regional',
      location: 'Monterrey, Nuevo León',
      sector: 'Corporativo',
      solution: 'Edificios modulares de oficinas llave en mano',
      scope: [
        'Planeación arquitectónica y gestoría de permisos',
        'Construcción de 3 edificios modulares (1,200 m² total)',
        'Instalaciones eléctricas, red de datos, HVAC y sanitarias',
        'Mobiliario ejecutivo, salas de juntas y espacios colaborativos'
      ],
      result: 'Entrega funcional en 6 meses | 120 estaciones de trabajo | Reducción 40% en tiempo de entrega',
      image: projectImages[9] // oficinas corporativas
    },
    {
      name: 'Planta de Procesamiento Alimenticio',
      location: 'Jalisco, México',
      sector: 'Industrial Alimentaria',
      solution: 'Nave industrial con áreas sanitarias certificadas',
      scope: [
        'Ingeniería de proceso y distribución de planta',
        'Instalación de paneles prefabricados insulados',
        'Sistemas contra incendio y detección de humo',
        'Pisos epóxicos industriales y acabados sanitarios'
      ],
      result: '4,200 m² construidos en 5.5 meses | Cumplimiento NOM-251-SSA1 | Aprobación COFEPRIS',
      image: projectImages[2] // cabina de ambiente controlado
    },
    {
      name: 'Estación de Bomberos Municipal',
      location: 'Guanajuato, México',
      sector: 'Gobierno e Infraestructura Pública',
      solution: 'Módulo operativo de respuesta rápida + dormitorios',
      scope: [
        'Diseño funcional para vehículos de emergencia',
        'Estructura modular prefabricada 850 m²',
        'Instalaciones eléctricas de emergencia y planta auxiliar',
        'Área de dormitorios, cocina, oficinas y torre de prácticas'
      ],
      result: 'Construcción en 3.5 meses | Operativa 24/7 desde entrega | Proyecto llave en mano gubernamental',
      image: projectImages[6] // habitacionales
    },
    {
      name: 'Showroom y Taller Automotriz Premium',
      location: 'Ciudad de México',
      sector: 'Comercial',
      solution: 'Estructura modular para exhibición y servicio técnico',
      scope: [
        'Diseño arquitectónico corporativo de marca',
        'Módulos de exhibición con fachada de cristal',
        'Taller de servicio con fosas y equipamiento especializado',
        'Sistema HVAC, iluminación LED y red eléctrica trifásica'
      ],
      result: '1,600 m² | Inauguración en 4 meses | Imagen corporativa premium con estructura modular',
      image: projectImages[8] // módulos ventas
    },
    {
      name: 'Complejo de Oficinas Temporales para Obra Civil',
      location: 'Veracruz, México',
      sector: 'Infraestructura',
      solution: 'Campamento modular móvil para supervisión de obra',
      scope: [
        'Módulos prefabricados transportables',
        'Oficinas administrativas, comedor y vestidores',
        'Instalaciones eléctricas provisionales y sanitarios',
        'Mantenimiento mensual durante 18 meses de operación'
      ],
      result: 'Instalación en 2 semanas | 450 m² | Reubicable | Contrato de mantenimiento integral',
      image: projectImages[3] // comedor industrial
    },
    {
      name: 'Centro de Distribución E-commerce',
      location: 'Tijuana, Baja California',
      sector: 'Logística',
      solution: 'Bodega modular con sistema de picking rápido',
      scope: [
        'Diseño de flujo logístico optimizado',
        'Estructura prefabricada de 5,000 m²',
        'Red eléctrica industrial y sistema de iluminación LED',
        'Equipamiento de estanterías y zona de empaque'
      ],
      result: 'Construcción en 6 meses | Capacidad 15,000 paquetes/día | Operación en tiempo récord',
      image: projectImages[1] // bodega teleton
    },
    {
      name: 'Laboratorio de Control de Calidad Industrial',
      location: 'Puebla, México',
      sector: 'Industrial',
      solution: 'Módulo técnico con control ambiental y seguridad',
      scope: [
        'Ingeniería de instalaciones especiales para laboratorio',
        'Construcción modular con aislamiento acústico y térmico',
        'Sistema HVAC de precisión y extracción de gases',
        'Mobiliario técnico y equipamiento de seguridad'
      ],
      result: '600 m² | Certificación ISO 17025 aprobada | Entrega funcional en 3 meses',
      image: projectImages[7] // laboratorio
    }
  ];

  const processPhases = [
    {
      number: '01',
      title: 'Planeación',
      description: 'Análisis de necesidades, levantamiento de sitio, definición de alcances y cronograma maestro.'
    },
    {
      number: '02',
      title: 'Gestoría',
      description: 'Trámites de permisos, licencias municipales, protección civil y normativas aplicables.'
    },
    {
      number: '03',
      title: 'Proyecto Ejecutivo',
      description: 'Desarrollo completo de ingenierías (estructural, eléctrica, hidrosanitaria, HVAC, contra incendio).'
    },
    {
      number: '04',
      title: 'Ejecución',
      description: 'Fabricación en planta, transporte, instalación en sitio y supervisión de obra.'
    },
    {
      number: '05',
      title: 'Mobiliario',
      description: 'Equipamiento interior: oficinas, áreas operativas, almacenes y zonas comunes.'
    },
    {
      number: '06',
      title: 'Seguridad',
      description: 'Instalación de sistemas contra incendio, detección de humo, señalética y equipos de emergencia.'
    },
    {
      number: '07',
      title: 'Entrega Final',
      description: 'Pruebas de sistemas, certificaciones, capacitación al cliente y puesta en marcha operativa.'
    },
    {
      number: '08',
      title: 'Postventa',
      description: 'Mantenimiento preventivo, correctivo, atención a garantías y soporte técnico continuo.'
    }
  ];

  const differentiators = [
    {
      title: 'Enfoque Llave en Mano 360°',
      description: 'Desde la planeación y gestoría normativa hasta equipamiento, certificación y postventa. Un solo interlocutor, responsabilidad total.'
    },
    {
      title: 'Reducción de Tiempos hasta 50%',
      description: 'Construcción modular prefabricada que permite fabricación simultánea en planta mientras se prepara el sitio. Entrega en fracciones del tiempo tradicional.'
    },
    {
      title: 'Cumplimiento Normativo Garantizado',
      description: 'Gestión integral de permisos, certificaciones de protección civil, cumplimiento NOM y aprobaciones sanitarias según sector.'
    },
    {
      title: 'Calidad Industrial Certificada',
      description: 'Fabricación en ambiente controlado, procesos certificados, inspecciones de calidad en cada fase y estructuras que cumplen códigos internacionales.'
    },
    {
      title: 'Soluciones Escalables y Reubicables',
      description: 'Módulos que crecen con tu operación. Capacidad de expansión futura sin afectar operaciones actuales. Estructuras relocalizables según necesidad.'
    },
    {
      title: 'Mantenimiento y Soporte Continuo',
      description: 'No terminamos en la entrega. Contratos de mantenimiento preventivo, correctivo, atención inmediata y garantías respaldadas por 8 divisiones especializadas.'
    }
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo tarda un proyecto modular vs. construcción tradicional?',
      answer: 'Un proyecto modular Structainer se entrega entre 40% y 50% más rápido que obra tradicional. Ejemplo: una nave industrial de 2,500 m² se ejecuta en 4-5 meses vs. 8-10 meses en construcción convencional, gracias a fabricación simultánea en planta mientras se prepara el terreno.'
    },
    {
      question: '¿Qué diferencia hay entre construcción modular y obra tradicional en calidad?',
      answer: 'La construcción modular ofrece mayor control de calidad al fabricarse en ambiente controlado de planta. Eliminamos variables climáticas, garantizamos precisión milimétrica y ejecutamos inspecciones de calidad en cada fase de manufactura. Las estructuras cumplen los mismos códigos de construcción que obra tradicional.'
    },
    {
      question: '¿Structainer gestiona permisos y cumplimiento normativo?',
      answer: 'Sí. Nuestro servicio llave en mano incluye gestoría completa: permisos municipales, licencias de construcción, certificaciones de protección civil, dictámenes estructurales y cumplimiento de normas oficiales mexicanas (NOM) según sector industrial.'
    },
    {
      question: '¿Qué garantías ofrecen y cómo funciona la atención postventa?',
      answer: 'Garantizamos estructura, instalaciones y sistemas por 12 meses desde entrega (extensible según contrato). Incluimos atención postventa con mantenimiento preventivo programado, correctivo de emergencia y soporte técnico multicanal. Contamos con 8 divisiones especializadas para respuesta inmediata.'
    },
    {
      question: '¿Puedo expandir o modificar mi proyecto en el futuro?',
      answer: 'Absolutamente. El diseño modular permite escalabilidad: añadir módulos, reubicar secciones o ampliar instalaciones sin afectar operaciones actuales. Planificamos proyectos considerando crecimiento futuro.'
    },
    {
      question: '¿Ofrecen mantenimiento para proyectos ya entregados?',
      answer: 'Sí. Ofrecemos contratos de mantenimiento integral (preventivo y correctivo) para instalaciones, sistemas contra incendio, HVAC, estructuras y mobiliario. Planes mensuales, trimestrales o anuales con atención prioritaria.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1623428454598-1bfe414bac03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3RlZWwlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY2Nzk0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="mb-6">Proyectos que Transforman Operaciones</h1>
            <p className="text-xl text-gray-300 mb-8">
              Construcción modular llave en mano para industria, corporativos, logística y gobierno.
              Entregamos infraestructura operativa, certificada y lista para producir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-center transition-colors"
              >
                Solicitar Cotización
              </Link>
              <Link
                to="/contact"
                className="inline-block border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 text-center transition-colors"
              >
                Agendar Llamada
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">+150 proyectos entregados</p>
                  <p className="text-gray-400 text-sm">Industrial, corporativo, logística</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">40-50% menos tiempo</p>
                  <p className="text-gray-400 text-sm">vs. construcción tradicional</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Servicio 360° llave en mano</p>
                  <p className="text-gray-400 text-sm">Planeación, ejecución, postventa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">¿Qué tipo de proyectos realizamos?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Structainer V Group es un holding especializado en <strong>construcción modular prefabricada,
              obra industrial, ingeniería integral y mantenimiento</strong> para proyectos B2B de mediana y gran escala.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Operamos en los sectores <strong>industrial, corporativo, logístico, comercial y gubernamental</strong>,
              entregando infraestructura funcional, certificada y lista para operar bajo el modelo llave en mano 360°.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Resolvemos</strong> la necesidad de espacios operativos rápidos, seguros, escalables y con cumplimiento
              normativo garantizado, eliminando los retrasos, sobrecostos y riesgos de la construcción tradicional.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Nuestros Proyectos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Casos reales que demuestran nuestra capacidad operativa en construcción modular,
              ingeniería integral y entrega llave en mano. Datos editables según proyectos específicos del cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 hover:border-gray-900 transition-colors overflow-hidden">
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
                    <h3 className="mb-3">{project.name}</h3>
                    <div className="flex flex-col gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{project.sector}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wrench className="w-4 h-4" />
                        <span>{project.solution}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-medium text-gray-900 mb-3">Alcance del proyecto:</p>
                    <ul className="space-y-2">
                      {project.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-gray-50 border-l-4 border-yellow-600">
                    <p className="text-sm font-medium text-gray-900">{project.result}</p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-gray-900 hover:text-yellow-600 font-medium transition-colors"
                  >
                    Solicitar un proyecto similar
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200">
            <p className="text-sm text-gray-700">
              <strong>Nota:</strong> Los proyectos mostrados son ejemplos referenciales con datos editables.
              Representan el tipo de soluciones que Structainer V Group ejecuta. Para casos específicos,
              portafolio completo o referencias verificables, contacta directamente al equipo comercial.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Cómo Desarrollamos Cada Proyecto</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Modelo de 8 fases que garantiza control total desde la planificación inicial hasta el soporte postventa.
              Un solo interlocutor, responsabilidad 360°, entrega garantizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processPhases.map((phase, index) => (
              <div key={index} className="border border-gray-200 p-6 hover:border-gray-900 transition-colors">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 border-2 border-gray-900">
                    <span className="text-2xl font-light">{phase.number}</span>
                  </div>
                </div>
                <h3 className="mb-3 text-lg">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Por Qué Elegir Structainer V Group</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Diferenciales operativos orientados a decisión B2B. No promesas de marketing: capacidad real, resultados medibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 p-8 hover:border-yellow-600 transition-colors">
                <h3 className="mb-4 text-xl text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600">
              Respuestas directas a las objeciones y dudas más comunes de clientes B2B.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 p-8 hover:border-gray-900 transition-colors">
                <h3 className="mb-4 text-lg text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-yellow-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">¿Listo para Iniciar tu Proyecto?</h2>
          <p className="text-xl mb-8">
            Solicita una cotización sin compromiso o agenda una llamada técnica con nuestro equipo.
            <strong> Te respondemos en 24-48 horas</strong> con propuesta preliminar, cronograma estimado y siguiente paso comercial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-gray-900 hover:bg-black text-white px-10 py-4 text-lg transition-colors"
            >
              Solicitar Cotización
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-white hover:bg-white hover:text-yellow-600 text-white px-10 py-4 text-lg transition-colors"
            >
              Agendar Llamada Técnica
            </Link>
          </div>
          <p className="mt-8 text-sm text-yellow-100">
            Promesa de respuesta: 24-48 horas hábiles | Atención comercial especializada | Sin compromisos iniciales
          </p>
        </div>
      </section>
    </div>
  );
}
