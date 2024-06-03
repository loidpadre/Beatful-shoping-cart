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
        .abv{
            color: orange;
            text-decoration: line-through;
        }
        width: 60%;
        h1{
            font-size: 120px;
            text-transform: uppercase;
            color:deeppink;
        }
        .sound{
            font-size: 45px;
            margin: 10px 0px;
        }
        p{
            width: 500px;
            font-weight: 300;
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
        position: relative;
        img{
            width: 500px;
        }
        .base{
            width: 400px;
            height: 450px;
            backdrop-filter: blue(10px);
            background-color: orange;
            box-shadow: 6px 6px 20px black;
            position: absolute;
            top: -30px;
            right: 40px;
            z-index: -1;
            border-top-right-radius: 80px;
            transform: rotateX(90px);
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 200px;
            border-top-left-radius:200px;
            animation: AnimeBase 2s infinite alternate cubic-bezier(0.25, 0.46, 0.45, 0.94) ;
        }

        @keyframes AnimeBase{
            from{
                top: -50px;
            }
             to{
                top: 30px;
            }
        }
    }
   
`