import Header from './components/Header';
import Hero from './components/Hero';
import CTASection from './components/CTASection';
import Features from './components/Features';
import About from './components/Aboutus';
import Contact from './components/ContactSection';
import ChatWidget from './components/ChatWidget';
import ContactSection from "./components/Contact";


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CTASection />
      <Features />
      <About />
      <Contact />
      <ChatWidget />
      <ContactSection />
    </div>
  );
}

export default App;
