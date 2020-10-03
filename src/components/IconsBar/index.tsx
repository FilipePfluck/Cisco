import React from 'react'

import {
    FiFileText,
    FiSettings,
    FiDownload,
    FiUsers,
    FiMessageSquare
} from 'react-icons/fi'

import * as S from './styles'

const IconsBar: React.FC = () => {
    return (
        <S.Container>
            <div>
                <FiFileText size={32} color="#FFF"/>
                <p>Guias de designs</p>
            </div>

            <div>
                <FiSettings size={32} color="#FFF"/>
                <p>Certificações profissionais</p>
            </div>

            <div>
                <FiDownload size={32} color="#FFF"/>
                <p>Downloads de software</p>
            </div>

            <div>
                <FiUsers size={32} color="#FFF"/>
                <p>Comunidade de suporte</p>
            </div>

            <div>
                <FiMessageSquare size={32} color="#FFF"/>
                <p>Estudos de caso Cisco</p>
            </div>
        </S.Container>
    )
}

export default IconsBar