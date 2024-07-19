import './App.css'
import Expe from './components/Expe/Expe'
import HomePage from './components/Homepage/HomePage'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import TechStack from './components/TechStack/TechStack'
// protfoli 


// 1.Navbar
// 2.Homepage
// 3.Tech Stack
// 4.Experience
// 5.projects




function App() {

  return (
    <div className='app'>
      <Navbar/>
      <HomePage/>
      <TechStack/>
      <Expe/>
      <Projects/>
    </div>
  )
}

export default App
