import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, FileText, ChevronDown } from 'lucide-react';
// import bannerImage from '../../assets/img/servicios/Proyectos Llave en Mano.jpeg';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Construir el mensaje para WhatsApp
      let message = `*Nueva consulta - Structainer V Group*\n\n`;
      message += `*Nombre:* ${formData.name}\n`;
      message += `*Empresa:* ${formData.company}\n`;
      message += `*Email:* ${formData.email}\n`;
      message += `*Teléfono:* ${formData.phone}\n`;
      message += `*Tipo de proyecto:* ${formData.projectType}\n`;

      if (formData.budget) {
        message += `*Presupuesto:* ${formData.budget}\n`;
      }

      if (formData.startDate) {
        message += `*Fecha de inicio:* ${formData.startDate}\n`;
      }

      message += `\n*Descripción del proyecto:*\n${formData.message}`;

      // Codificar el mensaje para URL
      const encodedMessage = encodeURIComponent(message);

      // Construir URL de WhatsApp
      const whatsappURL = `https://api.whatsapp.com/send/?phone=524427220385&text=${encodedMessage}&type=phone_number&app_absent=0`;

      // Abrir WhatsApp en una nueva ventana
      window.open(whatsappURL, '_blank');

      setSubmitMessage({
        type: 'success',
        text: 'Se abrirá WhatsApp con tu consulta. Presiona enviar para completar el proceso.'
      });

      // Limpiar formulario después de un pequeño delay
      setTimeout(() => {
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
      }, 2000);

    } catch (error) {
      console.error('Error al procesar el formulario:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Hubo un error al procesar el formulario. Por favor, intenta nuevamente o contáctanos directamente.'
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
      <section className="relative bg-gray-900 text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            // backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/80 to-gray-800/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">CONTÁCTANOS</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Inicia tu proyecto con un equipo especializado. Analizamos tu requerimiento y desarrollamos una propuesta técnica y comercial alineada a los objetivos, tiempos y normatividad de tu proyecto.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-black">SOLICITA INFORMACIÓN</h2>

              {/* Mensaje de éxito/error */}
              {submitMessage && (
                <div className={`mb-6 p-4 border ${submitMessage.type === 'success'
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
              <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-black">INFORMACIÓN DE CONTACTO</h2>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-600" />
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
                    <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-600" />
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
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-600" />
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
                    <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-600" />
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
                    <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-600" />
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

              <div className="mt-8 sm:mt-10 md:mt-12 p-6 sm:p-8 bg-gray-50 border-l-4 border-yellow-600">
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
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-black">PREGUNTAS FRECUENTES SOBRE EL PROCESO DE CONTACTO</h2>
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
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaqIndex === 0 ? 'transform rotate-180' : ''
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
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaqIndex === 1 ? 'transform rotate-180' : ''
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
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaqIndex === 2 ? 'transform rotate-180' : ''
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
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaqIndex === 3 ? 'transform rotate-180' : ''
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
      <section className="py-12 sm:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-black">SÍGUENOS Y CONOCE NUESTROS PROYECTOS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Consulta proyectos ejecutados, avances de obra, soluciones modulares e ingeniería aplicada en nuestros canales oficiales.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/structainervgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 sm:gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 border-2 border-gray-300 group-hover:border-blue-600 flex items-center justify-center transition-all hover:shadow-lg">
                <svg className="w-8 sm:w-10 h-8 sm:h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span className="text-sm font-semibold">LinkedIn</span>
              <span className="text-xs text-gray-500">Proyectos B2B</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61550473909825"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 sm:gap-3 text-gray-700 hover:text-blue-700 transition-colors group"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 border-2 border-gray-300 group-hover:border-blue-700 flex items-center justify-center transition-all hover:shadow-lg">
                <svg className="w-8 sm:w-10 h-8 sm:h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <span className="text-sm font-semibold">Facebook</span>
              <span className="text-xs text-gray-500">Noticias y casos</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/structainervgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 sm:gap-3 text-gray-700 hover:text-pink-600 transition-colors group"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 border-2 border-gray-300 group-hover:border-pink-600 flex items-center justify-center transition-all hover:shadow-lg">
                <svg className="w-8 sm:w-10 h-8 sm:h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="text-sm font-semibold">Instagram</span>
              <span className="text-xs text-gray-500">Avances de obra</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@structainervgroup1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 sm:gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 border-2 border-gray-300 group-hover:border-gray-900 flex items-center justify-center transition-all hover:shadow-lg">
                <svg className="w-8 sm:w-10 h-8 sm:h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
              <span className="text-sm font-semibold">TikTok</span>
              <span className="text-xs text-gray-500">Contenido corto</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mapa de Ubicación */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-black">NUESTRA UBICACIÓN</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visítanos en nuestras instalaciones en Querétaro
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.2829936893467!2d-100.44326582414656!3d20.577068281190768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d345b7f1e9e1a9%3A0x8c4e0d3d7c0e8f0c!2sParque%20Industrial%20Terra%20Business!5e0!3m2!1ses-419!2smx!4v1737047123456!5m2!1ses-419!2smx"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Structainer V Group - Parque Industrial Terra Business"
            ></iframe>
            <div className="p-6 sm:p-8 bg-white border-t-4 border-yellow-600">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">DIRECCIÓN COMPLETA</h3>
                    <p className="text-gray-700 font-medium mb-1">Parque Industrial Terra Business – Nave 29C</p>
                    <p className="text-gray-600">Santiago de Querétaro, Querétaro, México</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://maps.google.com/?q=20.577068,-100.441106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 font-semibold transition-colors"
                  >
                    <MapPin className="w-5 h-5" />
                    Abrir en Google Maps
                  </a>
                  <a
                    href="https://maps.google.com/?q=20.577068,-100.441106&dirflg=d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-6 py-3 font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Cómo llegar
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Nota:</strong> Para visitas a nuestras instalaciones, te recomendamos agendar una cita previa contactándonos al <a href="tel:+524427220385" className="text-yellow-600 hover:underline font-medium">442 722 03 85</a> o por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indicadores de Confianza */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-black">POR QUÉ CONFIAR EN NOSOTROS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-yellow-100 text-yellow-600 mb-4">
                <FileText className="w-7 sm:w-8 h-7 sm:h-8" />
              </div>
              <h3 className="mb-3 font-medium text-gray-900">CUMPLIMIENTO NORMATIVO</h3>
              <p className="text-gray-600 text-sm">
                Certificaciones vigentes y cumplimiento de normativas NOM, códigos de construcción y protección civil.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-yellow-100 text-yellow-600 mb-4">
                <svg className="w-7 sm:w-8 h-7 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 font-medium text-gray-900">+5 AÑOS DE EXPERIENCIA</h3>
              <p className="text-gray-600 text-sm">
                Proyectos ejecutados para empresas industriales, corporativos, instituciones educativas y de salud.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-yellow-100 text-yellow-600 mb-4">
                <svg className="w-7 sm:w-8 h-7 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
