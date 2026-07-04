import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ClipboardCheck,
  Ruler,
  Building2,
  Boxes,
  Settings,
  Wrench,
  Shield,
  Armchair,
  RotateCw,
  Key
} from 'lucide-react';

// Importar imágenes de servicios
import planeacionImg from '../../assets/img/servicios/planeacion.jpeg';
import proyectoEjecutivoImg from '../../assets/img/servicios/proyecto-ejecutivo.jpeg';
import construccionTradicionalImg from '../../assets/img/servicios/Construccion-Tradicional-e-Industrial.jpeg';
import construccionModularImg from '../../assets/img/servicios/Construccion-Modular.jpeg';
import fabricacionMetalicaImg from '../../assets/img/servicios/Fabricacion-Metalica.jpeg';
import mobiliarioImg from '../../assets/img/servicios/Mobiliario y Equipamiento Corporativo.jpeg';
import mantenimientoImg from '../../assets/img/servicios/Mantenimiento Industrial .jpeg';
import sistemasIndustrialesImg from '../../assets/img/servicios/sistemasindustriales.jpeg';
import seguridadIndustrialImg from '../../assets/img/servicios/seguridad-industrial.jpeg';
import proyectosLlaveImg from '../../assets/img/servicios/proyectos-hero.jpeg';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  capabilities: string[];
  idealFor: string;
  image: string;
  cta: string;
}

export function ServiciosPage() {
  const services: Service[] = [
    {
      icon: <ClipboardCheck className="w-12 h-12 stroke-1" />,
      title: 'Planeación, Factibilidades y Gestoría Normativa',
      description: 'Reducimos riesgos, tiempos y bloqueos legales desde la etapa inicial del proyecto.',
      capabilities: [
        'Estudios de factibilidad técnica y financiera',
        'Uso de suelo y cambio de uso',
        'Permisos ambientales e impacto urbano',
        'Licencias de funcionamiento y ejecución de obra',
        'Trámites ante CFE, CEA y dependencias municipales',
        'Protección Civil, dictámenes y opiniones técnicas'
      ],
      idealFor: 'Proyectos industriales, corporativos, comerciales y gubernamentales',
      image: planeacionImg,
      cta: 'Solicitar información'
    },
    {
      icon: <Ruler className="w-12 h-12 stroke-1" />,
      title: 'Ingeniería y Proyecto Ejecutivo',
      description: 'Diseñamos proyectos ejecutables, presupuestables y autorizables.',
      capabilities: [
        'Proyecto arquitectónico',
        'Renders y visualización técnica',
        'Presupuesto general y cronograma',
        'Ingenierías: estructural, eléctrica (BT, MT, AT), hidrosanitaria, HVAC, PCI, seguridad',
        'Metodología BIM',
        'Reduce reprocesos, sobrecostos y errores en obra'
      ],
      idealFor: 'Todo tipo de proyectos que requieran ingeniería multidisciplinaria',
      image: proyectoEjecutivoImg,
      cta: 'Cotizar proyecto'
    },
    {
      icon: <Building2 className="w-12 h-12 stroke-1" />,
      title: 'Construcción Tradicional e Industrial',
      description: 'Obra civil e infraestructura con estándares industriales y normativos.',
      capabilities: [
        'Terracerías y cimentaciones',
        'Estructuras metálicas y de concreto',
        'Naves industriales y edificios corporativos',
        'Instalaciones eléctricas, hidráulicas y especiales',
        'Sistemas contra incendio certificados',
        'Urbanización y obra exterior'
      ],
      idealFor: 'Industria manufacturera, corporativos y proyectos gubernamentales',
      image: construccionTradicionalImg,
      cta: 'Solicitar información'
    },
    {
      icon: <Boxes className="w-12 h-12 stroke-1" />,
      title: 'Construcción Modular y Prefabricada',
      description: 'Rapidez, control de costos y reubicabilidad.',
      capabilities: [
        'Casetas de vigilancia y obra',
        'Oficinas móviles y módulos administrativos',
        'Dormitorios, sanitarios y comedores',
        'Campamentos industriales',
        'Showrooms y remolques especializados',
        'Fabricación, transporte e instalación'
      ],
      idealFor: 'Minería, energía, construcción, industria y eventos',
      image: construccionModularImg,
      cta: 'Cotizar proyecto'
    },
    {
      icon: <Settings className="w-12 h-12 stroke-1" />,
      title: 'Fabricación Metálica y Estructural',
      description: 'Soluciones a medida para entornos industriales exigentes.',
      capabilities: [
        'Estructuras metálicas',
        'Pailería y soldadura especializada',
        'Mezanines y plataformas',
        'Pergolados y cubiertas',
        'Remodelaciones industriales'
      ],
      idealFor: 'Industria en general, almacenes y espacios que requieran estructuras especiales',
      image: fabricacionMetalicaImg,
      cta: 'Solicitar información'
    },
    {
      icon: <Wrench className="w-12 h-12 stroke-1" />,
      title: 'Sistemas Industriales Especializados',
      description: 'Infraestructura crítica para operación continua.',
      capabilities: [
        'Sistemas de tubería industrial',
        'HVAC industrial',
        'Sistemas contra incendio',
        'Drenajes y redes técnicas',
        'Soluciones de producción',
        'Suministro de tubos de acero'
      ],
      idealFor: 'Plantas industriales y proyectos con requerimientos técnicos especializados',
      image: sistemasIndustrialesImg,
      cta: 'Cotizar proyecto'
    },
    {
      icon: <Shield className="w-12 h-12 stroke-1" />,
      title: 'Seguridad Industrial y Protección',
      description: 'Cumplimiento normativo y protección operativa.',
      capabilities: [
        'Sistemas contra incendio (hidrantes, rociadores, detección)',
        'Extintores, gabinetes y señalética',
        'CCTV, control de accesos y alarmas',
        'Capacitación, simulacros y brigadas',
        'Dictámenes y certificaciones'
      ],
      idealFor: 'Cualquier instalación que requiera cumplimiento normativo en protección civil',
      image: seguridadIndustrialImg,
      cta: 'Solicitar información'
    },
    {
      icon: <Armchair className="w-12 h-12 stroke-1" />,
      title: 'Mobiliario y Equipamiento Corporativo',
      description: 'Espacios funcionales listos para operar.',
      capabilities: [
        'Diseño y fabricación de mobiliario a medida',
        'Oficinas, cocinas y áreas operativas',
        'Señalización corporativa',
        'Instalación y puesta en marcha'
      ],
      idealFor: 'Oficinas corporativas, espacios comerciales y áreas administrativas',
      image: mobiliarioImg,
      cta: 'Cotizar proyecto'
    },
    {
      icon: <RotateCw className="w-12 h-12 stroke-1" />,
      title: 'Mantenimiento Industrial y Postventa',
      description: 'Protegemos la inversión en el largo plazo.',
      capabilities: [
        'Mantenimiento preventivo y correctivo',
        'HVAC, impermeabilización y pintura',
        'Instalaciones eléctricas e hidráulicas',
        'Contratos anuales',
        'Garantías y respaldo técnico'
      ],
      idealFor: 'Instalaciones existentes que requieran mantenimiento continuo',
      image: mantenimientoImg,
      cta: 'Solicitar información'
    },
    {
      icon: <Key className="w-12 h-12 stroke-1" />,
      title: 'Proyectos Llave en Mano',
      description: 'Un solo proveedor. Una sola responsabilidad.',
      capabilities: [
        'Planeación y gestoría',
        'Ingeniería y proyecto ejecutivo',
        'Fabricación y construcción',
        'Equipamiento y seguridad',
        'Entrega final y postventa',
        'Proyecto listo para operar desde el día uno'
      ],
      idealFor: 'Clientes que buscan simplificar la gestión con un solo responsable',
      image: proyectosLlaveImg,
      cta: 'Cotizar proyecto'
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 md:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Soluciones integrales en construcción, ingeniería y servicios industriales
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
              Operamos bajo un modelo 360° que integra planeación, gestoría, ingeniería, fabricación, construcción, equipamiento y mantenimiento para proyectos industriales, corporativos y gubernamentales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 transition-colors group"
              >
                <span>Solicitar asesoría técnica</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/proyectos"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 border-2 border-gray-900 transition-colors group"
              >
                <span>Ver proyectos ejecutados</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      {services.map((service, index) => {
        const isImageLeft = index % 2 === 0;

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
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>

                {/* CONTENIDO */}
                <div className={`${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Icono */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-lg mb-6">
                    {service.icon}
                  </div>

                  {/* Título */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    {service.title}
                  </h2>

                  {/* Descripción */}
                  <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Capacidades */}
                  <div className="space-y-2.5 mb-6">
                    {service.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                        </div>
                        <span className="text-gray-800 text-sm md:text-base">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal para */}
                  <div className="bg-slate-50 border-l-4 border-blue-600 p-4 mb-8">
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      Ideal para:
                    </p>
                    <p className="text-sm text-gray-900">
                      {service.idealFor}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 transition-colors group"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CIERRE COMERCIAL */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proyectos Llave en Mano
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Cada solución forma parte de un modelo integral que nos permite ejecutar proyectos completos con un solo responsable. Desde la planeación hasta la entrega final.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-bold px-12 py-5 transition-colors text-lg group"
            >
              <span>Solicitar asesoría técnica</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/proyectos"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-bold px-12 py-5 transition-colors text-lg group"
            >
              <span>Ver proyectos ejecutados</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
