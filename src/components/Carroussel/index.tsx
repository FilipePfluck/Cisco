import React from 'react'

import carroussel1 from '../../assets/carroussel1.png'
import carroussel2 from '../../assets/carroussel2.png'
import carroussel3 from '../../assets/carroussel3.png'

import * as S from './styles'

const Carroussel: React.FC = () => {
    return (
        <S.Container>
            <div id="first">
                
                <S.carrousselItemContent>
                    <p>Relatório inédito: Digitalização, Resiliência e Continuidade dos Negócios</p>
                    <span>Confira o estudo produzido pela Cisco em parceria com a Deloitte e entenda o impacto da pandemia nas áreas de Educação, Saúde, Justiça e Governo, além de sugestões para nos prepararmos para um novo digital.</span>
                    <button>Acesse</button>
                </S.carrousselItemContent>
                
            </div>

            <div id="second">
                <S.carrousselItemContent>
                    <p>Novas Oportunidades A Democratização dos Serviços Financeiros na Era da Experiência</p>
                    <span>6 de outubro - Evento virtual com sessões dinâmicas e interativas</span>
                    <button>Reserve seu lugar</button>
                </S.carrousselItemContent>
            </div>

            <div id="third">
                <S.carrousselItemContent>
                    <p>3 Fatores que geram valor para negócios com o Wi-Fi habilitado no novo normal</p>
                    <span>Descubra como um modelo de rede baseado em intenção é a maneira de automatizar tarefas rotineiras no novo normal.</span>
                    <button>Leia o blog</button>
                </S.carrousselItemContent>
            </div>
        </S.Container>
    )
}

export default Carroussel