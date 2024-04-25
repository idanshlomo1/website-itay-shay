

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also import the CSS directly in your JS if your bundler supports it

function App() {

  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 800, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
      // other options can be found in AOS documentation
    });
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
