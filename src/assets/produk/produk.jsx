import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Galon Aqua',
    image: '/src/assets/img/aqua.webp',
    description: 'Air mineral berkualitas tinggi dalam kemasan galon'
  },
  {
    id: 2, 
    name: 'Galon Cleo',
    image: '/src/assets/img/cleo.webp',
    description: 'Air mineral Cleo yang segar dan menyehatkan'
  },
  {
    id: 3,
    name: 'Galon Le Minerale',
    image: '/src/assets/img/le mineral.webp',
    description: 'Le Mineral, air mineral dengan kandungan mineral yang seimbang'
  },
]

const Produk = () => {
  return (
    <section id="produk" className="container mx-auto px-4 py-16">
      <motion.h1
      initial={{ opacity: 0, scale: 0.8 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      viewport={{ once: false }}
      transition={{ duration: 0.5 }} 
      className="text-4xl font-bold text-center mb-12">Produk Kami</motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {products.map((product, index) => (
          <motion.div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className="relative h-64">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <motion.h2 
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
              >
                {product.name}
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
              >
                {product.description}
              </motion.p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">{product.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <a href="https://wa.me/6285100215097">Beli Sekarang</a>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Produk
