import { Wrapper } from "./styled";
import AOS from "aos"
import "aos/dist/aos.css"
export default function Section({product, setProduct}){
    
    return(
        <Wrapper>
            <div className="container">
                {
                    product.map((prod) =>(
                       <div className="card" data-aos="fade-up" data-aos-duration="1000">
                         <img src={prod.iamge} alt="" />
                          <div className="text">
                            <h1>{prod.name}</h1>
                            <div>
                                <p>{prod.price}</p>
                                <span>{prod.category}</span>
                            </div>
        
                          </div>
                          <button>Adicionar ao carrinho</button>
                       </div>
                    ))
                }
       
            </div>
        </Wrapper>
    )
}