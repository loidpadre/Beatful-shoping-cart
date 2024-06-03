import { Wrapper } from "./styled";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Section3(){

    useEffect(() =>{
        AOS.init()
    }, [])
    return(
        <Wrapper>
            <div className="container">
                <div className="col-1">
                   <img data-aos="fade-right" data-aos-duration="1000" src="https://i.pinimg.com/736x/e7/ab/14/e7ab14f08ad950b2553f34756dc0c192.jpg" alt="" />
                   <p data-aos="fade-down" data-aos-duration="1000">Encontre todo eletronico que você procura, <em> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus vero dolores quia odio, voluptate facilis repellendus laboriosam animi deleniti? Nemo, nesciunt. Fuga doloremque ipsum consequuntur architecto labore facere accusantium.</em>

                    <button>Encontre os melhores</button>
                   </p>
                </div>
                <div className="col-2">
                    <h1 data-aos="fade-up" data-aos-duration="1000">Liberdade Sem Fios, Conexão sem Limites</h1>
                    <p data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, unde ullam cum porro nulla eum quam officia delectus, fugiat amet adipisci similique ratione! Consequatur, nemo. Quam, eius et. Consequatur, omnis.</p>
                    <button data-aos="fade-up" data-aos-duration="1000">Ver Produto</button>
                </div>
            </div>
        </Wrapper>
    )
}