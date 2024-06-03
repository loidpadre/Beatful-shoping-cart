import Header from "../components/HomeComponents/Header/Index";
import NavBar from "../components/HomeComponents/NavBar/Index";
import Section from "../components/HomeComponents/Section/Index";
import Section2 from "../components/HomeComponents/section2";

export default function Home({product, setProduct, productInCartList, setProductInCartList, handleAddCart}){
    return(
        <>
            <NavBar productInCartList={productInCartList} setProductInCartList={setProductInCartList}/>
            <Header/>
            <Section product={product} setProduct={setProduct} handleAddCart={handleAddCart}  />
            <Section2/>
        </>
    )
}