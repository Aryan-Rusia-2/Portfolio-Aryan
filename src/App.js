import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Awards from "./components/Awards";

function App() {
  return (
    <div className="flex flex-col space-y-3 bg-black">
      
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience /> 
      <Contact />
      <SocialLinks />
      <Awards/>
    </div>
  );
}

export default App;
