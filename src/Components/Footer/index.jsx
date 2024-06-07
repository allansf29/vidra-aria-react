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

const FooterTitle = styled.h3`
    font-size: 18px;
    margin: 10px 0;
`

const CitiesList = styled.div`
  text-align: left;
`;

const CityItem = styled.li`
  list-style-type: disc;
  margin-bottom: 15px; /* Aumentando ainda mais o espaçamento entre os itens */
`;

const Copyright = styled.p`
  font-size: 14px;
`;

const Credit = styled.p`
  font-size: 14px;
  margin: 10px;
  align-items: center;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: green;
  font-size: 20px;
  text-decoration: none;
  margin-left: 20px;
  
`;

const Footer = () => {  
  return (
    <FooterContainer>
      <FooterContent>
          <Copyright>
            &copy; 2024 Empresa XYZ. Todos os direitos reservados.
          </Copyright>
          <Credit>
            Desenvolvido por: Allansf29@gmail.com
          </Credit>
        
        <div>
          <h3>Redes Sociais</h3>
          <SocialMedia>
            <SocialIcon href="https://facebook.com"><i className="fab fa-facebook"></i></SocialIcon>
            <SocialIcon href="https://twitter.com"><i className="fab fa-twitter"></i></SocialIcon>
            <SocialIcon href="https://instagram.com"><i className="fab fa-instagram"></i></SocialIcon>
          </SocialMedia>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;