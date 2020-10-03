import styled from 'styled-components'

import card1 from '../../assets/card1.jpg'

interface CardProps {
    image?: string
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    padding: 64px;
    width: 100%;

    p{
        color: #999591;
        font-size: 20px;

        margin-top: 16px;
    }

    h2{
        color: #ABABAB;
        font-size: 32px;
    }
`

export const Cards = styled.div`
    width: 100%;
    height: 800px;

    margin-top: 32px;
`

export const CardType1 = styled.div`
    display: flex;

    width: 100%;

    border-radius: 16px;

    background-color: #0C2244;

    cursor: pointer;
    
    div{
        display: flex;
        flex-direction: column;

        width: 50%;
        
        padding: 24px;
        text-align: left;

        p{
            font-size: 24px;
            color: #EDEDE8;
            
            max-width: 400px;

            margin-bottom: 16px;
            margin-top: auto;
        }

        span{
            font-size: 20px;
            color: #ADADAD;
            margin-bottom: auto;
        }
    }

    div + div{
        padding: 0;
        border-radius: 0 16px 16px 0;
        height: 400px;

        position: relative;

        &:before{
            content: '';

            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;

            background-image: url(${card1});
            background-position: initial;
            background-size: cover;

            border-radius: 0 16px 16px 0;

            transition: 0.2s;
        }
    }

    &:hover{
        div+div{
            &:before{
                background-position: center;
            }
        }
    }
`

export const SecondRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 16px;

    height: 560px;
`

export const ThirdRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;

    height: 320px;

    margin-bottom: 64px;
`

export const CardType2 = styled.div<CardProps>`
    position: relative;
    display: flex;

    width: 100%;

    border-radius: 16px;

    background-image: url(${props => props.image});
    background-position: initial;
    background-size: cover;

    margin-top: 16px;

    transition: 0.4s;

    cursor: pointer;

    div{
        height: 100%;
        width: 100%;

        background-color: #0C2244;
        border-radius: 16px;
        opacity: 0;
        transition: 0.4s;

        text-align: left;
        
    }

    aside{
        text-align: left;
        position: absolute;
        bottom: 20px;
        left: 16px;

        opacity: 1;

        p{
            color: #EDEDE8;
            font-size: 24px;

            transition: 0.4s;

        }

        span{
            font-size: 0px;
            color: #ADADAD;
        
            opacity: 0;

            transition: opacity 0.4s;
                
        } 
    }

    
    &:hover{
        background-position: center;

        aside{
            span{
               opacity: 1;
               font-size: 20px;
            }

            p{
                margin-bottom: 16px;
            }
        }

        div{
            opacity: 0.9;
        }
    }
`