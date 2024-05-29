import { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import {AiOutlineShoppingCart, AiOutlineClose} from "react-icons/ai"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () =>{
        setIsOpen(!isOpen)
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
                        <span>Ainda não tem produtos</span>
                    </div>
                    <div className="Produtos">
                        <div className="card">
                            <img src="https://i.pinimg.com/564x/5e/02/82/5e0282567150e74fa85a25a0f721fec3.jpg" alt="" />
                            <div className="text">
                                <h1>Anel</h1>
                                <div>
                                    <p>R$ 9.450</p>
                                    <span>Eletronicos</span>
                                </div>
                                <div className="btns">
                                <button>-</button>
                                    <p>1</p>
                                <button>+</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button>Fazer compra</button>
                    </div>
                </div>
                </div>
            </div>
        </Wrapper>
    )
}