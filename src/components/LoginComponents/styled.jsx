import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 50px;
    .img{
        width: 50%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .login{
        display: grid;
        place-items: center;
        margin: auto;
        .card{
        margin: 90px;
        display: flex;
        flex-direction: column;
        gap: 10px;
            h1{
                text-align: center;
                text-transform: uppercase;
                font-size: 45px;

            }
            span{
                text-align: center;
            }
            .social{
                margin-top: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                .icon{
                    cursor: pointer;
                    transition: 15s cubic-bezier(0.075, 0.82, 0.165, 1);
                    border-radius: 50%;
                    &:hover{
                        animation: iconAnime 0.5s alternate infinite;
                    }

                }
                @keyframes iconAnime {
                    to{
                        transform: scale(1.2);
                        transition: 15s cubic-bezier(0.075, 0.82, 0.165, 1);
                    }
                }
            }
        form{
            width: 100%;
            display: flex;
            gap: 30px;
            flex-direction: column;
            margin-top: 40px;
            
            input{
                width: 100%;
                padding: 10px;
                border: none;
                border-bottom: 1px gray solid;
                &:focus{
                    outline: none;
                }
            }
            button{
                border: 1px solid deeppink;
                width: 100%;
                padding: 12px;
                background-color: deeppink;
                color: white;
                font-size:17px;
                border-radius: 8px;
                cursor: pointer;
                transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) ;
                &:hover{
                    background-color: transparent;
                    border: 1px solid deeppink;
                    color: deeppink;
                }
                
            }
            
        }
        .conta{
            color: #919191;
            font-size: 12px;
            margin-top: 10px;
            text-decoration: underline;
            cursor: pointer;
            &:hover{
                color: #bd0065;
            }
        }
    }
    }
    
    
`