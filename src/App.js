// import Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import styles
import './App.css';

// import components
// pages
import { Home } from './pages/Home/Home';
import { Discover } from './pages/Discover/Discover';
import { Error } from './pages/Error/Error'

// Footer
// footer
import { Footer } from "./components/Footer/Footer";
import { NavBar } from './components/NavBar/NavBar';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Discover' element={<Discover />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
