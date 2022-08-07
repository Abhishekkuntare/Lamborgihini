import React, { useState } from "react";
import "./Nav.css";
import { Clear } from "@material-ui/icons";
import styled from "styled-components";
import { useHistory } from "react-router";
import Fade from "react-reveal/Fade";

const Nav = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [navDown, setNavDown] = useState(false);

  const history = useHistory();
  return (
    <div className="nav nav__black">
      <div className="nav__content">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://www.lamborghini.com/sites/it-en/files/themes/custom/lambo_facelift_2019/images/logo.png"
          alt=""
        />
        <NavMenu>
          <div className="right_menu">
            <a className="menu_button" onClick={() => history.push("/allCars")}>
              MODELS
            </a>
            <div className="dropdown_menu">
              <p
                onClick={() => history.push("/aventodor")}
                className="google_hover"
              >
                {" "}
                AVENTADOR
              </p>

              <p onClick={() => history.push("/huracan")}>HURACÁN</p>

              <p onClick={() => history.push("/urus")}>URUS</p>

              <p onClick={() => history.push("/terzo")}>TERZO MILLENNIO</p>

              <p>PRE-OWNED</p>
              <p>LIMITED SERIES</p>
              <p>CONCEPT</p>
            </div>
          </div>
          <a className="navbar_title">
            <span onClick={() => history.push("/contact")}>MUSEUM</span>
          </a>
          <div className="right_menu">
            <a
              className="menu_button"
              onClick={() => history.push("/customization")}
            >
              CUSTOM SOLUTIONS
            </a>
            <div className="dropdown_menu_two">
              <p
                onClick={() => history.push("/customization")}
                className="google_hover"
              >
                CUSTOMIZATION
              </p>

              <p>ACCESSORIES</p>
              <p>FINANCIAL SERVICES</p>
            </div>
          </div>
          <a className="navbar_title">
            <span>DEALERSHIPS</span>
          </a>

          <div className="right_menu">
            <a className="menu_button">OWNERSHIP</a>
            <div className="dropdown_menu_three">
              <p className="google_hover"> CONNECTIVITY</p>
              <p>CUSTOMER APP</p>
              <p>CLASSICS</p>
              <p>SPARE PARTS</p>
              <p>ASSISTANCE </p>
              <p>MAINTENANCE</p>
            </div>
          </div>
          <a className="navbar_title">
            <span>STORE</span>
          </a>
          <div className="right_menu">
            <a className="menu_button"> MOTORSPORT</a>
            <div className="dropdown_menu_four">
              <p className="google_hover"> SUPER TROFEO</p>
              <p>GT3</p>
              <p>MOTORSPORT MODELS</p>
              <p>DRIVERS</p>
              <p>MOTORSPORT NEWS </p>
              <p>EXPERIENCE</p>
              <p>ESPORTS</p>
            </div>
          </div>
        </NavMenu>

        <i
          onClick={() => setBurgerStatus(true)}
          className="nav__avatar"
          class="far fa-comment-alt"
        ></i>
        <i
          onClick={() => setNavDown(true)}
          className="nav__avatar"
          class="fas fa-search"
        ></i>
        <i
          onClick={() => history.push("/proflieScreen")}
          className="nav__avatar"
          class="fas fa-user-astronaut"
        ></i>

        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClear onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>

          <Fade top>
            <p>HEY THERE 👋</p>
          </Fade>

          <Des>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Hey, ask me something..."
            ></textarea>
            <h5>send</h5>

            <p>I'm Lamborghini's first Artificial Intelligence,</p>

            <h6> how can I help you?</h6>

            <hr />

            <p> You canchoose one of the suggestions</p>

            <h6>or ask me a question ?</h6>
          </Des>

          <li>
            <a onClick={() => history.push("/AllCars")}>MODELS</a>
          </li>
          <li>
            <a href="/aventodor"> AVENTADOR</a>
          </li>
          <li>
            <a href="/huracan">HURACÁN</a>
          </li>
          <li>
            <a href="/urus"> URUS</a>
          </li>
          <li>
            <a href="/terzo">TERZO MILLENNIO</a>
          </li>
          <li>
            <a href="/sports">SPORTS</a>
          </li>
          <li>
            <a href="/customization"> CUSTOMIZATION</a>
          </li>
        </BurgerNav>

        {/* search item********** */}

        <Search show={navDown}>
          {/* for closing the search item  */}

          <CloseWrapper>
            <Fade bottom>
              <p>CLOSE SEARCH</p>
            </Fade>

            <CustomClear onClick={() => setNavDown(false)} />
          </CloseWrapper>

          <Fade bottom>
            <p>LAMBORGHINI</p>
          </Fade>

          <Fade top>
            <span>SEARCH IN THE WEBSITE</span>
          </Fade>

          <Placeholder>
            <input type="text" placeholder="Search On Lamborgihini.com" />
            <h3>SEARCH</h3>
          </Placeholder>
        </Search>
      </div>
    </div>
  );
};

export default Nav;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 167px;
  margin-top: 16px;

  @media (max-width: 1200px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    font-weight: 300px;

    span {
      color: #fff;
      font-weight: 300;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      font-size: 1rem;
      cursor: pointer;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const BurgerNav = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 431px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  p {
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 1;
    font-weight: 500;
    padding: 20px;
  }
  li {
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border: 1px solid #e8e8e8;
    color: #181818;
    vertical-align: middle;
    border: 1px solid #e8e8e8;
    border-radius: 0;
    white-space: "wrap";
    width: 100%;
    cursor: pointer;
    display: table;
    margin-top: 1.5vw;
    &:hover {
      border: 1px solid black;
    }
  }
  a {
    font-weight: 600;
    transition: all 0.7s ease-in-out;
    text-decoration: none;
    color: #181818;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
      Segoe UI Symbol, Noto Color Emoji;
  }
  @media (max-width: 512px) {
    width: 100%;
  }
`;

// search item ***********************************************************
const Search = styled.div`
  overflow-y: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: #202020;
  width: 1519px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(100%)")};
  p {
    font-size: 3.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.97;
    letter-spacing: -0.128rem;
    text-align: left;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 2.4rem;
    padding-left: 10px;

    @media (max-width: 383px) {
      font-size: 3.2rem;
    }

    @media (max-width: 377px) {
      font-size: 2.2rem;
    }
  }
  span {
    font-size: 8.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.97;
    letter-spacing: -0.228rem;
    text-align: left;
    color: #fff;
    text-transform: uppercase;
    padding-left: 10px;

    @media (max-width: 1522px) {
      font-size: 6.2rem;
    }

    @media (max-width: 582px) {
      font-size: 5.2rem;
    }
    @media (max-width: 490px) {
      font-size: 4.2rem;
    }

    @media (max-width: 480px) {
      font-size: 3.2rem;
      letter-spacing: 1px;
    }

    @media (max-width: 473px) {
      font-size: 2.2rem;
    }

    @media (max-width: 403px) {
      font-size: 2.2rem;
    }

    @media (max-width: 382px) {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 1522px) {
    width: 1011px;
    overflow-y: scroll;
    font-size: 6.2rem;
  }

  @media (max-width: 822px) {
    width: 811px;
    overflow-y: scroll;
    font-size: 4.2rem;
  }

  @media (max-width: 722px) {
    width: 711px;
    overflow-y: scroll;
    font-size: 4.2rem;
  }

  @media (max-width: 685px) {
    width: 611px;
    overflow-y: scroll;
    font-size: 3.2rem;
  }

  @media (max-width: 585px) {
    width: 511px;
    overflow-y: scroll;
    font-size: 2.2rem;
  }

  @media (max-width: 483px) {
    width: 431px;
    overflow-y: scroll;
  }

  @media (max-width: 403px) {
    width: 411px;
    overflow-y: scroll;
    font-size: 1.2rem;
  }

  @media (max-width: 383px) {
    width: 411px;
    overflow-y: scroll;
    font-size: 1.2rem;
  }

  @media (max-width: 377px) {
    width: 374px;
    overflow-y: scroll;
    font-size: 1.2rem;
  }

  @media (max-width: 360px) {
    width: 350px;
    overflow-y: scroll;
    font-size: 1.2rem;
  }

  @media (max-width: 370px) {
    width: 350px;
    overflow-y: scroll;
    font-size: 1.2rem;
  }
`;

const Des = styled.div`
  p {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1;
    font-weight: 500;
    padding: 20px;
    letter-spacing: 2px;
    line-height: 22px;
  }
  h6 {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1;
    font-weight: 500;
    padding: 20px;
    letter-spacing: 2px;
    opacity: 0.8;
  }
  textarea {
    margin-top: 0px;
    margin-bottom: 0px;
    height: 65px;
    width: 367px;
    margin-left: 10px;
    padding: 10px;
    font-size: 16px;
    opacity: 0.7;

    @media (max-width: 600px) {
      width: 251px;
    }
  }
  h5 {
    text-align: center;
    align-items: center;
    opacity: 0.7;
    text-transform: uppercase;
  }
  &:hover {
    h5 {
      color: black;
      cursor: pointer;
    }
  }
`;

const Placeholder = styled.div`
font-style: italic;
padding:20px;

input{
margin-top: 5rem;
-webkit-transition: margin-top 0.3s ease-out;
transition: margin-top 0.3s ease-out;
font-size: 2.6rem;
border: none;
border-bottom: 1px solid #464646;
background:transparent;
padding: 1.3rem 0;
color: white;
line-height: 1;
font-style: italic;
width:72%;
outline:none;


@media (max-width: 1522px) {
    font-size: 2rem;
  }

@media (max-width: 522px) {
    font-size: 1rem;
  }
@media (max-width: 422px) {
    font-size: 1rem;
  }

@media (max-width: 403px) {
    font-size: 20px;
  }

@media (max-width: 377px) {
    font-size: 15px;
  }
}

h3{
    display: flex;
    align-items: end;
    justify-content: end;
    color: white;
    margin-top: -51px;
    padding-right: 394px;
    cursor:pointer;

    
    @media (max-width: 1500px) {
        padding-right: 254px;

    @media (max-width: 822px) {
        padding-right: 104px;

    @media (max-width: 722px) {
        padding-right: 84px;

    @media (max-width: 685px) {
        padding-right: 40px;

    @media (max-width: 585px) {
        padding-right: 30px;
        
    @media (max-width: 490px) {
        padding-right: 20px;

    @media (max-width: 404px) {
        padding-right: 0px;
         font-size:20px;
        
}

`;

const CustomClear = styled(Clear)`
  cursor: pointer;
  margin-top: 19px;
  font-size: 3rem;
  margin-top: 20px;
  margin-left: 17px;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  color: gray;

  p {
    font-size: 1.4rem;
    margin-top: 20px;
    letter-spacing: 1px;
  }
`;
