import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Get in touch with our team to discuss your industrial construction project and receive a detailed proposal.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="mb-8">Send Us an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-900"
                  >
                    <option value="">Select a project type</option>
                    <option value="industrial">Industrial Manufacturing</option>
                    <option value="corporate">Corporate Development</option>
                    <option value="logistics">Logistics & Distribution</option>
                    <option value="government">Government & Infrastructure</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-900"
                    placeholder="Please describe your project requirements, timeline, and any specific technical needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="mb-2">Head Office</h3>
                    <p className="text-gray-600">
                      Av. Paseo de la Reforma 505<br />
                      Cuauhtémoc, 06500<br />
                      Mexico City, Mexico
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="mb-2">Phone</h3>
                    <p className="text-gray-600">
                      Main: +52 (55) 1234-5678<br />
                      Projects: +52 (55) 1234-5679
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="mb-2">Email</h3>
                    <p className="text-gray-600">
                      General: info@structainerv.com<br />
                      Projects: projects@structainerv.com<br />
                      Engineering: engineering@structainerv.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gray-50 border border-gray-200">
                <h3 className="mb-4">Response Time</h3>
                <p className="text-gray-600">
                  Our team typically responds to inquiries within 24 business hours. 
                  For urgent project matters, please call our main office number during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Regional Offices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Serving clients across Mexico with regional offices for local project support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Monterrey Office</h3>
              <p className="text-gray-600 mb-4">
                Av. Constitución 1075 Ote.<br />
                Centro, 64000<br />
                Monterrey, N.L.
              </p>
              <p className="text-gray-600">+52 (81) 8765-4321</p>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Guadalajara Office</h3>
              <p className="text-gray-600 mb-4">
                Av. Américas 1500<br />
                Country Club, 44610<br />
                Guadalajara, Jal.
              </p>
              <p className="text-gray-600">+52 (33) 3456-7890</p>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Querétaro Office</h3>
              <p className="text-gray-600 mb-4">
                Av. 5 de Febrero 101<br />
                Centro, 76000<br />
                Querétaro, Qro.
              </p>
              <p className="text-gray-600">+52 (442) 234-5678</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
