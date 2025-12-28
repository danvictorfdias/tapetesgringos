import { memo, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BlackFridayBanner from '../blackfridaybanner/BlackFridayBanner';

const miniGalleryImages = [
  'https://i.postimg.cc/kX1Tp0QY/amigurumii-brasiil-502212347-18059305589259081-1430728050142307714-n-300x300.webp',
  'https://i.postimg.cc/28c0KsQH/amigurumi-perfeito-503893069-18051622955593173-1033361051439883817-n.webp',
  'https://i.postimg.cc/15CvjkGb/amigurumii-brasiil-503035730-18059305571259081-3140412658219237977-n-300x300.webp',
  'https://i.postimg.cc/15CvjkGv/amigurumi-perfeito-501457572-18050328923593173-6275472366172734590-n.webp',
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % miniGalleryImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % miniGalleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + miniGalleryImages.length) % miniGalleryImages.length);
  };

  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Version - Two columns */}
      <section className="hidden md:block relative bg-[#1e3a5f] pt-14">
        <BlackFridayBanner />
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-white">
                  Apostila Tapetes Amigurumi - Modelos que Encantam
                </h1>

                <p className="text-lg text-white mb-8">
                  Crie tapetes amigurumi adoráveis de animais para decorar quartos infantis com charme e criatividade!
                </p>

                <a
                  href="#offer-section"
                  onClick={scrollToOffer}
                  className="bg-[#28a745] hover:bg-[#218838] text-white px-8 py-4 md:px-10 md:py-5 rounded-lg text-base md:text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 text-center leading-tight"
                >
                  QUERO MINHA APOSTILA AGORA!
                </a>
              </div>

              {/* Right Column - Main Image and Mini Gallery */}
              <div className="flex flex-col gap-6">
                <div className="flex justify-center">
                  <img
                    src="https://i.postimg.cc/vHq0NJ7b/Capas-4-1-736x1024.webp"
                    alt="Tapetes Amigurumi"
                    className="w-full max-w-md h-auto rounded-xl shadow-lg"
                  />
                </div>

                {/* Mini Gallery Carousel */}
                <div className="relative max-w-md mx-auto w-full">
                  <div className="overflow-hidden rounded-lg">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {miniGalleryImages.map((image, idx) => (
                        <div key={idx} className="min-w-full">
                          <img
                            src={image}
                            alt={`Tapete Amigurumi ${idx + 1}`}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="flex justify-center gap-2 mt-3">
                    {miniGalleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-6' : 'bg-white/50'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version - Stacked */}
      <section className="md:hidden relative bg-[#1e3a5f] pt-14">
        <BlackFridayBanner />
        <div className="px-6 py-12">
          <h1 className="text-2xl font-bold mb-4 leading-tight text-white text-center">
            Apostila Tapetes Amigurumi - Modelos que Encantam
          </h1>

          <p className="text-base text-white mb-6 text-center">
            Crie tapetes amigurumi adoráveis de animais para decorar quartos infantis com charme e criatividade!
          </p>

          <div className="mb-6">
            <img
              src="https://i.postimg.cc/vHq0NJ7b/Capas-4-1-736x1024.webp"
              alt="Tapetes Amigurumi"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Mini Gallery Carousel for Mobile */}
          <div className="relative mb-8">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {miniGalleryImages.map((image, idx) => (
                  <div key={idx} className="min-w-full">
                    <img
                      src={image}
                      alt={`Tapete Amigurumi ${idx + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex justify-center gap-2 mt-3">
              {miniGalleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <a
            href="#offer-section"
            onClick={scrollToOffer}
            className="bg-[#28a745] hover:bg-[#218838] text-white px-6 py-3 rounded-lg text-sm font-bold shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full max-w-sm mx-auto text-center leading-tight"
          >
            QUERO MINHA APOSTILA AGORA!
          </a>
        </div>
      </section>
    </>
  );
}

export default memo(Hero);
