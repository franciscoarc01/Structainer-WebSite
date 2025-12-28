import { Building2, Cog, Warehouse, FileCheck, Wrench, ChartBar } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: 'Construcción Modular',
      description: 'Unidades modulares construidas en fábrica diseñadas para ensamblaje rápido en sitio. Nuestro enfoque modular reduce el tiempo de construcción hasta en un 50% mientras mantiene un control de calidad superior a través de ambientes de manufactura controlados.',
      features: [
        'Sistemas estructurales pre-ingenierizados',
        'Manufactura con clima controlado',
        'Reducción de disrupciones en sitio',
        'Configuraciones escalables',
        'Producción con control de calidad'
      ]
    },
    {
      icon: Cog,
      title: 'Ingeniería Industrial',
      description: 'Servicios integrales de ingeniería para instalaciones industriales incluyendo diseño estructural, integración de sistemas y documentación técnica. Nuestro equipo maneja proyectos complejos multidisciplinarios con precisión.',
      features: [
        'Ingeniería y análisis estructural',
        'Diseño de sistemas MEP',
        'Integración de equipos de proceso',
        'Especificaciones técnicas',
        'Documentación de construcción'
      ]
    },
    {
      icon: Warehouse,
      title: 'Sistemas Prefabricados',
      description: 'Técnicas avanzadas de prefabricación para componentes de construcción, sistemas mecánicos y elementos estructurales. La producción en fábrica garantiza consistencia y acelera los cronogramas del proyecto.',
      features: [
        'Paneles de pared prefabricados',
        'Salas mecánicas modulares',
        'Marcos estructurales pre-ensamblados',
        'Sistemas de construcción integrados',
        'Pruebas de fábrica y control de calidad'
      ]
    },
    {
      icon: FileCheck,
      title: 'Proyectos Llave en Mano',
      description: 'Entrega completa del proyecto desde el concepto inicial hasta la puesta en marcha final. Responsabilidad de punto único para diseño, ingeniería, fabricación e instalación.',
      features: [
        'Gestión completa de proyectos',
        'Enfoque de diseño-construcción',
        'Adquisiciones y logística',
        'Instalación y puesta en marcha',
        'Soporte post-finalización'
      ]
    },
    {
      icon: Wrench,
      title: 'Instalación en Sitio',
      description: 'Equipos de instalación expertos gestionando ensamblaje en sitio, integración y puesta en marcha. La logística coordinada asegura el despliegue eficiente de componentes prefabricados.',
      features: [
        'Cuadrillas de instalación experimentadas',
        'Protocolos de seguridad primero',
        'Mínima disrupción en sitio',
        'Integración de sistemas',
        'Puesta en marcha final'
      ]
    },
    {
      icon: ChartBar,
      title: 'Gestión de Proyectos',
      description: 'Gestión de proyectos dedicada asegurando entrega a tiempo y dentro del presupuesto. Supervisión integral de programación, control de calidad y comunicación con stakeholders.',
      features: [
        'Gestión de cronograma',
        'Control de presupuesto',
        'Aseguramiento de calidad',
        'Gestión de riesgos',
        'Reportes al cliente'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Soluciones integrales de construcción e ingeniería diseñadas para los sectores industrial,
            corporativo, logístico y gubernamental.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-6">
                    <service.icon className="w-16 h-16 text-gray-900" />
                  </div>
                  <h2 className="mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gray-200 h-96 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={index % 2 === 0 
                      ? "https://images.unsplash.com/photo-1623428454598-1bfe414bac03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3RlZWwlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY2Nzk0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      : "https://images.unsplash.com/photo-1731847999830-6f71b78d720e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY2Nzk0NjkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    }
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Industrias que Atendemos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experiencia especializada en sectores industriales y comerciales clave.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Manufactura Industrial</h3>
              <p className="text-gray-600">
                Instalaciones de producción, plantas de ensamblaje y complejos industriales.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Desarrollo Corporativo</h3>
              <p className="text-gray-600">
                Edificios de oficinas, campus corporativos y espacios comerciales.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Logística y Distribución</h3>
              <p className="text-gray-600">
                Almacenes, centros de distribución y centros logísticos.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Gobierno e Infraestructura</h3>
              <p className="text-gray-600">
                Instalaciones públicas, edificios institucionales e infraestructura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">¿Necesitas una Solución Personalizada?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo puede desarrollar soluciones de ingeniería y construcción a medida para los requisitos específicos de tu proyecto.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 transition-colors"
          >
            Discute tu Proyecto
          </a>
        </div>
      </section>
    </div>
  );
}
