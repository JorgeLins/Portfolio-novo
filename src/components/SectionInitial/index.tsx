import React from "react";
import { Box } from "../Box/";
import { Section } from "./styles.js"
import Image from "next/image";
// import avatar from "../../../assets/img/avatar.png";


export function SectionInitial() {
    return (
        <>
        <Section>
            <Box 
                title="JORGE LINS"
                subTitle="Front-end Developer"
            />
            {/* <Image src={avatar} ></Image> */}
        </Section>
        </>
    )
}