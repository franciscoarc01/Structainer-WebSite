import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Package,
  Ruler,
  ArrowRight,
  Filter,
  X,
  Grid3x3,
  Layers,
  Users,
  CheckCircle2,
  Zap,
  Shield
} from 'lucide-react';

// ============================================================================
// 📦 TIPOS Y DEFINICIONES
// ============================================================================

type ProductCategory = 'modulos-prefabricados' | 'casetas-oficinas' | 'modulos-especializados' | 'estructuras-sistemas';
type ProductUse = 'oficinas-administrativas' | 'vigilancia-control' | 'dormitorios-campamentos' | 'sanitarios-regaderas' | 'clinicas-laboratorios' | 'aulas-capacitacion' | 'comedores' | 'puntos-venta';
type ProductSize = 'pequeño' | 'mediano' | 'grande' | 'configurable';
type CustomLevel = 'estandar' | 'configurable' | 'proyecto-especial';

interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  uses: ProductUse[];
  size: ProductSize;
  customLevel: CustomLevel;
  description: string;
  capacity: string;
  mainUse: string;
  image?: string;
}

// ============================================================================
// 🏗️ DATOS DE PRODUCTOS (SOLUCIONES PRINCIPALES)
// ============================================================================

const PRODUCTS: Product[] = [
  // LÍNEA 1 – MÓDULOS ESTÁNDAR
  {
    id: 'modulo-244-244',
    name: 'Módulo Prefabricado 2.44 × 2.44 m',
    category: 'modulos-prefabricados',
    uses: ['vigilancia-control', 'oficinas-administrativas'],
    size: 'pequeño',
    customLevel: 'estandar',
    description: 'Oficina administrativa para obra, industria y proyectos corporativos.',
    capacity: '1-2 personas',
    mainUse: 'Vigilancia y control de acceso',
    image: 'https://images.unsplash.com/photo-1559599238-01e925309473?q=80&w=600'
  },
  {
    id: 'modulo-244-400',
    name: 'Módulo Prefabricado 2.44 × 4.00 m',
    category: 'modulos-prefabricados',
    uses: ['oficinas-administrativas', 'puntos-venta'],
    size: 'mediano',
    customLevel: 'configurable',
    description: 'Oficina administrativa para obra, industria y proyectos corporativos.',
    capacity: '2-4 personas',
    mainUse: 'Oficinas administrativas',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600'
  },
  {
    id: 'modulo-244-600',
    name: 'Módulo Prefabricado 2.44 × 6.00 m',
    category: 'modulos-prefabricados',
    uses: ['oficinas-administrativas', 'aulas-capacitacion', 'clinicas-laboratorios'],
    size: 'grande',
    customLevel: 'configurable',
    description: 'Oficina administrativa para obra, industria y proyectos corporativos.',
    capacity: '4-8 personas',
    mainUse: 'Oficinas y aulas',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600'
  },

  // LÍNEA 2 – CASETAS Y OFICINAS MÓVILES
  {
    id: 'caseta-vigilancia',
    name: 'Caseta de Vigilancia',
    category: 'casetas-oficinas',
    uses: ['vigilancia-control'],
    size: 'pequeño',
    customLevel: 'estandar',
    description: 'Control de acceso vehicular y peatonal para proyectos industriales.',
    capacity: '1-2 guardias',
    mainUse: 'Vigilancia y control de acceso',
    image: 'https://images.unsplash.com/photo-1562664717-e2c8af47a0be?q=80&w=600'
  },
  {
    id: 'oficina-movil',
    name: 'Oficina Móvil',
    category: 'casetas-oficinas',
    uses: ['oficinas-administrativas'],
    size: 'mediano',
    customLevel: 'configurable',
    description: 'Oficina administrativa para obra, industria y proyectos corporativos.',
    capacity: '3-6 personas',
    mainUse: 'Oficinas administrativas',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600'
  },
  {
    id: 'oficina-ventas-movil',
    name: 'Oficina de Ventas Móvil',
    category: 'casetas-oficinas',
    uses: ['puntos-venta', 'oficinas-administrativas'],
    size: 'mediano',
    customLevel: 'configurable',
    description: 'Punto de atención comercial y cierre de ventas para proyectos corporativos.',
    capacity: '3-6 personas',
    mainUse: 'Puntos de venta',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600'
  },

  // LÍNEA 3 – MÓDULOS ESPECIALIZADOS
  {
    id: 'modulos-sanitarios',
    name: 'Módulos Sanitarios',
    category: 'modulos-especializados',
    uses: ['sanitarios-regaderas'],
    size: 'configurable',
    customLevel: 'estandar',
    description: 'Baños completos con WC, lavabos y vestidores para obra e industria.',
    capacity: '2-8 WC',
    mainUse: 'Sanitarios',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600'
  },
  {
    id: 'modulos-regaderas',
    name: 'Módulos de Regaderas',
    category: 'modulos-especializados',
    uses: ['sanitarios-regaderas'],
    size: 'configurable',
    customLevel: 'estandar',
    description: 'Regaderas industriales con vestidores para plantas y campamentos.',
    capacity: '2-8 regaderas',
    mainUse: 'Regaderas',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600'
  },
  {
    id: 'clinicas-modulares',
    name: 'Clínicas Modulares',
    category: 'modulos-especializados',
    uses: ['clinicas-laboratorios'],
    size: 'grande',
    customLevel: 'proyecto-especial',
    description: 'Consultorios médicos y salas de curación para atención industrial.',
    capacity: '1-4 consultorios',
    mainUse: 'Clínicas',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600'
  },
  {
    id: 'laboratorios-modulares',
    name: 'Laboratorios Modulares',
    category: 'modulos-especializados',
    uses: ['clinicas-laboratorios'],
    size: 'configurable',
    customLevel: 'proyecto-especial',
    description: 'Laboratorios con control ambiental e instalaciones especiales certificadas.',
    capacity: 'Según equipamiento',
    mainUse: 'Laboratorios',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=600'
  },
  {
    id: 'dormitorios-campamentos',
    name: 'Dormitorios y Campamentos',
    category: 'modulos-especializados',
    uses: ['dormitorios-campamentos'],
    size: 'configurable',
    customLevel: 'configurable',
    description: 'Habitaciones equipadas con literas para personal operativo y obra.',
    capacity: '4-12 personas',
    mainUse: 'Dormitorios',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600'
  },
  {
    id: 'aulas-capacitacion',
    name: 'Aulas de Capacitación',
    category: 'modulos-especializados',
    uses: ['aulas-capacitacion'],
    size: 'grande',
    customLevel: 'configurable',
    description: 'Salones educativos equipados para capacitación corporativa e industrial.',
    capacity: '20-40 personas',
    mainUse: 'Aulas y capacitación',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600'
  },
  {
    id: 'comedores-industriales',
    name: 'Comedores Industriales',
    category: 'modulos-especializados',
    uses: ['comedores'],
    size: 'grande',
    customLevel: 'proyecto-especial',
    description: 'Espacios equipados con mesas, sillas y área de servicio para alimentación.',
    capacity: '30-100 comensales',
    mainUse: 'Comedores',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600'
  },

  // LÍNEA 4 – SOLUCIONES COMPUESTAS
  {
    id: 'conjuntos-modulares',
    name: 'Conjuntos Modulares',
    category: 'modulos-prefabricados',
    uses: ['oficinas-administrativas', 'aulas-capacitacion', 'clinicas-laboratorios'],
    size: 'configurable',
    customLevel: 'proyecto-especial',
    description: 'Campus corporativos y complejos educativos configurables a medida.',
    capacity: 'Variable según diseño',
    mainUse: 'Proyectos corporativos',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600'
  },
  {
    id: 'ensambles-modulares',
    name: 'Ensambles Modulares',
    category: 'modulos-prefabricados',
    uses: ['oficinas-administrativas', 'dormitorios-campamentos'],
    size: 'configurable',
    customLevel: 'proyecto-especial',
    description: 'Soluciones modulares ensambladas para centros operativos complejos.',
    capacity: 'Variable según diseño',
    mainUse: 'Centros operativos',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600'
  },
  {
    id: 'proyectos-medida',
    name: 'Proyectos a Medida',
    category: 'estructuras-sistemas',
    uses: ['oficinas-administrativas', 'clinicas-laboratorios', 'aulas-capacitacion'],
    size: 'configurable',
    customLevel: 'proyecto-especial',
    description: 'Diseño y construcción de proyectos modulares únicos según especificaciones.',
    capacity: 'Según proyecto',
    mainUse: 'Proyectos especiales',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600'
  }
];

// ============================================================================
// 🎯 CONFIGURACIÓN DE FILTROS
// ============================================================================

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  'modulos-prefabricados': 'Módulos prefabricados',
  'casetas-oficinas': 'Casetas y oficinas móviles',
  'modulos-especializados': 'Módulos especializados',
  'estructuras-sistemas': 'Estructuras y sistemas'
};

const USE_LABELS: Record<ProductUse, string> = {
  'oficinas-administrativas': 'Oficinas administrativas',
  'vigilancia-control': 'Vigilancia y control de acceso',
  'dormitorios-campamentos': 'Dormitorios y campamentos',
  'sanitarios-regaderas': 'Sanitarios y regaderas',
  'clinicas-laboratorios': 'Clínicas y laboratorios',
  'aulas-capacitacion': 'Aulas y capacitación',
  'comedores': 'Comedores',
  'puntos-venta': 'Puntos de venta'
};

const SIZE_LABELS: Record<ProductSize, string> = {
  'pequeño': 'Pequeño',
  'mediano': 'Mediano',
  'grande': 'Grande / Ensamble',
  'configurable': 'Configurable a medida'
};

const CUSTOM_LEVEL_LABELS: Record<CustomLevel, string> = {
  'estandar': 'Estándar',
  'configurable': 'Configurable',
  'proyecto-especial': 'Proyecto especial'
};

// ============================================================================
// 🧩 COMPONENTE PRINCIPAL
// ============================================================================

export function ProductsPage() {
  // Estado de filtros
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedUses, setSelectedUses] = useState<ProductUse[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<ProductSize[]>([]);
  const [selectedCustomLevels, setSelectedCustomLevels] = useState<CustomLevel[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Productos filtrados
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      if (selectedUses.length > 0 && !selectedUses.some(use => product.uses.includes(use))) {
        return false;
      }
      if (selectedSizes.length > 0 && !selectedSizes.includes(product.size)) {
        return false;
      }
      if (selectedCustomLevels.length > 0 && !selectedCustomLevels.includes(product.customLevel)) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, selectedUses, selectedSizes, selectedCustomLevels]);

  // Función para limpiar todos los filtros
  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedUses([]);
    setSelectedSizes([]);
    setSelectedCustomLevels([]);
  };

  // Contar filtros activos
  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    selectedUses.length +
    selectedSizes.length +
    selectedCustomLevels.length;

  // Toggle filtro múltiple
  const toggleFilter = <T,>(value: T, selected: T[], setter: (val: T[]) => void) => {
    if (selected.includes(value)) {
      setter(selected.filter(v => v !== value));
    } else {
      setter([...selected, value]);
    }
  };

  return (
    <div>
      {/* 1. HERO PRINCIPAL - REDISEÑADO */}
      <section className="relative bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1759647028384-1efcc6e0eff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2R1bGFyJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY2Nzk0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-none tracking-tight">
              PRODUCTOS
            </h1>
            <div className="border-t-4 border-b-4 border-yellow-600 py-8 mb-8">
              <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
                SOLUCIONES MODULARES PREFABRICADAS PARA PROYECTOS INDUSTRIALES
              </p>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
              Módulos, casetas, oficinas móviles y sistemas estructurales diseñados para obra, industria y operación permanente.
              Soluciones configurables, escalables y listas para operar bajo un modelo llave en mano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-10 py-4 text-center transition-colors text-lg"
              >
                Solicitar cotización
              </Link>
              <Link
                to="/contact"
                className="inline-block border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold px-10 py-4 text-center transition-colors text-lg"
              >
                Asesoría técnica
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENEFICIOS DE CONSTRUCCIÓN MODULAR - NUEVA SECCIÓN */}
      <section className="py-20 bg-white border-b-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">POR QUÉ ELEGIR CONSTRUCCIÓN MODULAR</h2>
            <p className="text-gray-600 text-lg">Ventajas sobre construcción tradicional</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border-2 border-gray-900 p-6 hover:bg-gray-900 hover:text-white transition-all duration-300 group">
              <Zap className="w-12 h-12 mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors" />
              <h3 className="text-xl font-black mb-3">60% MÁS RÁPIDO</h3>
              <p className="text-sm opacity-80">Fabricación simultánea reduce tiempos de entrega</p>
            </div>

            <div className="border-2 border-gray-900 p-6 hover:bg-gray-900 hover:text-white transition-all duration-300 group">
              <CheckCircle2 className="w-12 h-12 mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors" />
              <h3 className="text-xl font-black mb-3">CALIDAD CONTROLADA</h3>
              <p className="text-sm opacity-80">Fabricación en planta con supervisión permanente</p>
            </div>

            <div className="border-2 border-gray-900 p-6 hover:bg-gray-900 hover:text-white transition-all duration-300 group">
              <Package className="w-12 h-12 mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors" />
              <h3 className="text-xl font-black mb-3">REUBICABLE</h3>
              <p className="text-sm opacity-80">Diseño modular permite reconfiguración y traslado</p>
            </div>

            <div className="border-2 border-gray-900 p-6 hover:bg-gray-900 hover:text-white transition-all duration-300 group">
              <Shield className="w-12 h-12 mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors" />
              <h3 className="text-xl font-black mb-3">CUMPLIMIENTO NOM</h3>
              <p className="text-sm opacity-80">Certificado y adherido a normatividad vigente</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESO DE FABRICACIÓN - NUEVA SECCIÓN */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">PROCESO DE FABRICACIÓN</h2>
            <p className="text-gray-600 text-lg">De diseño a entrega en 4 fases</p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gray-900 text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-black">1</span>
              </div>
              <h3 className="text-lg font-black mb-2">DISEÑO</h3>
              <p className="text-sm text-gray-600">Proyecto ejecutivo según especificaciones</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-black">2</span>
              </div>
              <h3 className="text-lg font-black mb-2">FABRICACIÓN</h3>
              <p className="text-sm text-gray-600">Manufactura en planta controlada</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-black">3</span>
              </div>
              <h3 className="text-lg font-black mb-2">INSTALACIÓN</h3>
              <p className="text-sm text-gray-600">Montaje rápido en sitio</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-black">4</span>
              </div>
              <h3 className="text-lg font-black mb-2">ENTREGA</h3>
              <p className="text-sm text-gray-600">Listo para operar</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BARRA DE FILTROS PRIMARIOS */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2 overflow-x-auto flex-1">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 whitespace-nowrap transition-colors font-semibold ${
                  selectedCategory === 'all'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Grid3x3 className="w-4 h-4" />
                  TODOS ({PRODUCTS.length})
                </span>
              </button>
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
                const count = PRODUCTS.filter(p => p.category === key).length;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key as ProductCategory)}
                    className={`px-4 py-2 whitespace-nowrap transition-colors font-semibold uppercase text-sm ${
                      selectedCategory === key
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {label.toUpperCase()} ({count})
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="ml-4 flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white transition-colors whitespace-nowrap font-bold"
            >
              <Filter className="w-4 h-4" />
              FILTROS
              {activeFiltersCount > 0 && (
                <span className="bg-white text-yellow-600 px-2 py-0.5 text-xs font-bold rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 5. PANEL DE FILTROS AVANZADOS */}
      {showFilters && (
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Filtro por Uso/Aplicación */}
              <div>
                <h3 className="text-sm font-black text-gray-900 mb-3 flex items-center gap-2 uppercase">
                  <Layers className="w-4 h-4" />
                  Uso / Aplicación
                </h3>
                <div className="space-y-2">
                  {Object.entries(USE_LABELS).map(([key, label]) => (
                    <label key={key} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedUses.includes(key as ProductUse)}
                        onChange={() => toggleFilter(key as ProductUse, selectedUses, setSelectedUses)}
                        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                      />
                      <span className="text-sm text-gray-700">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filtro por Tamaño */}
              <div>
                <h3 className="text-sm font-black text-gray-900 mb-3 flex items-center gap-2 uppercase">
                  <Ruler className="w-4 h-4" />
                  Tamaño
                </h3>
                <div className="space-y-2">
                  {Object.entries(SIZE_LABELS).map(([key, label]) => (
                    <label key={key} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSizes.includes(key as ProductSize)}
                        onChange={() => toggleFilter(key as ProductSize, selectedSizes, setSelectedSizes)}
                        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                      />
                      <span className="text-sm text-gray-700">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filtro por Nivel de Personalización */}
              <div>
                <h3 className="text-sm font-black text-gray-900 mb-3 flex items-center gap-2 uppercase">
                  <Package className="w-4 h-4" />
                  Nivel de Personalización
                </h3>
                <div className="space-y-2">
                  {Object.entries(CUSTOM_LEVEL_LABELS).map(([key, label]) => (
                    <label key={key} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCustomLevels.includes(key as CustomLevel)}
                        onChange={() => toggleFilter(key as CustomLevel, selectedCustomLevels, setSelectedCustomLevels)}
                        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                      />
                      <span className="text-sm text-gray-700">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="mt-6 flex items-center justify-between pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 font-semibold">
                  {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-2 text-sm text-gray-900 hover:text-yellow-600 font-bold transition-colors uppercase"
                >
                  <X className="w-4 h-4" />
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. CHIPS DE FILTROS ACTIVOS */}
      {activeFiltersCount > 0 && (
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600 font-bold uppercase">Filtros activos:</span>

              {selectedCategory !== 'all' && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-900 text-white text-sm hover:bg-gray-700 transition-colors font-semibold"
                >
                  {CATEGORY_LABELS[selectedCategory]}
                  <X className="w-3 h-3" />
                </button>
              )}

              {selectedUses.map(use => (
                <button
                  key={use}
                  onClick={() => toggleFilter(use, selectedUses, setSelectedUses)}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-600 text-white text-sm hover:bg-yellow-700 transition-colors font-semibold"
                >
                  {USE_LABELS[use]}
                  <X className="w-3 h-3" />
                </button>
              ))}

              {selectedSizes.map(size => (
                <button
                  key={size}
                  onClick={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-600 text-white text-sm hover:bg-yellow-700 transition-colors font-semibold"
                >
                  {SIZE_LABELS[size]}
                  <X className="w-3 h-3" />
                </button>
              ))}

              {selectedCustomLevels.map(level => (
                <button
                  key={level}
                  onClick={() => toggleFilter(level, selectedCustomLevels, setSelectedCustomLevels)}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-600 text-white text-sm hover:bg-yellow-700 transition-colors font-semibold"
                >
                  {CUSTOM_LEVEL_LABELS[level]}
                  <X className="w-3 h-3" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. GRID DE PRODUCTOS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-black text-gray-600 mb-2">NO SE ENCONTRARON PRODUCTOS</h3>
              <p className="text-gray-500 mb-6">Intenta ajustar los filtros para ver más resultados</p>
              <button
                onClick={clearAllFilters}
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-6 py-3 transition-colors"
              >
                VER TODOS LOS PRODUCTOS
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8 flex items-center justify-between">
                <p className="text-gray-600 font-semibold">
                  Mostrando <strong>{filteredProducts.length}</strong> producto{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* 8. CTA FINAL - MEJORADO */}
      <section className="py-32 bg-gray-900 text-white border-t-8 border-yellow-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest font-bold text-yellow-600 mb-8">
            HABLEMOS DE TU PROYECTO
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            SOLUCIONES MODULARES A LA MEDIDA DE TU OPERACIÓN
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Nuestro equipo técnico te asesora en especificaciones, normativas, fabricación y tiempos de entrega.
            Cotizaciones personalizadas y respuesta en 24-48 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-12 py-5 transition-colors text-xl"
            >
              Solicitar cotización
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold px-12 py-5 transition-colors text-xl"
            >
              Asesoría técnica
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// 🃏 COMPONENTE PRODUCT CARD
// ============================================================================

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to="/contact"
      className="bg-white border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg overflow-hidden group block"
    >
      {/* Imagen del producto */}
      <div className="w-full h-48 bg-gray-100 overflow-hidden relative">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="w-16 h-16 text-gray-300" />
          </div>
        )}

        {/* Badges */}
        {(product.customLevel === 'configurable' || product.customLevel === 'proyecto-especial') && (
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 text-xs font-black ${
              product.customLevel === 'proyecto-especial'
                ? 'bg-yellow-600 text-white'
                : 'bg-white text-gray-900'
            }`}>
              {CUSTOM_LEVEL_LABELS[product.customLevel].toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-black mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-1">{product.description}</p>
        </div>

        {/* Datos clave */}
        <div className="space-y-2 mb-6 text-sm">
          <div className="flex items-start gap-2">
            <Users className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
            <div>
              <span className="font-bold text-gray-900">Capacidad:</span>
              <span className="text-gray-600 ml-1">{product.capacity}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Ruler className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
            <div>
              <span className="font-bold text-gray-900">Tamaño:</span>
              <span className="text-gray-600 ml-1">{SIZE_LABELS[product.size]}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Package className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
            <div>
              <span className="font-bold text-gray-900">Uso principal:</span>
              <span className="text-gray-600 ml-1">{product.mainUse}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t-2 border-gray-200">
          <div className="inline-flex items-center justify-center gap-2 bg-yellow-600 group-hover:bg-yellow-700 text-white px-4 py-3 text-sm font-black transition-colors w-full uppercase">
            Solicitar cotización
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
