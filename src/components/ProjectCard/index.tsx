import React from 'react';
import Image from 'next/image.js';
import { LeftCard, LeftName, LeftDescription, TextDiv, RightCard, RightName, RightDescription, } from './styles.js';

interface CardProps {
    left: boolean;
    name: string;
    description: string;
    image: string;
}


export function ProjectCard(props: CardProps) {
  return (
    <>
    {props.left && (
        <LeftCard>
            <Image src={props.image} width={604} height={198}></Image>

            <TextDiv>
            <LeftName>{props.name}</LeftName>
            <LeftDescription>{props.description}</LeftDescription>
            </TextDiv>

        </LeftCard>
    )}
    {!props.left && (
        <RightCard>

            <TextDiv>
            <RightName>{props.name}</RightName>
            <RightDescription>{props.description}</RightDescription>
            </TextDiv>
            <Image src={props.image} width={604} height={198}></Image>

        </RightCard>
    )}
    </>
  );
}