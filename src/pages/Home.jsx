import Header from "../components/HomeComponents/Header/Index";
import NavBar from "../components/HomeComponents/NavBar/Index";
import Section from "../components/HomeComponents/Section/Index";
import Section2 from "../components/HomeComponents/section2";
import Section3 from "../components/HomeComponents/section3/Index";
import Section4 from "../components/HomeComponents/section4/Index";

export default function Home({product, setProduct, productInCartList, setProductInCartList, handleAddCart}){
    return(
        <>
            <NavBar productInCartList={productInCartList} setProductInCartList={setProductInCartList}/>
            <Header/>
            <Section product={product} setProduct={setProduct} handleAddCart={handleAddCart}  />
            <Section2/>
            <Section3/>
            <Section4/>
        </>
    )
}