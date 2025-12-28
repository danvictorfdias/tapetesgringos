import { Check } from 'lucide-react';

export default function Imagine() {
  return (
    <section className="py-16 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333333]">
            Toque macio, cores que aquecem, modelos que encantam.
          </h2>

          <p className="text-lg text-[#666666] mb-4 leading-relaxed max-w-3xl mx-auto">
            Imagine criar um tapete de urso fofinho para o quarto do seu bebê, ou um leãozinho corajoso que deixa qualquer criança encantada. Cada tapete é uma obra de arte funcional que traz charme e aconchego para qualquer ambiente!
          </p>

          <p className="text-lg text-[#666666] mb-8 leading-relaxed max-w-3xl mx-auto">
            Isso é o que você vai aprender com a <strong className="text-[#2E7D32]">Apostila Tapetes Amigurumi!</strong>
          </p>

          <div className="mb-8">
            <img
              src="https://i.postimg.cc/XYrsSsx0/DPpp2-790x1024.webp"
              alt="Tapete Amigurumi"
              loading="lazy"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#333333]">
            Com receitas exclusivas, você vai poder criar tapetes incríveis, como:
          </h3>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Urso fofinho perfeito para quartos infantis</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Leão majestoso que encanta crianças</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Gato charmoso para decoração</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Cachorro carinhoso que todos amam</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">E muitos outros modelos de animais (tem algumas surpresas esperando por você!)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
