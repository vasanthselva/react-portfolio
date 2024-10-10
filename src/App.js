import './App.css';
import Header from './components/Header';
import CarouselComponent from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Remote from './components/remote';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselComponent/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Remote/>
      <Footer/>
    </div>
  );
}
export default App;
