import { motion } from 'motion/react';

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Hasil Jadi Kemeja Custom',
    caption: 'Fit yang sempurna dan rapi.'
  },
  {
    src: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Mesin Jahit Beraksi',
    caption: 'Proses jahit dengan ketelitian tinggi.'
  },
  {
    src: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Detail Jahitan',
    caption: 'Ketelitian di setiap inci kain.'
  },
  {
    src: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Proses Fitting',
    caption: 'Memastikan kenyamanan maksimal.'
  },
  {
    src: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Busana Formal',
    caption: 'Elegan untuk momen spesial Anda.'
  },
  {
    src: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Detail Kerah',
    caption: 'Aksen presisi yang menawan.'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">Galeri Karya</h2>
            <h3 className="text-4xl font-serif text-brand-primary leading-tight">
              Inspirasi Desain & <span className="italic text-brand-secondary">Standar Kualitas</span> Kami
            </h3>
          </div>
          <p className="text-brand-secondary max-w-sm md:text-right">
            Setiap karya adalah perpaduan antara seni jahit tradisional dan kebutuhan modern.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[40px] mb-6">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-brand-bg font-serif italic text-lg translate-y-10 group-hover:translate-y-0 transition-transform duration-500">Lihat Detail</span>
                </div>
              </div>
              <h4 className="text-xl font-serif text-brand-primary mb-1">{item.title}</h4>
              <p className="text-sm text-brand-secondary italic">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
