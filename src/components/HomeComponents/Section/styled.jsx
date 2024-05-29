import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    margin: 60px auto;
    .container{
        width: 1200px;
        margin: 60px auto;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        gap: 40px;
        justify-content: center;
        .card{
            width: 250px;
            border-radius: 8px;
            .text{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                gap: 20px;
            }
            h1{
                font-size: 16px;
                font-style: normal;
                
            }
            span{
                color: #ff14916f;
                
            }
            img{
                width: 250px;
                border-radius: 8px;
                height: 300px;
                object-fit: cover;
            }
            button{
                width: 100%;
                padding:10px 14px;
                background-color: deeppink;
                color: white;
                font-size: 17px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
            }
        }
    }
`