import React from 'react';
import Link from 'next/link.js';
import { ButtonRounded } from './styles.js';

interface ButtonProps {
    text: string;
    link: string;
}

export function Button(props: ButtonProps) {
    return (
        <Link href={props.link}>
            <ButtonRounded>
                {props.text}
            </ButtonRounded>
        </Link>
    );
}