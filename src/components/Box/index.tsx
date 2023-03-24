
import React from "react";
import { Title, SubTitle, DivBox } from "./styles.js"

interface BoxProps {
    title: string;
    subTitle: string
}


export function Box(props: BoxProps) {
    return(
    <DivBox>
        <Title>
            {props.title}
        </Title>
        <SubTitle>
            {props.subTitle}
        </SubTitle>
    </DivBox>
    )
}