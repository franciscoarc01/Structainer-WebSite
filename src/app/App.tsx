import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InicioPage } from './pages/InicioPage';
import { NosotrosPage } from './pages/NosotrosPage';
import { ServiciosPage } from './pages/ServiciosPage';
import { ProductosPage } from './pages/ProductosPage';
import { ProjectsPage } from './pages/ProyectosPage';
import { ContactPage } from './pages/ContactoPage';
import { DivisionesPage } from './pages/DivisionesPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Página principal */}
            <Route path="/" element={<InicioPage />} />
            {/* Páginas principales */}
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/divisiones" element={<DivisionesPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
