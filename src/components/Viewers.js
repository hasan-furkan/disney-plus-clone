import React from 'react'
import styled from 'styled-components'

import viewbg1 from "../assets/images/viewers-disney.png"
import viewbg2 from "../assets/images/viewers-pixar.png"
import viewbg3 from "../assets/images/viewers-marvel.png"
import viewbg4 from "../assets/images/viewers-starwars.png"
import viewbg5 from "../assets/images/viewers-national.png"

function Viewer() {
  return (
    <Container>
      
        <Wrap>
          <img src ={viewbg1} />
        </Wrap>
        <Wrap>
          <img src ={viewbg2} />
        </Wrap>
        <Wrap>
          <img src ={viewbg3} />
        </Wrap>
        <Wrap>
          <img src ={viewbg4} />
        </Wrap>
        <Wrap>
          <img src ={viewbg5} />
        </Wrap>
      
      </Container>
  )
}

export default Viewer

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr)); 
`

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color: rgba(249,249,249,0.8);
    }
`