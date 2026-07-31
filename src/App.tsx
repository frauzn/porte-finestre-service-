import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import CollectionPage from './pages/CollectionPage';
import LoadingScreen from './components/LoadingScreen';
import CookieBanner from './components/CookieBanner';
import { initSmoothScroll } from './utils/smoothScroll';

export default function App() {
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  const routerBasename =
    window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      ? '/'
      : '/porte-finestre-service-/';

  return (
    <Router basename={routerBasename}>
      <LoadingScreen />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collezioni/:collection" element={<CollectionPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
}
