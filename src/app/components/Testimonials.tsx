import { Star, Quote } from 'lucide-react';
import { Carousel, CarouselItem } from './Carousel';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  project?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const carouselItems: CarouselItem[] = testimonials.map(testimonial => ({
    id: testimonial.id,
    content: (
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Quote icon */}
          <div className="mb-6 sm:mb-8">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-600 opacity-50" />
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-6 sm:mb-8">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  index < testimonial.rating
                    ? 'fill-yellow-600 text-yellow-600'
                    : 'text-gray-600'
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 sm:mb-10 md:mb-12 text-gray-100">
            "{testimonial.content}"
          </blockquote>

          {/* Author info */}
          <div className="border-t border-gray-700 pt-6 sm:pt-8">
            <div className="font-bold text-xl sm:text-2xl text-white mb-1">
              {testimonial.name}
            </div>
            <div className="text-yellow-600 font-semibold text-base sm:text-lg mb-1">
              {testimonial.role}
            </div>
            <div className="text-gray-400 text-sm sm:text-base">
              {testimonial.company}
            </div>
            {testimonial.project && (
              <div className="mt-3 text-sm text-gray-500">
                Proyecto: <span className="text-gray-300">{testimonial.project}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }));

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
            Lo Que Dicen <span className="text-yellow-600">Nuestros Clientes</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Testimonios reales de empresas que confiaron en nuestras soluciones modulares
          </p>
        </div>
      </div>

      <div className="w-full">
        <Carousel
          items={carouselItems}
          autoPlay={true}
          autoPlayInterval={8000}
          showDots={true}
          showArrows={true}
          className="rounded-lg overflow-hidden shadow-2xl"
        />
      </div>
    </section>
  );
}
