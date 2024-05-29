import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useState } from 'react';
import { data } from './data';
function App() {

  const [product, setProduct] = useState(data)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home product={product} setProduct={setProduct}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
