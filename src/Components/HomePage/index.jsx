import React from "react";
import styled from "styled-components";
import Image1 from "../../Assets/img1.jpg";
import Image2 from "../../Assets/img2.jpg";


const HomePageCarousel = styled.div`
    position: relative;
    width: 100%;
`;


const HomePageImage = styled.img`
    height: 400px;
    width: 100%;
    object-fit: cover;
`;

const HomePageCarouselText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 40px;
    font-family: "Josefin Sans", sans-serif;
    text-align: center;
    text-shadow: black 7px 7px 5px;
`;


const HomePage = () => {
    return (
        <section id="main">
            <HomePageCarousel id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <HomePageImage src={Image1} className="d-block w-100" alt="..." />
                        <HomePageCarouselText>
                            <p>Sua vidraçaria de confiança em São Paulo, onde a qualidade é nossa prioridade.</p>
                        </HomePageCarouselText>
                    </div>
                    <div className="carousel-item">
                        <HomePageImage src={Image2} className="d-block w-100" alt="..." />
                        <HomePageCarouselText>
                            <p>Adicione elegância e funcionalidade ao seu ambiente, com nossos vidros em São Paulo.</p>
                        </HomePageCarouselText>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </HomePageCarousel>
            
        </section>
    );
};

export default HomePage;




