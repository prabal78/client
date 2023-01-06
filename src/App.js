
import './App.css';
// import Footer from './portfolio-container/home/Footer/footer';
import Home from './portfolio-container/home/home';
// import Porfile from './portfolio-container/home/Porfile';
import Contact from './portfolio-container/Contactme/contact-form';
import About from './portfolio-container/Aboutme/About';
//  
import Skills from './portfolio-container/home/skills/skills';


function App() {
  return (
    <>
      {/* <Porfile/>
      <Footer/> */}
      <Home/>
      <Contact/>
      <Skills/>
      {/* <Project/> */}
      <About/>
      
    </>
  );
}

export default App;
