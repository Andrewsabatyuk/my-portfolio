import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas, Hero } from './components'
const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-patern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  )
}

export default App


// https://www.youtube.com/watch?v=0fYi8SGA20k&ab_channel=JavaScriptMastery 18-00