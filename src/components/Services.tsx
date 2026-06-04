import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Ruler, Shirt, CircleDot, Layers, Briefcase, ArrowRight, ChevronDown, Clock, X, MessageCircle, Check, ArrowLeft } from 'lucide-react';

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

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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

      {/* Professional Service Detail View Overlay - Premium Right-Side Drawer */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-end bg-[#4A3A30]/65 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            {/* Right Drawer Element */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="bg-[#FCFAF7] w-full max-w-full md:max-w-xl lg:max-w-2xl h-full shadow-2xl relative flex flex-col border-l border-[#DCCDBD]/40"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Top Header */}
              <div className="sticky top-0 bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#DCCDBD]/40 z-30 px-6 py-4 flex items-center justify-between">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="flex items-center gap-2 text-xs font-bold text-[#7B6F66] hover:text-[#A25D3B] uppercase tracking-widest transition-colors py-2 px-1 focus:outline-none"
                  aria-label="Kembali ke Layanan"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </button>

                <div className="text-center select-none hidden sm:block max-w-[200px] md:max-w-sm">
                  <span className="font-serif text-[#4A3A30] font-bold text-sm tracking-wide truncate block">
                    {selectedService.title}
                  </span>
                </div>

                <button 
                  onClick={() => setSelectedService(null)}
                  className="p-2.5 text-[#7B6F66] hover:text-[#A25D3B] hover:bg-[#F7F2EA]/85 rounded-full transition-all focus:outline-none"
                  aria-label="Tutup Detail"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Body Content */}
              <div className="flex-1 overflow-y-auto overscroll-behavior-contain">
                {/* Hero Feature Image */}
                <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden bg-[#F7F2EA]">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A3A30]/75 via-[#4A3A30]/25 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-[#FCFAF7]">
                    <span className="inline-block text-[9px] font-bold uppercase tracking-[0.25em] bg-[#A25D3B] px-3.5 py-1.5 rounded-[3px] text-[#FCFAF7] mb-2.5 shadow-sm">
                      Layanan Premium
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-serif text-[#FCFAF7] font-semibold leading-tight tracking-tight drop-shadow-sm">
                      {selectedService.title}
                    </h4>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="p-6 sm:p-8 space-y-8">
                  {/* Service Description */}
                  <div className="space-y-3">
                    <h5 className="text-[10px] font-bold text-[#A25D3B] uppercase tracking-[0.25em]">DESKRIPSI LAYANAN</h5>
                    <p className="text-sm sm:text-base text-[#7B6F66] leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>

                  {/* Price & Estimation Cards */}
                  <div className="grid grid-cols-2 gap-4 border-y border-[#DCCDBD]/30 py-6">
                    <div className="bg-[#FCFAF7] p-4 rounded-xl border border-[#DCCDBD]/25 shadow-none">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#7B6F66]/70 block mb-1">Mulai Dari</span>
                      <span className="text-lg sm:text-2xl font-serif text-[#A25D3B] font-bold">{selectedService.price}</span>
                    </div>
                    <div className="bg-[#FCFAF7] p-4 rounded-xl border border-[#DCCDBD]/25 shadow-none">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#7B6F66]/70 block mb-1">Estimasi Kerja</span>
                      <span className="text-sm font-bold text-[#4A3A30] flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-4 h-4 text-[#A25D3B] shrink-0" />
                        <span>{selectedService.estimate}</span>
                      </span>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-4">
                    <h5 className="text-[10px] font-bold text-[#A25D3B] uppercase tracking-[0.25em]">Keunggulan & Detail Proses</h5>
                    <ul className="space-y-3">
                      {selectedService.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3.5 text-sm text-[#7B6F66] leading-relaxed">
                          <div className="p-0.5 bg-[#A25D3B]/10 rounded text-[#A25D3B] mt-0.5 shrink-0">
                            <Check className="w-3.5 h-3.5" strokeWidth={3} />
                          </div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>


                </div>
              </div>

              {/* Sticky Bottom Footer Consultation Container */}
              <div className="sticky bottom-0 bg-[#FCFAF7]/95 backdrop-blur-md border-t border-[#DCCDBD]/40 p-4 sm:p-5 z-20 shadow-[0_-4px_12px_rgba(74,58,48,0.03)]">
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50/40 rounded-xl border border-emerald-100/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative shrink-0">
                      <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-[#FCFAF7] shadow-sm shadow-emerald-600/10">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#FCFAF7] rounded-full animate-pulse"></span>
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-emerald-800 tracking-wider uppercase mb-0.5">Tanya Penjahit</p>
                      <p className="text-xs text-emerald-700 leading-normal font-medium">Online • Fast Response & Ramah</p>
                    </div>
                  </div>
                  
                  <a 
                    href={`https://wa.me/6285227202129?text=Halo Griya Selaras, saya ingin berkonsultasi mengenai detail dan pemesanan layanan: ${selectedService.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-[#FCFAF7] rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group/btn text-xs tracking-wider uppercase shrink-0"
                  >
                    <span>Hubungi Chat</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
