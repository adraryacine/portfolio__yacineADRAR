import { useLenis } from './hooks/useLenis'
import { useLang } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/fx/Preloader'
import CustomCursor from './components/fx/CustomCursor'
import ScrollProgress from './components/fx/ScrollProgress'
import AuroraBackground from './components/fx/AuroraBackground'
import Marquee from './components/fx/Marquee'

export default function App() {
  useLenis()
  const { lang } = useLang()

  const marqueeItems =
    lang === 'fr'
      ? ['Sites Web', 'Applications', 'Design', 'Développement', 'Sur mesure', 'E-commerce']
      : ['Websites', 'Applications', 'Design', 'Development', 'Custom-made', 'E-commerce']

  return (
    <div className="relative min-h-screen bg-ink">
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <AuroraBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <div className="border-y border-white/5 bg-white/[0.015]">
            <Marquee items={marqueeItems} />
          </div>
          <Services />
          <Projects />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
