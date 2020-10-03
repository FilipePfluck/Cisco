import React from 'react'

import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.jpg'
import card4 from '../../assets/card4.jpg'
import card5 from '../../assets/card5.jpg'
import card6 from '../../assets/card6.jpg'

import * as S from './styles'

const Header: React.FC = () => {
    return (
        <S.Container>
            <h2>Fique por Dentro</h2>
            <p>Confira as inovações, os eventos e as atividades Cisco, que acontecem no Brasil e no mundo.</p>
        
            <S.Cards>
                <S.CardType1>
                    <div>
                        
                        <p>01 de outubro - O equilíbrio entre performance e custo em cloud</p>
                        <span>Encontre o equilíbrio perfeito entre a melhor experiência do usuário, desempenho e custo em ambientes locais e em nuvem.Registre-se agora</span>
                        
                    </div>

                    <div>

                    </div>

                </S.CardType1>
                
                <S.SecondRow>
                    <S.CardType2 image={card2}>
                        <div>
                            
                        </div>
                        <aside>
                            <p>Precisando de uma solução de tecnologia?</p>
                            <span>
                            Mas o orçamento está curto? Aproveite a taxa de juros no Brasil de 6,99%. Veja como
                            </span>
                        </aside>
                    </S.CardType2>
                    <S.CardType2 image={card3}>
                        <div>
                            
                        </div>
                        <aside>
                            <p>O local de trabalho híbrido</p>
                            <span>
                            Acreditamos que o futuro será uma mistura de no escritório e trabalhando em casa, e criamos um projeto para ajudá-lo à medida que avançamos para este futuro.
                            </span>
                        </aside>
                    </S.CardType2>
                </S.SecondRow>

                <S.ThirdRow>
                    <S.CardType2 image={card4}>
                        <div>
                            
                        </div>
                        <aside>
                            <p>Reinvente o local de trabalho com sua equipe </p>
                            <span>
                            Aumente a resiliência dos negócios: conecte seus colaboradores, proteja 
                            seus negócios e automatize processos com modelos de trabalho mais 
                            produtivos.

                            </span>
                        </aside>
                    </S.CardType2>
                    <S.CardType2 image={card5}>
                        <div>
                            
                        </div>
                        <aside>
                            <p>Diversidade: Será que tenho preconceito?</p>
                            <span>
                            Nós da Cisco, queremos ser a ponte que conecta o hoje a uma sociedade mais justa e autêntica, sem estereótipos e preconceitos. Assista á Live on-demand!
                            </span>
                        </aside>
                    </S.CardType2>
                    <S.CardType2 image={card6}>
                        <div>
                            
                        </div>
                        <aside>
                            <p>Todos por um #BrasilDigitaleInclusivo</p>
                            <span>
                            Com o Brasil Digital e Inclusivo (BDI), estamos focados em impulsionar a economia digital e impactar positivamente a vida de milhões de brasileiros.
                            </span>
                        </aside>
                    </S.CardType2>
                </S.ThirdRow>
            </S.Cards>
        </S.Container>
    )
}

export default Header