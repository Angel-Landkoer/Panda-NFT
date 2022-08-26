// import Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import styles
import './App.scss';

// import components

// pages
import { Home } from './pages/Home/Home';
import { Discover } from './pages/Discover/Discover';
import { Details } from './pages/Details/Details';
import { Error } from './pages/Error/Error';

// Context
import { CartProvider } from './Context/CartContext';

// Footer
// footer
import { Footer } from "./components/Footer/Footer";
import { NavBar } from './components/NavBar/NavBar';
import { CartAdd } from './pages/CartAdd/CartAdd';


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Discover' element={<Discover />} />
            <Route path='/CardsNFT/:idCategory' element={<Details />} />
            <Route path='/CardNFT/:idCard' element={<Details />} />
            <Route path='/CartAdd' element={<CartAdd />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
