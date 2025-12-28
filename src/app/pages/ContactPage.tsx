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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Detectar si estamos en WordPress
      const isWordPress = typeof (window as any).structainervData !== 'undefined';

      if (isWordPress) {
        // Usar el endpoint de WordPress
        const response = await fetch((window as any).structainervData.restUrl + 'contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': (window as any).structainervData.nonce
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
          setSubmitMessage({ type: 'success', text: data.message });
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            projectType: '',
            message: ''
          });
        } else {
          setSubmitMessage({ type: 'error', text: data.message });
        }
      } else {
        // Modo de desarrollo - solo mostrar en consola
        console.log('Form submitted:', formData);
        setSubmitMessage({
          type: 'success',
          text: 'Gracias por tu consulta. Te contactaremos dentro de 24 horas.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <h1 className="mb-6">Contáctanos</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Ponte en contacto con nuestro equipo para discutir tu proyecto de construcción industrial y recibir una propuesta detallada.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="mb-8">Envíanos tu Consulta</h2>

              {/* Mensaje de éxito/error */}
              {submitMessage && (
                <div className={`mb-6 p-4 border ${
                  submitMessage.type === 'success'
                    ? 'bg-green-50 border-green-500 text-green-800'
                    : 'bg-red-50 border-red-500 text-red-800'
                }`}>
                  {submitMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Nombre Completo *
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
                    Nombre de la Empresa *
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
                    Correo Electrónico *
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
                    Número de Teléfono *
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
                    Tipo de Proyecto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-900"
                  >
                    <option value="">Selecciona un tipo de proyecto</option>
                    <option value="industrial">Manufactura Industrial</option>
                    <option value="corporate">Desarrollo Corporativo</option>
                    <option value="logistics">Logística y Distribución</option>
                    <option value="government">Gobierno e Infraestructura</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Descripción del Proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-900"
                    placeholder="Por favor describe los requisitos de tu proyecto, cronograma y cualquier necesidad técnica específica..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-8">Información de Contacto</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="mb-2">Oficina Principal</h3>
                    <p className="text-gray-600">
                      Av. Paseo de la Reforma 505<br />
                      Cuauhtémoc, 06500<br />
                      Ciudad de México, México
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="mb-2">Teléfono</h3>
                    <p className="text-gray-600">
                      Principal: +52 (55) 1234-5678<br />
                      Proyectos: +52 (55) 1234-5679
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="mb-2">Correo Electrónico</h3>
                    <p className="text-gray-600">
                      General: info@structainerv.com<br />
                      Proyectos: projects@structainerv.com<br />
                      Ingeniería: engineering@structainerv.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="mb-2">Horario de Atención</h3>
                    <p className="text-gray-600">
                      Lunes - Viernes: 8:00 AM - 6:00 PM<br />
                      Sábado: 9:00 AM - 2:00 PM<br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gray-50 border border-gray-200">
                <h3 className="mb-4">Tiempo de Respuesta</h3>
                <p className="text-gray-600">
                  Nuestro equipo típicamente responde a consultas dentro de 24 horas hábiles.
                  Para asuntos urgentes de proyectos, por favor llama a nuestro número de oficina principal durante el horario de atención.
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
            <h2 className="mb-4">Oficinas Regionales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Atendiendo clientes en todo México con oficinas regionales para soporte local de proyectos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Oficina Monterrey</h3>
              <p className="text-gray-600 mb-4">
                Av. Constitución 1075 Ote.<br />
                Centro, 64000<br />
                Monterrey, N.L.
              </p>
              <p className="text-gray-600">+52 (81) 8765-4321</p>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Oficina Guadalajara</h3>
              <p className="text-gray-600 mb-4">
                Av. Américas 1500<br />
                Country Club, 44610<br />
                Guadalajara, Jal.
              </p>
              <p className="text-gray-600">+52 (33) 3456-7890</p>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              <h3 className="mb-3">Oficina Querétaro</h3>
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
