import { memo } from 'react';

const tapetesModels = [
  { name: 'Tapete Ovelha', image: 'https://i.postimg.cc/15CvjkGb/amigurumii-brasiil-503035730-18059305571259081-3140412658219237977-n-300x300.webp' },
  { name: 'Tapete Leão', image: 'https://i.postimg.cc/7htFHfz5/amigurumi-perfeito-501457572-18050328923593173-6275472366172734590-n-300x300.webp' },
  { name: 'Tapete Dino', image: 'https://i.postimg.cc/28c0KsQH/amigurumi-perfeito-503893069-18051622955593173-1033361051439883817-n.webp' },
  { name: 'Tapete Panda', image: 'https://i.postimg.cc/qMb15Pck/Chat-GPT-Image-17-de-jul-de-2025-17-00-31.webp' },
  { name: 'Tapete Hello Kitty', image: 'https://i.postimg.cc/65jMmkrc/3-9-1024x1024.webp' },
  { name: 'Tapetes de Banheiro', image: 'https://i.postimg.cc/tCCrDqxB/2-6-1024x1024.webp' },
  { name: 'Tapete Elefante', image: 'https://i.postimg.cc/DyjxM9Qz/Chat-GPT-Image-17-de-jul-de-2025-17-22-50.webp' },
  { name: 'Tapete Unicórnio', image: 'https://i.postimg.cc/DyjxM9Qf/Chat-GPT-Image-17-de-jul-de-2025-17-05-32.webp' },
  { name: 'Tapetes cozinha', image: 'https://i.postimg.cc/VkJKQK4f/Tapetes-Arts-1024x1024.webp' },
];

function Gallery() {
  return (
    <section className="py-16 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Veja os Modelos de Tapetes que você irá receber!
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tapetesModels.map((tapete, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="aspect-square">
                  <img
                    src={tapete.image}
                    alt={tapete.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-center font-semibold text-[#333333] text-lg">
                    {tapete.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Gallery);
