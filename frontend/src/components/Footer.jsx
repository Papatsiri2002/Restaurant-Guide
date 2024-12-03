import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import logo from "../asset/logo.png"; // Ensure the path to your logo is correct

const Footer = () => (
  <>
    <FooterSection>
      <div className="brand container">
        <img src={logo} alt="Logo" />
        <p>
          Your go-to guide for discovering, reviewing, and enjoying the best
          restaurants!
        </p>
        <ul>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <GrLinkedinOption />
          </li>
          <li>
            <BsTwitter />
          </li>
        </ul>
      </div>
      <div className="about container">
        <div className="title">
          <h3>About Us</h3>
        </div>
        <p>
          Discover the best restaurants with our easy-to-use guide. We provide
          up-to-date listings, reviews, and detailed information to help you
          find the perfect dining experience near you.
        </p>
      </div>
      <div className="contact container">
        <div className="title">
          <h3>Contact Us</h3>
        </div>
        <p>+66 654552714</p>
        <p>restaurantguide@gmail.com</p>
        <p>@restaurantguide</p>
        <p>412 Street, Ground Floor, Thailand</p>
      </div>
    </FooterSection>

    {/* Lower Footer */}
    <LowerFooter>
      <h2>
        Copyright &copy; 2024 <span>Restaurant Guide</span>
      </h2>
    </LowerFooter>
  </>
);

export default Footer;

const FooterSection = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #fc4958, #e85d04);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 50vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;
