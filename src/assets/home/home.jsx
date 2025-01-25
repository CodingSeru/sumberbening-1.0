import pegunungan from '../img/pegunungan.jpg'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="h-[100dvh] overflow-hidden z-20 inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${pegunungan})` }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-55">
          <article className="text-center text-white p-5">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: false }}
              transition={{ duration: 0.5 }} 
              className="text-5xl font-semibold mb-2">
              Depot Air Minum & Isi Ulang<br/>SUMBER BENING
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }} 
              className="text-base mb-8">
              Menyediakan berbagai macam air minum dalam kemasan dan galon, serta pelayanan pengiriman.
            </motion.p>
            <motion.a
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.6 }} 
            href="https://wa.me/yourwhatsappnumber" className="bg-sky-500 text-white py-3 px-5 rounded hover:bg-sky-700 transition">
              Pesan Sekarang
            </motion.a>
          </article>
        </div>
      </section>
  );
};

export default Home;
