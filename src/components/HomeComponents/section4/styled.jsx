import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    margin: 250px auto;
    .container{
        max-width: 1200px;
        text-align: center;
        margin: 0 auto;
        h1{
            font-size: 56px;
            font-weight: 300;
        }
        .cards{
           
            margin-top: 140px;
            display: grid;
            grid-template-columns: 25% 25% 25%;
            justify-content: center;
            gap: 60px;
            .card{
                border-radius: 20px;
                width: 250px;
                padding: 10px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                .topo{
                    display: flex;
                    justify-content: space-between;
                    span{
                        font-weight: 200;
                        color: gray;
                    }
                }
                img{
                    width: 250px;
                    height: 300px;
                    object-fit: cover;
                }
                .text{
                    h1{
                        text-align: center;
                        font-size: 32px;
                        font-weight: 400;
                    }
                }
                .btns{
                    display: flex;
                    gap: 10px;
                    margin-top: 20px;
                    color: white;
                    p{
                        background-color: orange;
                        padding: 8px;
                        border-radius: 8px;
                        font-weight: 200;
                        font-size: 12px;
                    }
                }
                .price{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    button{
                        padding: 8px 12px;
                        border: none;
                        border-radius: 10px;
                        background-color: black;
                        color: white;
                        border: 1px solid white;
                        cursor: pointer;
                        transition: 0.5s ease;
                        &:hover{
                            background-color: white;
                            color: black;
                            border: 1px solid black;
                        }
                    }

                }
            }
        }
    }
`