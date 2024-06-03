import styled from "styled-components";

export const Wrapper = styled.section`
    width:100%;
    margin: 230px auto;
    .container{
        margin: 0 auto;
    }
    .section1{
        background-color: black;
        color: white;
        width: 100%;
        padding: 80px;
        text-align: center;
        .text{
             p{
            width: 500px;
            text-align: center;
            margin: 0 auto;
        }
        span{
            color: deeppink;
        }

        h1{
            font-size: 200px;
        }
        }
       
        
        button{
                
                border: 1px white solid;
                color: back;
                padding: 10px 14px;
                font-size: 17px;
                border-radius: 8px;
                cursor: pointer;
                margin-top: 40px;
                transition: 0.5s ease;
                &:hover{
                    background-color:deeppink ;
                    color: white;
                }
            }
        

    }
    .section2{
        background-color: white;
        color: black;
        width: 100%;
        padding: 80px;
        text-align: center;
        margin-top: 90px;
        h1{
            font-size: 50px;
        }
        h2{
            width: 700px;
            margin: 20px auto;
        }
    }
`