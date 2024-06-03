import { Wrapper } from "./styled";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";




export default function Section2(){

    useEffect(() =>{
        AOS.init()
    },[])
    return(
        <Wrapper>
            <div className="container">
                <div className="section1">
                <div className="text">
                    <h1 data-aos="fade-left" data-aos-duration="1000">50% <span>OFF</span></h1>
                    <p data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati accusantium cum incidunt soluta hic quaerat error officiis magni porro culpa? Soluta laborum quaerat nihil perferendis dolores distinctio nam perspiciatis sunt!</p>
                   
                    <button data-aos="fade-up" data-aos-duration="1000">Ver produtos</button>
                </div>
                </div>
                <div className="section2">
                <div className="text">
                    <img data-aos="fade-up" data-aos-duration="1000" src="https://i.pinimg.com/564x/82/35/8e/82358eba2ebb025dbf51e50d4f725abe.jpg" alt="" />
                    <h1 data-aos="fade-up" data-aos-duration="1000">I7s TWS fones de ouvidos</h1>
                    <h2 data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati accusantium cum incidunt soluta hic quaerat error officiis magni porro culpa? Soluta laborum quaerat nihil perferendis dolores distinctio nam perspiciatis sunt!</h2>
                </div>
                </div>
            </div>
        </Wrapper>
    )
}