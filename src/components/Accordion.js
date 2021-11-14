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
const Wrap = styled.div`
    background:#fff;
    padding:16px 30px;
    color:rgba(14,42,53,1);
    position:relative;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    width:100%;
    text-align:center;
    cursor:pointer;
    
    position:absolute;
    height: 98px;
    top:0;
    left:0;

    h1 {
        margin:0;
        font-family: 'Manrope', sans-serif;
        font-size:18px;
        font-weight:700;
        line-height:24px;
       
    }
    span {
        margin: 0 36px 0 0;
        width: 50px;
        height:53px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:2rem;
        color:rgba(255,255,255,1);
        background: linear-gradient(180deg, #00a9a7 0%, #00ba89 10% );
    }
  
`;



const Accordion = () => {
    return (
        <AccordionSection>
            <Container>
                <Logo>CCT LAB Process</Logo>
                {Data.map((item, index) => {
                    return (
                        <WrapContainer>
                            <WrapDiv>
                                <Wrap>
                                    <span>{item.number}</span>
                                    <h1>{item.title}</h1>
                                </Wrap>
                            </WrapDiv>
                        </WrapContainer>
                        )
                })}
                
            </Container>
        </AccordionSection>
    )
}

export default Accordion;
