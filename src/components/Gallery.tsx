import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Sparkles, Scissors, Info, Layers } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  fabric: string;
  description: string;
  highlights: string[];
  stitchDetail: string;
  duration: string;
  aspectClass: string; // Tailored viewport sizes for aesthetic Pinterest grid
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: 'https://lh3.googleusercontent.com/d/17BkDYKoDY05avvELoG12ENmYqRQu3LK_',
    title: 'Kebaya Gayatri Modern',
    category: 'Kebaya & Busana Custom',
    fabric: 'Sutera Roberto Cavalli & Chantilly Lace',
    description: 'Kebaya custom dengan fitting presisi, menjamin kenyamanan sempurna serta siluet elegan berkelas butik.',
    highlights: ['Pola sambungan brokat/lace simetris sempurna', 'Kerah V-neck modifikasi tegak presisi', 'Finishing obras bersih standard couture'],
    stitchDetail: 'Single-needle boutique stitch halus',
    duration: '5 - 7 Hari Pengerjaan',
    aspectClass: 'aspect-[3/4]'
  },
  {
    id: 2,
    src: '/koko_modern_hitam.png',
    title: 'Kemeja Koko Modern Hitam',
    category: 'Koko & Busana Pria',
    fabric: 'Toyobo Premium Grade A',
    description: 'Baju Koko lengan pendek eksklusif dengan aksen panel abu-abu di bahu dan jahitan list presisi untuk kenyamanan berkegiatan ibadah maupun formal.',
    highlights: ['Aksen bahu abu-abu simetris', 'Jahitan list kecil di sepanjang belahan kancing', 'Saku tempel dada presisi berpenutup lipat'],
    stitchDetail: 'Standard butik jahit lurus super rapat',
    duration: '2 - 3 Hari Pengerjaan',
    aspectClass: 'aspect-[4/5]'
  },
  {
    id: 3,
    src: '/seragam_sd_merah.png',
    title: 'Seragam SD Merah Putih',
    category: 'Seragam Sekolah',
    fabric: 'Oxford Cotton & Japan Drill',
    description: 'Setelan seragam sekolah dasar perempuan dengan kemeja putih berkerah tegak rapi dan rok lipit merah yang tahan pudar serta nyaman untuk aktivitas bermain siswi.',
    highlights: ['Lipit rok konsisten sejajar keliling', 'Kerutan pinggang elastis berkualitas tinggi', 'Jahitan saku dada rapi bergradasi kuat'],
    stitchDetail: 'Locked high-speed industrial seam',
    duration: 'Sesuai Jumlah Pesanan',
    aspectClass: 'aspect-[3/2]'
  },
  {
    id: 4,
    src: 'https://lh3.googleusercontent.com/d/1u_C15uhhc4nlGTbt2OBDILHoGoDSfPYl',
    title: 'Seragam Presisi Al-Azhar',
    category: 'Seragam Sekolah',
    fabric: 'Japan Drill TC Grade A',
    description: 'Seragam harian berdesain kokoh dengan saku presisi serta ketahanan jahitan tinggi untuk mobilitas tinggi.',
    highlights: ['Back tacks / kunci jahitan ganda di sudut saku', 'Pola kerah tegak kaku tahan cuci berkali-kali', 'Kancing kemeja di pasang solid benang silang ganda'],
    stitchDetail: 'Locked high-speed industrial seam',
    duration: 'Pemesanan Kolektif / Massal',
    aspectClass: 'aspect-[3/4]'
  },
  {
    id: 5,
    src: '/batik_premium_pria.png',
    title: 'Batik Premium Ganda',
    category: 'Batik & Kemeja Premium',
    fabric: 'Katun Sogan Tulis Halus 40s',
    description: 'Dua pilihan kemeja batik pesanan eksklusif dengan motif mega mendung daun biru dan motif parang merah jingga berstruktur presisi tinggi.',
    highlights: ['Penyambungan motif batik (pattern matching) di belahan dada', 'Kancing dalam tersembunyi yang kokoh', 'Kancing kerah tertata tegap berlapisan kain keras berkualitas'],
    stitchDetail: 'Pattern matching boutique seam',
    duration: '4 - 5 Hari Pengerjaan',
    aspectClass: 'aspect-[4/5]'
  },
  {
    id: 6,
    src: '/abaya_hasna_syari.png',
    title: 'Abaya Hasna Twin Set',
    category: 'Gamis & Abaya Modern',
    fabric: 'Arabian Jetblack & Silk Pastel',
    description: 'Gamis abaya modern bersiluet anggun dengan kombinasi dua warna tegas hitam dengan panel tengah biru muda pastel lembut serta manset senada.',
    highlights: ['Potongan vertikal memberikan efek siluet jenjang', 'Manset karet kerut berkancing snap tertutup', 'Keliman bawah super lebar and rapi'],
    stitchDetail: 'Lapis furing premium antikusut',
    duration: '4 - 6 Hari Pengerjaan',
    aspectClass: 'aspect-[1/1]'
  },
  {
    id: 7,
    src: '/outer_tenun_ikat.png',
    title: 'Blazer Tenun Ikat Modern',
    category: 'Outerwear & Casual Wear',
    fabric: 'Tenun Ikat NTT & Linen Silk',
    description: 'Outer blazer asimetris bergaya avant-garde dengan eksplorasi motif tenun nusantara plum tua berkerah tumpang silang yang anggun.',
    highlights: ['Potongan asimetris modern yang ergonomis', 'Drape tenun ikat solid tanpa kerutan jahit', 'Ujung jahitan pinggir dilapisi kain perekat khusus'],
    stitchDetail: 'Hand-lined boutique flat seam',
    duration: '5 - 7 Hari Pengerjaan',
    aspectClass: 'aspect-[3/4]'
  },
  {
    id: 8,
    src: '/outer_kimono_capung.png',
    title: 'Kimono Capung Dragonfly',
    category: 'Outerwear & Casual Wear',
    fabric: 'Rayon Twill Premium Ultra Soft',
    description: 'Outerwear kimono kasual bermotif capung abstrak hitam-putih dengan kerah list abu-abu vertikal, ringan dan sejuk di kulit.',
    highlights: ['Bahan ringan dengan drape melambai indah', 'Sambungan pundak lebar anti ketat', 'Jahitan lipat ganda awet anti jumbai'],
    stitchDetail: 'French seam halus dalam baju',
    duration: '2 - 3 Hari Pengerjaan',
    aspectClass: 'aspect-[3/2]'
  },
  {
    id: 9,
    src: '/kebaya_magenta_pesta.png',
    title: 'Kebaya Kutubaru Magenta Brokat',
    category: 'Kebaya & Busana Custom',
    fabric: 'Paris Chantilly Brocade & Satin Velvet',
    description: 'Setelan kebaya pesta eksklusif berbahan brokat magenta berkilau manik halus, dilengkapi bros rantai warna emas antik dan kain batik lilit menawan.',
    highlights: ['Bordir tepian kebaya berlekuk rapi (cutting lace)', 'Kerah kutubaru klasik presisi simetris', 'Kain bawahan dengan lilitan jahit rapi'],
    stitchDetail: 'Premium custom boutique tailoring',
    duration: '7 - 10 Hari Pengerjaan',
    aspectClass: 'aspect-[4/5]'
  },
  {
    id: 10,
    src: '/gaun_lavender_mewah.png',
    title: 'Gaun Lavender Beaded Premium',
    category: 'Gaun & Kebaya Pesta',
    fabric: 'Tulle Beaded & Premium Silk Organza',
    description: 'Gaun pesta malam mewah berwarna lavender pastel, bertaburkan payet mutiara halus serta bordir bunga cantik pada lengan organza transparan.',
    highlights: ['Pemasangan payet mutiara dan swarovski manual (handmade)', 'Lapisan furing lembut adem berserat sutra', 'Belahan rok bawah melingkar mewah lebar ditiup angin'],
    stitchDetail: 'Haute Couture hand-beaded lace',
    duration: '10 - 15 Hari Pengerjaan',
    aspectClass: 'aspect-[3/4]'
  },
  {
    id: 11,
    src: '/kemeja_kerja_merah.png',
    title: 'Kemeja Kerja Griya Workshop',
    category: 'Seragam Kerja',
    fabric: 'Japan Drill Original Soft',
    description: 'Kemeja seragam kerja bengkel/workshop lengan panjang berwarna merah ceri menyala dengan kerah kokoh abu-abu dan detail gunting jahit presisi tinggi.',
    highlights: ['Bidikan jahitan ganda di bagian punggung (double stitch track)', 'Lubang angin ventilasi jaring halus tersembunyi', 'Kancing polyester tahan panas setrika listrik'],
    stitchDetail: 'Heavy-duty dual-needle lockstitch',
    duration: 'Pemesanan Massal Workshop',
    aspectClass: 'aspect-[3/2]'
  },
  {
    id: 12,
    src: '/koko_bronze_syuhada.png',
    title: 'Koko Executive Bronze Syuhada',
    category: 'Koko & Busana Pria',
    fabric: 'Katun Sutra Jacquard',
    description: 'Baju Koko eksklusif lengan panjang berwarna bronze kecokelatan dengan kerah berdiri tegak, list pipa warna cokelat tua melingkar rapi di sepanjang dada, dilapisi lempengan merek Syuhada berlapis emas.',
    highlights: ['Pipa bisban satin cokelat di sepanjang manset lengan', 'Saku dalam rapi tanpa bekas tindasan luar', 'Kancing kemeja diatur presisi tertutup placket'],
    stitchDetail: 'Luxury boutique band collar tailoring',
    duration: '3 - 5 Hari Pengerjaan',
    aspectClass: 'aspect-[1/1]'
  }
];

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Initial images count: 6 best ones
  const displayedItems = isExpanded ? galleryItems : galleryItems.slice(0, 6);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % galleryItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const currentModalItem = selectedItemIndex !== null ? galleryItems[selectedItemIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-[#F9F6EE] relative overflow-hidden">
      {/* Decorative Warm Backdrops */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#7A4A1D]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BA9E74]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* EDITORIAL REFINED HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 relative z-10">
          <div className="max-w-2xl">
            {/* Elegant luxury tag with Olive & Gold combination */}
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="h-[1px] w-6 bg-[#7A4A1D]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7A4A1D] flex items-center gap-1.5 font-sans">
                <Sparkles className="w-3.5 h-3.5 pb-0.5 text-[#B89B72]" /> GALERI KARYA KAMI
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-[#5D3A1A] leading-tight tracking-tight font-light">
              Portofolio Hasil Jahitan & <br />
              <span className="italic font-normal text-[#8C6A4D]">Apresiasi Kualitas Presisi</span>
            </h2>
          </div>
          
          <div className="max-w-md md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#B89B72]/30 pl-4 md:pl-0 md:pr-4 py-1">
            <p className="text-sm text-[#8C6A4D] leading-relaxed font-sans">
              Lihat berbagai hasil produksi yang telah kami kerjakan untuk brand fashion, UMKM, dan pelanggan kami dengan standar kualitas terbaik.
            </p>
          </div>
        </div>

        {/* PINTEREST-INSPIRED LUXURY MASONRY GRID */}
        <motion.div 
          layout="position"
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid relative block group cursor-pointer overflow-hidden rounded-[5px] bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-[#DCCDBD]/20"
                onClick={() => setSelectedItemIndex(index)}
              >
                {/* Image Wrapper */}
                <div className={`${item.aspectClass} relative overflow-hidden`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16, 1, 0.3, 1] group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Stand Badge - Always Visible Pill */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#FCFAF7]/95 text-[#5D3A1A] text-[9px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm backdrop-blur-md border border-[#7A4A1D]/25">
                      {item.category}
                    </span>
                  </div>

                  {/* PREMIUM TRANSPARENT INTERACTION OVERLAY ON HOVER */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#36271C]/95 via-[#36271C]/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-7 z-10">
                    
                    {/* Visual Gold Line Accent */}
                    <div className="w-10 h-[1.5px] bg-[#B89B72] mb-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500" />
                    
                    <span className="text-[10px] font-bold text-[#EAD6B3] uppercase tracking-[0.2em] mb-1 font-sans">
                      Bahan: {item.fabric}
                    </span>
                    
                    <h3 className="text-xl font-serif text-[#FCFAF7] font-medium tracking-tight mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-[50ms]">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-[#DCCDBD]/85 font-sans line-clamp-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-[100ms]">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-1 text-[11px] font-bold uppercase text-[#FCFAF7] tracking-widest hover:text-[#B89B72] transition-colors mt-1 transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500 delay-[150ms]">
                      <span>Lihat Detail</span>
                      <ChevronRight className="w-4 h-4 text-[#B89B72]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EXPANSION BUTTON "LIHAT LEBIH BANYAK" */}
        <div className="flex justify-center mt-16 relative z-10">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-10 py-4.5 bg-transparent border-2 border-[#7A4A1D] text-[#7A4A1D] hover:bg-[#7A4A1D] hover:text-[#FCFAF7] font-[#5D3A1A] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer"
          >
            <span>{isExpanded ? 'Tampilkan Lebih Sedikit' : 'Lihat Lebih Banyak'}</span>
          </motion.button>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {currentModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-[#36271C]/95 backdrop-blur-md"
            onClick={() => setSelectedItemIndex(null)}
          >
            {/* Main Modal Display */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FCFAF7] w-full max-w-5xl rounded-[5px] overflow-hidden shadow-2xl relative grid md:grid-cols-12 max-h-[92vh] md:max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button Inside Lightbox */}
              <button
                onClick={() => setSelectedItemIndex(null)}
                className="absolute top-5 right-5 z-[110] bg-[#36271C]/90 text-[#FCFAF7] hover:bg-[#B89B72] hover:text-[#36271C] p-3 rounded-full hover:scale-110 transition-all shadow-lg cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* IMAGE HOUSING SANS BLUR - Left Col (7 columns on desktop) */}
              <div className="relative md:col-span-7 h-[300px] md:h-full bg-[#36271C]/10 flex items-center justify-center overflow-hidden">
                <img
                  src={currentModalItem.src}
                  alt={currentModalItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Left/Right Slideshow Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 bg-[#FCFAF7]/95 hover:bg-[#B89B72] text-[#36271C] p-3 rounded-full shadow-lg hover:scale-115 transition-all z-20 cursor-pointer"
                  aria-label="Previous artwork"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 bg-[#FCFAF7]/95 hover:bg-[#B89B72] text-[#36271C] p-3 rounded-full shadow-lg hover:scale-115 transition-all z-20 cursor-pointer"
                  aria-label="Next artwork"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Picture Index Indicator Tag */}
                <div className="absolute bottom-4 left-4 bg-[#36271C]/80 text-[#FCFAF7] px-3.5 py-1.5 rounded-md text-[10px] tracking-widest font-mono font-bold">
                  {selectedItemIndex !== null ? selectedItemIndex + 1 : 1} / {galleryItems.length}
                </div>
              </div>

              {/* COMPREHENSIVE TEXT DETAILS - Right Col (5 columns on desktop) */}
              <div className="p-8 md:p-10 md:col-span-5 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-full">
                
                <div>
                  {/* Category stand-out with Elegant Accent */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7A4A1D]/10 border border-[#7A4A1D]/20 text-[#7A4A1D] text-[10px] font-bold uppercase tracking-wider mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72]" />
                    {currentModalItem.category}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif text-[#5D3A1A] font-medium tracking-tight mb-2">
                    {currentModalItem.title}
                  </h3>
                  
                  <p className="text-xs uppercase tracking-widest text-[#B89B72] font-bold font-sans mb-5 border-b border-[#DCCDBD]/40 pb-4">
                    Bahan: {currentModalItem.fabric}
                  </p>

                  <p className="text-sm text-[#8C6A4D] leading-relaxed mb-6 font-sans">
                    {currentModalItem.description}
                  </p>

                  {/* Specifications and High-End Manufacturing standards */}
                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3">
                      <div className="pt-0.5 text-[#7A4A1D]">
                        <Scissors className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h5 className="text-[10px] uppercase tracking-wider text-[#36271C] font-bold font-sans">Detail Konstruksi Jahit:</h5>
                        <p className="text-xs text-[#8C6A4D]">{currentModalItem.stitchDetail}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="pt-0.5 text-[#7A4A1D]">
                        <Info className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h5 className="text-[10px] uppercase tracking-wider text-[#36271C] font-bold font-sans">Estimasi Penyelesaian:</h5>
                        <p className="text-xs text-[#8C6A4D]">{currentModalItem.duration}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="pt-0.5 text-[#7A4A1D]">
                        <Layers className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h5 className="text-[10px] uppercase tracking-wider text-[#36271C] font-bold font-sans mb-1.5">Keunggulan Kualitas (QC):</h5>
                        <ul className="space-y-1.5">
                          {currentModalItem.highlights.map((h, i) => (
                            <li key={i} className="text-xs text-[#8C6A4D] flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#B89B72]" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <a
                  href={`https://wa.me/6285227202129?text=Halo Griya Selaras, saya tertarik melakukan pesanan jahit / modifikasi dengan model referensi: ${currentModalItem.title} (${currentModalItem.category})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 bg-[#5D3A1A] hover:bg-[#7A4A1D] text-[#FCFAF7] rounded-full font-bold text-xs uppercase tracking-widest relative z-10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Pesan Model Ini via WhatsApp
                </a>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
