import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Factory,
  Zap,
  Wrench,
  ShieldCheck,
  ClipboardCheck,
  Armchair,
  Package,
  Truck,
  ExternalLink
} from 'lucide-react';

// Importar imágenes locales de divisiones
import imgConstruccionModular from '@/assets/img/divisiones/contruccion modular .jpeg';
import imgIngenieriaConstructora from '@/assets/img/divisiones/Ingeniería y construcción.png.jpeg';
import imgGestoria from '@/assets/img/divisiones/Gestoría administrativa, legal y normativa.png.jpeg';
import imgProcesosIndustriales from '@/assets/img/divisiones/procesos industriales.png';
import imgSeguridadIncendios from '@/assets/img/divisiones/Seguridad contra incendios.png';
import imgMantenimiento from '@/assets/img/divisiones/Servicios postventa y continuidad operativa.png.jpeg';
import imgMobiliario from '@/assets/img/divisiones/Diseño y fabricación de mobiliario.png.jpeg';
import imgComercializadoraLele from '@/assets/img/divisiones/comercializadora lele.png';
import imgFabricacionMetalica from '@/assets/img/servicios/Fabricación Metálica .jpeg';

interface Division {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  services: string[];
  industries: string[];
  image: string;
  color: string;
  website?: string;
}

export function DivisionesPage() {
  const divisions: Division[] = [
    {
      icon: <Factory className="w-12 h-12 stroke-1" />,
      title: 'Structainer',
      subtitle: 'Construcción modular y soluciones prefabricadas',
      description: 'Soluciones modulares rápidas, reubicables y eficientes para diversas aplicaciones industriales y comerciales. Módulos prefabricados con instalación inmediata.',
      services: [
        'Oficinas modulares y móviles',
        'Campamentos industriales',
        'Casetas de vigilancia y control',
        'Comedores y dormitorios',
        'Módulos administrativos',
        'Instalación y transporte incluido'
      ],
      industries: [
        'Minería',
        'Energía',
        'Construcción',
        'Eventos'
      ],
      image: imgConstruccionModular,
      color: 'amber'
    },
    {
      icon: <Building2 className="w-12 h-12 stroke-1" />,
      title: 'VD Engineering',
      subtitle: 'Ingeniería y construcción integral',
      description: 'Especialistas en construcción de naves industriales, edificios corporativos y proyectos de infraestructura con ingeniería multidisciplinaria.',
      services: [
        'Construcción de naves industriales',
        'Edificios corporativos',
        'Terracerías y cimentaciones',
        'Estructuras metálicas y concreto',
        'Instalaciones eléctricas industriales',
        'Proyectos llave en mano'
      ],
      industries: [
        'Automotriz',
        'Manufactura',
        'Logística',
        'Corporativo'
      ],
      image: imgIngenieriaConstructora,
      color: 'blue'
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 stroke-1" />,
      title: 'Sogemsa',
      subtitle: 'Gestoría administrativa, legal y normativa',
      description: 'Reducimos riesgos legales y administrativos desde la planeación. Expertos en permisos, licencias y cumplimiento normativo para proyectos industriales.',
      services: [
        'Estudios de factibilidad',
        'Cambio de uso de suelo',
        'Permisos ambientales',
        'Licencias de construcción',
        'Trámites ante CFE y CEA',
        'Dictámenes de protección civil'
      ],
      industries: [
        'Industrial',
        'Corporativo',
        'Comercial',
        'Gubernamental'
      ],
      image: imgGestoria,
      color: 'slate'
    },
    {
      icon: <Zap className="w-12 h-12 stroke-1" />,
      title: 'Inoxflow',
      subtitle: 'Procesos industriales especializados',
      description: 'Infraestructura técnica crítica para plantas industriales. Especialistas en HVAC, tubería industrial y sistemas de producción.',
      services: [
        'Sistemas HVAC industrial',
        'Tubería de acero inoxidable',
        'Sistemas de proceso',
        'Redes técnicas y drenajes',
        'Instalaciones especiales',
        'Certificación y validación'
      ],
      industries: [
        'Farmacéutica',
        'Alimentaria',
        'Química',
        'Automotriz'
      ],
      image: imgProcesosIndustriales,
      color: 'emerald'
    },
    {
      icon: <ShieldCheck className="w-12 h-12 stroke-1" />,
      title: 'Vefire',
      subtitle: 'Seguridad contra incendios',
      description: 'Sistemas certificados de protección contra incendio. Cumplimiento total con normativa de protección civil y seguridad industrial.',
      services: [
        'Sistemas contra incendio certificados',
        'Rociadores y detección',
        'Red de hidrantes',
        'Extintores y equipamiento',
        'Dictámenes y certificaciones',
        'Mantenimiento especializado'
      ],
      industries: [
        'Todas las industrias',
        'Comercial',
        'Corporativo',
        'Gubernamental'
      ],
      image: imgSeguridadIncendios,
      color: 'red'
    },
    {
      icon: <Wrench className="w-12 h-12 stroke-1" />,
      title: 'Mantenimiento Industrial',
      subtitle: 'Servicios postventa y continuidad operativa',
      description: 'Protección de la inversión con mantenimiento preventivo y correctivo. Garantizamos operación continua de instalaciones y sistemas.',
      services: [
        'Mantenimiento preventivo programado',
        'Mantenimiento correctivo',
        'Contratos anuales',
        'Sistemas HVAC y eléctricos',
        'Impermeabilización y pintura',
        'Respaldo técnico 24/7'
      ],
      industries: [
        'Todas las industrias',
        'Instalaciones operativas',
        'Parques industriales',
        'Corporativos'
      ],
      image: imgMantenimiento,
      color: 'orange'
    },
    {
      icon: <Armchair className="w-12 h-12 stroke-1" />,
      title: 'Varenza Desk',
      subtitle: 'Diseño y fabricación de mobiliario',
      description: 'Diseño y fabricación de mobiliario corporativo a medida. Espacios funcionales equipados para operación inmediata con soluciones personalizadas.',
      services: [
        'Diseño de mobiliario corporativo',
        'Fabricación a medida',
        'Escritorios y mesas de juntas',
        'Soluciones de almacenamiento',
        'Señalización corporativa',
        'Instalación completa'
      ],
      industries: [
        'Oficinas corporativas',
        'Espacios comerciales',
        'Áreas administrativas',
        'Coworking'
      ],
      image: imgMobiliario,
      color: 'indigo'
    },
    {
      icon: <Package className="w-12 h-12 stroke-1" />,
      title: 'Herramentales',
      subtitle: 'Suministro industrial y herramientas',
      description: 'Suministro especializado de herramientas, equipos y consumibles industriales. Inventario completo para operaciones industriales y construcción.',
      services: [
        'Herramientas eléctricas y manuales',
        'Instrumentos de medición',
        'Equipos de taller',
        'Consumibles industriales',
        'Equipos de protección',
        'Entrega y logística'
      ],
      industries: [
        'Manufactura',
        'Construcción',
        'Mantenimiento',
        'Talleres industriales'
      ],
      image: imgFabricacionMetalica,
      color: 'cyan'
    },
    {
      icon: <Truck className="w-12 h-12 stroke-1" />,
      title: 'Comercializadora Lele',
      subtitle: 'Comercialización, distribución y expansión',
      description: 'Distribución B2B y logística comercial. Soluciones de comercialización para productos industriales con alcance nacional y operación profesional.',
      services: [
        'Distribución B2B',
        'Logística y almacenamiento',
        'Gestión de inventarios',
        'Red de distribución nacional',
        'Soluciones de transporte',
        'Comercialización especializada'
      ],
      industries: [
        'Industrial',
        'Construcción',
        'Retail B2B',
        'Manufactura'
      ],
      image: imgComercializadoraLele,
      color: 'purple',
      website: 'https://lelemexico.com/'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string; border: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'hover:bg-blue-600', border: 'border-blue-600' },
      amber: { bg: 'bg-amber-50', text: 'text-amber-600', hover: 'hover:bg-amber-600', border: 'border-amber-600' },
      slate: { bg: 'bg-slate-50', text: 'text-slate-600', hover: 'hover:bg-slate-600', border: 'border-slate-600' },
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', hover: 'hover:bg-emerald-600', border: 'border-emerald-600' },
      red: { bg: 'bg-red-50', text: 'text-red-600', hover: 'hover:bg-red-600', border: 'border-red-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', hover: 'hover:bg-orange-600', border: 'border-orange-600' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', hover: 'hover:bg-indigo-600', border: 'border-indigo-600' },
      cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', hover: 'hover:bg-cyan-600', border: 'border-cyan-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', hover: 'hover:bg-purple-600', border: 'border-purple-600' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 md:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Nuestras Divisiones de Negocio
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
              Structainer V Group opera a través de divisiones especializadas que trabajan de forma coordinada para ofrecer soluciones integrales. Cada división cuenta con experiencia técnica, equipamiento y personal certificado en su área.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 transition-colors group"
              >
                <span>Solicitar información</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 border-2 border-gray-900 transition-colors group"
              >
                <span>Ver servicios</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISIONES */}
      {divisions.map((division, index) => {
        const isImageLeft = index % 2 === 0;
        const colorClasses = getColorClasses(division.color);

        return (
          <section
            key={index}
            className="py-16 md:py-24 border-b border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* IMAGEN */}
                <div className={`${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div
                    className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden"
                    style={{
                      backgroundImage: `url(${division.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>

                {/* CONTENIDO */}
                <div className={`${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Icono */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses.bg} ${colorClasses.text} rounded-lg mb-6`}>
                    {division.icon}
                  </div>

                  {/* Título */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                    {division.title}
                  </h2>

                  {/* Subtítulo */}
                  <p className="text-lg md:text-xl font-semibold text-gray-600 mb-4">
                    {division.subtitle}
                  </p>

                  {/* Descripción */}
                  <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                    {division.description}
                  </p>

                  {/* Servicios principales */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                      Servicios principales
                    </h3>
                    <div className="space-y-2">
                      {division.services.map((service, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1.5 flex-shrink-0">
                            <div className={`w-1.5 h-1.5 ${division.color === 'amber' ? 'bg-amber-500' : 'bg-blue-500'} rounded-full`} />
                          </div>
                          <span className="text-gray-800 text-sm md:text-base">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industrias atendidas */}
                  <div className={`${colorClasses.bg} border-l-4 ${colorClasses.border} p-4 mb-8`}>
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      Industrias atendidas:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {division.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 bg-white text-gray-700 text-sm font-medium border border-gray-200"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  {division.website ? (
                    <a
                      href={division.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 transition-colors group`}
                    >
                      <span>Visitar sitio web</span>
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      to="/contacto"
                      className={`inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 transition-colors group`}
                    >
                      <span>Contactar división</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* MODELO INTEGRADO */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Modelo Integrado 360°
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Todas nuestras divisiones trabajan de forma coordinada bajo un modelo de operación integral. Esto nos permite ejecutar proyectos llave en mano con un solo responsable, desde la planeación hasta la entrega final y el mantenimiento continuo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-bold px-12 py-5 transition-colors text-lg group"
            >
              <span>Solicitar asesoría</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/proyectos"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-bold px-12 py-5 transition-colors text-lg group"
            >
              <span>Ver proyectos</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
