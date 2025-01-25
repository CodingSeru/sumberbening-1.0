import { motion } from 'framer-motion';

const Tentang = () => {
  return (
    <section id="tentang" className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-lg text-gray-600 leading-relaxed p-8 text-start mb-4">SUMBER BENING adalah sebuah usaha yang bergerak di bidang penyediaan air minum isi ulang berkualitas tinggi. Dengan komitmen untuk menyediakan air yang bersih, sehat, dan terjangkau, SUMBER BENING menjadi solusi bagi masyarakat yang peduli dengan kesehatan dan kebutuhan air minum harian. Usaha ini dilengkapi dengan teknologi pengolahan air canggih, termasuk sistem filtrasi dan ozonisasi, yang memastikan setiap tetes air yang disajikan memenuhi standar kualitas tertinggi.</p>
        </motion.div>

        {/* Sejarah Section */}
        <motion.div 
          className="mb-16" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Sejarah Kami</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            SUMBER BENING berawal dari kesadaran akan kebutuhan dasar setiap individu akan air minum yang bersih dan sehat. Di tengah kenyataan bahwa tidak semua orang memiliki akses mudah dan terjangkau terhadap air yang aman untuk dikonsumsi, muncul keinginan untuk menyediakan solusi yang dapat menjawab kebutuhan ini. SUMBER BENING hadir dengan misi menyediakan air minum berkualitas tinggi, yang diolah menggunakan teknologi canggih untuk memastikan setiap tetesnya murni dan menyehatkan.
            </p>
          </div>
        </motion.div>

        {/* Visi Misi Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Visi</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
            Menjadi penyedia air minum berkualitas tinggi yang terpercaya nomor 1 Mojokerto.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Misi</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="text-lg">Menyediakan air minum dengan standar kualitas terbaik melalui proses penyaringan dan pengolahan yang canggih, serta memastikan kebersihan dan keamanan di setiap tahapan produksi.</li>
              <li className="text-lg">Menawarkan harga yang kompetitif dan transparan, sehingga semua lapisan masyarakat dapat menikmati air minum berkualitas tanpa harus mengeluarkan biaya yang tinggi.</li>
              <li className="text-lg">Memberikan layanan pelanggan yang ramah, cepat, dan responsif, termasuk pengiriman tepat waktu dan kemudahan dalam pemesanan</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Tentang
