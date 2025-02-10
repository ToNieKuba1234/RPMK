import { ThemeContextProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import QuotesSection from "./components/QuotesSection";
import CardSection from "./components/CardSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

function App() {
  const [ mobileMenu, setMobileMenu ] = useState(false);

  const scrollToPosition = (pos) => {
    window.scrollTo({top: pos, behavior: 'smooth'});
  }

  return (
    <ThemeContextProvider>
      <div className='bg-darkblue-gradient w-screen h-screen overflow-x-hidden'>
        <Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} scrollFunc={scrollToPosition} />
        <MobileMenu mobileMenu={mobileMenu} scrollFunc={scrollToPosition} />
        <HeroSection />
        <QuotesSection />
        <AboutMe />
        <CardSection />
        <Contact />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}

export default App;