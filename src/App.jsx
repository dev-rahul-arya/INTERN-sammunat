import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Features from './components/Features.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] text-white">
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
