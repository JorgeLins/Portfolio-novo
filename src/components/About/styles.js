import styled from "styled-components";

export const AboutSection = styled.div`

height: 57.75rem;
    padding-top: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 5rem;
    padding-right: 5rem;

`

export const Text = styled.p`
width: 30%;
    font-family: 'Fira Code',monospace;
    font-style: normal;
    font-weight: 450;
    font-size: 30px;
    line-height: 39px;
    color: #FFFFFF;
    margin-left: 7.4rem;
`

export const TimelineDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 42%;
`

export const TimelineCard = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    gap: 1rem;
`

export const CircleDiv = styled.div` 
    display: flex;
    width: 150px;
    height: 150px;
    background-color: #D9D9D9;
    border-radius: 75px;
    align-content: center;
    justify-content: center;
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 28rem;
`

export const Place = styled.h2`
font-family: 'Bebas Neue';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 30px;
color: #FFFFFF;
`;
export const Description = styled.h4`
font-family: 'Fira Code', monospace;
font-style: normal;
font-weight: 450;
font-size: 15px;
line-height: 20px;
text-align: justify;
color: #FFFFFF;

`

export const Dashed = styled.div`
height: 100px;
    border-left: 7px dashed;
    border-left-color: #F3DBC7;
    margin-left: 4.5rem;
`