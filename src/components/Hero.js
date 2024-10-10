import React from 'react';
import VasanthImg from '../assets/vasanth.jpg';
import ResumePdf from '../assets/current CV.pdf';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: () => (
      <div className="custom-dot"></div>
    ),
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    )
  };

  const config = {
    subtitle: 'I\'m a Frontend and Backend Developer',
    link: ResumePdf
  };

  return (
    <div className='slick-slider  slick-list slick-track'id='#hero'>
      <h2> React Slick Carousel </h2>
      <Slider {...settings}>
        <div className="wanted-poster">
          {/* WANTED TITLE */}
          <a href='#projects' className="wanted-title">Work view</a>

          {/* CHARACTER IMAGE */}
          <img
            className="poster-image"
            src={VasanthImg}
            alt="VASANTH.S"
          />

          {/* CHARACTER NAME */}
          <h2 className="poster-name">VASANTH.S</h2>

          {/* BOUNTY AMOUNT */}
          <p className="poster-bounty">$ flexible</p>

          {/* HIRE ME BUTTON */}
          <a href="mailto:cssvasanth@gmail.com" className="hire-me-button">
            <p className="hire-text">Hire Me</p>
          </a>

          {/* SOFTWARE DEVELOPER ROLE */}
          <p className="poster-role">Software Developer</p>

          {/* MARINE CODE */}
          <p className="poster-code pb-3">Frontend and Backend</p>
        </div>
        <div className="wanted-poster">
          {/* WANTED TITLE */}
          <a href='#education' className="wanted-title">Wanted</a>

          {/* CHARACTER IMAGE */}
          <img
            className="poster-image"
            src={VasanthImg}
            alt="VASANTH.S"
          />

          {/* CHARACTER NAME */}
          <h2 className="poster-name">VASANTH.S</h2>

          {/* BOUNTY AMOUNT */}
          <div className=' justify-center flex py-2 poster-con'>
            <a href='https://github.com/vasanthselva'className='pr-5 '><FaGithub size={20} /></a>
            <a href='https://www.linkedin.com/in/vasanth-selvakumar/'className='pr-5 '><FaLinkedinIn size={20} /></a>
            <a href='https://www.instagram.com/vasanthx._/'className=''><FaInstagram size={20} /></a>
        </div>

          {/* HIRE ME BUTTON */}
          <a href={config.link} className="hire-me-button">
            <p className="hire-text">Resume</p>
          </a>

          {/* SOFTWARE DEVELOPER ROLE */}
          <p className="poster-role">Software Developer</p>

          {/* MARINE CODE */}
          <p className="poster-code pb-3">Frontend and Backend</p>
        </div>
        <div className="wanted-poster">
          {/* WANTED TITLE */}
          <a href='#contact' className="wanted-title">contact</a>

          {/* CHARACTER IMAGE */}
          <img
            className="poster-image"
            src={VasanthImg}
            alt="VASANTH.S"
          />

          {/* CHARACTER NAME */}
          <h2 className="poster-name">VASANTH.S</h2>

          {/* BOUNTY AMOUNT */}
          <p className="poster-bounty">IT Field</p>

          {/* HIRE ME BUTTON */}
          <a href="#skills" className="hire-me-button rounded-lg">
            <p className="hire-text">Skills</p>
          </a>

          {/* SOFTWARE DEVELOPER ROLE */}
          <p className="poster-role">Software Developer</p>

          {/* MARINE CODE */}
          <p className="poster-code pb-3">Frontend and Backend</p>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
