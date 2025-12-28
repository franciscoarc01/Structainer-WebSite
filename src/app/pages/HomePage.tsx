import { Link } from 'react-router-dom';
import { Building2, Cog, Warehouse, FileCheck, TrendingUp, Shield } from 'lucide-react';

export function HomePage() {
  const services = [
    {
      icon: Building2,
      title: 'Construcción Modular Prefabricada',
      description: 'Diseño, fabricación e instalación de módulos prefabricados y estructuras modulares para oficinas, campamentos, naves industriales, casetas, showrooms y soluciones móviles.'
    },
    {
      icon: Cog,
      title: 'Ingeniería Industrial Integral',
      description: 'Desarrollo completo de ingenierías estructural, eléctrica, hidrosanitaria, HVAC, sistemas contra incendio y seguridad, integradas a proyecto ejecutivo, presupuestos y cronogramas.'
    },
    {
      icon: Warehouse,
      title: 'Sistemas Prefabricados',
      description: 'Componentes construidos en fábrica que garantizan control de calidad y fabricación de precisión.'
    },
    {
      icon: FileCheck,
      title: 'Proyectos Llave en Mano',
      description: 'Entrega de proyectos de principio a fin, desde la planificación hasta la puesta en marcha final.'
    },
    {
      icon: TrendingUp,
      title: 'Optimización de Proyectos',
      description: 'Soluciones enfocadas en eficiencia que reducen tiempo y costos mientras maximizan la calidad.'
    },
    {
      icon: Shield,
      title: 'Cumplimiento y Seguridad',
      description: 'Cumplimiento normativo total y estándares de seguridad en todas las fases del proyecto.'
    }
  ];

  const valueProps = [
    { title: 'Enfoque Llave en Mano', description: 'Entrega completa de proyectos desde el concepto hasta la finalización' },
    { title: 'Velocidad', description: 'Cronogramas acelerados mediante métodos de construcción modular' },
    { title: 'Calidad', description: 'Fabricación controlada en fábrica garantizando estándares consistentes' },
    { title: 'Cumplimiento', description: 'Adhesión total a regulaciones de la industria y protocolos de seguridad' },
    { title: 'Escalabilidad', description: 'Soluciones flexibles que crecen con las necesidades de su negocio' }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Planificación',
      description: 'Análisis integral del proyecto y fase de planificación estratégica.'
    },
    {
      number: '02',
      title: 'Ingeniería',
      description: 'Desarrollo de diseño detallado y documentación de ingeniería.'
    },
    {
      number: '03',
      title: 'Fabricación',
      description: 'Manufactura de precisión en ambiente de fábrica controlado.'
    },
    {
      number: '04',
      title: 'Instalación',
      description: 'Ensamblaje en sitio y puesta en marcha del sistema final.'
    }
  ];

  const sectors = [
    {
      title: 'Industrial',
      description: 'Instalaciones de manufactura, plantas de producción y complejos industriales.',
      image: 'https://images.unsplash.com/photo-1623428454598-1bfe414bac03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3RlZWwlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY2Nzk0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Corporativo',
      description: 'Edificios de oficinas, campus corporativos y espacios comerciales.',
      image: 'https://images.unsplash.com/photo-1704423846283-f92ff6badea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjY3MDU3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Logística',
      description: 'Centros de distribución, soluciones de almacenamiento y centros logísticos.',
      image: 'https://images.unsplash.com/photo-1766021736631-d2f15082aa59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjY3OTQ2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Gobierno',
      description: 'Infraestructura pública, instalaciones institucionales y proyectos gubernamentales.',
      image: 'https://images.unsplash.com/photo-1731847999830-6f71b78d720e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY2Nzk0NjkwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1759647028384-1efcc6e0eff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2R1bGFyJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY2Nzk0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="mb-6">Precisión en Ingeniería y Construcción Modular</h1>
            <p className="text-xl text-gray-300 mb-8">
              Entregamos proyectos industriales llave en mano con sistemas prefabricados avanzados
              para los sectores corporativo, logístico y gubernamental en todo México.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 transition-colors"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">SERVICIOS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales para proyectos de construcción industrial y comercial a gran escala.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 p-8 hover:border-gray-900 transition-colors">
                <service.icon className="w-12 h-12 mb-4 text-gray-900" />
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">NUESTRO DIFERENCIAL</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestro enfoque llave en mano ofrece un valor excepcional a través de ingeniería de precisión y construcción modular.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {valueProps.map((prop, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="mb-2">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">NUESTRO PROCESO</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Un enfoque estructurado que garantiza eficiencia, control y cumplimiento en cada etapa del proyecto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-block mb-4">
                  <div className="w-20 h-20 border-2 border-gray-900 flex items-center justify-center">
                    <span className="text-3xl">{step.number}</span>
                  </div>
                </div>
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">SECTORES</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Construcción modular prefabricada para industria, corporativos, logística y sector público.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-900 h-80">
                  <img 
                    src={sector.image} 
                    alt={sector.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <h3 className="mb-2">{sector.title}</h3>
                    <p className="text-gray-300">{sector.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">¿Listo para iniciar tu proyecto?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Diseñamos y construimos soluciones modulares prefabricadas, seguras, escalables y listas para operar.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
}
