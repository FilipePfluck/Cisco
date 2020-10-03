import React from 'react'

import Header from '../../components/Header'
import Carroussel from '../../components/Carroussel'
import IconsBar from '../../components/IconsBar'
import CardsContainer from '../../components/CardsContainer'

import * as S from './styles'

const Main: React.FC = () => {
    return(
        <S.Container>   
            <Header/>
            <Carroussel/>
            <IconsBar/>
            <CardsContainer/>
        </S.Container>
    )
}

export default Main