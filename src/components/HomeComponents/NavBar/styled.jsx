import styled from "styled-components";

export const Wrapper = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content: center;

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
        cursor: pointer;
        .container{
            width: 100%;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
            background-color: rgba(63, 58, 58, 0.877);
            .Cart-products{
            background-color: white;
           
            width: 100%;
            
            text-align: center;
            padding: 20px;
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
                .card{
                    width: 200px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    .text{
                        display: flex;
                        flex-direction: column;
                        gap: 5px;
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