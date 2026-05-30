import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import MissionVision from './components/sections/MissionVision'
import CoreValues from './components/sections/CoreValues'
import Services from './components/sections/Services'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Stats from './components/sections/Stats'
import Clients from './components/sections/Clients'
import Projects from './components/sections/Projects'
import Team from './components/sections/Team'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <CoreValues />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Clients />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
