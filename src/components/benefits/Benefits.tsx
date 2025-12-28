import { memo } from 'react';
import { Dog, Sparkles, Mail } from 'lucide-react';

function Benefits() {
  return (
    <section className="py-16 bg-[#1e3a5f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que você vai receber:
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center">
            <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mb-4 mx-auto">
              <Dog className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
              Receitas exclusivas em PDF
            </h3>
            <p className="text-[#666666] leading-relaxed">
              Todas em português, com passo a passo detalhado para criar tapetes incríveis.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center">
            <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
              Diversos modelos de animais
            </h3>
            <p className="text-[#666666] leading-relaxed">
              Aprenda a criar tapetes de urso, leão, gato, cachorro e muito mais!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center">
            <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mb-4 mx-auto">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
              Entrega imediata
            </h3>
            <p className="text-[#666666] leading-relaxed">
              Ao finalizar a compra, você recebe a apostila direto no WhatsApp e no e-mail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Benefits);
