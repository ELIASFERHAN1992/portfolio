import NavBar    from './components/navbar/NavBar'
import Hero      from './components/Hero/Hero'
import About     from './components/About/About'
import Services  from './components/services/Services'
import Skills    from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects  from './components/projects/Projects'
import Education from './components/education/Education'
import Contact   from './components/contact/Contact'
import Footer    from './components/footer/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import { ThemeProvider } from './context/ThemeContext'

const App = () => (
  <ThemeProvider>
    <NavBar />
    <section id="home">      <Hero />       </section>
    <section id="about">     <About />      </section>
    <section id="services">  <Services />   </section>
    <section id="skills">    <Skills />     </section>
    <section id="experience"><Experience /> </section>
    <section id="education"> <Education />  </section>
    <section id="projects">  <Projects />   </section>
    <section id="contact">   <Contact />    </section>
    <Footer />
    <ScrollToTop />
  </ThemeProvider>
)

export default App
