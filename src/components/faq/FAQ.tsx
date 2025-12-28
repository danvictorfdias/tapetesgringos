import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'O que está incluso na apostila?',
    answer: 'A apostila contém 20 receitas exclusivas de cachorrinhos amigurumi realistas, com passo a passo detalhado, técnicas modernas de modelagem e ilustrações para facilitar a criação. Tudo é 100% em português.'
  },
  {
    question: 'Este é um produto físico ou digital?',
    answer: 'Este é um produto digital. Você receberá a apostila no formato PDF diretamente no seu WhatsApp e e-mail, com entrega imediata assim que a compra for confirmada.'
  },
  {
    question: 'Como vou receber a apostila?',
    answer: 'Assim que o pagamento for aprovado, você receberá o link para download no seu WhatsApp e no e-mail cadastrado. O download é rápido e você terá acesso imediato. 📨'
  },
  {
    question: 'Existe algum suporte para tirar dúvidas?',
    answer: 'Sim. De segunda a sexta de 09:00 as 18:00 horas, exceto feriados.'
  },
  {
    question: 'É seguro comprar neste site?',
    answer: 'Sim, sua compra estará 100% segura. Utilizamos protocolo https em parceria com o Mercado Pago, empresa de pagamentos online mais segura do Brasil.'
  },
  {
    question: 'O Acesso é vitalício?',
    answer: 'Sim o pagamento é único e o acesso a apostila é vitalício!'
  },
  {
    question: 'Por que custa tão pouco? Isso é real?',
    answer: 'Sim, o valor promocional de R$ 27 é para tornar o kit acessível ao maior número de pessoas possível. Mas atenção: essa é uma oferta limitada e pode acabar a qualquer momento.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Dúvidas <span className="text-[#1e3a5f]">Frequentes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-[#1e3a5f] hover:bg-[#2d5a8f] transition-colors"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-white flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 text-[#666666] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
