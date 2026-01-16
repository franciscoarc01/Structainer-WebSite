import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// ============================================
// TIPOS Y ESTRUCTURAS DE DATOS
// ============================================

interface Product {
  id: string;
  name: string;
  category: string;
  dimensions: string;
  capacity: string;
  image?: string; // URL de imagen real - actualmente placeholder
}

type Category = 'Todo' | 'Casetas' | 'Oficinas' | 'Dormitorios' | 'Sanitarios' | 'Comedores' | 'Aulas' | 'Hoteles' | 'Móviles';

// ============================================
// DATA: CATÁLOGO DE PRODUCTOS
// ============================================

const products: Product[] = [
  // CASETAS
  {
    id: 'cas-001',
    name: 'Oficina de Vigilancia 4×8',
    category: 'Casetas',
    dimensions: "8' x 4' pies",
    capacity: '1 persona',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'cas-002',
    name: 'Caseta de Vigilancia 8×8',
    category: 'Casetas',
    dimensions: "8' x 8' pies",
    capacity: '2 personas',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'cas-003',
    name: 'Caseta de Obra 8×16',
    category: 'Casetas',
    dimensions: "8' x 16' pies",
    capacity: '2–3 personas',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'cas-004',
    name: 'Caseta de Control de Accesos 8×20',
    category: 'Casetas',
    dimensions: "8' x 20' pies",
    capacity: '3 personas',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'cas-005',
    name: 'Caseta Técnica / Servicios 8×20',
    category: 'Casetas',
    dimensions: "8' x 20' pies",
    capacity: 'Uso técnico',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
  },

  // OFICINAS MODULARES
  {
    id: 'ofi-001',
    name: 'Oficina Modular 8×20',
    category: 'Oficinas',
    dimensions: "8' x 20' pies",
    capacity: '3–4 personas',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'ofi-002',
    name: 'Oficina Modular 8×32',
    category: 'Oficinas',
    dimensions: "8' x 32' pies",
    capacity: '5–6 personas',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'ofi-003',
    name: 'Oficina Móvil 8×44',
    category: 'Oficinas',
    dimensions: "8' x 44' pies",
    capacity: '6–7 personas',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'ofi-004',
    name: 'Oficina Ejecutiva Modular 12×40',
    category: 'Oficinas',
    dimensions: "12' x 40' pies",
    capacity: '8–10 personas',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'ofi-005',
    name: 'Oficinas Corporativas Modulares (Combinables)',
    category: 'Oficinas',
    dimensions: 'Configuración a medida',
    capacity: 'Escalable',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },

  // DORMITORIOS
  {
    id: 'dor-001',
    name: 'Dormitorio Modular 8×20',
    category: 'Dormitorios',
    dimensions: "8' x 20' pies",
    capacity: '4 personas',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 'dor-002',
    name: 'Dormitorio Modular 8×32',
    category: 'Dormitorios',
    dimensions: "8' x 32' pies",
    capacity: '6 personas',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 'dor-003',
    name: 'Dormitorio Modular 8×44',
    category: 'Dormitorios',
    dimensions: "8' x 44' pies",
    capacity: '8 personas',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 'dor-004',
    name: 'Dormitorio | Comedor 8×32',
    category: 'Dormitorios',
    dimensions: "8' x 32' pies",
    capacity: '5 personas',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 'dor-005',
    name: 'Campamento Modular',
    category: 'Dormitorios',
    dimensions: 'Escalable',
    capacity: 'Alta capacidad',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop'
  },

  // SANITARIOS
  {
    id: 'san-001',
    name: 'Sanitarios Móviles 8×20',
    category: 'Sanitarios',
    dimensions: "8' x 20' pies",
    capacity: 'Uso múltiple',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'san-002',
    name: 'Sanitarios con Regaderas 8×32',
    category: 'Sanitarios',
    dimensions: "8' x 32' pies",
    capacity: 'Industrial',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'san-003',
    name: 'Sanitarios Premium / Ejecutivos',
    category: 'Sanitarios',
    dimensions: 'A medida',
    capacity: 'Corporativo',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop'
  },

  // COMEDORES
  {
    id: 'com-001',
    name: 'Comedor Modular 8×32',
    category: 'Comedores',
    dimensions: "8' x 32' pies",
    capacity: '20 personas',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop'
  },
  {
    id: 'com-002',
    name: 'Comedor Modular 8×44',
    category: 'Comedores',
    dimensions: "8' x 44' pies",
    capacity: '30 personas',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop'
  },
  {
    id: 'com-003',
    name: 'Cocina Industrial Modular',
    category: 'Comedores',
    dimensions: 'A medida',
    capacity: 'Configuración a medida',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop'
  },

  // AULAS
  {
    id: 'aul-001',
    name: 'Aula Modular 8×32',
    category: 'Aulas',
    dimensions: "8' x 32' pies",
    capacity: '20 alumnos',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop'
  },
  {
    id: 'aul-002',
    name: 'Aula Modular 8×44',
    category: 'Aulas',
    dimensions: "8' x 44' pies",
    capacity: '30 alumnos',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop'
  },
  {
    id: 'aul-003',
    name: 'Aulas Modulares Combinadas',
    category: 'Aulas',
    dimensions: 'Escalable',
    capacity: 'Alta capacidad',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop'
  },

  // HOTELES / VIVIENDA
  {
    id: 'hot-001',
    name: 'Suite Modular Individual',
    category: 'Hoteles',
    dimensions: 'Estándar',
    capacity: '1–2 personas',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'hot-002',
    name: 'Habitación Doble Modular',
    category: 'Hoteles',
    dimensions: 'Estándar',
    capacity: '2–4 personas',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'hot-003',
    name: 'Hotel Modular',
    category: 'Hoteles',
    dimensions: 'Proyecto integral',
    capacity: 'Escalable',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop'
  },

  // REMOLQUES / SOLUCIONES MÓVILES
  {
    id: 'mov-001',
    name: 'Oficina Móvil sobre Remolque 8×32',
    category: 'Móviles',
    dimensions: "8' x 32' pies",
    capacity: '4–5 personas',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2073&auto=format&fit=crop'
  },
  {
    id: 'mov-002',
    name: 'Oficina Móvil sobre Remolque 8×44',
    category: 'Móviles',
    dimensions: "8' x 44' pies",
    capacity: '6–7 personas',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2073&auto=format&fit=crop'
  },
  {
    id: 'mov-003',
    name: 'Showroom Móvil',
    category: 'Móviles',
    dimensions: 'Configuración a medida',
    capacity: 'Comercial',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2073&auto=format&fit=crop'
  },
  {
    id: 'mov-004',
    name: 'Unidad Técnica Móvil',
    category: 'Móviles',
    dimensions: 'Configuración a medida',
    capacity: 'Industrial',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2073&auto=format&fit=crop'
  },
];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todo');

  // Lista de categorías para el filtro
  const categories: Category[] = [
    'Todo',
    'Casetas',
    'Oficinas',
    'Dormitorios',
    'Sanitarios',
    'Comedores',
    'Aulas',
    'Hoteles',
    'Móviles'
  ];

  // Filtrar productos según categoría seleccionada
  const filteredProducts = selectedCategory === 'Todo'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* ============================================
          SECCIÓN 1: HERO - PRODUCTOS
          ============================================ */}
      <section className="relative bg-gray-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Imagen de fondo - REEMPLAZAR CON IMAGEN REAL */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#04254D] via-gray-900 to-black opacity-80" />

        {/* Contenido */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* H1 Principal */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
              Soluciones modulares listas para operar
            </h1>

            {/* Subtítulo descriptivo */}
            <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl">
              Diseñamos y fabricamos soluciones modulares estandarizadas y a medida, pensadas para instalación inmediata, reubicación futura y operación continua en proyectos industriales, corporativos y gubernamentales.
            </p>

            {/* CTA Principal */}
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 bg-[#C8A256] hover:bg-[#b89246] text-white font-bold px-10 py-5 transition-colors text-base md:text-lg group"
            >
              <span>Cotiza tu proyecto</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 2: ENCABEZADO DEL CATÁLOGO
          ============================================ */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Productos en línea
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Contamos con una amplia gama de soluciones modulares para adaptarse a distintas necesidades operativas y escalas de proyecto.
          </p>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 3: FILTROS DE CATEGORÍAS
          ============================================ */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  whitespace-nowrap px-6 py-3 font-semibold text-sm md:text-base transition-all
                  ${selectedCategory === category
                    ? 'bg-[#04254D] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 4: GRID DE PRODUCTOS (CARDS)
          ============================================ */}
      <section className="py-16 md:py-20 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid responsivo de productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Mensaje si no hay resultados */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No se encontraron productos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          SECCIÓN 5: CTA FINAL
          ============================================ */}
      <section className="py-20 md:py-32 bg-[#04254D] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            ¿Necesitas una solución a la medida?
          </h2>

          {/* Subtexto */}
          <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Nuestros especialistas te asesoran para configurar la solución modular ideal según tu proyecto, sector y operación.
          </p>

          {/* Botón CTA */}
          <Link
            to="/contacto"
            className="inline-flex items-center gap-3 bg-[#C8A256] hover:bg-[#b89246] text-white font-bold px-12 py-5 transition-colors text-lg group"
          >
            <span>Solicitar cotización</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

// ============================================
// COMPONENTE: CARD DE PRODUCTO
// ============================================

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Imagen del producto */}
      <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
        {/* NOTA: Reemplazar con imágenes reales de productos */}
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        />

        {/* Overlay sutil en hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido de la card */}
      <div className="p-6">
        {/* Nombre del producto */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
          {product.name}
        </h3>

        {/* Especificaciones técnicas */}
        <div className="space-y-2 mb-6">
          {/* Medidas */}
          <div className="flex items-start gap-2">
            <span className="text-sm font-semibold text-gray-500 min-w-[80px]">
              Medidas:
            </span>
            <span className="text-sm text-gray-700 font-medium">
              {product.dimensions}
            </span>
          </div>

          {/* Capacidad */}
          <div className="flex items-start gap-2">
            <span className="text-sm font-semibold text-gray-500 min-w-[80px]">
              Capacidad:
            </span>
            <span className="text-sm text-gray-700 font-medium">
              {product.capacity}
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-3">
          <Link
            to="/contacto"
            className="flex-1 text-center bg-[#04254D] hover:bg-[#032041] text-white font-semibold px-4 py-3 transition-colors text-sm"
          >
            Cotizar
          </Link>
          <button
            className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-4 py-3 transition-colors text-sm"
          >
            Ver detalle
          </button>
        </div>
      </div>
    </article>
  );
}
