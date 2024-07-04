import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm';
import Nav from './component/Nav';
import Footer from './Footer/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home  from './component/pages/Home';
import AboutUs from './component/pages/About_us';
import Service from './component/pages/Service';
import Product from './component/pages/Product';
import ContactUs from './component/pages/Contact_us';

function App() {
  return (
    <div>
   <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/contactus' element={<ContactUs/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
