import React from "react";
import styled from "styled-components";
import aboutImage from "../asset/aboutImage.png";
import hero from "../asset/hero.jpg";
import team1 from "../asset/team1.jpg";
import team2 from "../asset/team2.jpg";
import team3 from "../asset/team3.jpg";
import team4 from "../asset/team4.jpg";
import Footer from "../components/Footer";
import { imageZoomEffect } from "./ReusableStyles";

const AboutPage = () => {
  return (
    <>
      <HerosSection id="hero">
        <div className="background">
          <img src={aboutImage} alt="Background Image" />
        </div>
        <div className="content">
          <div className="info">
            <h1>
              About <span>Restaurant Guide</span>
            </h1>
            <p>
              We are your trusted partner in discovering the best dining
              experiences. With our comprehensive restaurant listings, detailed
              reviews, and real-time updates, we ensure every meal is memorable.
            </p>
          </div>
        </div>
      </HerosSection>

      <MissionSection id="mission">
        <div className="content">
          <h1>Our Mission</h1>
          <p>
            At Restaurant Guide, our mission is to connect food lovers with the
            best dining options available, making every meal special. Whether
            you're looking for fine dining or casual eats, we've got you
            covered.
          </p>
        </div>
      </MissionSection>

      <TeamSection>
        <div className="title">
          <h1>Meet Our Team</h1>
          <p>
            Our passionate team of food enthusiasts and tech experts works
            tirelessly to bring you the most accurate and up-to-date restaurant
            information.
          </p>
        </div>
        <div className="team">
          <div className="member">
            <img src={team1} alt="Team Member 1" />
            <h3>Papatsiri Apipaiboon</h3>
            <p>Developer</p>
          </div>
          <div className="member">
            <img src={team2} alt="Team Member 2" />
            <h3>Palatip Jantawong</h3>
            <p>Developer</p>
          </div>
          <div className="member">
            <img src={team3} alt="Team Member 1" />
            <h3>Rinrada Thepkaew</h3>
            <p>Developer</p>
          </div>
          <div className="member">
            <img src={team4} alt="Team Member 2" />
            <h3>Thanyalak Susuk</h3>
            <p>Developer</p>
          </div>
        </div>
      </TeamSection>

      <Footer />
    </>
  );
};

export default AboutPage;

// Styled Components
const MissionSection = styled.section`
  background-color: #f9f9f9;
  padding: 10rem 2rem;
  text-align: center;
  h1 {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    color: #fc4958;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  p {
    line-height: 1.8rem;
    color: black;
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    padding: 3rem 1rem;
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const HerosSection = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
    }
  }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;

    .info {
      max-width: 800px;
      margin: 0 auto;
      h1 {
        font-family: "Nunito", sans-serif;
        font-weight: 800;
        font-size: 3.5rem;
        line-height: 1.2;
        span {
          color: #fc4958;
        }
      }
      p {
        margin-top: 1rem;
        line-height: 1.8rem;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    height: auto; /* Adjust height for smaller screens */
    .content {
      top: 20%;
      transform: translate(-50%, 0); /* Adjust positioning */
      .info {
        max-width: 90%;
        h1 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
  }
`;

const TeamSection = styled.section`
  padding: 4rem 2rem;
  .title {
    text-align: center;
    margin-bottom: 2rem;
    font-family: "Nunito", sans-serif;
    h1 {
      font-family: "Nunito", sans-serif;
      font-weight: 800;
      font-size: 2rem;
      color: #fc4958;
    }
  }
  .team {
    display: flex;
    justify-content: center;
    gap: 2rem;
    .member {
      text-align: center;
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        ${imageZoomEffect};
      }
      h3 {
        margin-top: 1rem;
        font-size: 1.2rem;
      }
      p {
        font-family: "Nunito", sans-serif;
        font-size: 0.9rem;
        color: gray;
      }
    }
  }
  @media (max-width: 768px) {
    .team {
      flex-direction: column;
      align-items: center;
    }
  }
`;
