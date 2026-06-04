import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Ruler, Shirt, CircleDot, Layers, Briefcase, ArrowRight, ChevronDown, Clock, X, MessageCircle, Check } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  price: string;
  estimate: string;
  icon: React.ReactNode;
  image: string;
  highlights: string[];
  note?: string;
}

const services: ServiceItem[] = [
  {
    title: 'Permak Pakaian',
    description: 'Perbaikan ukuran, rombak model, pengecilan, atau modifikasi segala jenis pakaian agar fit dan elegan saat dikenakan.',
    price: 'Rp15.000',
    estimate: '1 - 2 Hari',
    icon: <Shirt className="w-5 h-5" />,
    image: '/permak_pakaian.png',
    highlights: [
      'Penyesuaian ukuran tubuh (alteration) secara presisi',
      'Rombak model pakaian lama menjadi gaya baru yang modern',
      'Teknik pemotongan kain berpola rapi agar jatuhnya proporsional',
      'Finishing jahitan halus dan kuat berstandar butik'
    ]
  },
  {
    title: 'Permak Baju',
    description: 'Perbaikan baju formal maupun casual agar terlihat lebih rapi dan fit.',
    price: 'Rp15.000',
    estimate: '1 - 2 Hari',
    icon: <Shirt className="w-5 h-5" />,
    image: '/permak_baju.png',
    highlights: [
      'Penyesuaian lekuk pinggang & bahu presisi',
      'Pembongkaran utuh jahitan lama agar hasil natural',
      'Penyetrikaan uap finishing sebelum diserahkan',
      'Bisa custom bentuk kerah atau manset'
    ]
  },
  {
    title: 'Permak Celana',
    description: 'Penyesuaian panjang atau ukuran celana sesuai kebutuhan Anda.',
    price: 'Rp20.000',
    estimate: '1 Hari',
    icon: <Ruler className="w-5 h-5" strokeWidth={1.5} />,
    image: '/permak_celana.png',
    highlights: [
      'Potong pas sambungan original jeans/denim',
      'Pengecilan pinggang & paha proporsional tanpa kerut',
      'Jahitan rantai / lurus sangat kokoh luar dalam',
      'Pengerjaan cepat & presisi tinggi'
    ]
  },
  {
    title: 'Tambah Kancing',
    description: 'Penggantian atau penambahan kancing dengan hasil kuat dan rapi.',
    price: 'Rp15.000',
    estimate: 'Bisa Ditunggu',
    icon: <CircleDot className="w-5 h-5" />,
    image: '/tambah_kancing.png',
    highlights: [
      'Pengerjaan lubang kancing otomatis sekelas pabrik',
      'Jahit kancing manual simetris & anti lepas',
      'Tersedia berbagai pilihan kancing berkualitas',
      'Benang rangkap ekstra kokoh'
    ]
  },
  {
    title: 'Permak Gamis',
    description: 'Perbaikan ukuran gamis agar lebih nyaman dan tetap elegan.',
    price: 'Rp35.000',
    estimate: '1 - 3 Hari',
    icon: <Layers className="w-5 h-5" />,
    image: '/permak_gamis.png',
    highlights: [
      'Pemotongan keliling rok gamis presisi & tidak bergulung',
      'Jahit lipat kecil (baby hem) berkualitas butik',
      'Penyesuaian manset & kerutan dada tetap proporsional',
      'Kerapian pola payet/brukat terjaga'
    ]
  },
  {
    title: 'Custom Pakaian (Jahit Baru)',
    description: 'Melayani pembuatan pakaian sesuai desain dan ukuran Anda (custom).',
    price: 'Rp80.000',
    estimate: '5 - 10 Hari',
    note: 'Harga menyesuaikan model dan bahan',
    icon: <Scissors className="w-5 h-5" />,
    image: '/custom_pakaian_baru.png',
    highlights: [
      'Pengukuran tubuh detail (custom measurement fit)',
      'Konsultasi desain, pemilihan kain, & gaya bebas',
      'Konstruksi jahitan butik (clean finishing)',
      'Fitting berkala hingga hasil benar-benar sempurna'
    ]
  },
  {
    title: 'Kerja Sama UMKM / Konveksi Kecil',
    description: 'Melayani kerja sama produksi pakaian untuk brand lokal, reseller, maupun UMKM dengan kualitas premium.',
    price: 'Hubungi Kami',
    estimate: 'Sesuai Kesepakatan',
    note: 'Bisa diskusi untuk harga khusus & jangka panjang',
    icon: <Briefcase className="w-5 h-5" />,
    image: '/kerjasama_umkm.png',
    highlights: [
      'Kapasitas produksi bulanan stabil & teratur',
      'Quality Control (QC) ketat dari awal potong hingga packing',
      'Kejelasan progres & pengiriman tepat waktu',
      'Harga partner kompetitif untuk kemitraan berlanjut'
    ]
  }
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // We show the first 3 priority services by default (on a 3-column layout)
  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-24 bg-[#F7F2EA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#A25D3B] mb-6">Layanan Kami</h2>
          <h3 className="text-4xl font-serif text-[#4A3A30] leading-tight mb-6">
            Dikerjakan dengan Presisi untuk <span className="italic text-[#A25D3B]">Kualitas Terbaik</span>
          </h3>
          <p className="text-[#7B6F66]">
            Kami menawarkan berbagai solusi kebutuhan busana Anda dengan standar pengerjaan profesional yang mengutamakan kerapian dan estetika.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <div
                onClick={() => setSelectedService(service)}
                className="bg-[#FCFAF7] border-2 border-[#DCCDBD] rounded-[5px] overflow-hidden flex flex-col relative transition-all duration-300 hover:-translate-y-1.5 hover:border-[#A25D3B] group h-full cursor-pointer shadow-none"
              >
                {/* Image Area */}
                <div className="relative w-full h-[220px] overflow-hidden bg-[#F7F2EA]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 z-10 w-10 h-10 bg-[#FCFAF7]/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-[#A25D3B] border border-[#DCCDBD]/30 group-hover:bg-[#4A3A30] group-hover:text-[#FCFAF7] group-hover:rotate-6 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow text-[#7B6F66]">
                  <h4 className="text-xl font-serif text-[#4A3A30] font-semibold mb-3 tracking-tight group-hover:text-[#A25D3B] transition-colors">{service.title}</h4>
                  <p className="text-sm text-[#7B6F66] leading-relaxed mb-6 flex-grow line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Footer Stats inside Card */}
                  <div className="mt-auto pt-6 border-t border-[#DCCDBD]/50">
                    <div className="mb-3">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#7B6F66]/80 uppercase block mb-1">
                        Mulai Dari
                      </span>
                      <div className="text-2xl md:text-3xl font-serif text-[#4A3A30] font-semibold group-hover:text-[#A05C3A] transition-colors">
                        {service.price}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-[#7B6F66]/80 mb-4">
                      <Clock className="w-3.5 h-3.5 text-[#A25D3B]" />
                      <span>Estimasi: {service.estimate}</span>
                    </div>

                    {service.note && (
                      <div className="text-[10px] bg-[#F7F2EA]/40 text-[#7B6F66]/90 p-2.5 rounded-lg border border-[#DCCDBD]/20 mb-4 italic">
                        * {service.note}
                      </div>
                    )}

                    {/* Divider horizontal & CTA link */}
                    <div className="border-t border-[#DCCDBD]/40 pt-4 flex items-center justify-between">
                      <span className="text-xs font-bold tracking-widest text-[#4A3A30]/80 uppercase group-hover:text-[#A25D3B] transition-colors">
                        Lihat Detail
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#7B6F66] group-hover:text-[#A25D3B] transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle View Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2.5 px-8 py-4.5 bg-[#4A3A30] text-[#FCFAF7] rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#A25D3B] transition-all hover:-translate-y-1 shadow-md cursor-pointer group"
          >
            <span>{showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Jenis Layanan'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Professional Service Detail View Overlay */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-[#4A3A30]/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#FCFAF7] w-full max-w-4xl rounded-[5px] overflow-hidden shadow-2xl relative grid md:grid-cols-2 border border-[#DCCDBD]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 z-20 bg-[#F7F2EA] text-[#4A3A30] hover:bg-[#A25D3B] hover:text-[#FCFAF7] p-2.5 rounded-full hover:scale-105 transition-all outline-none border border-[#DCCDBD]"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Column */}
              <div className="relative h-[280px] md:h-full bg-[#F7F2EA]">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3A30]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-[#FCFAF7]">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] bg-[#A25D3B] px-3.5 py-1.5 rounded-md text-[#FCFAF7]">
                    Premium Quality
                  </span>
                </div>
              </div>

              {/* Content Information Column */}
              <div className="p-8 md:p-12 flex flex-col justify-between text-[#7B6F66]">
                <div>
                  <span className="text-[10px] font-bold text-[#A25D3B] uppercase tracking-[0.3em] block mb-2">DETAIL LAYANAN</span>
                  <h3 className="text-3xl font-serif text-[#4A3A30] font-semibold mb-4 tracking-tight">{selectedService.title}</h3>
                  <p className="text-sm text-[#7B6F66] leading-relaxed mb-6 italic">
                    {selectedService.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 border-y border-[#DCCDBD]/40 py-5">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#7B6F66]/80 block mb-1">Mulai Dari</span>
                      <span className="text-xl md:text-2xl font-serif text-[#4A3A30] font-bold">{selectedService.price}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#7B6F66]/80 block mb-1">Estimasi Kerja</span>
                      <span className="text-sm font-bold text-[#4A3A30] flex items-center gap-1.5 pt-1">
                        <Clock className="w-4 h-4 text-[#A25D3B]" />
                        {selectedService.estimate}
                      </span>
                    </div>
                  </div>

                  {selectedService.note && (
                    <p className="text-xs bg-[#F7F2EA] text-[#4A3A30] px-3.5 py-2.5 rounded-lg border border-[#DCCDBD]/30 mb-6 italic">
                      * {selectedService.note}
                    </p>
                  )}

                  {/* Highlights Checklist */}
                  <div className="mb-8">
                    <h5 className="text-[11px] font-bold text-[#4A3A30] uppercase tracking-wider mb-3">Keunggulan & Detail Proses:</h5>
                    <ul className="space-y-2.5">
                      {selectedService.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#7B6F66]">
                          <div className="p-0.5 bg-[#A25D3B]/10 rounded text-[#A25D3B] mt-0.5 shrink-0">
                            <Check className="w-3.5 h-3.5" strokeWidth={3} />
                          </div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Main WhatsApp Consultation Button */}
                <a 
                  href={`https://wa.me/6285227202129?text=Halo Griya Selaras, saya ingin berkonsultasi mengenai detail dan pemesanan layanan: ${selectedService.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#4A3A30] text-[#FCFAF7] rounded-full font-bold flex items-center justify-center gap-2.5 hover:bg-[#A25D3B] hover:-translate-y-0.5 transition-all duration-300 shadow-md group/btn text-sm tracking-wider uppercase"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Konsultasi via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
