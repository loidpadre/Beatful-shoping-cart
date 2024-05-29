import { Wrapper } from "./styled";
import IMG from "../../../assets/ban.png"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Header(){
    useEffect(()=>{
        AOS.init()
    },[])
    return(
        <Wrapper>
       <div className="text">
            <span>Basic Wireless</span>
            <h1 data-aos="fade-right" data-aos-duration="1000">Header fun shop</h1>
            <p className="sound" data-aos="fade-left" data-aos-duration="1000">Wireless Sounds</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui totam nobis et ducimus alias adipisci distinctio nihil reiciendis amet a. Perspiciatis iste porro, maiores ea quod iure deserunt corporis inventore.</p>
            <button>ver produtos</button>
        </div>
        <div className="img" data-aos="fade-up" data-aos-duration="1000">
            <img src={IMG} alt="" />
        </div>
        
        </Wrapper>
    )
}