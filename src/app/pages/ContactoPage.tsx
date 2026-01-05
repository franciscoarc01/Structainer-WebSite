import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, FileText, ChevronDown } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    startDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const formDataToSend = {
        access_key: '1800d7b2-c982-45fd-846a-df5d590aed8b',
        subject: `Nueva consulta de ${formData.company} - Structainer V Group`,
        from_name: `${formData.name} (${formData.company})`,
        email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        budget: formData.budget,
        start_date: formData.startDate,
        message: formData.message,
        company: formData.company,
        name: formData.name,
        replyto: formData.email,
        redirect: 'https://web3forms.com/success'
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataToSend)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({
          type: 'success',
          text: 'Gracias por tu consulta. Te contactaremos en un plazo máximo de 24 horas hábiles.'
        });

        // Limpiar formulario
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          startDate: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Error al enviar');
      }

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente o contáctanos directamente.'
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
          <h1 className="mb-6">CONTÁCTANOS</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Inicia tu proyecto con un equipo especializado. Analizamos tu requerimiento y desarrollamos una propuesta técnica y comercial alineada a los objetivos, tiempos y normatividad de tu proyecto.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="mb-8">SOLICITA INFORMACIÓN</h2>

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
                  <label htmlFor="name" className="block mb-2 text-gray-900 font-medium">
                    Nombre completo *
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
                  <label htmlFor="company" className="block mb-2 text-gray-900 font-medium">
                    Empresa *
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
                  <label htmlFor="email" className="block mb-2 text-gray-900 font-medium">
                    Correo electrónico *
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
                  <label htmlFor="phone" className="block mb-2 text-gray-900 font-medium">
                    Número de teléfono *
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
                  <label htmlFor="projectType" className="block mb-2 text-gray-900 font-medium">
                    Tipo de proyecto *
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
                    <option value="construccion-modular">Construcción modular prefabricada</option>
                    <option value="oficinas-corporativas">Oficinas y espacios corporativos</option>
                    <option value="casetas-moviles">Casetas y oficinas móviles</option>
                    <option value="proyectos-industriales">Proyectos industriales llave en mano</option>
                    <option value="infraestructura">Infraestructura temporal o permanente</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block mb-2 text-gray-900 font-medium">
                      Presupuesto estimado (opcional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-900"
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="menos-500k">Menos de $500,000 MXN</option>
                      <option value="500k-1m">$500,000 - $1,000,000 MXN</option>
                      <option value="1m-3m">$1,000,000 - $3,000,000 MXN</option>
                      <option value="3m-5m">$3,000,000 - $5,000,000 MXN</option>
                      <option value="mas-5m">Más de $5,000,000 MXN</option>
                      <option value="no-definido">Aún no definido</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="startDate" className="block mb-2 text-gray-900 font-medium">
                      Fecha estimada de inicio (opcional)
                    </label>
                    <select
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-900"
                    >
                      <option value="">Selecciona un período</option>
                      <option value="inmediato">Inmediato (menos de 1 mes)</option>
                      <option value="1-3-meses">1-3 meses</option>
                      <option value="3-6-meses">3-6 meses</option>
                      <option value="6-12-meses">6-12 meses</option>
                      <option value="mas-12-meses">Más de 12 meses</option>
                      <option value="exploratorio">Solo explorando opciones</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-900 font-medium">
                    Descripción del proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-gray-900"
                    placeholder="Describe brevemente el alcance, ubicación, tiempos estimados y cualquier requerimiento técnico relevante."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-8">INFORMACIÓN DE CONTACTO</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-gray-900">OFICINA PRINCIPAL</h3>
                    <p className="text-gray-600">
                      Parque Industrial Terra Business – Nave 29C<br />
                      Santiago de Querétaro, Querétaro, México
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-gray-900">TELÉFONO</h3>
                    <a
                      href="tel:+524427220385"
                      className="text-gray-600 hover:text-yellow-600 transition-colors underline"
                    >
                      442 722 03 85
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-gray-900">CORREO ELECTRÓNICO</h3>
                    <a
                      href="mailto:ventas@structainer.net"
                      className="text-gray-600 hover:text-yellow-600 transition-colors underline"
                    >
                      ventas@structainer.net
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-gray-900">WHATSAPP</h3>
                    <a
                      href="https://wa.me/524427220385?text=Hola,%20me%20interesa%20solicitar%20información%20sobre%20sus%20servicios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-yellow-600 transition-colors underline"
                    >
                      442 722 03 85
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-gray-900">HORARIO DE ATENCIÓN</h3>
                    <p className="text-gray-600">
                      Lunes a viernes: 9:00 AM – 6:30 PM<br />
                      Sábado: 9:00 AM – 2:00 PM<br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gray-50 border-l-4 border-yellow-600">
                <h3 className="mb-4 font-medium text-gray-900">TIEMPO DE RESPUESTA</h3>
                <p className="text-gray-700 mb-4">
                  Nuestro equipo responde en un plazo máximo de 24 horas hábiles.
                </p>
                <p className="text-gray-700">
                  Para proyectos urgentes o en fase activa, recomendamos contactarnos vía telefónica durante el horario de atención.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes sobre Contacto */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">PREGUNTAS FRECUENTES SOBRE EL PROCESO DE CONTACTO</h2>
            <p className="text-gray-600">
              Información útil antes de contactarnos
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg text-gray-900 pr-8 font-medium">
                  ¿Qué información debo tener lista antes de contactarlos?
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openFaqIndex === 0 ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFaqIndex === 0 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-3">
                    Para agilizar el proceso, te recomendamos tener:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Descripción general del proyecto y sus objetivos</li>
                    <li>Ubicación aproximada del proyecto</li>
                    <li>Área o metros cuadrados estimados</li>
                    <li>Plazo tentativo de ejecución</li>
                    <li>Presupuesto aproximado (si ya lo tienes definido)</li>
                    <li>Planos o bocetos (si los tienes disponibles)</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-white border border-gray-200">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg text-gray-900 pr-8 font-medium">
                  ¿Cómo es el proceso después de enviar el formulario?
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openFaqIndex === 1 ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFaqIndex === 1 && (
                <div className="px-6 pb-6">
                  <div className="space-y-3 text-gray-700">
                    <p><strong>1. Respuesta inicial (24 hrs):</strong> Un asesor técnico te contactará para conocer más detalles de tu proyecto.</p>
                    <p><strong>2. Reunión técnica:</strong> Agendamos una videollamada o visita para analizar requerimientos específicos.</p>
                    <p><strong>3. Propuesta técnica-comercial:</strong> Desarrollamos una propuesta detallada con alcances, tiempos y costos.</p>
                    <p><strong>4. Revisión y ajustes:</strong> Afinamos la propuesta según tus comentarios.</p>
                    <p><strong>5. Inicio del proyecto:</strong> Una vez aprobada, iniciamos la fase de planeación y ejecución.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-gray-200">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg text-gray-900 pr-8 font-medium">
                  ¿Atienden proyectos fuera de Querétaro?
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openFaqIndex === 2 ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFaqIndex === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">
                    Sí, atendemos proyectos en toda la República Mexicana. Contamos con experiencia en Querétaro, Guanajuato, Estado de México, Sonora y otros estados. La logística y transportación están incluidas en nuestro servicio llave en mano.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white border border-gray-200">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg text-gray-900 pr-8 font-medium">
                  ¿Cuál es la mejor forma de contactarlos para casos urgentes?
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openFaqIndex === 3 ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFaqIndex === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">
                    Para proyectos urgentes o en fase activa, te recomendamos contactarnos vía telefónica al <a href="tel:+524427220385" className="text-yellow-600 hover:underline">442 722 03 85</a> o por WhatsApp durante nuestro horario de atención (Lunes a viernes de 9:00 AM a 6:30 PM). También puedes agendar una videollamada inmediata usando nuestro calendario en línea.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="mb-4">SÍGUENOS Y CONOCE NUESTROS PROYECTOS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Consulta proyectos ejecutados, avances de obra, soluciones modulares e ingeniería aplicada en nuestros canales oficiales.
            </p>
          </div>

          <div className="flex justify-center items-center gap-8">
            <a
              href="https://www.linkedin.com/company/structainervgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-gray-700 hover:text-yellow-600 transition-colors group"
            >
              <div className="w-16 h-16 border-2 border-gray-300 group-hover:border-yellow-600 flex items-center justify-center transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href="https://www.facebook.com/structainervgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-gray-700 hover:text-yellow-600 transition-colors group"
            >
              <div className="w-16 h-16 border-2 border-gray-300 group-hover:border-yellow-600 flex items-center justify-center transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/structainervgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-gray-700 hover:text-yellow-600 transition-colors group"
            >
              <div className="w-16 h-16 border-2 border-gray-300 group-hover:border-yellow-600 flex items-center justify-center transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mapa de Ubicación */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">NUESTRA UBICACIÓN</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visítanos en nuestras instalaciones en Querétaro
            </p>
          </div>

          <div className="bg-white border border-gray-200 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.8756!2d-100.4486!3d20.5888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM1JzE5LjciTiAxMDDCsDI2JzU1LjAiVw!5e0!3m2!1ses!2smx!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Structainer V Group"
            ></iframe>
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">PARQUE INDUSTRIAL TERRA BUSINESS – NAVE 29C</h3>
                  <p className="text-gray-600">Santiago de Querétaro, Querétaro, México</p>
                  <a
                    href="https://maps.google.com/?q=Parque+Industrial+Terra+Business+Nave+29C+Querétaro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-yellow-600 hover:text-yellow-700 font-medium"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indicadores de Confianza */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">POR QUÉ CONFIAR EN NOSOTROS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="mb-3 font-medium text-gray-900">CUMPLIMIENTO NORMATIVO</h3>
              <p className="text-gray-600 text-sm">
                Certificaciones vigentes y cumplimiento de normativas NOM, códigos de construcción y protección civil.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 font-medium text-gray-900">+5 AÑOS DE EXPERIENCIA</h3>
              <p className="text-gray-600 text-sm">
                Proyectos ejecutados para empresas industriales, corporativos, instituciones educativas y de salud.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-3 font-medium text-gray-900">GARANTÍA Y POSTVENTA</h3>
              <p className="text-gray-600 text-sm">
                Respaldo técnico completo, garantías sobre estructura e instalaciones, y atención postventa continua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
