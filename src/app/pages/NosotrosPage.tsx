import { Link } from 'react-router-dom';
import {
  Building2,
  Network,
  FileText,
  Settings,
  CheckCircle2,
  TrendingUp,
  Shield,
  ClipboardCheck,
  Wrench,
  Flame,
  HardHat,
  Armchair,
  Calendar,
  Award,
  Users
} from 'lucide-react';

export function AboutPage() {
  // Estadísticas del holding
  const holdingStats = [
    { number: '8', label: 'Divisiones especializadas', icon: Network },
    { number: '+5', label: 'Años de experiencia', icon: Calendar },
    { number: '150+', label: 'Proyectos completados', icon: Award },
    { number: '200+', label: 'Colaboradores', icon: Users }
  ];

  // Timeline de trayectoria
  const timeline = [
    {
      year: '2019',
      title: 'INICIO OPERATIVO',
      description: 'Arranque de operaciones en proyectos de construcción modular e industrial'
    },
    {
      year: '2020',
      title: 'PRIMEROS PROYECTOS CLAVE',
      description: 'Ejecución de proyectos industriales y consolidación de capacidades técnicas'
    },
    {
      year: '2022',
      title: 'EXPANSIÓN DE SERVICIOS',
      description: 'Ampliación de líneas de negocio: instalaciones, mantenimiento y seguridad'
    },
    {
      year: '2024',
      title: 'FORMALIZACIÓN DEL HOLDING',
      description: 'Integración de divisiones bajo Structainer V Group como marca paraguas'
    },
    {
      year: '2025',
      title: 'CONSOLIDACIÓN Y CRECIMIENTO',
      description: 'Estructura corporativa completa con 8 divisiones especializadas'
    }
  ];

  // Divisiones especializadas con casos de éxito
  const divisions = [
    {
      name: 'SOGEMSA',
      description: 'Gestoría administrativa y cumplimiento normativo',
      icon: ClipboardCheck,
      example: 'Tramitación exitosa de permisos para proyectos mineros'
    },
    {
      name: 'STRUCTAINER',
      description: 'Construcción modular, obra civil y estructuras',
      icon: Building2,
      example: 'Campamentos modulares para 120+ personas'
    },
    {
      name: 'INOXFLOW',
      description: 'Procesos industriales, tuberías y sistemas HVAC',
      icon: Settings,
      example: 'Instalaciones HVAC en plantas automotrices'
    },
    {
      name: 'VD ENGINEERING',
      description: 'Ingeniería y construcción integral',
      icon: FileText,
      example: 'Proyectos ejecutivos para industria 4.0'
    },
    {
      name: 'VEFIRE',
      description: 'Sistemas contra incendio y seguridad',
      icon: Flame,
      example: 'Protección contra incendios certificada NOM'
    },
    {
      name: 'HERRAMENTALES',
      description: 'Equipamiento y herramientas industriales',
      icon: Wrench,
      example: 'Suministro para plantas de manufactura'
    },
    {
      name: 'MANTENIMIENTO INDUSTRIAL',
      description: 'Servicios preventivos y correctivos',
      icon: HardHat,
      example: 'Mantenimiento 24/7 para operaciones críticas'
    },
    {
      name: 'VARENZA DESK',
      description: 'Mobiliario corporativo y especializado',
      icon: Armchair,
      example: 'Equipamiento completo de oficinas corporativas'
    }
  ];

  // Valores corporativos
  const values = [
    {
      icon: Settings,
      title: 'Precisión',
      description: 'Ingeniería clara, procesos definidos y decisiones técnicas fundamentadas.'
    },
    {
      icon: CheckCircle2,
      title: 'Control',
      description: 'Diseñamos, fabricamos y ejecutamos bajo un solo sistema operativo.'
    },
    {
      icon: Shield,
      title: 'Responsabilidad',
      description: 'Cumplimiento, seguridad y compromiso real antes, durante y después del proyecto.'
    }
  ];

  // Proceso de desarrollo de proyectos
  const projectSteps = [
    { number: '01', title: 'Planeación y factibilidades' },
    { number: '02', title: 'Gestoría legal y normativa' },
    { number: '03', title: 'Proyecto ejecutivo e ingenierías' },
    { number: '04', title: 'Ejecución de obra e instalaciones' },
    { number: '05', title: 'Mobiliario y equipamiento' },
    { number: '06', title: 'Seguridad y protección' },
    { number: '07', title: 'Entrega final' },
    { number: '08', title: 'Servicios postventa y mantenimiento' }
  ];

  // Beneficios del modelo holding
  const holdingBenefits = [
    'Mantener control interno de procesos críticos',
    'Reducir riesgos operativos y legales',
    'Acelerar tiempos de entrega',
    'Garantizar calidad y trazabilidad técnica'
  ];

  // Qué hacemos
  const capabilities = [
    'Planeación y estudios de factibilidad',
    'Gestoría legal, permisos y normatividad',
    'Proyecto ejecutivo e ingenierías completas',
    'Obra civil, prefabricada y modular',
    'Estructuras metálicas y acabados',
    'Instalaciones industriales y sistemas especiales',
    'Mobiliario, equipamiento y seguridad',
    'Entrega final, capacitación y postventa'
  ];

  // Cumplimiento
  const complianceItems = [
    'Normativa federal y estatal',
    'Regulaciones ambientales',
    'Protocolos de seguridad industrial',
    'Estándares de calidad y operación'
  ];

  return (
    <div>
      {/* 1. HERO - REDISEÑADO */}
      <section className="bg-gray-900 text-white py-32 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none tracking-tight">
              NOSOTROS
            </h1>
            <div className="border-t-4 border-b-4 border-yellow-600 py-8 mb-8">
              <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
                CONSTRUCCIÓN MODULAR E INGENIERÍA INDUSTRIAL, BAJO UN SOLO CONTROL
              </p>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              Structainer V Group es un holding empresarial mexicano que integra experiencia, ingeniería y ejecución para desarrollar proyectos industriales y corporativos llave en mano.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ESTADÍSTICAS DEL HOLDING */}
      <section className="py-20 bg-white border-b-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">EL HOLDING EN NÚMEROS</h2>
            <p className="text-gray-600 text-lg">Capacidad consolidada del grupo</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {holdingStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-gray-900" />
                <div className="text-5xl md:text-6xl font-black mb-2 text-gray-900">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUIÉNES SOMOS - REDISEÑADO */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
            <div className="lg:col-span-3">
              <div className="flex items-start gap-6 mb-8">
                <Building2 className="w-16 h-16 text-gray-900 flex-shrink-0" />
                <h2 className="text-4xl md:text-5xl font-black leading-tight">QUIÉNES SOMOS</h2>
              </div>
              <div className="space-y-6 text-gray-700 text-xl leading-relaxed border-l-8 border-gray-900 pl-8">
                <p className="font-medium">
                  Somos un holding especializado en construcción modular prefabricada, ingeniería industrial y soluciones empresariales, enfocado en atender proyectos que requieren control técnico, cumplimiento normativo y ejecución confiable.
                </p>
                <div className="border-t-2 border-gray-300 pt-6">
                  <p>
                    Nuestra estructura nos permite ofrecer un servicio 360°, desde estudios de factibilidad y permisos, hasta la entrega final y el mantenimiento postventa, eliminando la fragmentación tradicional de los proyectos.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 h-full min-h-96 bg-gray-200 border-l-8 border-gray-900">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Construcción modular prefabricada industrial"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. NUESTRO MODELO HOLDING - SECCIÓN ESTRELLA ⭐ */}
      <section className="py-40 bg-gray-900 text-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-600" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Título central */}
            <div className="text-center mb-20">
              <Network className="w-20 h-20 text-yellow-600 mx-auto mb-8" />
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">NUESTRO MODELO HOLDING</h2>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Structainer V Group consolida ocho divisiones estratégicas que trabajan de manera coordinada para entregar soluciones de alto valor.
              </p>
            </div>

            {/* Beneficios en grid 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {holdingBenefits.map((benefit, index) => (
                <div key={index} className="border-2 border-gray-700 p-10 hover:border-yellow-600 transition-colors">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-10 h-10 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-2xl font-semibold leading-tight">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. NUESTRA TRAYECTORIA - TIMELINE */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">NUESTRA TRAYECTORIA</h2>
            <p className="text-gray-600 text-lg">Evolución y crecimiento del holding</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Línea vertical */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-900 transform -translate-x-1/2" />

              {timeline.map((item, index) => (
                <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                  <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                    {/* Año */}
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'} mb-4 md:mb-0`}>
                      <div className="inline-block bg-gray-900 text-white px-6 py-3">
                        <span className="text-3xl font-black">{item.year}</span>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className={`${index % 2 === 0 ? 'md:col-start-2' : ''}`}>
                      <div className="bg-white border-2 border-gray-900 p-6">
                        <h3 className="text-xl font-black mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. DIVISIONES ESPECIALIZADAS - GRID INDUSTRIAL CON EJEMPLOS */}
      <section className="py-28 bg-white border-t-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">DIVISIONES ESPECIALIZADAS</h2>
            <p className="text-2xl text-gray-600 font-semibold">
              Nuestro ecosistema operativo integra:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((division, index) => (
              <div
                key={index}
                className="border-2 border-gray-900 p-6 hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                <division.icon className="w-12 h-12 mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors" />
                <h3 className="text-lg font-black mb-3 uppercase tracking-wide">{division.name}</h3>
                <p className="text-sm opacity-80 mb-4">{division.description}</p>
                <div className="pt-4 border-t border-gray-300 group-hover:border-gray-700">
                  <p className="text-xs font-semibold opacity-70 group-hover:text-yellow-400">
                    ✓ {division.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. QUÉ HACEMOS - LISTA TÉCNICA */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-12">
              <FileText className="w-16 h-16 text-gray-900 flex-shrink-0" />
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-4">QUÉ HACEMOS</h2>
                <p className="text-lg text-gray-600">
                  Desarrollamos proyectos industriales y comerciales bajo un enfoque llave en mano, integrando:
                </p>
              </div>
            </div>

            <div className="bg-white border-l-8 border-gray-900">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-6 py-6 px-8 ${index !== capabilities.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <CheckCircle2 className="w-7 h-7 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-lg font-medium text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. MISIÓN Y VISIÓN - BLOQUES COMPACTOS */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* MISIÓN */}
            <div className="text-center">
              <Settings className="w-16 h-16 text-gray-900 mx-auto mb-6" />
              <h3 className="text-3xl font-black mb-6">NUESTRA MISIÓN</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Entregar proyectos industriales y comerciales llave en mano mediante sistemas modulares y soluciones de ingeniería, garantizando precisión técnica, cumplimiento normativo y eficiencia operativa.
              </p>
            </div>

            {/* VISIÓN */}
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-gray-900 mx-auto mb-6" />
              <h3 className="text-3xl font-black mb-6">NUESTRA VISIÓN</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Consolidarnos como el holding mexicano de referencia en construcción modular e ingeniería industrial, estableciendo estándares de calidad, control y confiabilidad en proyectos complejos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. VALORES - PILARES INDUSTRIALES */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">NUESTROS VALORES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="w-20 h-20 text-gray-900 mx-auto mb-8" />
                <h3 className="text-3xl font-black mb-6 uppercase">{value.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CÓMO DESARROLLAMOS LOS PROYECTOS - METODOLOGÍA VISUAL */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">CÓMO DESARROLLAMOS LOS PROYECTOS</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline horizontal en desktop, vertical en mobile */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-900 text-white w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-black">{step.number}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 leading-tight px-2">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. CUMPLIMIENTO Y SEGURIDAD - BLOQUE INSTITUCIONAL */}
      <section className="py-40 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Shield className="w-20 h-20 text-yellow-600 mx-auto mb-8" />
              <h2 className="text-5xl md:text-6xl font-black mb-8">CUMPLIMIENTO Y SEGURIDAD</h2>
              <p className="text-2xl text-gray-300">
                Todos nuestros proyectos cumplen con:
              </p>
            </div>

            <div className="max-w-3xl mx-auto divide-y divide-gray-700">
              {complianceItems.map((item, index) => (
                <div key={index} className="py-8 flex items-center gap-6">
                  <CheckCircle2 className="w-10 h-10 text-yellow-600 flex-shrink-0" />
                  <span className="text-2xl font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t-4 border-yellow-600 pt-12 mt-16 text-center">
              <p className="text-3xl font-bold max-w-3xl mx-auto leading-tight">
                El cumplimiento no es opcional: forma parte del diseño del proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CIERRE DE AUTORIDAD - MAXIMIZADO */}
      <section className="py-32 bg-white border-t-8 border-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest font-bold text-gray-900 mb-8">
            HABLEMOS DE TU PROYECTO
          </p>
          <p className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-12">
            En Structainer V Group no vendemos construcción por partes. Diseñamos y ejecutamos infraestructura que permite operar, crecer y escalar.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold px-12 py-5 transition-colors text-xl"
          >
            Solicitar asesoría técnica
          </Link>
        </div>
      </section>
    </div>
  );
}
