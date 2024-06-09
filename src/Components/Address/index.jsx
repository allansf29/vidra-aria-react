import React from "react";
import styled from "styled-components";

const AddressSection = styled.section`
    border-bottom: 1px solid green;
    min-height: 55vh;
    padding-top: 50px;
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

const AddressContainer = styled.div`
  background-color: #bbe2c6;
  color: #ffffff;
  font-family: "Josefin Sans", sans-serif;
  padding: 0px 20px;
`;

const AddressTest = styled.h1`
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

const AddressContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width:700px){
      display: block;
    }

    @media screen and (max-width:1150px){
      display: block;
    }
`;

const AddressTitle = styled.h3`
  font-size: 24px; /* Aumentando o tamanho do título */
  margin: 20px 0; /* Aumentando o espaçamento do título */
`;

const CitiesList = styled.div`
  text-align: left;
`;

const CityItem = styled.li`
  margin-bottom: 20px; /* Aumentando ainda mais o espaçamento entre os itens */
  font-size: 18px; /* Aumentando o tamanho do texto */
`;

const CompanyDetails = styled.div`
  font-size: 24px; /* Aumentando o tamanho do texto */
  margin-bottom: 50px; /* Aumentando o espaçamento inferior */

  @media screen and (max-width: 800px) {
        font-size: 18px;
        }   
`;

const CompanyDetailItem = styled.p`
  margin-bottom: 15px; /* Adicionando espaçamento entre os itens */
`;


const AddressMap = styled.iframe`
    width: 100%;
    height: 400px;
`;

const Address = () => {
    return (
      <AddressSection id="local">
        <AddressTest>Onde estamos</AddressTest>
        <AddressContainer>
            <AddressMap
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d139172.7987078597!2d-46.62194600759707!3d-23.561812277230786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1712083905511!5m2!1spt-BR!2sbr"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></AddressMap>
            <AddressContent>
                <CitiesList>
                    <AddressTitle>Nossos diferenciais:</AddressTitle>
                    <ul>
                        <CityItem>
                        <i class="fa fa-check"></i> Qualidade e garantia dos produtos
                        </CityItem>
                        <CityItem>
                        <i class="fa fa-check"></i> Atendimento personalizado
                        </CityItem>
                        <CityItem>
                        <i class="fa fa-check"></i> Produtos sob medida, adequados ao seu projeto
                        </CityItem>
                        <CityItem>
                        <i class="fa fa-check"></i> Rapidez na entrega
                        </CityItem>
                        <CityItem>
                        <i class="fa fa-check"></i> Equipe de instalação especializada
                        </CityItem>
                    </ul>
                </CitiesList>
                <div>
                    <CompanyDetails>
                        <CompanyDetailItem><i class="fa-solid fa-location-dot"></i> Atendimento em toda capital</CompanyDetailItem>
                        <CompanyDetailItem><i class="fa-solid fa-calendar-days"></i> Dias de Atendimento: Segunda a Sexta das 8h ás 18h</CompanyDetailItem>
                        <CompanyDetailItem><i class="fa-solid fa-envelope"></i> Email: contato@empresa.com</CompanyDetailItem>
                        <CompanyDetailItem><i class="fa-brands fa-whatsapp"></i> Telefone Celular: (11) 91234-5678</CompanyDetailItem>
                        <CompanyDetailItem><i class="fa-solid fa-phone"></i> Telefone Fixo: (11) 3456-7890</CompanyDetailItem>
                    </CompanyDetails>
                </div>
            </AddressContent>
        </AddressContainer>
      </AddressSection>
    );
};

export default Address;
