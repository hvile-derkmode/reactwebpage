
import './App.css';
import Blog from './components/Blog';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={    <Home />} />
            <Route path='/blog' element={    <Blog />} />
          </Routes>
      </div>
    </Router>
  )
}
export default App;
