import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Tailoring Workshop" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg md:via-brand-bg/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-secondary text-xs font-bold uppercase tracking-widest mb-6"
          >
            ESTABLISHED SINCE 2018
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-brand-primary">
            Personalisasi Gaya Anda dengan <span className="italic">Jahitan Berkelas</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-secondary leading-relaxed mb-10 max-w-lg">
            Menyediakan layanan jahit custom dan permak profesional dengan hasil presisi dan kenyamanan yang sempurna untuk setiap aktivitas Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="https://wa.me/6285227202129"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-brand-bg rounded-full font-medium flex items-center justify-center gap-2 hover:bg-brand-secondary shadow-xl shadow-brand-primary/10 transition-all transform hover:-translate-y-1"
            >
              Konsultasi via WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#about" className="text-sm font-bold uppercase tracking-widest border-b-2 border-brand-accent hover:border-brand-primary transition-all pb-1">
              Kenali Kami Lebih Dekat
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="relative group">
            <div className="absolute -inset-4 border border-brand-accent/30 rounded-[60px] transform rotate-3 transition-transform group-hover:rotate-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Sewing Process" 
              className="relative z-10 w-full h-[600px] object-cover rounded-[50px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Visual Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent rounded-full flex items-center justify-center text-brand-bg transform rotate-12">
              <span className="font-serif italic text-lg">Handmade Quality</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
