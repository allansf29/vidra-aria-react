import React from "react";
import styled from "styled-components";
import Image4 from "../../Assets/img4.jpg";
import Image5 from "../../Assets/img5.jpg";
import Image6 from "../../Assets/img6.jpg";

// Estilos
const WorkSection = styled.section`
    border-bottom: 1px solid green;
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
`;

const WorkTitle = styled.h1`
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
`;

const WorkContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0px;
`;

const WorkItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: calc(25% - 20px);
    min-height: 17rem;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
        width: calc(50% - 20px);
    }

    @media screen and (max-width: 480px) {
        width: calc(100% - 20px);
    }
`;

const WorkImage = styled.img`
    width: 100% !important;
    object-fit: cover;
    margin: 30px;
    border-radius: 5px;
    transition: transform 1s;

    ${WorkItem}:hover & {
        transform: scale(1.02);
    }
`;

const WorkItemTitle = styled.h2`
    color: #8d8585;
    font-family: "Josefin Sans", sans-serif;
    font-size: 2.5rem;
    text-align: center;
    margin: 10px;
`;

const WorkDescription = styled.p`
    color: green;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1rem;
    text-align: center;
`;

// Dados dos trabalhos
const WorkData = [
    {
        img: Image4,
        title: "Box em vidro",
        description: "Descrição do Box em vidro.Descrição do Tampo de mesa de vidro.Descrição do Tampo de mesa de vidro."
    },
    {
        img: Image5,
        title: "Guarda corpo",
        description: "Descrição do Tampo de mesa de vidro.Descrição do Tampo de mesa de vidro.Descrição do Tampo de mesa de vidro."
    },
    {
        img: Image6,
        title: "Vidros em sacadas",
        description: "Descrição dos Espelhos.Descrição do Tampo de mesa de vidro.Descrição do Tampo de mesa de vidro."
    }
];

const Works = () => {
    return (
        <WorkSection id="works">
            <WorkTitle>Nossos trabalhos</WorkTitle>
            <WorkContainer>
                {WorkData.map((work, index) => (
                    <WorkItem key={index}>
                        <WorkImage src={work.img} alt={work.title}/>
                        <WorkItemTitle>{work.title}</WorkItemTitle>
                        <WorkDescription>{work.description}</WorkDescription>
                    </WorkItem>
                ))}
            </WorkContainer>
        </WorkSection>
    );
};

export default Works;
