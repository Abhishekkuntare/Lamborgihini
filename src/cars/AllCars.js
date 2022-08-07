import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Zoom from 'react-reveal/Zoom';

function AllCars({ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14 }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };
  return (
    <>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img
              src={img1} alt="" />
          </a>
          <div class="layer">

            <Zoom left cascade>
              <h3>AVENTADOR ULIMAE  </h3>
            </Zoom>
            <img src="https://logodix.com/logo/1675374.jpg" alt="" />
          </div>
        </Wrap>
        <Wrap>
          <a>
            <img
              src={img2} alt="" />
          </a>
          <div class="layer">


            <h3>AVENTADOR ULTIMATE ROADSTER </h3>

            <img src="https://logodix.com/logo/1675374.jpg" alt="" />


          </div>
        </Wrap>
        <Wrap>
          <a>
            <img
              src={img3} alt="" />
          </a>
          <div class="layer">


            <h3>AVENTADOR SVG ROADSTER </h3>

            <img src="https://logodix.com/logo/1675374.jpg" alt="" />

          </div>
        </Wrap>
        <Wrap>
          <a>
            <img
              src={img4} alt="" />
          </a>
          <div class="layer">

            <h3>AVENTADOR SVG SHAPE </h3>

            <img src="https://logodix.com/logo/1675374.jpg" alt="" />

          </div>
        </Wrap>
        <Wrap>
          <a>
            <img
              src={img5} alt="" />
          </a>
          <div class="layer">

            <h3>AVENTADOR SVG FUTRURE </h3>

            <img src="https://logodix.com/logo/1675374.jpg" alt="" />

          </div>
        </Wrap>
      </Carousel>


      {/* 2nd car */}

      <Carousel {...settings}>
        <Wrap>
          <a>
            <img
              src={img6} alt="" />
          </a>
          <div class="layer">

            <Zoom left cascade>
              <h3>HURACÁN STO </h3>
            </Zoom>
            <img src="https://logowiki.net/wp-content/uploads/imgp/Lamborghini-Huracan-Spyder-Logo-1-8870.jpg" alt="" />
          </div>
        </Wrap>
        <Wrap>
          <a>
            <img
              src={img7} alt="" />
          </a>
          <div class="layer">


            <h3>HURACÁN EVO FLVO CAPSULE </h3>

            <img src="https://logowiki.net/wp-content/uploads/imgp/Lamborghini-Huracan-Spyder-Logo-1-8870.jpg" alt="" />


          </div>
        </Wrap>
        <Wrap>
          <a>
            <img
              src={img8} alt="" />
          </a>
          <div class="layer">


            <h3>HURACÁN EVO RWD SPYDER  </h3>

            <img src="https://logowiki.net/wp-content/uploads/imgp/Lamborghini-Huracan-Spyder-Logo-1-8870.jpg" alt="" />

          </div>
        </Wrap>
        <Wrap>
          <a>
            <img
              src={img9} alt="" />
          </a>
          <div class="layer">

            <h3>HURACÁN EVO RWD  </h3>

            <img src="https://logowiki.net/wp-content/uploads/imgp/Lamborghini-Huracan-Spyder-Logo-1-8870.jpg" alt="" />

          </div>
        </Wrap>
        <Wrap>
          <a>
            <img
              src={img10} alt="" />
          </a>
          <div class="layer">

            <h3>HURACÁN EVO SPYDER  </h3>

            <img src="https://logowiki.net/wp-content/uploads/imgp/Lamborghini-Huracan-Spyder-Logo-1-8870.jpg" alt="" />

          </div>
        </Wrap>
        <Wrap>
          <a>
            <img
              src={img11} alt="" />
          </a>
          <div class="layer">

            <h3>HURACÁN EVO  </h3>

            <img src="https://logowiki.net/wp-content/uploads/imgp/Lamborghini-Huracan-Spyder-Logo-1-8870.jpg" alt="" />

          </div>
        </Wrap>
      </Carousel>


      {/* 3rd car */}


      <Carousel {...settings}>
        <Wrap>
          <a>
            <img
              src={img12} alt="" />
          </a>
          <div class="layer">

            <Zoom left cascade>
              <h3>URUS GRAPHITE CAPSULE </h3>
            </Zoom>
            <img src="https://qph.fs.quoracdn.net/main-qimg-948becdd216c3bc7f877345d7ebcf32b" alt="" />
          </div>
        </Wrap>
        <Wrap>
          <a>
            <img
              src={img13} alt="" />
          </a>
          <div class="layer">


            <h3>URUS PEARL CAPSULE</h3>

            <img src="https://qph.fs.quoracdn.net/main-qimg-948becdd216c3bc7f877345d7ebcf32b" alt="" />


          </div>
        </Wrap>
        <Wrap>
          <a>
            <img
              src={img14} alt="" />
          </a>
          <div class="layer">


            <h3>URUS  </h3>

            <img src="https://qph.fs.quoracdn.net/main-qimg-948becdd216c3bc7f877345d7ebcf32b" alt="" />

          </div>
        </Wrap>
      </Carousel>
    </>

  );
}

export default AllCars

const Carousel = styled(Slider)`
  margin-top:110px;
  overflow-y: hidden;
    overflow-x: hidden;
    overflow: hidden;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
      
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

div{
    
        width: 100%;
        height: 100%;
        position: absolute;
        background: transparent;
        top: 0;
        left: 0;
        transition: 0.5s ease-in-out;

      &:hover {
        background: rgba(5, 4, 0, 0.7);
      }

      img{
       width:400px;
        bottom: 10%;
        left:60%;
        transform: translateY(-50%);
        position: absolute;
        transition: 0.5s ease-in-out;
        

        @media all and (max-width: 1007px){
            width:300px;
          }

        @media all and (max-width: 749px){
            width:200px;
          }

        @media all and (max-width: 516px){
            width:170px;
          }

        @media all and (max-width: 415px){
            width:130px;
          }
      }
}


h3{
 
    font-weight: 800;
    color: goldenrod;
    font-size:3rem;
    bottom: 30%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    left:60%;
    transform: translateY(-50%);
    position: absolute;
    transition: 0.5s ease-in-out;
  
      @media all and (max-width: 1007px){
        font-size:2rem;
      }

      @media all and (max-width: 749px){
        font-size:1.7rem;
      }

      @media all and (max-width: 634px){
        font-size:1.2rem;
      }
      @media all and (max-width: 474px){
        font-size:1rem;
      }

      @media all and (max-width: 377px){
        font-size:0.7rem;
      }
}

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 60%;
      height: 100%;
    }

    &:hover {
      cursor: pointer;
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;