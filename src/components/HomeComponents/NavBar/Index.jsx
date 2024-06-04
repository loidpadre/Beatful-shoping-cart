import { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import {AiOutlineShoppingCart, AiOutlineClose} from "react-icons/ai"
import { Link } from "react-router-dom";
import IMG from "../../../assets/compras.gif"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NavBar({productInCartList, setProductInCartList }){
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () =>{
        setIsOpen(!isOpen)
    }
    const handleRemove = (id) =>{
        const newListProd = productInCartList.filter((produt) => produt.id !== id)
        setProductInCartList(newListProd)
        toast.success("Produto removido")
    }
    // const totalPrice = () =>{
    //     productInCartList.map((prodPrice) =>{
    //         setTotalPrice(prev => [...prev, prodPrice.price] )
            
    //     })
    // }

    // useEffect(()=>{
    //     totalPrice()
    // },[])
    console.log(productInCartList)
  
    useEffect(() =>{
        AOS.init()
    },[])


    const handleIncrementar = (id) =>{
        setProductInCartList(prev => prev.map(product =>
            product.id === id ? {
                ...product, 
                quanty: product.quanty + 1, 
                total: product.total + product.price
            }: product
        )) 
    }
    const handleDecrementar = (id) =>{
        setProductInCartList(prev => prev.map(product => 
           {
            if (product.id === id) {
                const newQuanty = Math.max(product.quanty - 1, 1); // Garante que a quantidade nunca seja menor que zero
                const newTotal = Math.max(product.total - product.price, product.price); // Garante que o total nunca seja menor que zero
                return {
                    ...product,
                    quanty: newQuanty,
                    total: newTotal
                };
            } else {
                return product;
            }
           }
        ))
    }
    return(
        <Wrapper>
            <div className="logo">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-order-management-market-store-cart-trolley-shopping-4-5450.png?f=webp" alt="logo-image" />
            </div>
            <ul>
                <li>Home</li>
                <li>Produtos</li>
                <li>Seja um parceiro</li>
                <li>Portal do vendedor</li>
                <li>Contact</li>
                <li>Ajuda</li>
                <Link to="/"><li>Login</li></Link>
                <Link to="/"><li>Log out</li></Link>
            </ul>
            <div className="carrinho">
                <div className="btn-cart" onClick={handleClick}>
                <img src={IMG} alt="" />
                    <div className="qtd">{productInCartList.length}</div>
                </div>

                <div className={`container ${isOpen? "": "hidden"}`}>
                    
                <div className={`Cart-products ${isOpen? "": "hidden"}`} >
                <div className="close" onClick={handleClick}>
                    <AiOutlineClose size={34}/>
                </div>
                    <div className="Banner" >
                        <h1>Carrinho de compras</h1>
                        <span>{productInCartList.length? "OS SEUS PRODUTOS": "SEM PRODUTO AINDA."}</span>
                    </div>
                    <div className="totals">
                            <span><strong>Produtos: </strong>{productInCartList.length}</span>
                            <span><strong>Total: </strong>R$ {
                                productInCartList.reduce((a,b) => a + b.total, 0).toFixed(2)
                            }</span>
                    </div>
                    <div className="Produtos">
                        
                        {
                            productInCartList.map((prod) =>(
                                <div className="card">
                            <img src={prod.iamge} alt="" />
                            <div className="text">
                                <h1>{prod.name}</h1>
                                <div>
                                    <p>R$ {prod.price}</p>
                                    <span>{prod.category}</span>
                                </div>
                                <div className="btns">
                                <button onClick={() => handleDecrementar(prod.id)}>-</button>
                                    <p>{prod.quanty}</p>
                                <button onClick={() => handleIncrementar(prod.id)}>+</button>
                                <button className="remover" onClick={() => handleRemove(prod.id)}>Remover</button>
                            </div>
                            </div>
                        </div>
                            ))
                        }
                    </div>
                    <div className="comprar">
                        <button>Pagar agora</button>
                    </div>
                </div>
                </div>
            </div>
        </Wrapper>
    )
}