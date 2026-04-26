import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
          <img 
            src="https://i.pinimg.com/736x/a0/8c/dd/a08cdd42d1ff3df62a54b978577516eb.jpg" 
            alt="Peralatan Jahit Profesional" 
            className="w-full aspect-[4/5] object-cover rounded-[100px] shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-brand-accent rounded-[100px] -rotate-3 z-[-1]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">Cerita Kami</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-primary leading-tight mb-8">
            Dedikasi di Balik <span className="italic">Setiap Jarum dan Benang</span>
          </h3>
          
          <div className="space-y-6 text-brand-secondary leading-relaxed text-lg">
            <p>
              Griya Selaras didirikan oleh <span className="font-bold text-brand-primary">Bapak Syuhada sejak 2018</span>. Terinspirasi dari filosofi bahwa pakaian bukan sekadar penutup tubuh, melainkan representasi dari jati diri dan kenyamanan seseorang.
            </p>
            <p>
              Kami percaya bahwa kualitas jahitan yang rapi, presisi, dan nyaman adalah kunci utama. Oleh karena itu, setiap detail pengerjaan dikerjakan dengan penuh ketelitian dan keahlian yang telah diasah selama bertahun-tahun.
            </p>
            <p>
              Hingga saat ini, kami terus berkomitmen untuk memberikan layanan personal terbaik, menghubungkan desain tradisional dan modern melalui sentuhan tangan yang profesional.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-brand-accent/20">
            <div>
              <span className="block text-3xl font-serif text-brand-primary mb-1">5+</span>
              <span className="text-xs uppercase tracking-widest text-brand-secondary font-bold">Tahun Pengalaman</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-brand-primary mb-1">1000+</span>
              <span className="text-xs uppercase tracking-widest text-brand-secondary font-bold">Produk Terselesaikan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
