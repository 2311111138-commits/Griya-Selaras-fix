import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="font-serif text-3xl font-bold tracking-tight">Griya Selaras</span>
              <span className="text-xs uppercase tracking-[0.4em] text-brand-accent font-medium -mt-1">by Syuhada</span>
            </div>
            <p className="text-brand-bg/60 max-w-sm mb-8 leading-relaxed">
              Layanan penjahit premium dan busana custom di Banyumas. Menghadirkan keanggunan dalam setiap langkah Anda melalui keahlian jahitan berkualitas tinggi sejak 2018.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/griya.selaras1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-brand-bg/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all"
                title="Kunjungi Instagram Griya Selaras"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-brand-bg/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all"
                title="Facebook Griya Selaras"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Kontak</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start text-brand-bg/60 group">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                <a 
                  href="https://maps.app.goo.gl/nrJMZPD7RDEyRtAJA?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-brand-accent transition-colors underline decoration-brand-accent/30 decoration-1 underline-offset-4"
                >
                  Jl. Raya Wangon - Lumbir, Randegan, Kec. Wangon, Kabupaten Banyumas, Jawa Tengah 53176
                </a>
              </li>
              <li className="flex gap-4 items-center text-brand-bg/60">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <a 
                  href="https://wa.me/6285227202129" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm hover:text-brand-accent transition-colors"
                >
                  +62 852-2720-2129
                </a>
              </li>
              <li className="flex gap-4 items-center text-brand-bg/60">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=griyaselaraskerja@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-brand-accent transition-colors"
                >
                  griyaselaraskerja@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Jam Operasional</h4>
            <ul className="space-y-4 text-brand-bg/60 text-sm">
              <li className="flex justify-between border-b border-brand-bg/10 pb-2">
                <span>Senin - Sabtu:</span>
                <span className="text-brand-bg">08.00 - 17.00 WIB</span>
              </li>
              <li className="flex justify-between border-b border-brand-bg/10 pb-2">
                <span>Minggu:</span>
                <span className="text-brand-bg font-bold italic">Tutup</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-bg/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-bg/40 font-medium tracking-widest uppercase">
            © 2024 Griya Selaras by Syuhada. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-brand-bg/40">
            <a href="#" className="hover:text-brand-accent transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Ketentuan Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
