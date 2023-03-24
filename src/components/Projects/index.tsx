import React from "react";
import Image from "next/image";
import { Titles } from "../Titles";
import { ProjectCard } from "../ProjectCard";
import { ProjectSection, ButtonsDiv, PushDiv } from './styles.js';
import { Button } from "../Button";
import renalhealth from "../../../assets/img/renalhealth.png";
import takeabreath from "../../../assets/img/takeabreath.png";
import aluraquiz from "../../../assets/img/aluraquiz.png";
import nlwesports from "../../../assets/img/nlwesports.png";


export function Projects() {
    return (
        <>
        <Titles title="PROJETOS"/>
        <ProjectSection>
            <ProjectCard left={true}
            name="Renal Health"
            description="ReactJS, Javascript, Css, I18next"
            image={renalhealth}
            />
            <ProjectCard left={false}
            name="Take a Breath"
            description="Ionic 5, Typescript, Scss, Angular, I18next"
            image={takeabreath}
            />
            <ProjectCard left={true}
            name="Alura Quiz"
            description="ReactJS, NextJS e Styled Components"
            image={aluraquiz}
            />
            <ProjectCard left={false}
            name="NLW E-sports"
            description="ReactJS, Typescript, TailwindCss"
            image={nlwesports}
            />
        </ProjectSection>
        <ButtonsDiv>
            <Button text="GITHUB" link="https://github.com/JorgeLins"></Button>
            <Button text="CONTATOS" link="#header"></Button>
            <PushDiv></PushDiv>
        </ButtonsDiv>
        </>
    )
}