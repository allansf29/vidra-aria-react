import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #243a2c;
  color: #ffffff;
  padding: 30px 20px; /* Aumentando ainda mais o preenchimento */
  font-family: "Josefin Sans", sans-serif;
`;

const FooterContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.p`
  font-size: 14px;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 10px;
    }   
`;

const Image = styled.p`
  font-size: 14px;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 10px;
    
    }   
`;

const Dev = styled.p`
  font-size: 14px;
  margin: 10px;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 10px;
    }   
`;

const Footer = () => {  
  return (
    <FooterContainer>
      <FooterContent>
          <Copyright>
            &copy; 2024 allansf29. Todos os direitos reservados.
          </Copyright>
          <Image>
            Imagens utilizadas apenas para exemplos, retirada do FREEPIK.
          </Image>
          <Dev>
            Desenvolvido por: Allansf29@gmail.com
          </Dev>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;