import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ibu Rahayu',
    role: 'Pelanggan Setia',
    text: 'Hasil jahitannya sangat rapi dan pas di badan. Saya sudah beberapa kali jahit kebaya di sini, selalu puas dengan detailnya.'
  },
  {
    name: 'Bapak Ahmad',
    role: 'Pengusaha Muda',
    text: 'Layanan permaknya luar biasa. Jas lama saya jadi seperti baru kembali setelah di-resize di Griya Selaras. Sangat direkomendasikan!'
  },
  {
    name: 'Siska',
    role: 'Fashion Designer',
    text: 'Pengerjaannya tepat waktu dan sesuai dengan desain yang saya minta. Sangat membantu untuk kebutuhan produksi brand saya.'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">Ulasan Pelanggan</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-brand-primary">Apa yang Mereka Kata Tentang Kami</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/50 backdrop-blur-sm p-12 rounded-[50px] border border-brand-accent/10 relative"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-brand-accent/10" />
              <div className="relative z-10">
                <p className="text-brand-secondary italic mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-serif text-brand-primary text-xl mb-1">{testimonial.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-brand-accent font-bold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
