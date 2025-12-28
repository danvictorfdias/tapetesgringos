import { Users, Sparkles, DollarSign } from 'lucide-react';

export default function TargetAudience() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Para quem é o curso?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-8 h-8 text-amber-700" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Já sabe fazer amigurumis e quer aprender a criar <strong>santinhas com acabamento impecável</strong>.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Está <strong>começando agora no crochê</strong> e sonha em entrar no nicho religioso com segurança e acolhimento.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="w-8 h-8 text-amber-700" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Deseja <strong>transformar a fé em arte</strong> — e, se quiser, gerar renda com peças delicadas e cheias de significado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
