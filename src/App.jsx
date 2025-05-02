import { useState } from 'react'
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'
import Home from './section/Home.jsx'
import Preloader from './components/Preloader.jsx'
 import Contact from './section/Contact.jsx'
import About from './section/About.jsx'
import Projects from './section/Projects.jsx'

function App() {

  const [preloadDone, setPreloadDone] = useState(false);

  return (
    <>
      {!preloadDone ? (
        <Preloader onComplete={() => setPreloadDone(true)} />
      ) : (
        <div className="min-h-screen relative bg-gradient-to-r from-[#000000] to-[#290a79] ">
          <Navbar />
          <SocialLinks />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App
