import { ThemeContextProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import QuotesSection from "./components/QuotesSection";
import CardSection from "./components/CardSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutSection";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <ThemeContextProvider>
      <div className='bg-darkblue-gradient w-screen h-screen'>
        <Navbar />
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