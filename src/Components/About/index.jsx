import React from "react";
import styled from "styled-components";
import Image3 from "../../Assets/img3.jpg";


const AboutSection = styled.section`
    border-bottom: 1px solid green;
    align-items: center;
    display: flex;
    min-height: 55vh;
    padding: 50px 0;
    flex-direction: row-reverse;

    @media screen and (max-width:700px){
      display: flex;
      flex-direction: column;
    }

    @media screen and (max-width:1050px){
      display: flex;
      flex-direction: column;
    }
`

const AboutContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`

const AboutIcon = styled.img`
    width: 35%;
    object-fit: cover;
    margin: 50px;
    border-radius: 5px;

    @media screen and (max-width:1050px){
      width: 70%;
    }

    @media screen and (max-width:700px){
      width: 70%;
    }

    @keyframes spinAnimation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    
}
`

const AboutTitle = styled.h1`
    font-family: "Josefin Sans", sans-serif;
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    color: #8d8585;
    margin: 30px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px; /* Ajuste o comprimento da borda conforme necessário */
      height: 2px; /* Ajuste a espessura da borda conforme necessário */
      background-color: grey; /* Cor da borda */
    }


    @media screen and (max-width:1420px){
          margin: 10px;
          font-size: 50px;
    }

    @media screen and (max-width:700px){
          margin: 10px;
          font-size: 42px;
    }

`

const AboutText = styled.p`
    color: green;
    display: flex;
    flex-direction: column;
    font-family: "Josefin Sans", sans-serif;
    font-size: 21px;
    margin: 20px 100px 20px 100px;
    padding: 0;
    text-align: center;
    text-indent: 30px;

  @media screen and (max-width:1500px){
        font-size: 19px;
        margin: 10px 15px;
}

  @media screen and (max-width:1200px){
        font-size: 17px;
        margin: 10px 15px;
}

  @media screen and (max-width:1050px){
        font-size: 17px;
        margin: 10px 10px;
}

  @media screen and (max-width:700px){
        font-size: 15px;
        margin: 10px 10px;
}
`


const About = () => {
    return (
      <AboutSection id="about">
        <AboutIcon src={Image3} alt="LOGO" data-anime="right"/>
        <AboutContainer>
          <AboutTitle data-anime="up">Vidraçaria em São Paulo</AboutTitle>
          {/* <AboutCaptionTitle>Os vidros, espelhos e box mais resistentes do mercado</AboutCaptionTitle> */}
          <AboutText data-anime="up">
          Na agitada São Paulo, surge a Vidraçaria EWN, fruto da parceria entre Eddy, Wagner e Nilton, três visionários apaixonados pelo trabalho com vidros. Estrategicamente localizada no centro da cidade, nossa equipe dedicada oferece soluções personalizadas para projetos residenciais, comerciais e industriais. Com uma ampla variedade de produtos, desde vidros temperados até espelhos decorativos, garantimos durabilidade e elegância em cada peça. Nosso compromisso é superar as expectativas dos clientes, proporcionando serviços de instalação de excelência e atendimento personalizado. Na Vidraçaria T&W, transformamos suas ideias em realidade, tornando seus ambientes mais modernos e sofisticados. Venha nos visitar e descubra como podemos fazer a diferença em seus projetos de vidraçaria.
          </AboutText>
        </AboutContainer>
      </AboutSection>
    )
  }
  
  export default About;