import React from 'react'

import { 
    FiChevronDown, 
    FiUser,
    FiSearch,

} from 'react-icons/fi'

import logo from '../../assets/logo.png'

import * as S from './styles'

const Header: React.FC = () => {
    return (
        <S.Container>
            <S.List>
                <li>Produtos</li>
                <li>Suporte</li>
                <li>Parceiros</li>
                <li>Mais <FiChevronDown size={14} color="#999591"/></li>
            </S.List>

            <img src={logo} alt=""/>

            <div>
                <FiSearch style={{margin: 8}} size={32} color="#7D7B76"/>
                <FiUser style={{margin: 8}} size={32} color="#7D7B76"/>
            </div>
        </S.Container>
    )
}

export default Header