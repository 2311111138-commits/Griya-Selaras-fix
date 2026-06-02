import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[#36271C]"
    >
      {/* 
        FULL-WIDTH LUXURY BACKGROUND IMAGE
        Using an elegant, warm close-up photo of fabric folds & draping texture
      */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1jiu46T8GC175QOXuO5m5irvVdpvSVk1H" 
            alt="Atelier Sewing & Crafting" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/*
          SOFT AMBER-BROWN LIGHT LUXURY OVERLAY
          Provides perfect readability on the left while keeping the image vibrant and clear.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#21150E]/80 via-[#21150E]/45 to-[#21150E]/15 z-10 pointer-events-none" />
      </div>

      {/* EDITORIAL CONTENT AREA (POSITIONED ON THE LEFT SIDE) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-28 md:py-36 flex items-center">
        <div className="w-full md:w-[65%] lg:w-[50%] flex flex-col items-start pr-0 md:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            {/* Elegant Floating Stand Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full bg-[#E8DCC4]/15 border border-[#E8DCC4]/20 mb-8 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAD6B3] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#EAD6B3] uppercase font-sans">
                BERDIRI SEJAK 2018
              </span>
            </motion.div>

            {/* Giant Luxury Editorial Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-[#FCFAF7] leading-[1.12] mb-6 tracking-tight font-light">
              Personalisasi Gaya Anda <br />
              <span className="italic font-normal text-[#EAD6B3]">dengan Jahitan Berkelas</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm md:text-base text-[#DCCDBD]/90 leading-relaxed mb-10 max-w-lg font-sans">
              Menyediakan layanan jahit custom dan permak profesional dengan hasil presisi dan kenyamanan yang sempurna untuk setiap aktivitas Anda.
            </p>

            {/* Micro Interaction Buttons Bundle */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href="https://wa.me/6285227202129?text=Halo Griya Selaras, saya ingin berkonsultasi mengenai penjahitan atau permak pakaian berkualitas..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 bg-[#A25D3B] text-[#FCFAF7] rounded-full font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 hover:bg-[#EAD6B3] hover:text-[#36271C] shadow-[0_12px_32px_rgba(162,93,59,0.15)] hover:shadow-none hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                <span>Konsultasi via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <a 
                href="https://maps.app.goo.gl/nrJMZPD7RDEyRtAJA?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 bg-transparent border border-[#FCFAF7]/30 text-[#FCFAF7] hover:border-[#FCFAF7] hover:bg-[#FCFAF7]/5 rounded-full font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <MapPin className="w-4 h-4 shrink-0 text-[#EAD6B3]" />
                <span>Lihat Lokasi</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
