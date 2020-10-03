import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    background-color: #0C2244;
    width: 100%;
    height: 120px;

    margin-top: 480px;
    padding: 8px 32px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 0 auto;

        p{
            text-align: center;
            max-width: 190px;
            font-size: 18px;
            margin-top: 16px;

            cursor: pointer;
        }

        svg{
            margin-top: 8px;
            transition: 0.1s;

            cursor: pointer;

            &:hover{
                transform: scale(1.2)
            }
        }
    }
`