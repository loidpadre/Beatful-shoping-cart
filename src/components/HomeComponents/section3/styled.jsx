import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    margin: 0 auto;
    .container{
        max-width:1200px;
        margin: 0 auto;
        display: flex;
        .col-1{
            position: relative;
            p{
                position: absolute;
                bottom: 40px;
                left: 0;
                backdrop-filter: blur(10px);
                padding: 20px;
                border-top-right-radius: 20px;
            }
            img{
                width: 750px;
            }
            em{
                font-weight: 300;
                font-style: italic;
            }
            button{
                padding: 8px;
                font-size: 18px;
                background-color: deeppink;
                color: white;
                border: none;
                border-radius: 5px;
                margin-top: 20px;
                transition:  0.5s ease;
                cursor: pointer;
                &:hover{
                    transform: scale(1.1);
                }
            
            }

        }
        .col-2{
            h1{
                margin-bottom: 10px;
                font-size: 40px;
                font-weight: 300;
                color: orange;
            }
            button{
                padding: 8px;
                font-size: 18px;
                background-color: deeppink;
                color: white;
                border: none;
                border-radius: 5px;
                margin-top: 20px;
                cursor: pointer;
                &:hover{
                    transform: scale(1.1);
                }
            }
        }
    }
`