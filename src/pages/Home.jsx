import Header from "../components/HomeComponents/Header/Index";
import NavBar from "../components/HomeComponents/NavBar/Index";
import Section from "../components/HomeComponents/Section/Index";

export default function Home({product, setProduct, productInCartList, setProductInCartList, handleAddCart}){
    return(
        <>
            <NavBar productInCartList={productInCartList} setProductInCartList={setProductInCartList}/>
            <Header/>
            <Section product={product} setProduct={setProduct} handleAddCart={handleAddCart}  />
        </>
    )
}