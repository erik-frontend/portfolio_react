import i18n from "./utils/i18n"
import "./styles/main.scss"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import { useEffect, useState } from "react"
import Skills from "./components/skills/Skills"
import Portfolio from "./components/portfolio/Portfolio"

function App() {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
      
      const handleScroll = () => {
          if (window.scrollY > 1) setSticky(true)
          else setSticky(false)
      }


      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Header sticky={sticky}/>
      <Home sticky={sticky}/>
      <About/>
      <Skills/>
      <Portfolio/>
    </>
  )
}

export default App
