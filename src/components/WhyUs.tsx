import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const reasons = [
  {
    title: 'Kerapian Jahitan Presisi',
    description: 'Tiap milimeter jahitan melewati proses kontrol kualitas mandiri yang ketat.'
  },
  {
    title: 'Kerja Disiplin & Tepat Waktu',
    description: 'Kami sangat menghargai waktu Anda. Setiap komitmen tanggal diselesaikan tepat waktu.'
  },
  {
    title: 'Konsultasi Desain Personal',
    description: 'Diskusikan model impian Anda bersama kami untuk menghidupkan karya bernilai estetika tinggi.'
  },
  {
    title: 'Pelayanan Ramah & Amanah',
    description: 'Pendekatan personal butik untuk memastikan kepuasan dan kenyamanan busana Anda.'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#FCFAF7] border-b border-[#DCCDBD]/30 relative overflow-hidden">
      {/* Subtle Editorial Decorative Blur Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7F2EA]/50 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A25D3B]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-center">
        {/* Column Left (45%): Content & Reasons Grid */}
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
              Standard Berkualitas
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-serif text-[#4A3A30] leading-[1.15] mb-8 tracking-tight">
            Paduan Sempurna Antara <br />
            <span className="italic text-[#A25D3B]">Fungsi & Estetika Busana</span>
          </h3>

          <p className="text-[#7B6F66] leading-relaxed mb-12 text-base md:text-lg">
            Kami tidak saja memotong atau menyambung lembaran kain; kami mendedikasikan pengerjaan butik untuk memancarkan jati diri dan kenyamanan terbaik dari pakaian Anda.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {reasons.map((reason, i) => (
              <motion.div 
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-3.5 group/item"
              >
                <div className="w-8 h-8 rounded-full bg-[#A25D3B]/10 flex items-center justify-center border border-[#A25D3B]/20 group-hover/item:bg-[#A25D3B] group-hover/item:text-[#FCFAF7] transition-colors duration-300">
                  <Check className="w-4 h-4 text-[#A25D3B] group-hover/item:text-[#FCFAF7] transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-[#4A3A30] font-semibold mb-1.5 tracking-tight">{reason.title}</h4>
                  <p className="text-xs text-[#7B6F66]/95 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
          <div className="w-full aspect-[16/10] overflow-hidden rounded-[5px] shadow-[0_20px_50px_rgba(74,58,48,0.06)] group-hover:shadow-[0_30px_60px_rgba(74,58,48,0.12)] border border-[#DCCDBD]/30 transition-all duration-300">
            <img 
              src="https://i.pinimg.com/736x/bd/11/2f/bd112f02e22988dea3cff04c6ae977e5.jpg" 
              alt="Handcrafted tailoring detail" 
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* BACKING GRADIENT LAYER */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A3A30]/10 to-transparent rounded-[5px] pointer-events-none" />

          {/* FLOATING BADGE 1: ✓ Detail Presisi */}
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
            <span className="text-[#4A3A30] text-[10px] md:text-xs font-bold tracking-wider uppercase font-sans">Detail Presisi</span>
          </div>

          {/* FLOATING BADGE 2: ★ Kualitas Butik */}
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
            <span className="text-[#4A3A30] text-[10px] md:text-xs font-bold tracking-wider uppercase font-sans">Kualitas Butik</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
