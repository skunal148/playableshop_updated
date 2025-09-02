import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Products from "./components/Products";
import Work from "./components/Work";
import HowItWorks from "./components/HowITWorks"; 
import Brands from "./components/Brands";
import FooterCTA from "./components/FooterCTA";
//import CardStack from "./components/CardStack";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <Brands />
      <Products />
      <Work />
      <HowItWorks />
      <FooterCTA />
    </>
  );
}

export default App;
