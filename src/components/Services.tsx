import { motion } from 'motion/react';
import { Scissors, Ruler, Users, Shirt, CircleDot, Layers, Briefcase, MessageCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Permak Kaos',
    description: 'Perbaikan ukuran atau model kaos agar lebih pas dan nyaman dipakai.',
    price: 'Mulai dari Rp10.000',
    icon: <Shirt className="w-8 h-8" />
  },
  {
    title: 'Permak Baju',
    description: 'Perbaikan baju formal maupun casual agar terlihat lebih rapi dan fit.',
    price: 'Mulai dari Rp15.000',
    icon: <Shirt className="w-8 h-8" />
  },
  {
    title: 'Permak Celana',
    description: 'Penyesuaian panjang atau ukuran celana sesuai kebutuhan Anda.',
    price: 'Mulai dari Rp20.000',
    icon: <Ruler className="w-8 h-8" strokeWidth={1.5} />
  },
  {
    title: 'Tambah Kancing',
    description: 'Penggantian atau penambahan kancing dengan hasil kuat dan rapi.',
    price: 'Mulai dari Rp15.000',
    icon: <CircleDot className="w-8 h-8" />
  },
  {
    title: 'Permak Gamis',
    description: 'Perbaikan ukuran gamis agar lebih nyaman dan tetap elegan.',
    price: 'Mulai dari Rp35.000',
    icon: <Layers className="w-8 h-8" />
  },
  {
    title: 'Custom Pakaian (Jahit Baru)',
    description: 'Melayani pembuatan pakaian sesuai desain dan ukuran Anda (custom).',
    price: 'Mulai dari Rp80.000',
    note: 'Harga menyesuaikan model dan bahan',
    icon: <Scissors className="w-8 h-8" />
  },
  {
    title: 'Kerja Sama UMKM / Konveksi Kecil',
    description: 'Melayani kerja sama produksi pakaian untuk brand lokal, reseller, maupun UMKM. Cocok untuk produksi dalam jumlah kecil hingga menengah dengan kualitas terjamin.',
    price: 'Harga menyesuaikan jumlah & kebutuhan produksi',
    note: 'Bisa diskusi untuk harga khusus & jangka panjang',
    icon: <Briefcase className="w-8 h-8" />
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-brand-accent/10 flex flex-col relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-colors" />
              
              <div className="w-16 h-16 bg-brand-accent/5 rounded-2xl flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-primary group-hover:text-brand-bg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 relative z-10">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-serif text-brand-primary mb-3 relative z-10">{service.title}</h4>
              <p className="text-sm text-brand-secondary/80 leading-relaxed mb-6 flex-grow relative z-10">
                {service.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-brand-accent/10 relative z-10">
                <div className="text-brand-primary font-bold text-base mb-2 flex items-center gap-2 group-hover:text-brand-accent transition-colors">
                  <span className="text-xl">💰</span> {service.price}
                </div>
                {service.note && (
                  <div className="text-xs font-medium tracking-tight text-brand-secondary flex items-start gap-2 bg-brand-accent/5 p-3 rounded-2xl border border-brand-accent/10">
                    <span className="flex-shrink-0">📌</span> 
                    <span>{service.note}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Call To Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-2 bg-brand-primary p-12 rounded-[50px] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 group overflow-hidden relative border border-white/5"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-1000 z-0"></div>
            
            <div className="relative z-10 flex-1 text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-brand-accent/20"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                Solusi Cepat & Rapi
              </motion.div>
              <h4 className="text-3xl md:text-5xl font-serif text-brand-bg leading-tight mb-6">
                Punya pakaian yang <span className="italic text-brand-accent">ingin diperbaiki?</span>
              </h4>
              <p className="text-brand-bg/80 max-w-md text-lg leading-relaxed">
                Kembalikan kenyamanan pakaian favorit Anda. Konsultasikan kerusakannya sekarang, <span className="text-brand-bg font-bold">gratis tanpa biaya.</span>
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <a 
                href="https://wa.me/6285227202129?text=Halo Griya Selaras, saya ingin konsultasi gratis untuk perbaikan pakaian..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-6 bg-brand-accent text-brand-bg rounded-full font-bold text-xl hover:bg-brand-bg hover:text-brand-primary transition-all duration-500 shadow-[0_20px_50px_rgba(196,173,143,0.3)] hover:shadow-none hover:-translate-y-2 group/btn"
              >
                <MessageCircle className="w-7 h-7" />
                <span>Mulai Konsultasi</span>
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
