import { Monitor, Lock, Mail } from 'lucide-react';

export default function Security() {
  return (
    <section className="py-12 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-8 text-center">
            Compra 100% Segura
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Monitor className="w-16 h-16 text-[#1e3a5f]" />
              </div>
              <p className="text-[#666666] text-lg leading-relaxed">
                A plataforma de pagamento é{' '}
                <strong className="text-[#2E7D32]">certificada</strong> e aprovada.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Lock className="w-16 h-16 text-[#1e3a5f]" />
              </div>
              <p className="text-[#666666] text-lg leading-relaxed">
                Seus dados financeiros permanecerão totalmente{' '}
                <strong className="text-[#2E7D32]">secretos</strong> e protegidos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-16 h-16 text-[#1e3a5f]" />
              </div>
              <p className="text-[#666666] text-lg leading-relaxed">
                Seu acesso será <strong className="text-[#2E7D32]">entregue</strong> por Email e Whatsapp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
