import { useRef, memo } from 'react';
import { Check } from 'lucide-react';
import { trackAndRedirect } from '../../services/clickTracking';

function Offer() {
  const offerRef = useRef<HTMLDivElement>(null);

  const handlePurchase = () => {
    trackAndRedirect(
      'https://pay.hotmart.com/J103510772G?checkoutMode=10',
      'offer-section',
      false
    );
  };

  return (
    <section id="offer-section" ref={offerRef} className="py-20 bg-[#1e3a5f]">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">

          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#28a745] via-[#218838] to-[#1e7e34]"></div>

            <div className="text-center mb-6">
              <p className="text-xl text-[#333333] font-semibold">
                Somente hoje
              </p>
            </div>

            {/* Image */}
            <div className="mb-6 flex justify-center">
              <img
                src="https://i.postimg.cc/vHq0NJ7b/Capas-4-1-736x1024.webp"
                alt="Apostila Tapetes Amigurumi"
                loading="lazy"
                className="w-full max-w-xs rounded-xl shadow-lg"
              />
            </div>

            <div className="text-center mb-4">
              <p className="text-base text-[#666666] line-through">
                De $39,00
              </p>
              <span className="inline-block bg-[#ff6b35] text-white text-sm font-bold px-4 py-1 rounded-full mt-1">
                por apenas
              </span>
            </div>

            <div className="text-center mb-4">
              <span className="text-7xl sm:text-8xl font-black text-[#28a745] tracking-tight leading-none block">
                $9,90
              </span>
            </div>

            <p className="text-center text-[#666666] text-base mb-6">
              Valor em dólar, clique no botão abaixo para ver o valor na sua moeda local
            </p>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 mb-6 border border-green-200">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#28a745] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-semibold text-base leading-relaxed">
                    <strong>Apostila Exclusiva:</strong> Tapetes amigurumi de animais!
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#28a745] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-semibold text-base leading-relaxed">
                    <strong>Passo a passo</strong> Em português
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#28a745] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-semibold text-base leading-relaxed">
                    <strong>Pagamento único</strong> Acesso vitalício
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#28a745] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-semibold text-base leading-relaxed">
                    <strong>Entrega imediata:</strong> ao finalizar a compra, você recebe a apostila direto no WhatsApp e no e-mail.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#28a745] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-semibold text-base leading-relaxed">
                    <strong>Técnicas de construção:</strong> aprenda a criar tapetes resistentes e charmosos com acabamento profissional.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#28a745] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-semibold text-base leading-relaxed">
                    7 dias de garantia!
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="https://pay.hotmart.com/J103510772G?checkoutMode=10"
              onClick={handlePurchase}
              className="checkout w-full bg-[#28a745] hover:bg-[#218838] text-white px-6 py-4 md:px-8 md:py-4 rounded-lg text-base md:text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mb-4 text-center leading-tight"
            >
              QUERO MINHA APOSTILA AGORA!
            </a>

            <div className="mb-6">
              <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-4">
                <p className="text-center text-base font-bold text-amber-900">
                  🚨 <strong>Vagas limitadas</strong> para garantir um acompanhamento personalizado. Faça parte das artesãs que não deixam dinheiro na mesa!
                </p>
              </div>
            </div>

            <div className="mb-6">
              <img
                src="https://i.postimg.cc/7Z5K8KXk/pagamentos-4.webp"
                alt="Formas de Pagamento"
                loading="lazy"
                className="w-full max-w-lg mx-auto"
              />
            </div>

            <p className="text-center text-sm text-gray-600 font-medium">
              🔒 Pagamento 100% seguro • Acesso imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Offer);
