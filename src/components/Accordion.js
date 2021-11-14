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
const WrapContainer = styled.div`
    padding:10px;
    background:#fff;
`
const WrapDiv = styled.div`
    background:#fff;
    padding:0;
    color:rgba(14,42,53,1);
    position:relative;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    width:100%;
    text-align:center;
    cursor:pointer;
    box-shadow: 0 0 20px #c5c5c5;
`

const Accordion = () => {
    return (
        <AccordionSection>
            <Container>
                <Logo>CCT LAB Process</Logo>
                {Data.map((item, index) => {
                    return (
                        <WrapContainer>
                            <WrapDiv>
                                <span>{item.number}</span>
                                <h1>{item.title}</h1>
                            </WrapDiv>
                        </WrapContainer>
                        )
                })}
                
            </Container>
        </AccordionSection>
    )
}

export default Accordion;
