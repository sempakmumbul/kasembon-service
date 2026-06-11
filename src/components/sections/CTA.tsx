export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">

          <h2 className="text-4xl font-bold mb-4">
            Laptop atau Komputer Bermasalah?
          </h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Konsultasikan kerusakan perangkat Anda secara gratis
            melalui WhatsApp dan dapatkan solusi terbaik.
          </p>

          <a
            href="https://wa.me/628123456789"
            target="_blank"
            className="
              inline-block
              bg-white
              text-blue-600
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:scale-105
              transition
            "
          >
            Chat WhatsApp Sekarang
          </a>

        </div>

      </div>
    </section>
  );
}