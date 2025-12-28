import { Link } from 'react-router-dom';
import { Building2, Cog, Warehouse, FileCheck, TrendingUp, Shield } from 'lucide-react';

export function HomePage() {
  const services = [
    {
      icon: Building2,
      title: 'Modular Construction',
      description: 'Scalable modular units designed for rapid deployment and long-term durability.'
    },
    {
      icon: Cog,
      title: 'Industrial Engineering',
      description: 'Complete engineering solutions for complex industrial infrastructure projects.'
    },
    {
      icon: Warehouse,
      title: 'Prefabricated Systems',
      description: 'Factory-built components ensuring quality control and precision manufacturing.'
    },
    {
      icon: FileCheck,
      title: 'Turnkey Projects',
      description: 'End-to-end project delivery from planning to final commissioning.'
    },
    {
      icon: TrendingUp,
      title: 'Project Optimization',
      description: 'Efficiency-focused solutions reducing time and cost while maximizing quality.'
    },
    {
      icon: Shield,
      title: 'Compliance & Safety',
      description: 'Full regulatory compliance and safety standards across all project phases.'
    }
  ];

  const valueProps = [
    { title: 'Turnkey Approach', description: 'Complete project delivery from concept to completion' },
    { title: 'Speed', description: 'Accelerated timelines through modular construction methods' },
    { title: 'Quality', description: 'Factory-controlled manufacturing ensuring consistent standards' },
    { title: 'Compliance', description: 'Full adherence to industry regulations and safety protocols' },
    { title: 'Scalability', description: 'Flexible solutions that grow with your business needs' }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Planning',
      description: 'Comprehensive project analysis and strategic planning phase.'
    },
    {
      number: '02',
      title: 'Engineering',
      description: 'Detailed design and engineering documentation development.'
    },
    {
      number: '03',
      title: 'Fabrication',
      description: 'Precision manufacturing in controlled factory environment.'
    },
    {
      number: '04',
      title: 'Installation',
      description: 'On-site assembly and final system commissioning.'
    }
  ];

  const sectors = [
    {
      title: 'Industrial',
      description: 'Manufacturing facilities, production plants, and industrial complexes.',
      image: 'https://images.unsplash.com/photo-1623428454598-1bfe414bac03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3RlZWwlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY2Nzk0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Corporate',
      description: 'Office buildings, corporate campuses, and commercial spaces.',
      image: 'https://images.unsplash.com/photo-1704423846283-f92ff6badea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjY3MDU3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Logistics',
      description: 'Distribution centers, warehousing solutions, and logistics hubs.',
      image: 'https://images.unsplash.com/photo-1766021736631-d2f15082aa59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjY3OTQ2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Government',
      description: 'Public infrastructure, institutional facilities, and government projects.',
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
            <h1 className="mb-6">Engineering Precision in Modular Construction</h1>
            <p className="text-xl text-gray-300 mb-8">
              Delivering turnkey industrial projects with advanced prefabricated systems 
              for corporate, logistics, and government sectors across Mexico.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for large-scale industrial and commercial construction projects.
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
            <h2 className="mb-4">Why Choose Structainer V Group</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our turnkey approach delivers exceptional value through precision engineering and modular construction.
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
            <h2 className="mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring project success from initial planning to final delivery.
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
            <h2 className="mb-4">Sectors We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across industrial, corporate, logistics, and government sectors.
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
          <h2 className="mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your industrial construction needs and receive a detailed project proposal.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
