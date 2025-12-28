import { Target, Eye, Award } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Compromiso con los más altos estándares en ingeniería y calidad de construcción.'
    },
    {
      icon: Target,
      title: 'Precisión',
      description: 'Atención meticulosa al detalle en cada fase de la ejecución del proyecto.'
    },
    {
      icon: Eye,
      title: 'Transparencia',
      description: 'Comunicación clara y responsabilidad durante todo el ciclo de vida del proyecto.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">Acerca de Structainer V Group</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Una empresa holding mexicana líder especializada en entregar proyectos de construcción modular a gran escala
            y proyectos industriales llave en mano con precisión en ingeniería.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Quiénes Somos</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Structainer V Group opera como una empresa holding integral, reuniendo
                  experiencia especializada en construcción modular, sistemas prefabricados e
                  ingeniería industrial. Nuestra estructura organizacional nos permite entregar proyectos complejos y multifásicos
                  con coordinación y eficiencia excepcionales.
                </p>
                <p>
                  Con un enfoque en el mercado mexicano, atendemos a fabricantes industriales, desarrolladores corporativos,
                  operadores logísticos e instituciones gubernamentales. Nuestros proyectos van desde instalaciones de manufactura
                  y centros de distribución hasta complejos de oficinas e infraestructura pública.
                </p>
                <p>
                  Nuestra estructura holding nos permite mantener equipos dedicados para ingeniería,
                  fabricación y gestión de proyectos, asegurando que cada aspecto de tu proyecto
                  reciba atención especializada de expertos de la industria.
                </p>
              </div>
            </div>
            <div className="h-96 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1765378025255-5c2ff04563f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBibHVlcHJpbnRzJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzY2Nzk0NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Engineering and Construction"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Nuestra Misión</h2>
            </div>
            <div className="bg-white border border-gray-200 p-12">
              <p className="text-xl text-gray-700 text-center">
                Entregar proyectos de construcción industrial y comercial llave en mano a través de sistemas modulares
                y prefabricados avanzados, proporcionando a nuestros clientes calidad superior,
                cronogramas acelerados y cumplimiento normativo total, mientras mantenemos los más altos
                estándares de precisión en ingeniería y excelencia operacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Nuestra Visión</h2>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-12">
              <p className="text-xl text-gray-700 text-center">
                Ser reconocidos como la empresa holding líder en México para construcción modular e
                ingeniería industrial, estableciendo nuevos puntos de referencia en eficiencia de entrega de proyectos,
                innovación técnica y satisfacción del cliente en los sectores de infraestructura y construcción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Principios fundamentales que guían nuestras operaciones y definen nuestro compromiso con la excelencia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 text-center">
                <div className="inline-block mb-4">
                  <value.icon className="w-12 h-12 text-gray-900" />
                </div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="h-96 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1623428454598-1bfe414bac03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3RlZWwlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY2Nzk0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Industrial Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6">Experiencia en Ingeniería</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nuestros equipos de ingeniería aportan décadas de experiencia combinada en diseño estructural,
                  integración de sistemas industriales y metodologías de construcción prefabricada.
                  Mantenemos estricta adherencia a los códigos de construcción mexicanos, estándares internacionales
                  y regulaciones específicas de la industria.
                </p>
                <p>
                  Cada proyecto se somete a rigurosos procesos de revisión técnica y aseguramiento de calidad,
                  desde el diseño inicial hasta la puesta en marcha final. Nuestras capacidades de ingeniería internas
                  incluyen análisis estructural, diseño de sistemas MEP y documentación de construcción.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Cumplimiento y Certificaciones</h2>
            <p className="text-xl text-gray-300 mb-8">
              Cumplimiento total con las regulaciones de construcción federales y estatales de México, estándares
              ambientales y protocolos de seguridad. Nuestros proyectos cumplen con todas las certificaciones requeridas y
              se someten a inspecciones de terceros para asegurar la adherencia a los más altos estándares de la industria.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="border border-gray-700 p-6">
                <h3 className="mb-2">Estándares de Seguridad</h3>
                <p className="text-gray-400">Cumplimiento STPS y NOM</p>
              </div>
              <div className="border border-gray-700 p-6">
                <h3 className="mb-2">Sistemas de Calidad</h3>
                <p className="text-gray-400">Procesos certificados ISO</p>
              </div>
              <div className="border border-gray-700 p-6">
                <h3 className="mb-2">Ambiental</h3>
                <p className="text-gray-400">Regulaciones SEMARNAT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
