import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hero from "../asset/hero.jpg";
import heroDesign from "../asset/HeroDesign.png";
import Services1 from "../asset/Services1.png";
import Services2 from "../asset/Services2.png";
import Services3 from "../asset/Services3.png";
import background from "../asset/Background.jpg";
import avatar1 from "../asset/avatar1.png";
import Footer from "../components/Footer";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
const HomePage = () => {
  return (
    <>
      <HeroSection id="hero">
        <div className="background">
          <img src={hero} alt="Background Image" />
        </div>
        <div className="content">
          <div className="sale">
            <img src={heroDesign} alt="" />
            <h1>
              EXPLORE
              <span>Restaurant</span>
            </h1>
          </div>
          <div className="info">
            <h2>Let Us Guide</h2>
            <em>
              Find the perfect restaurant for every craving! Your ultimate guide
              to the best dining experience.
            </em>
          </div>
        </div>
      </HeroSection>

      <ServiceSection id="services">
        <div className="title">
          <h1 className="yellow">What we do?</h1>
          <p>
            We offer an extensive restaurant list, helping you discover great
            places to eat. Add, update, or remove listings with ease <br /> for
            an up-to-date guide.
          </p>
        </div>
        <div className="services">
          <div className="service">
            <img src={Services2} alt="" />
            <p>
              <b>Create New Restaurants</b> <br />
              <span> Add new dining spots to our comprehensive guide.</span>
            </p>
          </div>
          <div className="service yellow">
            <img src={Services1} alt="" />
            <p>
              <b>Update Listings</b> <br />
              <span> Keep restaurant information fresh and accurate.</span>
            </p>
          </div>
          <div className="service">
            <img src={Services3} alt="" />
            <p>
              <b>Delete Listings</b> <br />
              <span> Remove outdated or closed restaurant entries.</span>
            </p>
          </div>
        </div>
      </ServiceSection>

      <BgSection id="background">
        <div className="background">
          <img src={background} alt="" />
        </div>
        <div className="content">
          <h1>Discover Your Next Favorite Dining Spot!</h1>
          <h2>
            Are you ready to explore the best dining experiences around?
            Restaurant Guide is your go-to resource for discovering top-rated
            restaurants, hidden gems, and exclusive reviews.
          </h2>
          <Link to="/List">
            <button>Explore Restaurant</button>
          </Link>
        </div>
      </BgSection>

      <ReviewSection id="testimonials">
        <div className="container">
          <div className="title">
            <h1>
              <span>What</span> Customers Says
            </h1>
          </div>
          <div className="testimonials">
            <div className="testimonial">
              <div className="image">
                <img src={avatar1} alt="" />
              </div>
              <p>
                This guide made finding the best restaurants so easy!{" "}
                <span>Highly recommend it!</span>
              </p>
            </div>
            <div className="testimonial">
              <div className="image">
                <img src={avatar1} alt="" />
              </div>
              <p>
                I love how up-to-date the listings are.{" "}
                <span>Perfect tool for dining out!</span>{" "}
              </p>
            </div>
            <div className="testimonial">
              <div className="image">
                <img src={avatar1} alt="" />
              </div>
              <p>
                A fantastic resource for discovering new places to eat.{" "}
                <span>Very user-friendly!</span>
              </p>
            </div>
          </div>
        </div>
      </ReviewSection>
      <Footer />
    </>
  );
};
export default HomePage;

// Hero
const HeroSection = styled.section`
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
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 10%;
      img {
        height: 70vh;
      }
      h1 {
        color: white;
        font-weight: 800;
        position: absolute;
        top: 25vh;
        left: 15vh;
        font-size: 4.5rem;
        span {
          display: block;
          font-size: 4vw;
        }
      }
    }
    .info {
      font-family: "Nunito", sans-serif;
      font-weight: 800;
      position: absolute;
      top: 40%;
      right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2 {
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.2rem;
      }
      em {
        color: white;
        width: 60%;
        text-align: end;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
// Service
const ServiceSection = styled.section`
  font-family: "Nunito", sans-serif;
  margin: 4rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        margin-bottom: 4rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;

// Background
const BgSection = styled.section`
  margin: 5vw;
  height: 80vh;
  position: relative;
  border-radius: 5rem;
  &:hover {
    .background {
      img {
        transform: scale(1.2);
      }
    }
  }
  .background {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    border-radius: 1rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      border-radius: 1rem;
      transition: 0.8s ease-in-out;
    }
  }
  .content {
    position: absolute;
    top: 25%;
    left: 10%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    h1 {
      font-size: 3rem;
      font-family: "Nunito", sans-serif;
      font-weight: 800;
      width: 60%;
    }
    h2 {
      font-family: "Nunito", sans-serif;
      font-weight: 600;
      width: 60%;
    }
    button {
      border: none;
      padding: 1rem 4rem;
      font-weight: 600;
      font-size: 1.4rem;
      color: white;
      border-radius: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      background: linear-gradient(to right, #fc4958, #e85d04);
      text-transform: uppercase;
      &:hover {
        background: linear-gradient(to right, #e85d04, #fc4958);
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    /* display: none; */
    .content {
      h1 {
        width: 90%;
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.2em;
        width: 90%;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  }
`;

// Review
const ReviewSection = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: center;
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #fc4958;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;
