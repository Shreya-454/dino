import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Faq from "./components/Faq";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import Utility from "./components/Utility";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";

function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <Preloader/>
        </div>
      ) : (
        <div className="overflow-x-clip">
          <Header />
          <About />
          <Tokenomics />
          <Utility />
          <Roadmap />
          <Faq />
          <Footer />
          <BackToTop />
        </div>
      )}
    </div>
  );
}

export default App;
