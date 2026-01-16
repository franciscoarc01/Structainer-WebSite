import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Importar imágenes de proyectos - Bodega Teletón
import bodegaTeleton1 from '../../assets/img/proyectos/bodega teleton 1.jpeg';
import bodegaTeleton2 from '../../assets/img/proyectos/bodega de teleton 2).jpeg';
import bodegaTeleton3 from '../../assets/img/proyectos/bodega teleton 3.jpeg';

// Comedor de Profesores
import comedorProf1 from '../../assets/img/proyectos/comedor profesores 1.jpeg';
import comedorProf2 from '../../assets/img/proyectos/comedor profesores2.jpeg';
import comedorProf3 from '../../assets/img/proyectos/comedor de profesores 3.jpeg';

// Escuela Modular
import escuelaModular1 from '../../assets/img/proyectos/escula modular 1 .jpg';
import escuelaModular2 from '../../assets/img/proyectos/escuela modular 2.jpg';
import escuelaModular3 from '../../assets/img/proyectos/escuela modular 3.jpg';

// Estructuras Metálicas
import estructuras1 from '../../assets/img/proyectos/estructuras metalicas 1 .jpg';
import estructuras2 from '../../assets/img/proyectos/estructuras metalicas 2 .jpg';
import estructuras3 from '../../assets/img/proyectos/estructuras metalicas 3.jpg';

// Habitaciones Modulares
import habitaciones1 from '../../assets/img/proyectos/habitaciones modulares 01  .jpeg';
import habitaciones2 from '../../assets/img/proyectos/habitaciones modulares 02.jpeg';
import habitaciones3 from '../../assets/img/proyectos/habitaciones modulares 3.jpeg';

// Módulo de Venta
import moduloVenta1 from '../../assets/img/proyectos/modulo de venta 01.jpg';
import moduloVenta2 from '../../assets/img/proyectos/modulo ventas 2 .jpg';

// Oficina Corporativa
import oficinaZevana from '../../assets/img/proyectos/oficina corporativa zevana 1.jpeg';

// Remolque de Baños
import remolque1 from '../../assets/img/proyectos/remolque de baños 1 .jpeg';
import remolque2 from '../../assets/img/proyectos/remolque de baños 2 .jpeg';
import remolque3 from '../../assets/img/proyectos/remolque de baños 3 .jpeg';

interface Project {
  title: string;
  location: string;
  images: string[];
  slug: string;
  description?: string;
}

// Componente de Carrusel para cada proyecto
function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden group">
      <img
        src={images[currentIndex]}
        alt={`${title} - Imagen ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {images.length > 1 && (
        <>
          {/* Botones de navegación */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicadores de puntos */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

export function ProjectsPage() {
  const projects: Project[] = [
    {
      title: 'Bodega de Almacenamiento – Fundación Teletón',
      location: 'Estado de México',
      images: [bodegaTeleton1, bodegaTeleton2, bodegaTeleton3],
      slug: 'bodega-teleton',
      description: 'Construcción modular de bodega de alto rendimiento'
    },
    {
      title: 'Habitaciones Modulares Sinankay',
      location: 'Querétaro',
      images: [habitaciones1, habitaciones2, habitaciones3],
      slug: 'habitaciones-sinankay',
      description: 'Centro habitacional con módulos prefabricados'
    },
    {
      title: 'Comedor de Profesores – Colegio Kennedy',
      location: 'Querétaro',
      images: [comedorProf1, comedorProf2, comedorProf3],
      slug: 'comedor-kennedy',
      description: 'Espacio modular para área de alimentos'
    },
    {
      title: 'Oficina Corporativa Zevana',
      location: 'Querétaro',
      images: [oficinaZevana],
      slug: 'oficinas-zevana',
      description: 'Diseño y construcción de oficinas corporativas'
    },
    {
      title: 'Escuela Modular',
      location: 'Querétaro',
      images: [escuelaModular1, escuelaModular2, escuelaModular3],
      slug: 'escuela-modular',
      description: 'Aulas y espacios educativos modulares'
    },
    {
      title: 'Estructuras Metálicas Industriales',
      location: 'Querétaro',
      images: [estructuras1, estructuras2, estructuras3],
      slug: 'estructuras-metalicas',
      description: 'Fabricación e instalación de estructuras metálicas'
    },
    {
      title: 'Módulos de Venta',
      location: 'Querétaro',
      images: [moduloVenta1, moduloVenta2],
      slug: 'modulos-venta',
      description: 'Módulos comerciales prefabricados'
    },
    {
      title: 'Remolque de Baños Portátiles',
      location: 'México',
      images: [remolque1, remolque2, remolque3],
      slug: 'remolque-banos',
      description: 'Unidades sanitarias móviles'
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Proyectos
            </h1>
            <p className="text-xl text-gray-600">
              Experiencia comprobada en soluciones industriales, modulares y corporativas.
            </p>
          </div>
        </div>
      </section>

      {/* GRID DE PROYECTOS */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.slug} className="group">
                <ProjectCarousel images={project.images} title={project.title} />
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{project.location}</p>
                  {project.description && (
                    <p className="text-sm text-gray-500">{project.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitas un proyecto similar?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Contacta con nuestro equipo para una asesoría técnica
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 font-bold px-10 py-4 transition-colors"
          >
            <span>Contactar</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
