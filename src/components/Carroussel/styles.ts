import styled from 'styled-components'

import carroussel1 from '../../assets/carroussel1.png'
import carroussel2 from '../../assets/carroussel2.png'
import carroussel3 from '../../assets/carroussel3.png'

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    max-width: 100vw;

    position: relative;

    &:hover > div:before{
        filter: brightness(0.2);
    }

    div{
        position: absolute;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        height: 480px; 
        min-width: 33.3333vw;
        height: 480px;

        border-right:  3px solid #35393B;
        border-left:  3px solid #35393B;

        z-index: 2;

        &:before{
            content: '';
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-position: center;
            background-size: cover;
            z-index: -5;
            transition: 0.5s;

            filter: brightness(0.6)
        }

        &:hover{
            width: 800px;
            z-index: 6;

            &:before{
                filter: brightness(0.6);
            }
        }

    }

    #first{        
        left: 0;
        
        &:before{
            background-image: url(${carroussel1}); 
        }
    }

    #second{
        left: 33.3333vw;

        &:hover{
            left: 50%;
            transform: translateX(-50%);
        }

        &:before{
            background-image: url(${carroussel2}); 
        }
    }

    #third{
        right: 0;

        &:before{
            background-image: url(${carroussel3}); 
        }
    }
    
`

export const carrousselItemContent = styled.div`
    
    border: 0;
    position: relative;

    top: 0;
    right: 0;

    padding: 48px;

    p{
        margin-top: auto;

        font-size: 20px;
        color: #EDEDE8;
        text-align: center;
    }

    span{
        height: 0;
        visibility: hidden;
    }

    button {
        height: 0;
        visibility: hidden;
    }
    
    &:hover{
        span{
            visibility: visible;
            height: auto;
            font-size: 18px;
            color: #EDEDE8;
            text-align: center;
            margin-top: 24px;
        }

        button{
            visibility: visible;
            height: 48px;
            width: 120px;

            border-radius: 24px;
            background: #3BA5CF;
            color: #fff;
            border: 0;

            margin: 0 auto;
            margin-top: 16px;

            transition: background 0.2s;

            &:hover{
                background: #3598BB;
            }
        }
    }
    
`
