import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  Package,
  DollarSign,
  Wrench,
  Leaf,
  ClipboardCheck,
  FileCheck,
  PenTool,
  Hammer,
  Shield,
  CheckCircle2,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

// ============================================
// IMPORTACIÓN DE IMÁGENES
// ============================================

// HERO
import heroImg from '../../assets/img/divisiones/contruccion modular .jpeg';

// SOBRE NOSOTROS
import aboutImg from '../../assets/img/inicio/Sobre nosotros.png';

// SECTORES
import industriaImg from '../../assets/img/inicio/Industria.jpeg';
import agriculturaImg from '../../assets/img/inicio/agricultura.jpeg';
import educacionImg from '../../assets/img/inicio/educacion.png.jpeg';
import construccionImg from '../../assets/img/inicio/contruccion.png.jpeg';
import mineriaImg from '../../assets/img/inicio/Mineria.png.jpeg';
import saludImg from '../../assets/img/inicio/salud.jpeg';
import petroleoImg from '../../assets/img/inicio/petroleo y gas .jpeg';

// PRODUCTOS (Imágenes para cada categoría)
import casetasImg from '../../assets/img/inicio/Casetas especializadas .jpeg';
import modulosImg from '../../assets/img/inicio/Módulos prefabricados y modulares.jpeg';
import remolquesImg from '../../assets/img/inicio/Remolques y soluciones móviles.jpeg';
import estructurasImg from '../../assets/img/inicio/Estructuras metálicas y soluciones industriales.jpeg';
import sistemasImg from '../../assets/img/inicio/Sistemas industriales y de seguridad.jpeg';
import mobiliarioImg from '../../assets/img/inicio/Mobiliario y equipamiento.jpeg';
import mantenimientoImg from '../../assets/img/inicio/Mantenimiento y postventa .jpeg';

// PROYECTOS - Imágenes reales de los proyectos
import bodegaTeletonImg from '../../assets/img/proyectos/bodega teleton 1.jpeg';
import habitacionesImg from '../../assets/img/proyectos/habitaciones modulares 01  .jpeg';
import comedorProfImg from '../../assets/img/proyectos/comedor profesores 1.jpeg';
import oficinaZevanaImg from '../../assets/img/proyectos/oficina corporativa zevana 1.jpeg';
import escuelaModularImg from '../../assets/img/proyectos/escula modular 1 .jpg';
import estructurasProyectoImg from '../../assets/img/proyectos/estructuras metalicas 1 .jpg';
import moduloVentaImg from '../../assets/img/proyectos/modulo de venta 01.jpg';
import remolqueBanosImg from '../../assets/img/proyectos/remolque de baños 1 .jpeg';

// CLIENTES
import niveaLogo from '../../assets/logos/NIVEA.jpg';
import gknLogo from '../../assets/logos/GKN.PNG.jpg';
import farmaciasLogo from '../../assets/logos/farmacias gualajara.jpg';
import hertzLogo from '../../assets/logos/hertz.png';
import castoresLogo from '../../assets/logos/grupo castores.png';
import zaruLogo from '../../assets/logos/zaru.jpg';
import bachocoLogo from '../../assets/logos/bachoco.jpg';
import oxxoLogo from '../../assets/logos/OXXO_logo.svg';
import hutchinsonLogo from '../../assets/logos/Hutchinson-1.png';
import caisaLogo from '../../assets/logos/caisa.jpeg';
import gpLogo from '../../assets/logos/gp.png';
import abbLogo from '../../assets/logos/abb.png';
import amazonLogo from '../../assets/logos/amazon.png';
import tresGuerrasLogo from '../../assets/logos/PAQUETERIA TRES GUERRAS.jpg';
import mapremexLogo from '../../assets/logos/MAPREMEX.png';

// CTA FINAL
import ctaFinalImg from '../../assets/img/servicios/Proyectos Llave en Mano.jpeg';

export function InicioPage() {
  // ============================================
  // ESTADOS PARA CARRUSELES Y FORMULARIO
  // ============================================
  const [currentSectorIndex, setCurrentSectorIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Estados para el formulario de contacto
  const [contactFormData, setContactFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    sector: '',
    mensaje: ''
  });

  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  // ============================================
  // MANEJADORES DE FORMULARIO DE CONTACTO
  // ============================================
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);

    try {
      // Construir el mensaje para WhatsApp
      let message = `*Nueva consulta desde Inicio - Structainer V Group*\n\n`;
      message += `*Nombre:* ${contactFormData.nombre}\n`;
      message += `*Empresa:* ${contactFormData.empresa}\n`;
      message += `*Email:* ${contactFormData.email}\n`;
      message += `*Teléfono:* ${contactFormData.telefono}\n`;
      message += `*Sector:* ${contactFormData.sector}\n`;
      message += `\n*Mensaje:*\n${contactFormData.mensaje}`;

      // Codificar el mensaje para URL
      const encodedMessage = encodeURIComponent(message);

      // Construir URL de WhatsApp
      const whatsappURL = `https://api.whatsapp.com/send/?phone=524427220385&text=${encodedMessage}&type=phone_number&app_absent=0`;

      // Abrir WhatsApp en una nueva ventana
      window.open(whatsappURL, '_blank');

      // Limpiar formulario después de un pequeño delay
      setTimeout(() => {
        setContactFormData({
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          sector: '',
          mensaje: ''
        });
      }, 1000);

    } catch (error) {
      console.error('Error al procesar el formulario:', error);
    } finally {
      setIsSubmittingContact(false);
    }
  };

  // ============================================
  // DATOS - SECTORES
  // ============================================
  const sectores = [
    {
      id: 1,
      title: 'Industria',
      description: 'Plantas de manufactura, naves industriales, áreas de producción y almacenamiento especializado.',
      image: industriaImg
    },
    {
      id: 2,
      title: 'Agricultura',
      description: 'Instalaciones agroindustriales, empacadoras, bodegas refrigeradas y centros de acopio.',
      image: agriculturaImg
    },
    {
      id: 3,
      title: 'Educación',
      description: 'Aulas modulares, laboratorios, comedores escolares y espacios deportivos.',
      image: educacionImg
    },
    {
      id: 4,
      title: 'Construcción',
      description: 'Oficinas de obra, bodegas de herramienta, vestidores y áreas operativas temporales.',
      image: construccionImg
    },
    {
      id: 5,
      title: 'Minería',
      description: 'Campamentos mineros, comedores industriales, oficinas de campo y almacenes.',
      image: mineriaImg
    },
    {
      id: 6,
      title: 'Salud',
      description: 'Consultorios móviles, laboratorios clínicos, farmacias y espacios médicos modulares.',
      image: saludImg
    },
    {
      id: 7,
      title: 'Petróleo y Gas',
      description: 'Instalaciones offshore, campamentos petroleros, centros de control y almacenes técnicos.',
      image: petroleoImg
    }
  ];

  // ============================================
  // DATOS - PRODUCTOS
  // ============================================
  const productos = [
    {
      id: 1,
      category: 'Casetas especializadas',
      image: casetasImg,
      items: [
        'Casetas de vigilancia y control de acceso',
        'Casetas de pesaje y básculas',
        'Módulos de ventas y punto de venta',
        'Casetas para procesos industriales'
      ]
    },
    {
      id: 2,
      category: 'Módulos prefabricados y modulares',
      image: modulosImg,
      items: [
        'Oficinas corporativas modulares',
        'Comedores industriales',
        'Dormitorios y habitaciones',
        'Aulas y espacios educativos'
      ]
    },
    {
      id: 3,
      category: 'Remolques y soluciones móviles',
      image: remolquesImg,
      items: [
        'Remolques habitacionales',
        'Oficinas móviles sobre chasis',
        'Unidades sanitarias móviles',
        'Laboratorios transportables'
      ]
    },
    {
      id: 4,
      category: 'Estructuras metálicas y soluciones industriales',
      image: estructurasImg,
      items: [
        'Naves industriales',
        'Estructuras para techumbre',
        'Mezanines y entrepisos',
        'Puentes peatonales'
      ]
    },
    {
      id: 5,
      category: 'Sistemas industriales y de seguridad',
      image: sistemasImg,
      items: [
        'Sistemas HVAC industrial',
        'Instalaciones eléctricas especializadas',
        'Control de acceso y videovigilancia',
        'Sistemas contra incendio'
      ]
    },
    {
      id: 6,
      category: 'Mobiliario y equipamiento',
      image: mobiliarioImg,
      items: [
        'Mobiliario corporativo',
        'Equipamiento de cocinas industriales',
        'Mobiliario educativo y hospitalario',
        'Señalética y equipamiento urbano'
      ]
    },
    {
      id: 7,
      category: 'Mantenimiento y postventa',
      image: mantenimientoImg,
      items: [
        'Mantenimiento preventivo y correctivo',
        'Ampliaciones y adecuaciones',
        'Reubicación de módulos',
        'Garantía extendida'
      ]
    }
  ];

  // ============================================
  // DATOS - PROYECTOS
  // ============================================
  const proyectos = [
    {
      id: 1,
      image: bodegaTeletonImg,
      type: 'Bodega Industrial',
      location: 'Fundación Teletón'
    },
    {
      id: 2,
      image: habitacionesImg,
      type: 'Habitaciones Modulares',
      location: 'Sinankay, Querétaro'
    },
    {
      id: 3,
      image: comedorProfImg,
      type: 'Comedor de Profesores',
      location: 'Colegio Kennedy'
    },
    {
      id: 4,
      image: oficinaZevanaImg,
      type: 'Oficina Corporativa',
      location: 'Zevana, Querétaro'
    },
    {
      id: 5,
      image: escuelaModularImg,
      type: 'Escuela Modular',
      location: 'Querétaro'
    },
    {
      id: 6,
      image: estructurasProyectoImg,
      type: 'Estructuras Metálicas',
      location: 'Querétaro'
    },
    {
      id: 7,
      image: moduloVentaImg,
      type: 'Módulo de Venta',
      location: 'Querétaro'
    },
    {
      id: 8,
      image: remolqueBanosImg,
      type: 'Remolque Sanitario',
      location: 'México'
    }
  ];

  // ============================================
  // DATOS - CLIENTES
  // ============================================
  const clientes = [
    { name: 'NIVEA', logo: niveaLogo },
    { name: 'GKN Automotive', logo: gknLogo },
    { name: 'Farmacias Guadalajara', logo: farmaciasLogo },
    { name: 'Hertz México', logo: hertzLogo },
    { name: 'OXXO', logo: oxxoLogo },
    { name: 'Bachoco', logo: bachocoLogo },
    { name: 'Hutchinson', logo: hutchinsonLogo },
    { name: 'Grupo Castores', logo: castoresLogo },
    { name: 'ZARÚ', logo: zaruLogo },
    { name: 'CAISA', logo: caisaLogo },
    { name: 'GP', logo: gpLogo },
    { name: 'ABB', logo: abbLogo },
    { name: 'Amazon', logo: amazonLogo },
    { name: 'Paquetería Tres Guerras', logo: tresGuerrasLogo },
    { name: 'MAPREMEX', logo: mapremexLogo }
  ];

  // ============================================
  // FUNCIONES DE NAVEGACIÓN - SECTORES
  // ============================================
  const nextSector = () => {
    setCurrentSectorIndex((prev) =>
      prev === sectores.length - 1 ? 0 : prev + 1
    );
  };

  const prevSector = () => {
    setCurrentSectorIndex((prev) =>
      prev === 0 ? sectores.length - 1 : prev - 1
    );
  };

  // ============================================
  // FUNCIONES DE NAVEGACIÓN - PRODUCTOS
  // ============================================
  const nextProduct = () => {
    setCurrentProductIndex((prev) =>
      prev === productos.length - 1 ? 0 : prev + 1
    );
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) =>
      prev === 0 ? productos.length - 1 : prev - 1
    );
  };

  // ============================================
  // FUNCIONES DE NAVEGACIÓN - PROYECTOS
  // ============================================
  const nextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === proyectos.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? proyectos.length - 1 : prev - 1
    );
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="bg-white">
      {/* ============================================ */}
      {/* 1. HERO SECTION - 2 COLUMNAS */}
      {/* ============================================ */}
      <section className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* COLUMNA IZQUIERDA - TEXTO */}
            <div className="space-y-8">
              {/* Eyebrow */}
              <div className="inline-block">
                <span className="text-sm font-bold tracking-widest text-[#C8A256] uppercase">
                  STRUCTAINER V GROUP
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#04254D] leading-tight">
                Soluciones integrales en construcción, ingeniería y servicios industriales
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-700 leading-relaxed">
                Más de 6 años de experiencia en proyectos industriales, corporativos y gubernamentales bajo un modelo 360° llave en mano.
              </p>

              {/* Texto de soporte */}
              <p className="text-base text-gray-600 leading-relaxed">
                No solo construimos infraestructura: diseñamos soluciones completas, seguras y sostenibles que garantizan eficiencia operativa, rentabilidad y continuidad del negocio.
              </p>

              {/* KPIs */}
              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="border-l-4 border-[#C8A256] pl-4">
                  <div className="text-3xl font-bold text-[#04254D]">9</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Divisiones especializadas</div>
                </div>
                <div className="border-l-4 border-[#C8A256] pl-4">
                  <div className="text-3xl font-bold text-[#04254D]">+6 años</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">De experiencia</div>
                </div>
                <div className="border-l-4 border-[#C8A256] pl-4">
                  <div className="text-3xl font-bold text-[#04254D]">360°</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Modelo llave en mano</div>
                </div>
                <div className="border-l-4 border-[#C8A256] pl-4">
                  <div className="text-3xl font-bold text-[#04254D]">Nacional</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Cobertura</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/grupo"
                  className="inline-flex items-center justify-center gap-2 bg-[#04254D] text-white px-8 py-4 hover:bg-[#C8A256] transition-colors font-semibold"
                >
                  Conocer Structainer
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#04254D] text-[#04254D] px-8 py-4 hover:bg-[#04254D] hover:text-white transition-colors font-semibold"
                >
                  Hablar con un asesor
                  <Phone className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* COLUMNA DERECHA - IMAGEN */}
            <div className="relative h-[600px] lg:h-[700px]">
              <img
                src={heroImg}
                alt="Proyecto industrial Structainer V Group"
                className="absolute inset-0 w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 2. SOBRE NOSOTROS - 2 COLUMNAS INVERTIDAS */}
      {/* ============================================ */}
      <section className="py-24 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* IMAGEN - Primera en mobile, segunda en desktop */}
            <div className="order-1 lg:order-2">
              <img
                src={aboutImg}
                alt="Structainer V Group - Instalaciones"
                className="w-full h-[500px] object-cover shadow-xl"
              />
            </div>

            {/* CONTENIDO */}
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#04254D]">
                Sobre nosotros
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Structainer V Group es un holding empresarial mexicano con más de 6 años de experiencia, integrado por <strong>9 divisiones especializadas</strong> que operan bajo un modelo 360° llave en mano para proyectos industriales, corporativos y gubernamentales.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestro enfoque técnico, profesional y confiable está orientado a garantizar eficiencia operativa, rentabilidad y continuidad del negocio en cada proyecto que desarrollamos.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Acompañamos a nuestros clientes desde la planeación inicial hasta el mantenimiento postventa, asegurando que cada instalación cumpla con la normatividad vigente y opere de manera óptima desde el primer día.
              </p>

              <div className="pt-4">
                <p className="text-xl font-semibold text-[#04254D] italic border-l-4 border-[#C8A256] pl-6">
                  "No solo construimos infraestructura: diseñamos soluciones completas, seguras y sostenibles."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 3. NUESTROS SECTORES - CARRUSEL */}
      {/* ============================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04254D] mb-4">
              Nuestros sectores
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experiencia comprobada en múltiples industrias, adaptando nuestras soluciones a las necesidades específicas de cada sector.
            </p>
          </div>

          {/* Carrusel de sectores */}
          <div className="relative">
            {/* Cards visibles (3 en desktop, 2 en tablet, 1 en mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[0, 1, 2].map((offset) => {
                const index = (currentSectorIndex + offset) % sectores.length;
                const sector = sectores[index];
                return (
                  <div
                    key={sector.id}
                    className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Imagen */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                      {/* Título sobre imagen */}
                      <div className="absolute bottom-6 left-6">
                        <h3 className="text-2xl font-bold text-white">
                          {sector.title}
                        </h3>
                      </div>
                    </div>

                    {/* Descripción */}
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controles de navegación */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevSector}
                className="p-3 bg-[#04254D] text-white hover:bg-[#C8A256] transition-colors"
                aria-label="Sector anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSector}
                className="p-3 bg-[#04254D] text-white hover:bg-[#C8A256] transition-colors"
                aria-label="Siguiente sector"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 4. LÍNEA DE PRODUCTOS - CARRUSEL */}
      {/* ============================================ */}
      <section className="py-24 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04254D] mb-6">
              Línea de productos Structainer V Group
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Nuestro portafolio de productos está diseñado para ofrecer <strong>rapidez en la entrega, eficiencia operativa y adaptabilidad</strong> a las necesidades específicas de cada proyecto. Desde casetas especializadas hasta sistemas industriales complejos.
            </p>
          </div>

          {/* Carrusel de productos */}
          <div className="relative">
            {/* Card actual con imagen */}
            <div className="bg-white border border-gray-200 overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Imagen del producto */}
                <div className="relative h-[400px] lg:h-[500px]">
                  <img
                    src={productos[currentProductIndex].image}
                    alt={productos[currentProductIndex].category}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Contenido del producto */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#04254D] text-white p-4 flex-shrink-0">
                      <Package className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#04254D] mb-2">
                        {productos[currentProductIndex].category}
                      </h3>
                      <span className="text-sm text-gray-500 uppercase tracking-wide">
                        Categoría {currentProductIndex + 1} de {productos.length}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {productos[currentProductIndex].items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#C8A256] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Controles de navegación */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevProduct}
                className="p-3 bg-[#04254D] text-white hover:bg-[#C8A256] transition-colors"
                aria-label="Categoría anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextProduct}
                className="p-3 bg-[#04254D] text-white hover:bg-[#C8A256] transition-colors"
                aria-label="Siguiente categoría"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 5. VALORES OPERATIVOS / BENEFICIOS */}
      {/* ============================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04254D] mb-4">
              Beneficios operativos
            </h2>
          </div>

          {/* Grid de 4 beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Comodidad */}
            <div className="text-center p-8 bg-[#F0F0F0] hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#04254D] text-white mb-6">
                <Building2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#04254D] mb-3">
                Comodidad
              </h3>
              <p className="text-gray-600">
                Espacios funcionales, ergonómicos y diseñados para mejorar la productividad de su equipo.
              </p>
            </div>

            {/* Ahorro */}
            <div className="text-center p-8 bg-[#F0F0F0] hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#04254D] text-white mb-6">
                <DollarSign className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#04254D] mb-3">
                Ahorro
              </h3>
              <p className="text-gray-600">
                Reducción de costos operativos, tiempos de construcción y recursos durante el ciclo del proyecto.
              </p>
            </div>

            {/* Flexibilidad */}
            <div className="text-center p-8 bg-[#F0F0F0] hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#04254D] text-white mb-6">
                <Wrench className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#04254D] mb-3">
                Flexibilidad
              </h3>
              <p className="text-gray-600">
                Soluciones modulares adaptables, reubicables y escalables según las necesidades de su operación.
              </p>
            </div>

            {/* Ecológicos */}
            <div className="text-center p-8 bg-[#F0F0F0] hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#04254D] text-white mb-6">
                <Leaf className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#04254D] mb-3">
                Ecológicos
              </h3>
              <p className="text-gray-600">
                Construcción sostenible con materiales certificados y procesos que minimizan el impacto ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 6. CONOCE NUESTROS SERVICIOS */}
      {/* ============================================ */}
      <section className="py-24 bg-[#04254D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Conoce nuestros servicios
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Contamos con profesionales altamente calificados en cada especialidad, garantizando un acompañamiento técnico integral en todas las fases del proyecto.
            </p>
          </div>

          {/* Grid de servicios - 2 columnas en desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Servicio 1 */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#C8A256] p-3 flex-shrink-0">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Planeación y factibilidades</h3>
                <p className="text-gray-300">
                  Estudios de viabilidad técnica, normativa, uso de suelo, análisis de sitio y presupuestos preliminares.
                </p>
              </div>
            </div>

            {/* Servicio 2 */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#C8A256] p-3 flex-shrink-0">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Gestoría legal y normativa</h3>
                <p className="text-gray-300">
                  Permisos, licencias de construcción, trámites ante autoridades y cumplimiento regulatorio.
                </p>
              </div>
            </div>

            {/* Servicio 3 */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#C8A256] p-3 flex-shrink-0">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Proyecto ejecutivo e ingenierías</h3>
                <p className="text-gray-300">
                  Diseño arquitectónico, ingenierías estructural, eléctrica, hidráulica, HVAC y coordinación BIM.
                </p>
              </div>
            </div>

            {/* Servicio 4 */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#C8A256] p-3 flex-shrink-0">
                <Hammer className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ejecución de obra</h3>
                <p className="text-gray-300">
                  Fabricación en planta, transporte especializado, montaje en sitio y supervisión técnica permanente.
                </p>
              </div>
            </div>

            {/* Servicio 5 */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#C8A256] p-3 flex-shrink-0">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Mobiliario, equipamiento y seguridad</h3>
                <p className="text-gray-300">
                  Amueblado integral, equipamiento especializado, sistemas de seguridad y control de acceso.
                </p>
              </div>
            </div>

            {/* Servicio 6 */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#C8A256] p-3 flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Entrega final y mantenimiento postventa</h3>
                <p className="text-gray-300">
                  Puesta en marcha, capacitación de personal, manuales operativos, garantías y mantenimiento programado.
                </p>
              </div>
            </div>
          </div>

          {/* Cierre - Esquema llave en mano */}
          <div className="text-center pt-8 border-t border-white/20">
            <p className="text-xl md:text-2xl font-bold text-[#C8A256]">
              Esquema 360° llave en mano: Un solo responsable de principio a fin.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 7. PROYECTOS - EXPERIENCIA E INFRAESTRUCTURA */}
      {/* ============================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04254D] mb-4">
              Proyectos destacados
            </h2>
            <p className="text-lg text-gray-600">
              Experiencia e infraestructura desarrollada para clientes corporativos, industriales y gubernamentales.
            </p>
          </div>

          {/* Carrusel de proyectos */}
          <div className="relative">
            {/* Grid de 4 proyectos visibles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[0, 1, 2, 3].map((offset) => {
                const index = (currentProjectIndex + offset) % proyectos.length;
                const proyecto = proyectos[index];
                return (
                  <div
                    key={proyecto.id}
                    className="group relative aspect-[3/4] overflow-hidden bg-gray-900 cursor-pointer"
                  >
                    <img
                      src={proyecto.image}
                      alt={proyecto.type}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-lg font-bold mb-2">
                        {proyecto.type}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {proyecto.location}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controles */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevProject}
                className="p-3 bg-[#04254D] text-white hover:bg-[#C8A256] transition-colors"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextProject}
                className="p-3 bg-[#04254D] text-white hover:bg-[#C8A256] transition-colors"
                aria-label="Siguiente proyecto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Link a página de proyectos */}
            <div className="text-center mt-8">
              <Link
                to="/proyectos"
                className="inline-flex items-center gap-2 text-[#04254D] hover:text-[#C8A256] font-semibold transition-colors"
              >
                Ver todos los proyectos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 8. NUESTROS CLIENTES */}
      {/* ============================================ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#04254D] mb-4">
              Nuestros clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empresas líderes que han depositado su confianza en nosotros gracias a nuestro cumplimiento técnico y resultados medibles.
            </p>
          </div>

          {/* Carrusel infinito de logos */}
          <div className="relative bg-white py-8">
            <div className="flex clients-carousel">
              {/* Primera serie */}
              {clientes.map((cliente, index) => (
                <div key={`first-${index}`} className="flex items-center justify-center px-12 flex-shrink-0">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={cliente.logo}
                      alt={cliente.name}
                      className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-110"
                      style={{ minWidth: '120px' }}
                    />
                  </div>
                </div>
              ))}
              {/* Duplicado para efecto infinito */}
              {clientes.map((cliente, index) => (
                <div key={`second-${index}`} className="flex items-center justify-center px-12 flex-shrink-0">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={cliente.logo}
                      alt={cliente.name}
                      className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-110"
                      style={{ minWidth: '120px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes clients-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .clients-carousel {
              animation: clients-scroll 40s linear infinite;
            }
            .clients-carousel:hover {
              animation-play-state: paused;
            }
          `
        }} />
      </section>

      {/* ============================================ */}
      {/* 9. CTA FINAL */}
      {/* ============================================ */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src={ctaFinalImg}
          alt="Structainer V Group - Proyectos industriales"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            {/* Frase */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              9 divisiones. Un solo responsable. Proyectos listos para operar.
            </h2>

            {/* CTA */}
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 bg-[#C8A256] text-white font-semibold px-10 py-5 hover:bg-white hover:text-[#04254D] transition-colors text-lg group"
            >
              Solicitar asesoría técnica
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 10. CONTACTO - FORMULARIO INTEGRADO */}
      {/* ============================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* COLUMNA IZQUIERDA - INFORMACIÓN */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#04254D] mb-6">
                Contacto
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Estamos listos para analizar su proyecto y proporcionar una solución técnica integral. Complete el formulario y un asesor especializado se pondrá en contacto con usted.
              </p>

              {/* Datos de contacto */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#04254D] text-white p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#04254D] mb-1">Oficina Principal</h3>
                    <p className="text-gray-700">
                      Parque Industrial Terra Business – Nave 29C<br />
                      Santiago de Querétaro, Querétaro, México
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#04254D] text-white p-3 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#04254D] mb-1">Teléfono / WhatsApp</h3>
                    <a
                      href="tel:+524427220385"
                      className="text-gray-700 hover:text-[#C8A256] transition-colors"
                    >
                      442 722 03 85
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#04254D] text-white p-3 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#04254D] mb-1">Correo Electrónico</h3>
                    <a
                      href="mailto:ventas@structainer.net"
                      className="text-gray-700 hover:text-[#C8A256] transition-colors"
                    >
                      ventas@structainer.net
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA - FORMULARIO */}
            <div className="bg-[#F0F0F0] p-8 md:p-10">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-bold text-[#04254D] mb-2 uppercase tracking-wide">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={contactFormData.nombre}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C8A256] focus:outline-none transition-colors"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="empresa" className="block text-sm font-bold text-[#04254D] mb-2 uppercase tracking-wide">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={contactFormData.empresa}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C8A256] focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#04254D] mb-2 uppercase tracking-wide">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={contactFormData.email}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C8A256] focus:outline-none transition-colors"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-bold text-[#04254D] mb-2 uppercase tracking-wide">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={contactFormData.telefono}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C8A256] focus:outline-none transition-colors"
                  />
                </div>

                {/* Sector / Tipo de proyecto */}
                <div>
                  <label htmlFor="sector" className="block text-sm font-bold text-[#04254D] mb-2 uppercase tracking-wide">
                    Sector / Tipo de proyecto *
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    required
                    value={contactFormData.sector}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C8A256] focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="industria">Industria</option>
                    <option value="agricultura">Agricultura</option>
                    <option value="educacion">Educación</option>
                    <option value="construccion">Construcción</option>
                    <option value="mineria">Minería</option>
                    <option value="salud">Salud</option>
                    <option value="petroleo">Petróleo y Gas</option>
                    <option value="corporativo">Corporativo</option>
                    <option value="gobierno">Gobierno</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-bold text-[#04254D] mb-2 uppercase tracking-wide">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    value={contactFormData.mensaje}
                    onChange={handleContactChange}
                    placeholder="Describa brevemente su proyecto o necesidad..."
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C8A256] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Botón de envío */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmittingContact}
                    className="w-full bg-[#04254D] text-white font-semibold px-8 py-4 hover:bg-[#C8A256] transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmittingContact ? 'Enviando...' : 'Enviar solicitud'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
