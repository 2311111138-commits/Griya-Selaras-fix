import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const reasons = [
  {
    title: 'Pengerjaan Presisi',
    description: 'Setiap potongan kain dan jahitan melewati proses kontrol kualitas yang ketat.'
  },
  {
    title: 'Fleksibilitas Desain',
    description: 'Kami terbuka untuk berdiskusi mengenai desain impian Anda, mulai dari yang sederhana hingga kompleks.'
  },
  {
    title: 'Tepat Waktu',
    description: 'Komitmen pada jadwal pengerjaan yang telah disepakati untuk menjamin kepuasan pelanggan.'
  },
  {
    title: 'Pelayanan Personal',
    description: 'Konsultasi mendalam untuk memahami kebutuhan gaya dan kenyamanan unik setiap individu.'
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-brand-primary text-brand-bg relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">Mengapa Memilih Kami?</h2>
          <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Keseimbangan Sempurna Antara <span className="italic text-brand-accent">Keindahan & Fungsi</span>
          </h3>
          <p className="text-brand-bg/70 leading-relaxed mb-12 text-lg">
            Kami tidak hanya sekadar menjahit; kami membantu Anda mengekspresikan diri melalui busana yang nyaman dan elegan.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {reasons.map((reason, i) => (
              <motion.div 
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center border border-brand-accent/40">
                  <Check className="w-4 h-4 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2">{reason.title}</h4>
                  <p className="text-sm text-brand-bg/60 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="relative"
        >
          <img 
            src="https://i.pinimg.com/736x/bd/11/2f/bd112f02e22988dea3cff04c6ae977e5.jpg" 
            alt="Handcrafted tailoring detail" 
            className="w-full h-auto rounded-3xl shadow-2xl relative z-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border border-brand-accent/30 rounded-3xl -translate-x-4 translate-y-4 z-0"></div>
        </motion.div>
      </div>
    </section>
  );
}
