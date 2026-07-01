import { Link } from 'react-router-dom';
import {
  Building2,
  Target,
  TrendingUp,
  Handshake,
  Award,
  Lightbulb,
  Leaf,
  Shield,
  Clock,
  Wrench,
  Users,
  HardHat,
  ClipboardCheck,
  Factory,
  Gauge,
  Zap,
  Boxes,
  Truck,
  CheckCircle2,
  FileCheck,
  Scale,
  Sparkles
} from 'lucide-react';
import { Organigrama } from '@/app/components/Organigrama';

// Importar imágenes locales
import quienesSomosImg from '../../assets/img/nosotros/quienes-somos.jpeg';
import colaboracionesImg from '../../assets/img/nosotros/Colaboraciones.png';
import plantasProductivasImg from '../../assets/img/nosotros/plantas-productivas.jpeg';

export function NosotrosPage() {
  // Estadísticas
  const stats = [
    { number: '150+', label: 'Proyectos completados' },
    { number: '200+', label: 'Colaboradores' },
    { number: '500+', label: 'Unidades fabricadas' },
    { number: '9', label: 'Divisiones especializadas' }
  ];

  // Valores corporativos
  const values = [
    {
      icon: Handshake,
      title: 'Confianza',
      description: 'Cumplimos nuestros compromisos técnicos, comerciales y operativos. Nuestros clientes confían en nuestra capacidad de ejecución porque entregamos lo que proyectamos.'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Buscamos la precisión en cada proceso: desde el diseño de ingeniería hasta la instalación final. La calidad no es negociable.'
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Implementamos tecnologías constructivas modulares, sistemas de prefabricación controlada y metodologías de gestión que optimizan tiempos y recursos.'
    },
    {
      icon: Leaf,
      title: 'Ecológico',
      description: 'Diseñamos soluciones con criterios de eficiencia energética, reubicación de estructuras y minimización de desperdicios en obra.'
    }
  ];

  // Beneficios de excelencia
  const excellenceBenefits = [
    {
      icon: Shield,
      title: 'Control de calidad desde origen',
      description: 'Fabricamos en plantas propias con procesos documentados, pruebas de materiales, inspecciones en línea y trazabilidad de componentes.'
    },
    {
      icon: Scale,
      title: 'Cumplimiento normativo garantizado',
      description: 'Todos nuestros proyectos se ejecutan bajo normativas vigentes: Reglamento de Construcción, NOM de seguridad estructural y protección civil.'
    },
    {
      icon: Clock,
      title: 'Entregas puntuales',
      description: 'Planificamos con base en rutas críticas realistas. Nuestro equipo de supervisión mantiene comunicación constante con el cliente.'
    },
    {
      icon: Wrench,
      title: 'Acompañamiento postventa',
      description: 'Posterior a la entrega, ofrecemos mantenimiento preventivo, correctivo y soporte técnico.'
    }
  ];

  // Capacidades de colaboradores
  const collaboratorCapabilities = [
    'Soldadores con certificación AWS',
    'Supervisores con acreditación en seguridad e higiene',
    'Operadores de maquinaria pesada capacitados',
    'Técnicos especializados en sistemas eléctricos, HVAC y estructuras metálicas',
    'Ingenieros civiles, mecánicos, industriales y eléctricos',
    'Arquitectos y especialistas en gestión de proyectos'
  ];

  // Capacidades de plantas
  const plantCapabilities = [
    'Áreas de corte, soldadura y ensamble',
    'Equipos de soldadura MIG/TIG',
    'Maquinaria CNC de precisión',
    'Sistemas de tratamiento superficial',
    'Pintura industrial y galvanizada',
    'Almacenamiento controlado'
  ];

  // Líneas de producción
  const productionLines = [
    {
      title: 'Módulos habitacionales e industriales',
      description: 'Oficinas móviles, dormitorios, comedores, sanitarios y espacios administrativos con instalaciones completas.'
    },
    {
      title: 'Casetas de vigilancia y control',
      description: 'Estructuras de acceso, garritas de seguridad y módulos de supervisión para plantas industriales.'
    },
    {
      title: 'Estructuras metálicas especializadas',
      description: 'Soportes industriales, plataformas de carga y remolques tipo oficina móvil.'
    }
  ];

  // Aplicaciones de unidades
  const unitApplications = [
    'Oficinas administrativas',
    'Comedores industriales',
    'Dormitorios para personal',
    'Laboratorios',
    'Aulas educativas',
    'Módulos sanitarios',
    'Casetas de vigilancia',
    'Almacenes temporales'
  ];

  // Normativas
  const compliance = [
    'Reglamentos de Construcción estatales y municipales',
    'Normas Oficiales Mexicanas (NOM) de estructuras e instalaciones',
    'Estándares de soldadura (AWS) para estructuras metálicas',
    'Regulaciones de seguridad e higiene (STPS)',
    'Dictámenes de protección civil y visto bueno de bomberos'
  ];

  return (
    <div>
      {/* 1. HERO - NOSOTROS */}
      <section className="bg-gray-900 text-white py-20 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8">
              <Building2 className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-yellow-600 flex-shrink-0" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight">
                NOSOTROS
              </h1>
            </div>
            <div className="border-l-4 md:border-l-8 border-yellow-600 pl-4 md:pl-8 space-y-4 md:space-y-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                Structainer V Group es un holding empresarial mexicano especializado en construcción modular prefabricada, ingeniería industrial y desarrollo de infraestructura llave en mano.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Integramos diseño, fabricación, instalación y mantenimiento bajo un solo modelo operativo, garantizando control técnico, cumplimiento normativo y eficiencia en cada etapa del proyecto.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                Nuestro modelo 360° permite atender proyectos de mediana y gran escala para sectores industriales, corporativos, mineros, energéticos y gubernamentales, reduciendo tiempos de entrega, optimizando recursos y asegurando trazabilidad completa desde la ingeniería hasta la operación final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ESTADÍSTICAS */}
      <section className="py-12 md:py-16 lg:py-20 bg-white border-b-2 md:border-b-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-sm sm:text-base md:text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUIÉNES SOMOS */}
      <section className="py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 text-gray-900">
                QUIÉNES SOMOS
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                <p className="font-semibold text-lg md:text-xl text-gray-900">
                  Somos un equipo multidisciplinario conformado por ingenieros civiles, mecánicos, industriales y eléctricos, arquitectos, técnicos en soldadura, supervisores de obra y especialistas en gestión de proyectos.
                </p>
                <p>
                  Nuestra experiencia se concentra en el desarrollo de soluciones modulares y de ingeniería para proyectos industriales, corporativos y gubernamentales que requieren precisión técnica, cumplimiento estricto y entregas puntuales.
                </p>
                <p>
                  Desde 2019, hemos ejecutado más de 150 proyectos en sectores como minería, manufactura automotriz, energía, logística, retail y educación. Trabajamos directamente con áreas de ingeniería, operaciones y compras de nuestros clientes.
                </p>
                <p>
                  Nuestro enfoque operativo está basado en tres pilares: control interno de fabricación, personal técnico certificado y acompañamiento integral durante toda la vida útil del proyecto.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 h-full min-h-64 md:min-h-96 border-l-4 md:border-l-8 border-yellow-600">
                <img
                  src={quienesSomosImg}
                  alt="Equipo técnico de Structainer V Group"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISIÓN, VISIÓN Y VALORES */}
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto mb-12 md:mb-16 lg:mb-20">
            <div className="bg-gray-900 text-white p-6 md:p-8 lg:p-12">
              <Target className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-yellow-600 mb-4 md:mb-6" />
              <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 uppercase">Misión</h3>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-300">
                Proporcionar soluciones de construcción modular, ingeniería industrial e infraestructura llave en mano con los más altos estándares de calidad, seguridad y eficiencia operativa. Garantizamos cumplimiento normativo, control técnico y entregas puntuales para proyectos que requieren confiabilidad y trazabilidad integral.
              </p>
            </div>

            <div className="bg-gray-50 border-2 md:border-4 border-gray-900 p-6 md:p-8 lg:p-12">
              <TrendingUp className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-gray-900 mb-4 md:mb-6" />
              <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 uppercase text-gray-900">Visión</h3>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">
                Consolidarnos como el holding líder en México y referente en Latinoamérica en construcción modular prefabricada e ingeniería industrial, reconocidos por nuestra capacidad operativa, innovación en sistemas constructivos y compromiso con la excelencia técnica y la ecología.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 md:mb-12 text-center text-gray-900">
              NUESTROS VALORES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-900 p-4 md:p-6 hover:bg-gray-900 hover:text-white transition-all duration-300 group flex flex-col h-full"
                >
                  <value.icon className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors flex-shrink-0" />
                  <h4 className="text-lg md:text-xl font-black mb-2 md:mb-3 uppercase break-words">{value.title}</h4>
                  <p className="text-xs md:text-sm leading-relaxed opacity-90 flex-grow">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organigrama */}
      <Organigrama />

      {/* 5. CONFIANZA Y BÚSQUEDA DE LA EXCELENCIA */}
      <section className="py-16 md:py-24 lg:py-40 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <Shield className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-yellow-600 mx-auto mb-6 md:mb-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8">
              CONFIANZA Y BÚSQUEDA DE LA EXCELENCIA
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              La excelencia operativa se fundamenta en tres ejes estratégicos: control de calidad integral, cumplimiento normativo estricto y acompañamiento técnico continuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {excellenceBenefits.map((benefit, index) => (
              <div
                key={index}
                className="border-2 border-gray-700 p-6 md:p-8 lg:p-10 hover:border-yellow-600 transition-colors"
              >
                <benefit.icon className="w-10 h-10 md:w-12 md:h-12 text-yellow-600 mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="border-t-2 md:border-t-4 border-yellow-600 pt-8 md:pt-12 mt-12 md:mt-16 text-center max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              La confianza se construye con resultados medibles: proyectos entregados a tiempo, sin desviaciones técnicas y con respaldo operativo real.
            </p>
          </div>
        </div>
      </section>

      {/* 6. COLABORADORES */}
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-900 h-full min-h-64 md:min-h-80 lg:min-h-96 border-r-4 md:border-r-8 border-yellow-600">
                <img
                  src={colaboracionesImg}
                  alt="Colaboradores de Structainer en planta productiva"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Users className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-gray-900 mb-4 md:mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 text-gray-900">
                COLABORADORES
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                <p className="font-semibold text-lg md:text-xl text-gray-900">
                  Nuestro capital humano es el activo más valioso de Structainer V Group. Contamos con más de 200 colaboradores especializados en áreas técnicas, operativas y administrativas.
                </p>
                <p>
                  Todos capacitados bajo estándares de seguridad industrial, calidad y cumplimiento normativo. Cada colaborador es parte del sistema de calidad.
                </p>
              </div>
              <div className="bg-gray-50 border-l-4 md:border-l-8 border-gray-900 p-4 md:p-6 lg:p-8">
                <h4 className="text-lg md:text-xl font-black mb-3 md:mb-4 text-gray-900">Personal Técnico Certificado:</h4>
                <div className="space-y-2 md:space-y-3">
                  {collaboratorCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-gray-900 flex-shrink-0 mt-1" />
                      <span className="text-sm md:text-base text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PLANTAS PRODUCTIVAS */}
      <section className="py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <Factory className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-gray-900 mb-4 md:mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 text-gray-900">
                PLANTAS PRODUCTIVAS
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                <p className="font-semibold text-lg md:text-xl text-gray-900">
                  Structainer V Group opera con plantas productivas propias equipadas para la fabricación de estructuras modulares prefabricadas, sistemas metálicos y componentes especializados.
                </p>
                <p>
                  Esta infraestructura nos permite mantener control total sobre calidad, tiempos de producción y costos operativos. Cada etapa productiva es supervisada y documentada.
                </p>
              </div>
              <div className="mt-6 md:mt-8 bg-white border-l-4 md:border-l-8 border-gray-900 p-4 md:p-6 lg:p-8">
                <h4 className="text-lg md:text-xl font-black mb-3 md:mb-4 text-gray-900">Capacidades Instaladas:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  {plantCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-gray-900 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-xs md:text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 h-full min-h-64 md:min-h-80 lg:min-h-96 border-l-4 md:border-l-8 border-yellow-600">
                <img
                  src={plantasProductivasImg}
                  alt="Planta productiva de Structainer"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LÍNEAS DE PRODUCCIÓN */}
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Gauge className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-900 mx-auto mb-6 md:mb-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 text-gray-900">
              LÍNEAS DE PRODUCCIÓN
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nuestras líneas de producción están diseñadas para fabricar soluciones modulares con precisión, rapidez y flexibilidad operativa. Operamos con metodologías de manufactura controlada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            {productionLines.map((line, index) => (
              <div
                key={index}
                className="border-2 border-gray-900 p-6 md:p-8 hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                <Boxes className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 text-gray-900 group-hover:text-yellow-600" />
                <h3 className="text-lg md:text-xl font-black mb-3 md:mb-4">{line.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed opacity-90">{line.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white p-6 md:p-8 lg:p-12 text-center max-w-5xl mx-auto border-t-4 md:border-t-8 border-yellow-600">
            <Zap className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-yellow-600 mx-auto mb-4 md:mb-6" />
            <p className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
              Cada unidad sale de planta lista para instalación rápida, reduciendo tiempos en sitio y minimizando impacto en operaciones del cliente.
            </p>
          </div>
        </div>
      </section>

      {/* 9. UNIDADES FABRICADAS */}
      <section className="py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Truck className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-900 mx-auto mb-6 md:mb-8" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 text-gray-900">
                UNIDADES FABRICADAS
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                A lo largo de nuestra trayectoria, hemos fabricado e instalado más de 500 unidades modulares para sectores industriales, corporativos, mineros, educativos y gubernamentales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
              <div className="bg-white border-2 border-gray-900 p-6 md:p-8 text-center">
                <HardHat className="w-10 h-10 md:w-12 md:h-12 text-gray-900 mx-auto mb-3 md:mb-4" />
                <h4 className="text-lg md:text-xl font-black mb-2 md:mb-3">Durabilidad</h4>
                <p className="text-gray-700 text-xs md:text-sm">
                  Acero estructural, recubrimientos anticorrosivos y sistemas certificados para condiciones extremas.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-900 p-6 md:p-8 text-center">
                <Boxes className="w-10 h-10 md:w-12 md:h-12 text-gray-900 mx-auto mb-3 md:mb-4" />
                <h4 className="text-lg md:text-xl font-black mb-2 md:mb-3">Modularidad</h4>
                <p className="text-gray-700 text-xs md:text-sm">
                  Diseñadas para ser transportadas, reubicadas y reconfiguradas según cambios operativos.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-900 p-6 md:p-8 text-center">
                <Zap className="w-10 h-10 md:w-12 md:h-12 text-gray-900 mx-auto mb-3 md:mb-4" />
                <h4 className="text-lg md:text-xl font-black mb-2 md:mb-3">Instalación Rápida</h4>
                <p className="text-gray-700 text-xs md:text-sm">
                  Listas para conexión de servicios. Instalación en días, permitiendo operación inmediata.
                </p>
              </div>
            </div>

            <div className="bg-white border-l-4 md:border-l-8 border-gray-900 p-6 md:p-8">
              <h4 className="text-xl sm:text-2xl font-black mb-4 md:mb-6 text-gray-900">Aplicaciones Versátiles:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {unitApplications.map((application, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-gray-900 flex-shrink-0" />
                    <span className="text-gray-700 text-xs md:text-sm font-semibold">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CERTIFICADOS Y CUMPLIMIENTO */}
      <section className="py-16 md:py-24 lg:py-40 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <FileCheck className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-yellow-600 mx-auto mb-6 md:mb-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8">
              CERTIFICADOS Y CUMPLIMIENTO
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              El cumplimiento normativo no es un trámite posterior: forma parte del diseño y ejecución de cada proyecto desde su origen.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 border-2 border-gray-700 p-6 md:p-8 lg:p-12 mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 text-center">Normativas Aplicadas</h3>
              <div className="space-y-3 md:space-y-4">
                {compliance.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 md:gap-4 border-b border-gray-700 pb-3 md:pb-4 last:border-0">
                    <ClipboardCheck className="w-5 h-5 md:w-6 md:h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-sm md:text-base lg:text-lg text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t-2 md:border-t-4 border-yellow-600 pt-8 md:pt-12 text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                El cumplimiento no se improvisa: se planifica, se ejecuta y se verifica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. NUESTRAS PLANTAS */}
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <Sparkles className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-900 mx-auto mb-6 md:mb-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12 text-gray-900">
              NUESTRAS PLANTAS
            </h2>
            <div className="space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8 md:mb-12">
              <p className="font-semibold text-xl sm:text-2xl text-gray-900">
                Las plantas productivas de Structainer V Group son el núcleo operativo donde convergen ingeniería, fabricación y control de calidad.
              </p>
              <p>
                Aquí se materializan los proyectos: desde el primer corte de acero hasta la entrega final de estructuras modulares listas para operar. Ubicadas estratégicamente para reducir tiempos de traslado y costos logísticos.
              </p>
              <p>
                Implementamos controles en cada etapa: inspección de materiales, verificación dimensional, pruebas de soldadura, control de acabados y liberación técnica antes de envío a sitio.
              </p>
            </div>

            <div className="bg-gray-900 text-white p-6 md:p-8 lg:p-12 border-t-4 md:border-t-8 border-yellow-600">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                Nuestras plantas no solo fabrican estructuras: producen confiabilidad, cumplimiento y resultados técnicos verificables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CTA FINAL */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50 border-t-4 md:border-t-8 border-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-gray-900 mb-6 md:mb-8">
            CONOCE MÁS SOBRE NUESTRO TRABAJO
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-8 md:mb-12">
            Soluciones industriales con control técnico, cumplimiento garantizado y ejecución verificable
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link
              to="/contacto"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 md:px-12 py-4 md:py-5 transition-colors text-base md:text-lg lg:text-xl"
            >
              Solicitar asesoría técnica
            </Link>
            <Link
              to="/proyectos"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 border-2 md:border-4 border-gray-900 font-bold px-8 md:px-12 py-4 md:py-5 transition-colors text-base md:text-lg lg:text-xl"
            >
              Ver proyectos ejecutados
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
