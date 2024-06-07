import React from 'react';
import styled from 'styled-components';

const BudgetSection = styled.section`
    border-top: 1px solid green;
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

const PageTitle = styled.h1`
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

const Subtitle = styled.p`
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1rem;
  text-align: center;
  color: green;
  margin: 5px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55vh;
  margin: 20px;
`;

const Form = styled.form`
  border: 1px solid #e3e3e3;
  padding: 20px;
  border-radius: 0;
  max-width: 600px; /* Ajuste o tamanho máximo do formulário conforme necessário */
  width: 100%; /* Ocupa toda a largura disponível */
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-family: "Josefin Sans", sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const Button = styled.button`
  background-color: green;
  color: #fff;
  border: none;
  font-family: "Josefin Sans", sans-serif;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const BudgetMap = styled.iframe`
  width: 100%;
  height: 400px;
`

const ContactForm = () => {
  return (
    <BudgetSection id="orçamento">
      <PageTitle>Solicite um orçamento!</PageTitle>
      <Subtitle>Por favor, preencha o formulário abaixo para entrar em contato conosco.</Subtitle>
      <FormContainer>
        <Form action="" method="POST">
          <FormGroup>
            <Label htmlFor="name">Nome:</Label>
            <Input type="text" id="name" name="name" required/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Telefone:</Label>
            <Input type="tel" id="phone" name="phone" required placeholder="+55 (11) 91234-5678"/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" required placeholder="seuemail@dominio.com"/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Mensagem:</Label>
            <TextArea id="message" name="message" rows="4" required/>
          </FormGroup>
          <Button type="submit">Enviar</Button>
        </Form>
      </FormContainer>
    </BudgetSection>
  );
};

export default ContactForm;