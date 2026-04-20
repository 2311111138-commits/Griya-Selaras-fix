import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Globe, TrendingUp } from 'lucide-react';

export default function DigitalTransformation() {
  return (
    <section id="digital" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">Transformasi Digital UMKM</h2>
            <h3 className="text-4xl font-serif text-brand-primary leading-tight mb-8">
              Melangkah ke <span className="italic text-brand-secondary">Era Digital Modern</span>
            </h3>
            <p className="text-brand-secondary text-lg mb-10">
              Griya Selaras berkomitmen untuk beradaptasi dengan teknologi guna memberikan kemudahan akses dan profesionalisme yang lebih tinggi bagi pelanggan kami.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 rounded-3xl bg-brand-bg/50 border border-brand-accent/10">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary flex items-center justify-center text-brand-bg shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-brand-primary text-xl mb-2">WhatsApp sebagai Channel Utama</h4>
                  <p className="text-brand-secondary text-sm">Konsultasi desain dan booking jadwal jahit kini lebih cepat dan personal melalui pesan instan.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 rounded-3xl bg-brand-bg/50 border border-brand-accent/10">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary flex items-center justify-center text-brand-bg shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-brand-primary text-xl mb-2">Website Berfungsi sebagai Katalog Aktif</h4>
                  <p className="text-brand-secondary text-sm">Pelanggan dapat melihat portofolio terupdate dan informasi layanan secara mandiri 24/7.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-primary p-12 rounded-[60px] text-brand-bg shadow-2xl relative"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent rounded-full flex items-center justify-center text-center p-4 transform rotate-12 shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-tight">Growth Focused</span>
            </div>
            
            <h4 className="text-2xl font-serif mb-12 text-center">Evolusi Griya Selaras</h4>
            
            <div className="space-y-12">
              <div className="relative pl-12 border-l border-brand-bg/20">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-bg/30 ring-8 ring-brand-primary"></div>
                <h5 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">Masa Lalu (Tradisional)</h5>
                <ul className="space-y-3 text-brand-bg/60">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span> Pemasaran offline / mulut ke mulut</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span> Tidak ada katalog digital terukur</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span> Branding terbatas pada area fisik saja</li>
                </ul>
              </div>

              <div className="flex justify-center">
                <TrendingUp className="w-8 h-8 text-brand-accent animate-bounce" />
              </div>

              <div className="relative pl-12 border-l border-brand-accent">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-accent ring-8 ring-brand-primary animate-pulse"></div>
                <h5 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">Masa Kini (Era Digital)</h5>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 font-medium"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Website sebagai pusat branding & digital trust</li>
                  <li className="flex items-center gap-3 font-medium"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> WhatsApp menjadi channel konversi utama</li>
                  <li className="flex items-center gap-3 font-medium"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Portofolio global dapat diakses siapa pun</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
