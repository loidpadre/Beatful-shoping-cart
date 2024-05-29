import Header from "../components/HomeComponents/Header/Index";
import NavBar from "../components/HomeComponents/NavBar/Index";
import Section from "../components/HomeComponents/Section/Index";

export default function Home({product, setProduct}){
    return(
        <>
            <NavBar/>
            <Header/>
            <Section product={product} setProduct={setProduct}/>
        </>
    )
}