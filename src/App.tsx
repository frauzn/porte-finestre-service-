import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import LoadingScreen from './components/LoadingScreen';
import CookieBanner from './components/CookieBanner';
import { initSmoothScroll } from './utils/smoothScroll';

export default function App() {
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  return (
    <Router>
      <LoadingScreen />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
}
