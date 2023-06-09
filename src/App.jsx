import React , {useState , useEffect} from "react"
import './App.css'
import HeroSection from './components/Hero section/Hero section'
import ProjectsSection from "./components/Projects Section/Projects.jsx"
import About from "./components/About"
import Contact from "./components/Contact"



function App() {

  const [loader , setLoader] = useState(true)
  useEffect(()=>{
    const loaderPageEl = document.getElementById("loaderPage")
    if (loaderPageEl){
      setTimeout(()=>{
        loaderPageEl.style.display = "none";
        setLoader(false)
      },1500)
    }
  })
  
  
  
  

  return (
    !loader &&
    <div className=" overflow-hidden">
      <HeroSection />
      <ProjectsSection />
      <About />
      <Contact />
    </div>
     
  )
}

export default App
