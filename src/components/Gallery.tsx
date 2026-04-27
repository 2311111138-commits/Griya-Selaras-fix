import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Info, CheckCircle2, Clock, Scissors } from 'lucide-react';

interface GalleryItem {
  src: string;
  title: string;
  caption: string;
  technicalInfo: {
    stitchType: string;
    fabric: string;
    duration: string;
    highlights: string[];
  };
}

const galleryItems: GalleryItem[] = [
  {
    src: 'https://i.pinimg.com/webp80/736x/86/50/c0/8650c0e53889118b202039244b18581b.webp',
    title: 'Hasil Jadi Kemeja Custom',
    caption: 'Fit yang sempurna dan rapi.',
    technicalInfo: {
      stitchType: 'Jahitan Stik (Single Needle)',
      fabric: 'Katun Poplin / Oxford',
      duration: '3 - 5 Hari Kerja',
      highlights: [
        'Kerah tegak dan kokoh',
        'Finishing clean-cut tanpa benang sisa',
        'Pola disesuaikan dengan anatomi tubuh'
      ]
    }
  },
  {
    src: 'https://i.pinimg.com/736x/7a/ac/d1/7aacd1be522d4d17b7d9c98fe2eacc87.jpg',
    title: 'Mesin Jahit Berkualitas Baik',
    caption: 'Proses jahit dengan ketelitian tinggi.',
    technicalInfo: {
      stitchType: 'High Speed Industrial Stitch',
      fabric: 'Semua Jenis Bahan Berpori',
      duration: 'Proses QC Ketat',
      highlights: [
        'Tekanan kaki mesin yang stabil',
        'Ketegangan benang yang presisi',
        'Kecepatan konsisten untuk kerapian maksimal'
      ]
    }
  },
  {
    src: 'https://i.pinimg.com/736x/b5/2f/5f/b52f5feedf303e805fb77f7db149c639.jpg',
    title: 'Detail Jahitan',
    caption: 'Ketelitian di setiap inci kain.',
    technicalInfo: {
      stitchType: 'Stik Kecil (Precision Stitch)',
      fabric: 'Wool / Semiwool',
      duration: 'Pengerjaan Detail 1-2 Jam',
      highlights: [
        'Jarak antar jahitan konsisten',
        'Kekuatan sambungan terjamin',
        'Estetika jahitan luar yang mewah'
      ]
    }
  },
  {
    src: 'https://i.pinimg.com/webp80/1200x/23/5c/f3/235cf38898268a239a019880d5f7e839.webp',
    title: 'Proses Fitting',
    caption: 'Memastikan kenyamanan maksimal.',
    technicalInfo: {
      stitchType: 'Hand Basting (Jahit Jelujur)',
      fabric: 'Custom Measurements',
      duration: '15 - 30 Menit Sesi',
      highlights: [
        'Penyesuaian titik kenyamanan',
        'Koreksi drape (jatuh kain)',
        'Personal touch untuk siluet terbaik'
      ]
    }
  },
  {
    src: 'https://i.pinimg.com/736x/f5/6e/7e/f56e7e97a127b43f42dfdd61ea95ebe8.jpg',
    title: 'Busana Formal',
    caption: 'Elegan untuk momen spesial Anda.',
    technicalInfo: {
      stitchType: 'Full Lining Construction',
      fabric: 'Silk / Satin / Premium Velvet',
      duration: '7 - 14 Hari Kerja',
      highlights: [
        'Interlining berkualitas tinggi',
        'Ziper tersembunyi (Invisible Zip)',
        'Konstruksi bahu yang proporsional'
      ]
    }
  },
  {
    src: 'https://i.pinimg.com/736x/b2/12/de/b212de08ba215931c2ece542413c0cd4.jpg',
    title: 'Detail Kerah',
    caption: 'Aksen presisi yang menawan.',
    technicalInfo: {
      stitchType: 'Locked Collar Stitch',
      fabric: 'Kain Keras (Stay Fabric)',
      duration: 'Persiapan Pola 1 Hari',
      highlights: [
        'Ujung kerah lancip presisi',
        'Bentuk simetris sempurna',
        'Tahan cuci dan tidak mudah melintir'
      ]
    }
  }
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">Galeri Karya</h2>
            <h3 className="text-4xl font-serif text-brand-primary leading-tight">
              Inspirasi Desain & <span className="italic text-brand-secondary">Standar Kualitas</span> Kami
            </h3>
          </div>
          <p className="text-brand-secondary max-w-sm md:text-right">
            Setiap karya adalah perpaduan antara seni jahit tradisional dan kebutuhan modern. Klik gambar untuk melihat detail teknis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[40px] mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-brand-bg text-brand-primary px-6 py-3 rounded-full flex items-center gap-2 font-serif italic translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <Info className="w-4 h-4" />
                    <span>Lihat Detail Teknis</span>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-serif text-brand-primary mb-1">{item.title}</h4>
              <p className="text-sm text-brand-secondary italic">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-y-auto bg-brand-primary/95 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-brand-bg w-full max-w-6xl rounded-[40px] overflow-hidden shadow-2xl relative grid md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-20 bg-brand-primary text-brand-bg p-2 rounded-full hover:scale-110 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Side */}
              <div className="relative h-[400px] md:h-auto bg-brand-accent/5">
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center text-brand-secondary">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-brand-accent/10 rounded-lg text-brand-accent">
                    <Info className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">Informasi Teknis</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-serif text-brand-primary mb-2">{selectedItem.title}</h3>
                <p className="text-brand-primary/60 mb-8 italic">{selectedItem.caption}</p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-1 bg-brand-primary/5 rounded-md text-brand-primary">
                      <Scissors className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Tipe Jahitan</h5>
                      <p className="text-brand-primary/80">{selectedItem.technicalInfo.stitchType}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-1 bg-brand-primary/5 rounded-md text-brand-primary">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Estimasi Pengerjaan</h5>
                      <p className="text-brand-primary/80">{selectedItem.technicalInfo.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-1 bg-brand-primary/5 rounded-md text-brand-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm uppercase tracking-wider mb-3">Keunggulan & Kualitas</h5>
                      <ul className="space-y-2">
                        {selectedItem.technicalInfo.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-brand-primary/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/6285227202129?text=Halo Griya Selaras, saya tertarik dengan detail ${selectedItem.title}...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-fit px-8 py-4 bg-brand-primary text-brand-bg rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand-accent transition-all hover:-translate-y-1 shadow-lg"
                >
                  Pesan Model Ini Sekarang
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
