import React, { useState } from "react";
import styled from "styled-components"
import { cyan300, white} from "../UI/colors"

const StyledHeader = styled.header`
    box-shadow: 0 1px 2px;
    background: ghostwhite;
    box-shadow: 0px 0px 20px ${white};
    position: fixed;
    width: 100%;
    z-index: 1;
    border-bottom: 1px solid green;
`

const NavCenter = styled.nav`
    @media screen and (min-width: 800px) {
        align-items: center;
        display: flex;
        justify-content: space-around;
        max-width: 1170px;
        margin: 10px auto;
    }
`

const NavHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 15px;

    @media screen and (min-width: 800px) {
        .nav-header {
        padding: 0;
        }
    }
`

const BtnNavBar = styled.button`
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: green;
    cursor: pointer;
    transition: 1s;

    @media screen and (min-width: 800px) {
        display: none;
    }

`
const Links = styled.ul`
    list-style-type: none;
    font-family: "Josefin Sans", sans-serif;
    height: 0;
    overflow: hidden;
    transition: 1s;

    height: ${props => (props.showLinks ? '200px' : '0')};
    transition: height 0.5s ease-in-out;


    @media screen and (min-width: 800px) {
        display: flex;
        height: auto;
    }
`

const HeaderMainLink = styled.a`
    color: green;
    display: block;
    font-size: 18px;
    font-family: "Josefin Sans", sans-serif;
    padding: 10px 10px;
    text-decoration: none;
    transition: 1s;

    &:hover {
        color: ${cyan300};
        text-decoration: underline;
        transition: 1s;
      }
`

const SocialIcons = styled.ul`
    display: none;
    font-size: 40px;
    
    @media screen and (min-width: 800px) {
        display: flex;
        color: #B3B7EE;
    }

    li a {
        &:hover {
            color: ${cyan300};
            transition: 1s;
        }

        @media screen and (min-width: 800px) {
            color: green;
            margin: 0 0.5rem;
            transition: var(--transition);
        }      
      }
`

const LogoText = styled.p`
    color: green;
    font-weight: bold;
    font-size: 22px;
    font-family: "Josefin Sans", sans-serif;

    @media screen and (max-width: 1200px) {
        font-size: 20px;
    }
`

const Header = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <StyledHeader>
            <NavCenter>
                <NavHeader>
                    <BtnNavBar id="navbar-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <i className="fas fa-bars"></i>
                    </BtnNavBar>
                    <LogoText>{"EWN Vidros"}</LogoText>
                </NavHeader>
                <Links id="navbar-link" showLinks={showLinks}>
                    <li><HeaderMainLink href="#main">Início</HeaderMainLink></li>
                    <li><HeaderMainLink href="#about">Sobre</HeaderMainLink></li>
                    <li><HeaderMainLink href="#works">Serviços</HeaderMainLink></li>
                    <li><HeaderMainLink href="#local">Local</HeaderMainLink></li>
                    <li><HeaderMainLink href="#orçamento">Orçamento</HeaderMainLink></li>
                </Links>
                <SocialIcons>
                    <li>
                        <a href="" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    {/* <li>
                        <a href="" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li> */}
                    <li>
                        <a href="" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </SocialIcons>
            </NavCenter>
        </StyledHeader>
    )
}

export default Header;