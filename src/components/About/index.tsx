import React from 'react';
import { Titles } from '../Titles';
import Image from "next/image";
// import "./styles.css";

import college from '../../../assets/img/college.svg'
import nic from '../../../assets/img/logoNic.svg'
import vortex from '../../../assets/img/vortex.svg'


import {AboutSection, Text, TimelineDiv, TimelineCard, CircleDiv, TextDiv, Place, Description, Dashed } from './styles.js';

export function About() {
  return (
    <>
    <Titles title='SOBRE'></Titles>
    <AboutSection>
        <Text>Sou um estudante de ciência da computação da Unifor, dentre as áreas das quais eu já estudei no meu curso a que eu mais me interessei foi a de frontEnd, então  hoje me considero um desenvolvedor front-end procurando se especializar em com conhecimento em competências na área. Muito disposto a aprender outras compêtencias tanto para aplicações mobile quanto back end.
        </Text>
        <TimelineDiv>
            <TimelineCard>
                <CircleDiv>
                    <Image className='college' src={college} width={90} height={75}></Image>
                </CircleDiv>
                <TextDiv>
                    <Place>Universidade de Fortaleza(UNIFOR), Ciência da computação <br></br>2018.2 - Atual</Place>
                    <Description>Atualmente cursando o 6o Semestre</Description>
                </TextDiv>
            </TimelineCard>
            <Dashed></Dashed>
            <TimelineCard>
                <CircleDiv>
                    <Image className='nic' src={nic} width={163} height={100} ></Image>
                </CircleDiv>
                <TextDiv>
                    <Place>Núcleo Integrado de Comunicação (NIC), UNIFOR  <br></br> NOV 2019  - ABR 2020</Place>
                    <Description>Programador na célula Mídia Interativa NIC(célula focada em projetos de integração acadêmica), desenvolvedor de sites, aplicações mobile e jogos.</Description>
                </TextDiv>
            </TimelineCard>
            <Dashed></Dashed>
            <TimelineCard>
                <CircleDiv>
                    <Image className='vortex' src={vortex} width={90} height={75}></Image>
                </CircleDiv>
                <TextDiv>
                    <Place>Vortex, UNIFOR <br></br> NOV 2021 - Atual</Place>
                    <Description>Estagiário de desenvolvimento front-end. Atuando com desenvolvimento web responsivo, aplicações moveis, experiência em metodologias ágeis, conversação com clientes e liderança em projetos.</Description>
                </TextDiv>
            </TimelineCard>
        </TimelineDiv>
    </AboutSection>
    </>
  );
}