import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useState } from 'react';
import { data } from './data';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  const [product, setProduct] = useState(data)
  const [productInCartList, setProductInCartList] = useState([])

  const handleAddCart = (id) =>{
        const productsCart = data.find((product) => product.id === id )
        const isProductInCart = productInCartList.find((product) => product.id === id)

        if(!isProductInCart){
          setProductInCartList(prev => [...prev, {...productsCart, quanty: 1, total: productsCart.price}])
          toast.success('Produto adicionado ao carrinho com sucesso!');
        }else{
          setProductInCartList(prev => 
            prev.map(product => 
              product.id === id ? { ...product, quanty: product.quanty + 1, total: product.price + product.price } : product
            )
          )
        }
  }
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home productInCartList={productInCartList} setProductInCartList={setProductInCartList} handleAddCart={handleAddCart} product={product} setProduct={setProduct}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
