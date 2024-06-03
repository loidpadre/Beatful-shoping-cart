import { Wrapper } from "./styled";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

export default function Section4(){

    useEffect(() =>{
        AOS.init()
    },[])
    return(
        <Wrapper>
            <div className="container">
                <h1>Produtos mais comprados</h1>
                <div className="cards">
                    <div className="card" data-aos="fade-up" data-aos-duration="2000">
                        <div className="topo">
                            <p>Google</p>
                            <span>7 dias atras</span>
                        </div>
                        <img src="https://i.pinimg.com/564x/b3/02/10/b30210edf774a8a5a56713a0c3df09b5.jpg" alt="" />
                        <div className="text">
                            <h1>Laptop Dell</h1>
                            <div className="btns">
                                <p>Full time</p>
                                <p>Flexivel</p>
                            </div>
                        </div>
                        <div className="price">
                            <span>R$ 340</span>
                            <button>Comprar agora</button>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-duration="2000">
                        <div className="topo">
                            <p>Amazom</p>
                            <span>3 dias atras</span>
                        </div>
                        <img src="https://i.pinimg.com/564x/87/5c/90/875c90eeb04ee4f83450209ababec2ed.jpg" alt="" />
                        <div className="text">
                            <h1>Market teclado</h1>
                            <div className="btns">
                                <p>Full time</p>
                                <p>Flexivel</p>
                            </div>
                        </div>
                        <div className="price">
                            <span>R$ 790</span>
                            <button>Comprar agora</button>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-duration="2000">
                        <div className="topo">
                            <p>Dell</p>
                            <span>8 dias atras</span>
                        </div>
                        <img src="https://i.pinimg.com/564x/1a/ba/92/1aba925f6b24694f264061f060b02fed.jpg" alt="" />
                        <div className="text">
                            <h1>Monitor Full Br</h1>
                            <div className="btns">
                                <p>Full time</p>
                                <p>Flexivel</p>
                            </div>
                        </div>
                        <div className="price">
                            <span>R$ 210</span>
                            <button>Comprar agora</button>
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}