import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Profile from './pages/profile';
import Listings from './pages/listings';
import Footer from './components/footer';

function App() {
  return (
    <div className='bg-[#0d0d0d] ' >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listings" element={<Listings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
