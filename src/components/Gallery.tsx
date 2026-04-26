import { motion } from 'motion/react';

const gallery = [
  {
    src: 'https://i.pinimg.com/webp80/736x/86/50/c0/8650c0e53889118b202039244b18581b.webp',
    title: 'Hasil Jadi Kemeja Custom',
    caption: 'Fit yang sempurna dan rapi.'
  },
  {
    src: 'https://i.pinimg.com/736x/7a/ac/d1/7aacd1be522d4d17b7d9c98fe2eacc87.jpg',
    title: 'Mesin Jahit Berkualitas Baik',
    caption: 'Proses jahit dengan ketelitian tinggi.'
  },
  {
    src: 'https://i.pinimg.com/736x/b5/2f/5f/b52f5feedf303e805fb77f7db149c639.jpg',
    title: 'Detail Jahitan',
    caption: 'Ketelitian di setiap inci kain.'
  },
  {
    src: 'https://i.pinimg.com/webp80/1200x/23/5c/f3/235cf38898268a239a019880d5f7e839.webp',
    title: 'Proses Fitting',
    caption: 'Memastikan kenyamanan maksimal.'
  },
  {
    src: 'https://i.pinimg.com/736x/f5/6e/7e/f56e7e97a127b43f42dfdd61ea95ebe8.jpg',
    title: 'Busana Formal',
    caption: 'Elegan untuk momen spesial Anda.'
  },
  {
    src: 'https://i.pinimg.com/736x/b2/12/de/b212de08ba215931c2ece542413c0cd4.jpg',
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
