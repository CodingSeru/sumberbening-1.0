import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Hubungi = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ show: false, success: false, message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.sendForm(
      'service_uuv56jb', // Ganti dengan Service ID Anda dari EmailJS
      'template_ua84zd1', // Ganti dengan Template ID Anda
      form.current,
      'oHdijcH7AHwsyHDKE' // Ganti dengan Public Key Anda
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus({
        show: true,
        success: true,
        message: 'Pesan berhasil dikirim!'
      });
      form.current.reset();
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setStatus({
        show: true,
        success: false,
        message: `Gagal mengirim pesan: ${err.text}`
      });
    })
    .finally(() => {
      setLoading(false);
      setTimeout(() => setStatus({ show: false, success: false, message: '' }), 5000);
    });
  };

  return (
    <section id="hubungi" className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className='text-center mb-16'>
          <motion.h1
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4">Hubungi Kami</motion.h1>
          <motion.p
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-gray-600">Kami siap melayani pertanyaan dan kebutuhan Anda</motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Kirim Pesan</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nama" className="block text-gray-700 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  name="user_name"
                  id="nama"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan email"
                  required
                />
              </div>

              <div>
                <label htmlFor="pesan" className="block text-gray-700 mb-2">Pesan</label>
                <textarea
                  name="message"
                  id="pesan"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tulis pesan Anda di sini"
                  required
                ></textarea>
              </div>

              {status.show && (
                <div className={`p-4 rounded-lg ${status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400"
              >
                {loading ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </form>
          </motion.div>

          {/* Info Section */}
          <div className="space-y-8">
            {/* Alamat Card */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8" 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <h3 className="text-xl font-semibold ml-4">Alamat Kami</h3>
              </div>
              <p className="text-gray-700">Jl. Kutorejo-Bangsal Dsn. Kali Cangkring DESA. Kaligoro Kec. Kutorejo Kab. Mojokerto Jawa Timur</p>
            </motion.div>

            {/* Kontak Card */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8" 
              initial={{ opacity: 0, x: 100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <h3 className="text-xl font-semibold ml-4">Kontak</h3>
              </div>
              <p className="text-gray-700">Telepon: 085100215097</p>
              <p className="text-gray-700">Email: sumberbening187@gmail.com</p>
            </motion.div>

            {/* Jam Operasional Card */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8" 
              initial={{ opacity: 0, x: 100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 className="text-xl font-semibold ml-4">Jam Operasional</h3>
              </div>
              <p className="text-gray-700">Senin - Sabtu: 07:00 - 16:00</p>
              <p className="text-gray-700">Minggu: Tutup</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hubungi
