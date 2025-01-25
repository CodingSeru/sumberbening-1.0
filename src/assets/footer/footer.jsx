import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <motion.h2 
                    className="text-xl font-bold" 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    Sumber Bening
                </motion.h2>
                <div className="flex justify-center space-x-4 mt-2">
                    <motion.a 
                        href="#" 
                        className="hover:text-gray-400" 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                    >
                        Home
                    </motion.a>
                    <motion.a 
                        href="#produk" 
                        className="hover:text-gray-400" 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                    >
                        Produk
                    </motion.a>
                    <motion.a 
                        href="#tentang" 
                        className="hover:text-gray-400" 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                    >
                        Tentang
                    </motion.a>
                    <motion.a 
                        href="#hubungi" 
                        className="hover:text-gray-400" 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                    >
                        Hubungi
                    </motion.a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
