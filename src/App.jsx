// Author - Abhishek Chauhan
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Resources from './pages/Resources.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/skills",
    element: <Skills />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/aboutme",
    element: <About />
  },
  {
    path: "/resources",
    element: <Resources />
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  )
}

export default App
