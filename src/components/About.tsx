import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FCFAF7] border-b border-[#DCCDBD]/30 relative overflow-hidden">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F7F2EA]/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A25D3B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-center">
        {/* Column Left (45%): Content Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center order-1 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-[1px] w-6 bg-[#A25D3B]"></span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#A25D3B]">
              TENTANG KAMI
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-serif text-[#4A3A30] leading-[1.15] mb-8 tracking-tight">
            Dedikasi di Balik <br />
            <span className="italic text-[#A25D3B]">Tiap Guratan & Jahitan</span>
          </h3>
          
          <div className="space-y-6 text-[#7B6F66] leading-relaxed text-base md:text-lg">
            <p>
              Griya Selaras tumbuh dari dedikasi mendalam <span className="font-bold text-[#4A3A30]">Bapak Syuhada sejak 2018</span>. Kami percaya bahwa setiap lembar kain berhak mendapatkan penghormatan terbaik—bukan sekadar diukur, melainkan disesuaikan secara arsitektural dengan lekuk keunikan penikmatnya.
            </p>
            <p>
              Estetika butik kami merangkum kemewahan yang sunyi (<span className="italic text-[#A25D3B]">quiet luxury</span>), di mana kerapian, kekuatan konstruksi pakaian, dan keselarasan pola menjadi bahasa utama. Tiap detail kecil dijahit menggunakan bahan premium terpilih dengan teknik butik berstandar tinggi.
            </p>
            <p>
              Kami tidak sekadar melayani permak atau jahit baru, melainkan melestarikan kenyamanan pakaian favorit Anda, menyatukan kenyamanan klasik serta fungsionalitas modern ke dalam satu kesatuan yang utuh dan bertahan lama.
            </p>
          </div>

          {/* Elegant Stats */}
          <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-[#DCCDBD]/40">
            <div>
              <span className="block text-4xl font-serif text-[#4A3A30] font-medium mb-1.5">8+ Tahun</span>
              <span className="text-[10px] uppercase tracking-widest text-[#7B6F66] font-bold block">Pengalaman Berkarya</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-[#4A3A30] font-medium mb-1.5">1.500+</span>
              <span className="text-[10px] uppercase tracking-widest text-[#7B6F66] font-bold block">Karya Busana Presisi</span>
            </div>
          </div>
        </motion.div>

        {/* Column Right (55%): Hero Image Segment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group w-full order-2 lg:order-2"
        >
          {/* Main Photo Wrapper with Hover Zoom */}
          <div className="w-full aspect-[16/10] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(74,58,48,0.06)] group-hover:shadow-[0_30px_60px_rgba(74,58,48,0.12)] border border-[#DCCDBD]/30 transition-all duration-300">
            <img 
              src="https://i.pinimg.com/736x/a0/8c/dd/a08cdd42d1ff3df62a54b978577516eb.jpg" 
              alt="Atelier Jahit Griya Selaras" 
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* BACKGROUND DECORATIVE SHADOW LAYER */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A3A30]/10 to-transparent rounded-[24px] pointer-events-none" />

          {/* FLOATING BADGE 1: Sejak 2018 */}
          <div 
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.5)'
            }}
            className="absolute top-6 left-6 z-15 px-4 md:px-5 py-2.5 md:py-3 rounded-full flex items-center gap-2 shadow-[0_8px_20px_rgba(74,58,48,0.04)] group-hover:-translate-y-1.5 transition-all duration-300 cursor-default"
          >
            <span className="text-[#A25D3B] text-xs font-bold">✓</span>
            <span className="text-[#4A3A30] text-[10px] md:text-xs font-bold tracking-wider uppercase font-sans">Sejak 2018</span>
          </div>

          {/* FLOATING BADGE 2: Profesional & Terpercaya */}
          <div 
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.5)'
            }}
            className="absolute bottom-6 right-6 z-15 px-4 md:px-5 py-2.5 md:py-3 rounded-full flex items-center gap-2 shadow-[0_8px_20px_rgba(74,58,48,0.04)] group-hover:-translate-y-1.5 transition-all duration-300 cursor-default"
          >
            <span className="text-[#A25D3B] text-xs font-bold">★</span>
            <span className="text-[#4A3A30] text-[10px] md:text-xs font-bold tracking-wider uppercase font-sans">Profesional & Terpercaya</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
