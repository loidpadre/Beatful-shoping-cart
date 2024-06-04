import styled from "styled-components";

export const Wrapper = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: white;
    margin: auto;
    gap: 50px;
    .logo{
        
        img{
            animation: cartAnime 1s;
            
            width: 50px;
        }
    }
    @keyframes cartAnime {
        from{
            transform: translateX(-200px);
        }
        to{
            transform: translateX(0px);
        }

    }
    ul{
        display: flex;
        gap: 10px;
        li{
            font-size:13px;
            list-style: none;
            cursor: pointer;
            
            &::after{
                content: " ";
                width:0%;
                height: 1px;
                background-color: deeppink;
                display: block;
                transition: 0.5s;
            }
            &:hover::after{
                width: 100%;
            }
            
        }
    }
    .carrinho{
        .btn-cart{
            position:relative;
            .qtd{
            background-color: red;
            text-align: center;
            color: white;
            height: 20px;
            width:20px;
            border-radius: 50%;
            font-size: 13px;
            display: grid;
            place-items: center;
            position: absolute;
            top: -7px;
            left: 20px;
            
        }
        img{
                width: 30px;
            }
        }
        
        cursor: pointer;
        .container{
            width: 100%;
            height: 100vh;
            position: fixed;
            overflow-y: auto;
            top: 0;
            left: 0;
            z-index: 1;
            background-color: rgba(63, 58, 58, 0.877);
            .comprar{
                width: 134px;
                margin: 0 auto;
                position: relative;
                z-index: 1000px;
                border-radius: 8px;
                transition: 0.5s ease;
                border: 1px solid transparent;
                &:hover{
                    transform: scale(1.1);
                    background-color: white;
                    
                }
                
            }
            .Cart-products{
            background-color: white;
           position: absolute;
            width: 100%;
            top: 0;
            transition: 0.5s es;
            text-align: center;
            padding: 20px;
            .totals{
                text-align: left;
                margin-left: 400px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                justify-content: center;
            }
            .close{
                background-color: deeppink;
                color: white;
                width: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                height: 50px;
                margin: 10px auto;
                border-radius: 50%;
                transition: 0.5s;
                &:hover{
                    transform: scale(1.2);
                }
            }
            button{
                background-color: deeppink;
                color: white;
                padding: 10px 14px;
                font-size: 17px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
            }
           .Banner{
                h1{
                    color: deeppink;
                }
           }
            .Produtos{
                display: flex;
                gap: 60px;
                flex-wrap: wrap;
                width: 1200px;
                margin:80px auto;
                .card{
                    width: 250px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    
                    .text{
                        display: flex;
                        flex-direction: column;
                        gap: 5px;

                        h1{
                            font-weight: 400;
                        }
                        .remover{
                            background-color: #940000;
                            transition: 0.5s ease;
                            &:hover{
                                cursor: pointer;
                                transform: scale(0.9);
                                opacity: 0.6;
                            }
                        }
                    }
                    .btns{
                        display: flex;
                        justify-content: center;
                        gap: 10px;
                        align-items: center;
                        button{
                            
                            padding: 8px;
                            font-size: 18px;
                            background-color: deeppink;
                            color: white;
                            border: none;
                            border-radius: 5px;
                        }
                    }
                    img{
                        width:150px;
                        height: 150px;
                        object-fit: cover;
                    }
                }
            }
        }
        }
        
    }
    .hidden{
        display: none;
    }
`