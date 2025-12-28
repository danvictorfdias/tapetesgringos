import { useState, useEffect } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 31,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 31, seconds: 32 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Oferta Incrível por <span className="text-[#1e3a5f]">tempo limitado!</span>
            </h2>

            <div className="flex justify-center gap-4 mb-8">
              <div className="bg-[#1e3a5f] text-white rounded-lg p-6 min-w-[100px]">
                <div className="text-5xl font-bold mb-2">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm uppercase tracking-wider">Minutos</div>
              </div>
              <div className="bg-[#1e3a5f] text-white rounded-lg p-6 min-w-[100px]">
                <div className="text-5xl font-bold mb-2">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm uppercase tracking-wider">Segundos</div>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-lg text-gray-800 font-bold">
                <span className="text-2xl">⏳</span> Atenção: apenas 50 vagas disponíveis com esse desconto.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <div className="bg-gray-200 rounded-full h-8 relative overflow-hidden shadow-lg">
                <div className="bg-[#28a745] h-full rounded-full transition-all duration-1000" style={{ width: '99%' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm drop-shadow-md">Vagas preenchidas 99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
