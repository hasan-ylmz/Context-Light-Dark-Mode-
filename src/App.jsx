import TravelCard from "./Components/TravelCard"
import ThemeButton from "./Components/ThemeButton"
import { ThemeProvider } from "./contexts/theme"
import "./index.css"
import { useState ,useEffect} from "react"


function App() {
  const [themeMode, setThemeMode ] = useState("light") 
  const darkTheme=() => {
    setThemeMode("dark")
  }

  const lightTheme=() => {
    setThemeMode("light")
  }
  
  const onChnageBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    darkModeStatus ? lightTheme() : darkTheme();
  }
  
  useEffect(()=> {
    document.querySelector("html").classList.remove("dark","light")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{darkTheme, lightTheme,themeMode}}>
      <ThemeButton/>
      <TravelCard/>
    </ThemeProvider>
  )
}

export default App
