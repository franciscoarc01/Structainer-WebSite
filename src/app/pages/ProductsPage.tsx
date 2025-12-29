import { Link } from 'react-router-dom';
import { CheckCircle2, Package, Ruler, Shield, Clock, ArrowRight, ChevronRight } from 'lucide-react';

export function ProductsPage() {
  const modulosPrefabricados = [
    {
      name: 'Módulo Estándar 2.44 x 2.44 m',
      uso: 'Unidad base para oficinas, vigilancia, control de acceso',
      capacidad: '1-2 personas',
      aplicaciones: 'Casetas de vigilancia, oficinas de campo, control vehicular',
      beneficios: 'Instalación inmediata, movilidad total, bajo costo operativo'
    },
    {
      name: 'Módulo 2.44 x 4.00 m',
      uso: 'Oficina individual, sala de juntas pequeña, archivo',
      capacidad: '2-4 personas',
      aplicaciones: 'Oficinas administrativas, punto de atención, sala de espera',
      beneficios: 'Espacio funcional optimizado, equipamiento completo incluido'
    },
    {
      name: 'Módulo 2.44 x 6.00 m',
      uso: 'Oficina compartida, aula, consultorio médico',
      capacidad: '4-8 personas',
      aplicaciones: 'Oficinas operativas, aulas educativas, consultorios',
      beneficios: 'Versatilidad de uso, divisiones internas personalizables'
    },
    {
      name: 'Conjuntos Modulares Ensamblados',
      uso: 'Campus corporativos, complejos educativos, centros de salud',
      capacidad: 'Variable según diseño',
      aplicaciones: 'Oficinas corporativas, escuelas, clínicas, centros operativos',
      beneficios: 'Escalabilidad ilimitada, configuración a medida, expansión futura'
    },
    {
      name: 'Módulos para Oficina',
      uso: 'Espacios administrativos equipados llave en mano',
      capacidad: '1-12 personas por módulo',
      aplicaciones: 'Corporativos, obra, ventas, administración',
      beneficios: 'Instalaciones completas, mobiliario incluido, operación inmediata'
    },
    {
      name: 'Módulos Habitacionales',
      uso: 'Dormitorios, campamentos, vivienda temporal',
      capacidad: '1-4 literas por módulo',
      aplicaciones: 'Campamentos mineros, obra civil, personal operativo',
      beneficios: 'Confort garantizado, cumplimiento NOM-STPS, climatización incluida'
    },
    {
      name: 'Módulos para Clínica o Laboratorio',
      uso: 'Consultorios, laboratorios de análisis, salas de curación',
      capacidad: 'Según especialidad médica',
      aplicaciones: 'Clínicas industriales, laboratorios de campo, unidades móviles de salud',
      beneficios: 'Acabados sanitarios, instalaciones médicas certificadas, control ambiental'
    },
    {
      name: 'Módulos Sanitarios y Regaderas',
      uso: 'Baños completos, regaderas industriales, vestidores',
      capacidad: '2-8 WC por módulo',
      aplicaciones: 'Plantas industriales, campamentos, eventos, obra',
      beneficios: 'Cumplimiento NOM-STPS-001, instalación rápida, mantenimiento incluido'
    }
  ];

  const casetasOficinas = [
    {
      name: 'Oficina 8\'x20\'',
      uso: 'Oficina individual, punto de control, caseta de ventas',
      capacidad: '1-3 personas',
      ventajas: 'Instalación en 2-3 días, totalmente equipada, reubicable',
      sectores: 'Construcción, ventas inmobiliarias, seguridad industrial'
    },
    {
      name: 'Oficina 8\'x24\'',
      uso: 'Oficina administrativa, sala de supervisión, punto de atención',
      capacidad: '3-5 personas',
      ventajas: 'Espacio optimizado, instalaciones completas, bajo consumo energético',
      sectores: 'Logística, manufactura, obras civiles, desarrollos inmobiliarios'
    },
    {
      name: 'Oficina 8\'x32\'',
      uso: 'Oficina compartida, sala de juntas, centro de operaciones',
      capacidad: '5-8 personas',
      ventajas: 'Divisiones internas, equipamiento de red y datos, HVAC incluido',
      sectores: 'Corporativos, gobierno, educación, salud'
    },
    {
      name: 'Oficina 8\'x44\'',
      uso: 'Centro administrativo, sala de capacitación, oficina de dirección',
      capacidad: '8-12 personas',
      ventajas: 'Diseño corporativo, instalaciones premium, configuración personalizada',
      sectores: 'Sedes regionales, centros de distribución, campamentos ejecutivos'
    },
    {
      name: 'Oficina 12\'x60\'',
      uso: 'Oficina corporativa amplia, centro de mando, sala de control',
      capacidad: '15-20 personas',
      ventajas: 'Máxima capacidad modular, instalaciones industriales, mobiliario ejecutivo',
      sectores: 'Plantas industriales, centros logísticos, proyectos gubernamentales'
    },
    {
      name: 'Casetas de Vigilancia',
      uso: 'Control de acceso vehicular y peatonal, seguridad perimetral',
      capacidad: '1-2 guardias',
      ventajas: 'Visibilidad 360°, resistencia estructural, equipamiento de seguridad',
      sectores: 'Industrial, logística, corporativo, residencial premium'
    },
    {
      name: 'Oficinas Móviles para Obra',
      uso: 'Supervisión de construcción, oficina de residencia de obra',
      capacidad: 'Variable',
      ventajas: 'Transportable, instalación inmediata, equipamiento técnico incluido',
      sectores: 'Construcción, infraestructura, obra civil'
    },
    {
      name: 'Oficinas de Ventas',
      uso: 'Showroom, atención a clientes, cierre de ventas',
      capacidad: '3-6 personas',
      ventajas: 'Diseño premium, imagen corporativa, climatización, mobiliario incluido',
      sectores: 'Desarrollos inmobiliarios, automotriz, retail'
    }
  ];

  const modulosEspecializados = [
    {
      name: 'Dormitorios Industriales',
      descripcion: 'Habitaciones equipadas con literas, lockers, clima y baño. Cumplimiento NOM-STPS.',
      aplicaciones: 'Campamentos mineros, obra, operaciones 24/7',
      capacidad: '4-12 personas por módulo'
    },
    {
      name: 'Aulas Prefabricadas',
      descripcion: 'Salones educativos con pizarrón, iluminación, ventilación y mobiliario escolar.',
      aplicaciones: 'Escuelas temporales, capacitación corporativa, institutos',
      capacidad: '20-40 alumnos'
    },
    {
      name: 'Comedores Industriales',
      descripcion: 'Espacios equipados con mesas, sillas, área de servicio, instalaciones sanitarias.',
      aplicaciones: 'Plantas industriales, campamentos, centros logísticos',
      capacidad: '30-100 comensales'
    },
    {
      name: 'Sanitarios y Regaderas',
      descripcion: 'Módulos hidrosanitarios completos: WC, mingitorios, lavabos, regaderas, vestidores.',
      aplicaciones: 'Obra, eventos, plantas, campamentos',
      capacidad: '2-10 WC, 2-8 regaderas'
    },
    {
      name: 'Laboratorios Prefabricados',
      descripcion: 'Espacios con control ambiental, instalaciones especiales, acabados sanitarios.',
      aplicaciones: 'Análisis industrial, control de calidad, investigación',
      capacidad: 'Según equipamiento técnico'
    },
    {
      name: 'Clínicas Temporales',
      descripcion: 'Consultorios, salas de curación, farmacia, área de espera, sanitarios.',
      aplicaciones: 'Atención médica industrial, brigadas de salud, campañas',
      capacidad: '1-4 consultorios'
    }
  ];

  const estructurasSistemas = [
    {
      categoria: 'Estructuras Metálicas',
      productos: 'Perfiles, vigas, columnas, armaduras, cubiertas',
      aplicacion: 'Naves industriales, techumbres, entrepisos'
    },
    {
      categoria: 'Sistemas Eléctricos',
      productos: 'Tableros, cableado, iluminación LED, tierras físicas',
      aplicacion: 'Instalaciones industriales certificadas'
    },
    {
      categoria: 'Sistemas Hidrosanitarios',
      productos: 'Redes hidráulicas, sanitarias, pluviales, cisternas',
      aplicacion: 'Obra civil, industrial, corporativa'
    },
    {
      categoria: 'HVAC',
      productos: 'Climatización, ventilación, extracción de aire, control ambiental',
      aplicacion: 'Oficinas, laboratorios, áreas limpias'
    },
    {
      categoria: 'Sistemas Contra Incendio',
      productos: 'Red hidráulica, detectores, extintores, señalética, equipos',
      aplicacion: 'Protección civil certificada NOM'
    },
    {
      categoria: 'Mobiliario Industrial y Corporativo',
      productos: 'Escritorios, sillas, archiveros, estanterías, mesas, lockers',
      aplicacion: 'Equipamiento completo llave en mano'
    }
  ];

  const procesoPasos = [
    {
      numero: '01',
      titulo: 'Planeación',
      descripcion: 'Análisis de requerimientos, selección de productos, definición de cantidades y especificaciones.'
    },
    {
      numero: '02',
      titulo: 'Ingeniería',
      descripcion: 'Diseño de integración, cálculos estructurales, especificaciones técnicas y planos de instalación.'
    },
    {
      numero: '03',
      titulo: 'Fabricación',
      descripcion: 'Manufactura controlada en planta, inspección de calidad, acabados y equipamiento.'
    },
    {
      numero: '04',
      titulo: 'Transporte',
      descripcion: 'Logística especializada, coordinación de entregas, protección de unidades.'
    },
    {
      numero: '05',
      titulo: 'Instalación',
      descripcion: 'Montaje en sitio, nivelación, anclaje, interconexión de módulos.'
    },
    {
      numero: '06',
      titulo: 'Integración',
      descripcion: 'Conexión de sistemas eléctricos, hidrosanitarios, HVAC, contra incendio.'
    },
    {
      numero: '07',
      titulo: 'Entrega',
      descripcion: 'Pruebas de funcionamiento, capacitación, documentación técnica, certificados.'
    },
    {
      numero: '08',
      titulo: 'Postventa',
      descripcion: 'Mantenimiento preventivo, correctivo, garantías, soporte técnico continuo.'
    }
  ];

  const diferenciales = [
    {
      titulo: 'Fabricación Controlada en Planta',
      descripcion: 'Manufactura en ambiente controlado que elimina variables climáticas, garantiza precisión milimétrica y permite inspecciones de calidad en cada fase del proceso.'
    },
    {
      titulo: 'Cumplimiento Normativo Total',
      descripcion: 'Todos los productos cumplen normas oficiales mexicanas (NOM), códigos de construcción, protección civil y normativas sectoriales aplicables.'
    },
    {
      titulo: 'Ingeniería Propia Integrada',
      descripcion: 'Equipo interno de ingenieros estructurales, eléctricos, mecánicos e industriales que diseñan soluciones a medida sin intermediarios.'
    },
    {
      titulo: 'Escalabilidad Modular Real',
      descripcion: 'Productos diseñados para crecer: añade módulos, reconfigura espacios, amplía instalaciones sin afectar operaciones actuales.'
    },
    {
      titulo: 'Garantías Respaldadas',
      descripcion: 'Garantía estructural, de instalaciones y sistemas. Contratos de mantenimiento preventivo y correctivo con atención prioritaria.'
    },
    {
      titulo: 'Mantenimiento y Soporte Técnico',
      descripcion: 'No terminamos en la venta. Ofrecemos servicio postventa, mantenimiento programado, refacciones originales y soporte técnico continuo.'
    }
  ];

  const faqs = [
    {
      pregunta: '¿Cuánto tiempo tarda la fabricación y entrega de productos modulares?',
      respuesta: 'Productos estándar: 2-4 semanas. Productos personalizados: 4-8 semanas. La instalación en sitio toma entre 1-5 días según complejidad. Entregamos cronograma detallado en la cotización.'
    },
    {
      pregunta: '¿Los productos son personalizables en dimensiones y acabados?',
      respuesta: 'Sí, totalmente. Personalizamos dimensiones, distribución interior, acabados, instalaciones eléctricas, hidrosanitarias, HVAC, imagen corporativa (colores, logos) y equipamiento según requerimientos del proyecto.'
    },
    {
      pregunta: '¿Los productos modulares requieren permisos especiales?',
      respuesta: 'Depende del uso y ubicación. Estructuras permanentes requieren licencia municipal. Instalaciones temporales generalmente no. Ofrecemos gestoría completa de permisos, dictámenes estructurales y certificaciones de protección civil.'
    },
    {
      pregunta: '¿Qué diferencia hay entre un módulo prefabricado y construcción tradicional?',
      respuesta: 'Tiempo: 40-60% más rápido. Costo: Más predecible, sin sorpresas. Calidad: Controlada en planta. Movilidad: Los módulos son reubicables. Escalabilidad: Se pueden añadir o remover módulos fácilmente.'
    },
    {
      pregunta: '¿Qué garantías ofrecen en los productos?',
      respuesta: 'Garantía estructural: 12 meses. Instalaciones eléctricas e hidrosanitarias: 12 meses. Sistemas HVAC y contra incendio: 12 meses. Equipamiento y mobiliario: según fabricante. Garantías extensibles mediante contrato.'
    },
    {
      pregunta: '¿Ofrecen mantenimiento y cuál es la vida útil de los productos?',
      respuesta: 'Sí, ofrecemos mantenimiento preventivo y correctivo. Vida útil: Estructura modular 20-30 años. Instalaciones: 10-15 años. Acabados y equipamiento: 5-10 años. Con mantenimiento adecuado se extiende significativamente.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1759647028384-1efcc6e0eff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2R1bGFyJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY2Nzk0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="mb-6">Productos Industriales y Modulares de Alta Especificación</h1>
            <p className="text-xl text-gray-300 mb-8">
              Fabricación modular prefabricada para operaciones industriales, corporativas y gubernamentales.
              Productos certificados, personalizables e integrables a proyectos llave en mano.
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
                  <p className="text-white font-medium">+20 años de experiencia</p>
                  <p className="text-gray-400 text-sm">Fabricación industrial certificada</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Planta de fabricación propia</p>
                  <p className="text-gray-400 text-sm">Control de calidad total</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Integración llave en mano</p>
                  <p className="text-gray-400 text-sm">Ingeniería + fabricación + instalación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">¿Qué Productos Fabricamos y Suministramos?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Structainer V Group fabrica y suministra <strong>módulos prefabricados, casetas industriales,
              oficinas móviles, estructuras especializadas y sistemas integrales</strong> para proyectos B2B
              de mediana y gran escala.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nuestros productos se utilizan en los sectores <strong>industrial, corporativo, logístico,
              educativo, salud, gobierno y construcción</strong>, resolviendo necesidades operativas de
              espacios funcionales, certificados y listos para operar.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Resolvemos:</strong> tiempos de entrega críticos, costos de construcción tradicional,
              gestión de permisos, necesidad de escalabilidad y movilidad de instalaciones. Nuestros productos
              se integran a proyectos llave en mano o se suministran de forma independiente.
            </p>
          </div>
        </div>
      </section>

      {/* Módulos Prefabricados */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Módulos Prefabricados</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Unidades modulares fabricadas en planta con control de calidad total.
              Configurables, escalables y listas para instalar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modulosPrefabricados.map((producto, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 hover:border-gray-900 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-6 h-6 text-gray-900" />
                  <h3 className="text-lg">{producto.name}</h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Uso principal:</p>
                    <p className="text-sm text-gray-600">{producto.uso}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Capacidad:</p>
                    <p className="text-sm text-gray-600">{producto.capacidad}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Aplicaciones:</p>
                    <p className="text-sm text-gray-600">{producto.aplicaciones}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Beneficios:</p>
                    <p className="text-sm text-gray-600">{producto.beneficios}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-yellow-600 font-medium transition-colors text-sm"
                >
                  Solicitar cotización
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casetas y Oficinas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Casetas y Oficinas Móviles</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Espacios de trabajo completamente equipados, listos para operar en días.
              Ideales para obra, ventas, vigilancia y operaciones temporales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {casetasOficinas.map((producto, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 p-8 hover:border-gray-900 transition-colors">
                <div className="flex items-center gap-2 mb-6">
                  <Ruler className="w-6 h-6 text-gray-900" />
                  <h3 className="text-xl">{producto.name}</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Uso recomendado:</p>
                    <p className="text-gray-700">{producto.uso}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Capacidad:</p>
                    <p className="text-gray-700">{producto.capacidad}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Ventajas:</p>
                    <p className="text-gray-700">{producto.ventajas}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Sectores:</p>
                    <p className="text-gray-700">{producto.sectores}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-yellow-600 font-medium transition-colors"
                >
                  Cotizar este producto
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos Especializados */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Módulos Especializados</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Soluciones técnicas para usos específicos: educación, salud, habitación, servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modulosEspecializados.map((producto, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 hover:border-gray-900 transition-colors">
                <h3 className="mb-4 text-lg">{producto.name}</h3>
                <p className="text-gray-700 mb-4">{producto.descripcion}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Aplicaciones:</p>
                      <p className="text-sm text-gray-600">{producto.aplicaciones}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Capacidad:</p>
                      <p className="text-sm text-gray-600">{producto.capacidad}</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-yellow-600 font-medium transition-colors text-sm"
                >
                  Solicitar cotización
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estructuras y Sistemas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Estructuras, Sistemas y Equipamiento</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Componentes industriales y sistemas integrales para proyectos completos llave en mano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {estructurasSistemas.map((item, index) => (
              <div key={index} className="border border-gray-200 p-6 hover:border-gray-900 transition-colors">
                <h3 className="mb-3">{item.categoria}</h3>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Productos:</strong> {item.productos}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Aplicación:</strong> {item.aplicacion}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200">
            <p className="text-gray-700">
              <strong>Personalización total:</strong> Todos los productos son personalizables en dimensiones,
              acabados, instalaciones eléctricas, hidrosanitarias, HVAC, imagen corporativa y equipamiento
              según requerimientos específicos del proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso de Integración */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Cómo Integramos Nuestros Productos a Tu Proyecto</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Proceso integral de 8 fases que garantiza entrega exitosa desde la planeación hasta el soporte postventa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procesoPasos.map((paso, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 p-6 hover:border-yellow-600 transition-colors">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 border-2 border-yellow-600">
                    <span className="text-xl text-yellow-600">{paso.numero}</span>
                  </div>
                </div>
                <h3 className="mb-3 text-white">{paso.titulo}</h3>
                <p className="text-gray-300 text-sm">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Por Qué Elegir los Productos de Structainer V Group</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Diferenciales operativos orientados a decisión B2B. No promesas de marketing: capacidad real, resultados medibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciales.map((item, index) => (
              <div key={index} className="border border-gray-200 p-8 hover:border-gray-900 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-gray-900" />
                  <h3 className="text-lg">{item.titulo}</h3>
                </div>
                <p className="text-gray-700">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Preguntas Frecuentes sobre Productos</h2>
            <p className="text-gray-600">
              Respuestas directas a las dudas más comunes sobre fabricación, personalización y garantías.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 hover:border-gray-900 transition-colors">
                <h3 className="mb-4 text-lg text-gray-900">{faq.pregunta}</h3>
                <p className="text-gray-700">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-yellow-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="w-8 h-8" />
            <h2>¿Listo para Cotizar tus Productos?</h2>
          </div>
          <p className="text-xl mb-8">
            Envíanos tus requerimientos técnicos o agenda una llamada con nuestro equipo de ingeniería.
            <strong> Respuesta garantizada en 24-48 horas</strong> con cotización detallada,
            especificaciones técnicas, cronograma de fabricación y entrega.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-gray-900 hover:bg-black text-white px-10 py-4 text-lg transition-colors"
            >
              Solicitar Cotización de Productos
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-white hover:bg-white hover:text-yellow-600 text-white px-10 py-4 text-lg transition-colors"
            >
              Agendar Llamada Técnica
            </Link>
          </div>
          <p className="mt-8 text-sm text-yellow-100">
            Atención especializada | Cotizaciones sin compromiso | Asesoría técnica incluida | Respuesta en 24-48 horas
          </p>
        </div>
      </section>
    </div>
  );
}
