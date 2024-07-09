import MainPage from './pages/MainPage'
import PortfolioPage from './pages/PortfolioPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/portfolio" element={<PortfolioPage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
