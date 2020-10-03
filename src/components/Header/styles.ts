import styled from 'styled-components'

export const Container = styled.div`
    background-color: #1A1D1E;
    height: 64px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 40px 24px;

    svg{
        cursor: pointer;
    }

    div{
        display: flex;
        align-items: center;

        margin-left: auto;
    }

    img{
        width: 108px;
        height: 108px;

        position: absolute;
        left: 48%;
    }
`

export const List = styled.ul`
    display: flex;
    flex-direction: row;

    margin-right: auto;

    li{
        display: flex;
        align-items: center;

        text-decoration: none;
        list-style: none;
        margin: 0 16px;

        font-size: 16px;
        color: #EDEDE8;

        transition: 0.2s;
        cursor: pointer;

        &:hover{
            color: #6CF1FF;
        }

        svg{
            margin-left: 4px;
        }
    }
`