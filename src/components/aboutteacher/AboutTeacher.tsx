export default function AboutTeacher() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Conheça sua professora!
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src="https://i.postimg.cc/VkJKQK4f/Tapetes-Arts-1024x1024.webp"
                  alt="Heloísa Santos - Professora"
                  loading="lazy"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Oi! meu nome é <strong>Heloísa Santos</strong> e sou apaixonada por amigurumi há mais de 5 anos. Criei essa apostila de tapetes para te mostrar que, com as técnicas certas, <strong>você também pode criar tapetes lindos e funcionais que encantam qualquer quarto infantil</strong>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
