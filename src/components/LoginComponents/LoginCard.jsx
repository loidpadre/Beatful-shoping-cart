import { useEffect } from "react";
import { Wrapper } from "./styled";
import AOS from "aos"
import "aos/dist/aos.css"
import {AiFillFacebook,AiFillInstagram,AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai"
import { Link } from "react-router-dom";

export default function LoginCard(){

    useEffect(()=>{
        AOS.init()
    },[])
    return(
        <Wrapper>
            <div className="img">
                <img src="https://i.pinimg.com/564x/fc/8d/0a/fc8d0a1c4964e647da05ae5b177f5ebf.jpg" alt="" srcset="" />
            </div>
            <div className="login">
            <div className="card" data-aos="fade-left" data-aos-duration="2000">
                <h1>Shop Login</h1>
                <span>Faça login para acessar a sua conta</span>
                <form>
                    <input type="email" placeholder="Insira o seu e-mail"/>
                    <input type="password" placeholder="insira a sua senha" />
                    <Link to="Home"><button>Entar</button></Link>
                </form>
                <div className="social">
                    <AiFillFacebook className="icon" size={25} color="deeppink"/>
                    <AiFillInstagram className="icon" size={25} color="deeppink"/>
                    <AiFillTwitterCircle className="icon" size={25} color="deeppink"/>
                    <AiFillLinkedin className="icon" size={25} color="deeppink"/>
                </div>
                <span className="conta">Ainda não tenho uma conta</span>
            </div>
            </div>
        </Wrapper>
    )
}