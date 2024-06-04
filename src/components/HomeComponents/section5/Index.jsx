import { Wrapper } from "./style";
import IMG from "../../../assets/relogio.png"
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
export default function Section5(){
    useEffect(() =>{
        AOS.init()
    },[])
    return(
        <Wrapper>
            <div className="container">
                <div className="col-1" data-aos="fade-right" data-aos-duration="2000">
                    <h1>Produtos de Alta qualidade</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint numquam doloremque nostrum voluptas vitae sed inventore porro perspiciatis dignissimos tenetur maiores, alias eveniet corporis aliquam. Quia minus quis obcaecati.</p>
                </div>
                <div className="col-2" data-aos="fade-left" data-aos-duration="2000">
                    <img src={IMG} alt="" />
                </div>
            </div>
        </Wrapper>
    )
}