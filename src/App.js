import Checkout from './components/Checkout'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
