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
const BorderSize = '200px';

const Fake = styled.div`
    border-bottom:3px solid  rgba(0,169,127,1);
    width: ${BorderSize};
    height: 100px;
    top:0;
    left:0;
    transition: .4s;
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
const Dropdown = styled.div`
    padding: 20px 30px;
    margin:10px;
    font-family: 'Roboto', sans-serif;
    font-size:18px;
    font-weight: 400;
    color:#0e2a35;
    with:100%;
    max-height: 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:flex-start;
    
    div{
        display:flex;
        align-items:center;
        margin:10px;
    }
    span{
        width: 19px;
        height:19px;
        border: 1px solid rgba(0,169,127,1);
        border-radius: 50%;
        position:relative;
    }
    span img {
        position:absolute;
        left:2px;
        bottom:2px;
    }
    

`;
const DropdownLine = styled.p`
    margin:0;
    padding-left: 20px;
    text-align:left;

    a, a:hover, a:active{
    text-decoration:none;
    color: rgba(0,169,127,1);
    }
`;


const Accordion = () => {
    const [clicked, setClicked] = useState(false);
    const [borderBottomSize, setSize] = useState(BorderSize);

    const borderbottomId = 'border-bottom-id';

    const changeSize = index => {
        const borderLines = document.getElementsByClassName(borderbottomId);

        Array.from(borderLines).forEach(function(element) {
            if (element.getAttribute('id') != borderbottomId + index) {
                element.style.width = '200px';
            }
        });

        const borderLine = document.getElementById(borderbottomId + index);
        if (borderLine.style.width == '200px') {
            borderLine.style.width = '300px';
        } else {
            borderLine.style.width = '200px';
        }
    }

    const toggle = index => {
        if(clicked === index) {
            return(
                setClicked(null),
                changeSize(index)
            );
        }
        setClicked(index);
        changeSize(index);
    }

    return (
        <AccordionSection>
            <Container>
                <Logo>CCT LAB Process</Logo>
                {Data.map((item, index) => {
                    return (
                        <WrapContainer>
                            <WrapDiv>
                                <Fake 
                                    style={{ width: borderBottomSize }}
                                    id={`${borderbottomId}${index}`}
                                    className={borderbottomId}
                                />
                                <Wrap 
                                    onClick={() => toggle(index)} 
                                    key={index}
                                >
                                    <span>{item.number}</span>
                                    <h1>{item.title}</h1>
                                </Wrap>
                            </WrapDiv>
                                {clicked === index ? (
                                    <Dropdown>
                                        {item.content.map((ans) => (
                                            <div>
                                                <span><img src={Image} /></span>
                                                <DropdownLine>{ans.text} <a href={`mailto:${ans.email}`}>{ans.email}</a>
                                                </DropdownLine>
                                            </div>
                                        ))}
                                    </Dropdown>
                                ) : null }
                        </WrapContainer>
                    )
                })}
            </Container>
        </AccordionSection>
    )
}

export default Accordion;
