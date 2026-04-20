import { motion } from 'motion/react';
import { Lightbulb, Target, Sparkles } from 'lucide-react';

export default function BusinessInsight() {
  return (
    <section className="py-24 bg-brand-bg/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-primary mb-6">
            <Lightbulb className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-6">Wawasan Strategis Bisnis</h2>
          <p className="text-brand-secondary max-w-2xl">Analisis sederhana mengenai potensi dan arah pengembangan Griya Selaras di masa depan.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-white border border-brand-accent/10 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-6 h-6 text-brand-accent" />
              <h4 className="font-serif text-xl text-brand-primary">Strategi Digital</h4>
            </div>
            <ul className="space-y-4 text-brand-secondary leading-relaxed">
              <li className="flex gap-4">
                <span className="w-6 h-6 shrink-0 rounded-full bg-brand-bg flex items-center justify-center text-[10px] font-bold">1</span>
                <span><strong className="text-brand-primary">Branding:</strong> Menjadikan website sebagai identitas digital premium untuk menarik segmen pasar kelas menengah-atas.</span>
              </li>
              <li className="flex gap-4">
                <span className="w-6 h-6 shrink-0 rounded-full bg-brand-bg flex items-center justify-center text-[10px] font-bold">2</span>
                <span><strong className="text-brand-primary">Konversi:</strong> Mempermudah customer journey dari melihat portofolio (Website) hingga pemesanan (WhatsApp).</span>
              </li>
              <li className="flex gap-4">
                <span className="w-6 h-6 shrink-0 rounded-full bg-brand-bg flex items-center justify-center text-[10px] font-bold">3</span>
                <span><strong className="text-brand-primary">Skalabilitas:</strong> Potensi integrasi ke media sosial (Instagram) untuk jangkauan visual yang lebih luas.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-[40px] bg-white border border-brand-accent/10 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <Sparkles className="w-6 h-6 text-brand-accent" />
              <h4 className="font-serif text-xl text-brand-primary">Insight Industri</h4>
            </div>
            <div className="space-y-6">
              <p className="text-brand-secondary italic leading-relaxed">
                "Permintaan jasa jahit personal (custom) cenderung meningkat pesat pada momen tertentu seperti Hari Raya, musim wisuda, dan acara formal pernikahan."
              </p>
              <div className="p-6 bg-brand-bg rounded-2xl">
                <h5 className="font-bold text-xs uppercase tracking-widest text-brand-secondary mb-3">Analisis Digitalisasi:</h5>
                <p className="text-sm text-brand-primary leading-relaxed">
                  Dengan kehadiran website, Griya Selaras dapat mengelola puncak permintaan ini melalui sistem informasi yang jelas, mengurangi biaya pemasaran fisik, dan mempercepat respon koordinasi pelanggan dari jarak jauh.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
