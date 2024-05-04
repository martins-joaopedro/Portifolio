import { MainLayout } from "./components/MainLayout"
import { About } from "./pages/AboutPages"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"

function App() {
  return (
    <MainLayout>
      <Home />
      <About />
      <Contact />
    </MainLayout>  
  )
}

export default App
