import React, {useState} from 'react';
import {Data} from './Data';
import styled from 'styled-components';
import Image from './images/Path2337.png';

const AccordionSection = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    height:100vh;
    background:#fff;
`;
const Container = styled.div`
    position: absolute;
    width:100%;
    top: 10%;
`;
const Logo = styled.div`
    margin:0;
    max-width:905px;
    text-align:left;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height:87px;
    color: rgba(0,0,0,1);
`

const Accordion = () => {
    return (
        <AccordionSection>
            <Container>
                <Logo>CCT LAB Process</Logo>
                {Data.map((item, index) => {
                    return (
                        <>
                            <span>{item.number}</span>
                            <h1>{item.title}</h1>
                        </>
                        )
                })}
                
            </Container>
        </AccordionSection>
    )
}

export default Accordion;
