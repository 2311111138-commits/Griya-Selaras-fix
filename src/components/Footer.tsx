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
              Premium tailoring and custom attire service in Banyumas. Bringing elegance to your every move through high-end craftsmanship since 2018.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-brand-bg/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Kontak</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start text-brand-bg/60">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-sm">Randegan RT 03/10, Ciarus Kidul, Kelurahan Randegan, Kecamatan Wangon, Kabupaten Banyumas, Jawa Tengah 53176</span>
              </li>
              <li className="flex gap-4 items-center text-brand-bg/60">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-sm">+62 852-2720-2129</span>
              </li>
              <li className="flex gap-4 items-center text-brand-bg/60">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-sm">hello@griyaselaras.com</span>
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
            © 2024 Griya Selaras by Syuhada. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-brand-bg/40">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
