import { Building2, Cog, Warehouse, FileCheck, Wrench, ChartBar } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: 'Modular Construction',
      description: 'Factory-built modular units designed for rapid on-site assembly. Our modular approach reduces construction time by up to 50% while maintaining superior quality control through controlled manufacturing environments.',
      features: [
        'Pre-engineered structural systems',
        'Climate-controlled manufacturing',
        'Reduced site disruption',
        'Scalable configurations',
        'Quality-controlled production'
      ]
    },
    {
      icon: Cog,
      title: 'Industrial Engineering',
      description: 'Comprehensive engineering services for industrial facilities including structural design, systems integration, and technical documentation. Our team handles complex multi-discipline projects with precision.',
      features: [
        'Structural engineering and analysis',
        'MEP systems design',
        'Process equipment integration',
        'Technical specifications',
        'Construction documentation'
      ]
    },
    {
      icon: Warehouse,
      title: 'Prefabricated Systems',
      description: 'Advanced prefabrication techniques for building components, mechanical systems, and structural elements. Factory production ensures consistency and accelerates project timelines.',
      features: [
        'Prefabricated wall panels',
        'Modular mechanical rooms',
        'Pre-assembled structural frames',
        'Integrated building systems',
        'Factory testing and QC'
      ]
    },
    {
      icon: FileCheck,
      title: 'Turnkey Projects',
      description: 'Complete project delivery from initial concept through final commissioning. Single-point responsibility for design, engineering, fabrication, and installation.',
      features: [
        'Complete project management',
        'Design-build approach',
        'Procurement and logistics',
        'Installation and commissioning',
        'Post-completion support'
      ]
    },
    {
      icon: Wrench,
      title: 'Site Installation',
      description: 'Expert installation teams managing on-site assembly, integration, and commissioning. Coordinated logistics ensure efficient deployment of prefabricated components.',
      features: [
        'Experienced installation crews',
        'Safety-first protocols',
        'Minimal site disruption',
        'System integration',
        'Final commissioning'
      ]
    },
    {
      icon: ChartBar,
      title: 'Project Management',
      description: 'Dedicated project management ensuring on-time, on-budget delivery. Comprehensive oversight of scheduling, quality control, and stakeholder communication.',
      features: [
        'Schedule management',
        'Budget control',
        'Quality assurance',
        'Risk management',
        'Client reporting'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive construction and engineering solutions designed for industrial, 
            corporate, logistics, and government sectors.
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
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across key industrial and commercial sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Industrial Manufacturing</h3>
              <p className="text-gray-600">
                Production facilities, assembly plants, and industrial complexes.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Corporate Development</h3>
              <p className="text-gray-600">
                Office buildings, corporate campuses, and commercial spaces.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Logistics & Distribution</h3>
              <p className="text-gray-600">
                Warehouses, distribution centers, and logistics hubs.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Government & Infrastructure</h3>
              <p className="text-gray-600">
                Public facilities, institutional buildings, and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team can develop tailored engineering and construction solutions for your specific project requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
