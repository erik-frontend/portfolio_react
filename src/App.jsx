import i18n from "./utils/i18n"
import "./styles/main.scss"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
    </>
  )
}

export default App
