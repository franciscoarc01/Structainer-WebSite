export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4">Structainer V Group</h3>
            <p className="text-gray-400">
              Specialized in modular construction, prefabricated systems, and turnkey industrial projects.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Phone: +52 (123) 456-7890</p>
              <p>Email: info@structainerv.com</p>
              <p>Mexico City, Mexico</p>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4">Services</h3>
            <div className="space-y-2 text-gray-400">
              <p>Modular Construction</p>
              <p>Industrial Engineering</p>
              <p>Prefabricated Systems</p>
              <p>Turnkey Projects</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Structainer V Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
