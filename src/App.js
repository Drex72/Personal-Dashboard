import './App.css'
import Sidebar from './Components/sidebar/Sidebar'
import Topbar from './Components/topbar/Topbar'
import Home from './Pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Topbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
