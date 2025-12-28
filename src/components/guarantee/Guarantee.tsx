import { Shield } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-16 bg-white border-t-2 border-green-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-green-200">
            <div className="text-center">
              <div className="mb-6">
                <img
                  src="https://i.postimg.cc/bwZmcmLP/selo-de-garantia-7-dias-1-4.webp"
                  alt="Garantia 7 dias"
                  loading="lazy"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain mx-auto"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">
                  Garantia 100% de Satisfação ou <span className="text-[#1e3a5f]">Reembolso Total</span>
                </h2>

                <p className="text-xl text-[#666666] leading-relaxed">
                  <strong className="text-[#2E7D32]">Teste por 7 dias</strong>: se não gostar, seu dinheiro de volta — simples, rápido e sem perguntas!
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
