
import React from "react";
import { Title, DivTitle } from "./styles.js"

interface TitleProps {
    title: string;
}


export function Titles(props: TitleProps) {
    return(
    <DivTitle>
        <Title>
            {props.title}
        </Title>
    </DivTitle>
    )
}