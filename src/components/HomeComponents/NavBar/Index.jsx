import { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import {AiOutlineShoppingCart, AiOutlineClose} from "react-icons/ai"
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

    useEffect(() =>{
        AOS.init()
    },[])
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
            </ul>
            <div className="carrinho">
                <div className="btn-cart" onClick={handleClick}>
                    <AiOutlineShoppingCart size={30}/>
                </div>

                <div className={`container ${isOpen? "": "hidden"}`}>
                    
                <div className={`Cart-products ${isOpen? "": "hidden"}`} >
                <div className="close" onClick={handleClick}>
                    <AiOutlineClose size={34}/>
                </div>
                    <div className="Banner" >
                        <h1>Carrinho de compras</h1>
                        <span>Os seus produtos</span>
                    </div>
                    <div className="Produtos">
                        {
                            productInCartList.map((prod) =>(
                                <div className="card">
                            <img src={prod.iamge} alt="" />
                            <div className="text">
                                <h1>{prod.name}</h1>
                                <div>
                                    <p>{prod.price}</p>
                                    <span>{prod.category}</span>
                                </div>
                                <div className="btns">
                                <button>-</button>
                                    <p>1</p>
                                <button>+</button>
                                <button className="remover" onClick={() => handleRemove(prod.id)}>Remover</button>
                            </div>
                            </div>
                        </div>
                            ))
                        }
                    </div>
                    <div className="comprar">
                        <button>Fazer compra</button>
                    </div>
                </div>
                </div>
            </div>
        </Wrapper>
    )
}