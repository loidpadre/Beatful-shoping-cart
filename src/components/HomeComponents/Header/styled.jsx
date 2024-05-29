import styled from "styled-components";

export const Wrapper = styled.header`
    width: 80%;
    display: flex;
    margin: 160px auto;
    justify-content: center;
    border-bottom: 1px #f5f5f5 solid;
    gap:50px;
    padding: 40px;
    .text{

        width: 60%;
        h1{
            font-size: 87px;
            text-transform: uppercase;
            color:deeppink;
        }
        .sound{
            font-size: 45px;
            margin: 10px 0px;
        }
        p{
            width: 500px;
        }
        button{
            border: none;
            border: 1px solid deeppink;
            background-color: transparent;
            color: black;
            padding: 10px 14px;
            font-size: 17px;
            border-radius: 8px;
            margin-top: 20px;
            position: relative;
            cursor: pointer;
            overflow: hidden;
            &::after{
                content: "";
                width: 100%;
                height: 100%;
                display: block;
                position: absolute;
                top: 0;
                left: -240px;
                border-radius: 8px;
                background-color: deeppink;
            }
            &:hover::after{
                animation: btnAnime 3s cubic-bezier(0.075, 0.82, 0.165, 2) infinite alternate;
                
            }
            
        }
        @keyframes btnAnime {
            0%{
                left: -240px;
                border-top-right-radius: 30px;
                border-bottom-right-radius: 30px;
            }
        
            100%{
                left: 100px;
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
                background-color: deeppink;
                
            }
        }
    }
    .img{
        img{
            width: 400px;
        }
    }
   
`