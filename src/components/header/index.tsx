import React from "react";
import { HeaderDiv, Logo, Anchor, Anchors, Container, Border } from "./styles"


export function Header() {
    return (
        <HeaderDiv id='header'>
            <Container>
                <div>
                    <Logo className="logo">Jorge Lins</Logo>
                </div>
                <Anchors>
                    <Anchor >Projetos</Anchor>
                    <Anchor >Sobre</Anchor>
                    <Anchor >Contatos</Anchor>
                </Anchors>
            </Container>
            <Border></Border>
        </HeaderDiv>
    )
}