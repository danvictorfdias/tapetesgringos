export default function Testimonials() {
  return (
    <section className="py-20 bg-[#1e3a5f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que outras crocheteiras estão dizendo?
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/bNCmB70r/DPpp1-790x1024.webp"
                alt="Depoimento Cliente 1"
                loading="lazy"
                className="w-full max-w-sm rounded-xl shadow-lg"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/XYrsSsx0/DPpp2-790x1024.webp"
                alt="Depoimento Cliente 2"
                loading="lazy"
                className="w-full max-w-sm rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
