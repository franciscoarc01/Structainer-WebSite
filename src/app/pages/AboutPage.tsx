import { Target, Eye, Award } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to the highest standards in engineering and construction quality.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail in every phase of project execution.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication and accountability throughout the project lifecycle.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">About Structainer V Group</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A leading Mexican holding company specialized in delivering large-scale modular construction 
            and turnkey industrial projects with engineering precision.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Structainer V Group operates as a comprehensive holding company, bringing together 
                  specialized expertise in modular construction, prefabricated systems, and industrial 
                  engineering. Our organizational structure enables us to deliver complex, multi-phase 
                  projects with exceptional coordination and efficiency.
                </p>
                <p>
                  With a focus on the Mexican market, we serve industrial manufacturers, corporate 
                  developers, logistics operators, and government institutions. Our projects range 
                  from manufacturing facilities and distribution centers to office complexes and 
                  public infrastructure.
                </p>
                <p>
                  Our holding structure allows us to maintain dedicated teams for engineering, 
                  fabrication, and project management, ensuring that every aspect of your project 
                  receives specialized attention from industry experts.
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
              <h2 className="mb-4">Our Mission</h2>
            </div>
            <div className="bg-white border border-gray-200 p-12">
              <p className="text-xl text-gray-700 text-center">
                To deliver turnkey industrial and commercial construction projects through advanced 
                modular and prefabricated systems, providing our clients with superior quality, 
                accelerated timelines, and full regulatory compliance while maintaining the highest 
                standards of engineering precision and operational excellence.
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
              <h2 className="mb-4">Our Vision</h2>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-12">
              <p className="text-xl text-gray-700 text-center">
                To be recognized as Mexico's leading holding company for modular construction and 
                industrial engineering, setting new benchmarks for project delivery efficiency, 
                technical innovation, and client satisfaction in the infrastructure and construction sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Core principles that guide our operations and define our commitment to excellence.
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
              <h2 className="mb-6">Engineering Expertise</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our engineering teams bring decades of combined experience in structural design, 
                  industrial systems integration, and prefabricated construction methodologies. 
                  We maintain strict adherence to Mexican building codes, international standards, 
                  and industry-specific regulations.
                </p>
                <p>
                  Every project undergoes rigorous technical review and quality assurance processes, 
                  from initial design through final commissioning. Our in-house engineering capabilities 
                  include structural analysis, MEP systems design, and construction documentation.
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
            <h2 className="mb-6">Compliance & Certifications</h2>
            <p className="text-xl text-gray-300 mb-8">
              Full compliance with Mexican federal and state construction regulations, environmental 
              standards, and safety protocols. Our projects meet all required certifications and 
              undergo third-party inspections to ensure adherence to the highest industry standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="border border-gray-700 p-6">
                <h3 className="mb-2">Safety Standards</h3>
                <p className="text-gray-400">STPS and NOM compliance</p>
              </div>
              <div className="border border-gray-700 p-6">
                <h3 className="mb-2">Quality Systems</h3>
                <p className="text-gray-400">ISO certified processes</p>
              </div>
              <div className="border border-gray-700 p-6">
                <h3 className="mb-2">Environmental</h3>
                <p className="text-gray-400">SEMARNAT regulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
