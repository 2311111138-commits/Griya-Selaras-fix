import { motion } from 'motion/react';
import { Scissors, Ruler, Users } from 'lucide-react';

const services = [
  {
    title: 'Jahit Pakaian Custom',
    description: 'Wujudkan desain impian Anda dengan ukuran yang pas dan pilihan bahan terbaik. Mulai dari busana formal, batik, hingga kebaya.',
    icon: <Scissors className="w-8 h-8" />
  },
  {
    title: 'Permak Profesional',
    description: 'Transformasi pakaian lama Anda menjadi tampak baru dan pas di badan dengan pengerjaan yang detail dan rapi.',
    icon: <Ruler className="w-8 h-8" />
  },
  {
    title: 'Kerja Sama Produksi UMKM',
    description: 'Layanan makloon atau produksi massal dengan skala kecil hingga menengah untuk brand fashion lokal dan seragam komunitas.',
    icon: <Users className="w-8 h-8" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">Layanan Kami</h2>
          <h3 className="text-4xl font-serif text-brand-primary leading-tight mb-6">
            Dikerjakan dengan Presisi untuk <span className="italic">Kualitas Terbaik</span>
          </h3>
          <p className="text-brand-secondary">
            Kami menawarkan berbagai solusi kebutuhan busana Anda dengan standar pengerjaan profesional yang mengutamakan kerapian dan estetika.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 group border border-brand-accent/10"
            >
              <div className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif text-brand-primary mb-4">{service.title}</h4>
              <p className="text-brand-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
