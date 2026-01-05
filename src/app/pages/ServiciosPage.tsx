import { Link } from 'react-router-dom';
import {
  ClipboardCheck,
  FileText,
  Ruler,
  HardHat,
  Wrench,
  Armchair,
  Shield,
  FolderCheck,
  Settings,
  CheckCircle2,
  Factory,
  Building2,
  Zap,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: ClipboardCheck,
      number: '01',
      title: 'PLANEACIÓN Y FACTIBILIDADES',
      subtitle: 'Decisiones correctas antes de construir',
      description: 'Evaluamos la viabilidad técnica, financiera y operativa del proyecto para asegurar una ejecución eficiente y sin desviaciones.',
      includes: 'Estudios de factibilidad técnica y financiera, factibilidad de servicios (CFE, agua, drenaje, telecomunicaciones), análisis normativo inicial y planeación estratégica del proyecto.'
    },
    {
      icon: FileText,
      number: '02',
      title: 'GESTORÍA LEGAL Y NORMATIVA',
      subtitle: 'Cumplimiento total para operar sin riesgos',
      description: 'Gestionamos todos los permisos y licencias necesarios para asegurar que el proyecto cumpla con la normatividad vigente.',
      includes: 'Licencias de funcionamiento y obra, uso de suelo y cambios de giro, trámites ante dependencias municipales y estatales, Protección Civil, dictámenes técnicos y autorizaciones ambientales.'
    },
    {
      icon: Ruler,
      number: '03',
      title: 'PROYECTO EJECUTIVO E INGENIERÍAS',
      subtitle: 'Precisión técnica antes de ejecutar obra',
      description: 'Desarrollamos el proyecto ejecutivo completo y todas las ingenierías necesarias para una ejecución eficiente y sin improvisaciones.',
      includes: 'Planos arquitectónicos y renders, presupuesto general y cronograma, ingenierías estructural, eléctrica, hidrosanitaria, HVAC y contra incendios, sistemas de seguridad y control.'
    },
    {
      icon: HardHat,
      number: '04',
      title: 'EJECUCIÓN DE OBRA CIVIL Y PREFABRICADA',
      subtitle: 'Construcción tradicional y modular integrada',
      description: 'Ejecutamos proyectos combinando obra civil y sistemas prefabricados para optimizar tiempos y costos.',
      includes: 'Cimentaciones y estructuras, obra gris y acabados, instalaciones eléctricas, hidrosanitarias y HVAC, módulos prefabricados, casetas y oficinas móviles.'
    },
    {
      icon: Wrench,
      number: '05',
      title: 'ESTRUCTURAS, SOLDADURA Y ACABADOS',
      subtitle: 'Soluciones industriales a la medida',
      description: 'Fabricamos e instalamos estructuras metálicas, mezanines y acabados industriales personalizados.',
      includes: 'Soldadura y pailería, mezanines y estructuras especiales, carpintería, herrería y acabados, pisos, cancelería y pintura.'
    },
    {
      icon: Armchair,
      number: '06',
      title: 'MOBILIARIO Y EQUIPAMIENTO',
      subtitle: 'Espacios funcionales listos para operar',
      description: 'Diseñamos, fabricamos e instalamos mobiliario y equipamiento acorde a la operación del cliente.',
      includes: 'Diseño y fabricación de mobiliario a medida, instalación de mobiliario fijo y móvil, señalización corporativa y equipamiento interior.'
    },
    {
      icon: Shield,
      number: '07',
      title: 'SEGURIDAD Y PROTECCIÓN',
      subtitle: 'Infraestructura segura y certificada',
      description: 'Implementamos sistemas de seguridad industrial y protección civil.',
      includes: 'Sistemas contra incendio, extintores y señalética, CCTV, alarmas y control de accesos, capacitación y simulacros.'
    },
    {
      icon: FolderCheck,
      number: '08',
      title: 'ENTREGA FINAL',
      subtitle: 'Documentación completa y validada',
      description: 'Entregamos el proyecto completamente documentado y listo para operación.',
      includes: 'Planos As-Built, manuales y garantías, certificados de cumplimiento y capacitación al cliente.'
    },
    {
      icon: Settings,
      number: '09',
      title: 'POSTVENTA Y MANTENIMIENTO',
      subtitle: 'Acompañamiento después de la entrega',
      description: 'Protegemos la inversión del cliente a largo plazo mediante mantenimiento preventivo y correctivo.',
      includes: 'Mantenimiento HVAC, impermeabilización, instalaciones eléctricas e hidráulicas y contratos de mantenimiento anual.'
    }
  ];

  const valueProps = [
    {
      icon: CheckCircle2,
      title: 'UN SOLO RESPONSABLE',
      description: 'Control total de principio a fin sin intermediarios'
    },
    {
      icon: Zap,
      title: 'TIEMPOS REDUCIDOS',
      description: '60% más rápido que construcción tradicional'
    },
    {
      icon: Shield,
      title: 'CUMPLIMIENTO GARANTIZADO',
      description: 'Normatividad y calidad certificada'
    }
  ];

  // Aplicaciones por industria
  const industries = [
    {
      name: 'MINERÍA',
      icon: Factory,
      applications: ['Campamentos y dormitorios', 'Comedores industriales', 'Oficinas de sitio', 'Almacenes y talleres']
    },
    {
      name: 'AUTOMOTRIZ',
      icon: Settings,
      applications: ['Centros de capacitación', 'Áreas de inspección', 'Espacios de mantenimiento', 'Oficinas técnicas']
    },
    {
      name: 'INDUSTRIAL',
      icon: Building2,
      applications: ['Naves industriales', 'Oficinas corporativas', 'Áreas de producción', 'Almacenes logísticos']
    },
    {
      name: 'ENERGÍA',
      icon: Zap,
      applications: ['Subestaciones', 'Casetas de control', 'Oficinas de campo', 'Infraestructura temporal']
    }
  ];

  // Flujo de trabajo integrado
  const workflowSteps = [
    { step: '1', phase: 'PLANEACIÓN', activities: 'Factibilidad + Permisos' },
    { step: '2', phase: 'INGENIERÍA', activities: 'Proyecto ejecutivo + Especificaciones' },
    { step: '3', phase: 'EJECUCIÓN', activities: 'Construcción + Instalaciones' },
    { step: '4', phase: 'EQUIPAMIENTO', activities: 'Mobiliario + Seguridad' },
    { step: '5', phase: 'ENTREGA', activities: 'Validación + Mantenimiento' }
  ];

  return (
    <div>
      {/* 1. HERO PRINCIPAL - REDISEÑADO */}
      <section className="relative bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-none tracking-tight">
              SERVICIOS
            </h1>
            <div className="border-t-4 border-b-4 border-yellow-600 py-8 mb-8">
              <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
                MODELO LLAVE EN MANO PARA PROYECTOS INDUSTRIALES Y CORPORATIVOS
              </p>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Integramos 9 servicios especializados bajo un solo responsable: desde planeación y permisos hasta entrega final y mantenimiento.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROPUESTA DE VALOR - MEJORADA */}
      <section className="py-20 bg-white border-b-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">POR QUÉ ELEGIR NUESTRO MODELO</h2>
            <p className="text-gray-600 text-lg">Ventajas del servicio llave en mano</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="border-2 border-gray-900 p-8 hover:bg-gray-900 hover:text-white transition-all duration-300 group">
                <prop.icon className="w-16 h-16 mb-6 text-gray-900 group-hover:text-yellow-600 transition-colors" />
                <h3 className="text-xl font-black mb-3">{prop.title}</h3>
                <p className="opacity-80">{prop.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-900 text-white p-10 border-l-8 border-yellow-600">
            <p className="text-2xl font-bold leading-tight">
              Gestionamos cada etapa del proyecto bajo un esquema integral que optimiza tiempos, costos y cumplimiento normativo, entregando espacios listos para operar desde el primer día.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FLUJO DE TRABAJO INTEGRADO - NUEVA SECCIÓN */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">FLUJO DE TRABAJO INTEGRADO</h2>
            <p className="text-gray-600 text-lg">5 fases coordinadas para ejecución eficiente</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {workflowSteps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-900 text-white w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-black">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-black mb-3">{item.phase}</h3>
                  <p className="text-sm text-gray-600 leading-tight">{item.activities}</p>
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="w-6 h-6 mx-auto mt-4 text-gray-400 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICIOS ESPECIALIZADOS - SIN FOTOS, DISEÑO INDUSTRIAL */}
      <section className="py-28 bg-white border-t-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">SERVICIOS ESPECIALIZADOS</h2>
            <p className="text-gray-600 text-lg">9 áreas de servicio para ejecución completa</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-2 border-gray-900 hover:border-yellow-600 transition-colors"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gray-900 text-white flex items-center justify-center">
                        <service.icon className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-black text-yellow-600 mb-2 tracking-wider">
                        {service.number}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 font-semibold mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pl-26 pt-6 border-t-2 border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-black text-gray-900 uppercase tracking-wider text-xs block mb-2">INCLUYE:</span>
                      {service.includes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. APLICACIONES POR INDUSTRIA - NUEVA SECCIÓN */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">APLICACIONES POR INDUSTRIA</h2>
            <p className="text-gray-600 text-lg">Cómo aplicamos nuestros servicios en diferentes sectores</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white border-2 border-gray-900 p-6">
                <industry.icon className="w-12 h-12 mb-4 text-gray-900" />
                <h3 className="text-xl font-black mb-4">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-900" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VENTAJAS COMPETITIVAS */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">VENTAJAS COMPETITIVAS</h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border-l-8 border-gray-900 p-8">
              <h3 className="text-2xl font-black mb-4">REDUCCIÓN DE TIEMPOS</h3>
              <p className="text-gray-700 mb-4">Fabricación simultánea y estandarizada que acelera hasta 60% vs construcción tradicional.</p>
              <div className="flex items-baseline gap-2">
                <TrendingUp className="w-6 h-6 text-gray-900" />
                <span className="text-sm font-semibold text-gray-600">3-5 meses promedio de ejecución</span>
              </div>
            </div>

            <div className="bg-gray-50 border-l-8 border-gray-900 p-8">
              <h3 className="text-2xl font-black mb-4">CONTROL TOTAL</h3>
              <p className="text-gray-700 mb-4">Gestión integral bajo un solo responsable, eliminando coordinación entre múltiples proveedores.</p>
              <div className="flex items-baseline gap-2">
                <CheckCircle2 className="w-6 h-6 text-gray-900" />
                <span className="text-sm font-semibold text-gray-600">Un solo punto de contacto</span>
              </div>
            </div>

            <div className="bg-gray-50 border-l-8 border-gray-900 p-8">
              <h3 className="text-2xl font-black mb-4">CUMPLIMIENTO NORMATIVO</h3>
              <p className="text-gray-700 mb-4">Adherencia certificada a NOM, códigos locales y estándares de seguridad industrial.</p>
              <div className="flex items-baseline gap-2">
                <Shield className="w-6 h-6 text-gray-900" />
                <span className="text-sm font-semibold text-gray-600">Permisos y certificaciones incluidos</span>
              </div>
            </div>

            <div className="bg-gray-50 border-l-8 border-gray-900 p-8">
              <h3 className="text-2xl font-black mb-4">MANTENIMIENTO POSTVENTA</h3>
              <p className="text-gray-700 mb-4">Acompañamiento técnico continuo para proteger la inversión a largo plazo.</p>
              <div className="flex items-baseline gap-2">
                <Settings className="w-6 h-6 text-gray-900" />
                <span className="text-sm font-semibold text-gray-600">Garantía y seguimiento incluidos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL - MEJORADO */}
      <section className="py-32 bg-gray-900 text-white border-t-8 border-yellow-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest font-bold text-yellow-600 mb-8">
            LISTO PARA INICIAR TU PROYECTO
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            HABLEMOS DE TU PROYECTO INDUSTRIAL O CORPORATIVO
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Nuestro equipo técnico está preparado para analizar tu proyecto y ofrecerte una solución integral llave en mano.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-12 py-5 transition-colors text-xl"
          >
            Solicitar asesoría técnica
          </Link>
        </div>
      </section>
    </div>
  );
}
