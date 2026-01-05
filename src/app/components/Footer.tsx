export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4">Structainer V Group</h3>
            <p className="text-gray-400">
              Structainer V Group es un holding mexicano especializado en construcción modular prefabricada, ingeniería y soluciones industriales integrales.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-400">
              <p>Phone: 442 722 0385</p>
              <p>Email: ventas@structainer.net</p>
              <p>Terra Business Park Nave 29C</p>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4">Servicios</h3>
            <div className="space-y-2 text-gray-400">
              <p>Planeación y Gestoría Normativa</p>
              <p>Ingeniería y Proyecto Ejecutivo</p>
              <p>Construcción Tradicional</p>
              <p>Construcción Modular y Prefabricada</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Grupo Structainer V. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
