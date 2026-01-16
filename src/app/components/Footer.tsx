export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ backgroundColor: '#04254D' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4 font-bold" style={{ color: '#C8A256' }}>Structainer V Group</h3>
            <p className="text-gray-300 leading-relaxed">
              Structainer V Group es un holding mexicano especializado en construcción modular prefabricada, ingeniería y soluciones industriales integrales.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold" style={{ color: '#C8A256' }}>Contacto</h3>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-white transition-colors cursor-pointer">Phone: 442 722 0385</p>
              <p className="hover:text-white transition-colors cursor-pointer">Email: ventas@structainer.net</p>
              <p>Terra Business Park Nave 29C</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold" style={{ color: '#C8A256' }}>Servicios</h3>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-white transition-colors cursor-default">Planeación y Gestoría Normativa</p>
              <p className="hover:text-white transition-colors cursor-default">Ingeniería y Proyecto Ejecutivo</p>
              <p className="hover:text-white transition-colors cursor-default">Construcción Tradicional</p>
              <p className="hover:text-white transition-colors cursor-default">Construcción Modular y Prefabricada</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-gray-300" style={{ borderTopColor: 'rgba(200, 162, 86, 0.3)' }}>
          <p>&copy; {currentYear} Grupo Structainer V. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
