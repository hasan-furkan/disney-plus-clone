import React from 'react'
import styled from 'styled-components'

import bgImage from "../assets/images/login-background.jpg"
import logoOne from "../assets/images/cta-logo-one.svg"
import logoTwo from "../assets/images/cta-logo-two.png"

function Login() {
  return (
    <Container>
       <CTA>
        <CTALogoOne src={logoOne} />
        <SignUp>
            GET ALL THERE
        </SignUp>
        <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae, facilis neque molestias, odio, mollitia vero itaque assumenda adipisci possimus dicta doloremque suscipit
        </Description>
        <CTALogoTwo src={logoTwo} />
       </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(${bgImage});
        content: "";
        poisiton: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        position: absolute;
        z-index: -1;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display:flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;

`

const CTALogoOne = styled.img``

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    fonst-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    
    &:hover {
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`