import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './assets/home/home.jsx';
import Hubungi from './assets/hubungi/hubungi.jsx';
import Navbar from './assets/navbar/Navbar.jsx';
import Produk from './assets/produk/produk.jsx';
import Tentang from './assets/tentang/tentang.jsx';
import Footer from './assets/footer/footer.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <main>
      <Home />
      <Produk/>
      <Tentang/>
      <Hubungi/>
      </main>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
