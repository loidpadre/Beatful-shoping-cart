import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    background-color: black;
    .container{
        max-width: 1200px;
        margin: 50px auto;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .col-1{
            h1{
                font-size: 65px;
                font-weight: 300;
            }
            p{
                font-weight: 400;
                margin-top: 20px;
                width: 600px;
            }
        }

    }
`