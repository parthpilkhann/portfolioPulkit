import "./mainPage.css";
import { Parallax } from "react-parallax";
import Bg1 from "../img/bg1.jpg"
import Bg2 from "../img/bg2.jpg"
import Bg3 from "../img/bg3.jpeg"

export default function MainPage() {

  return (
    <div className='container'>
      <Parallax strength={200} bgImage={Bg1} >
        <div className="intro">
          <div className="topbar">
            {/* <div className="btnContainer">
              <button className='btn'>HOME</button>
              <button className='btn'>THE TOMAR'S</button>
              <button className='btn'>LATEST WORK</button>
              <button className='btn'>THE BLOG</button>
              <button className='btn'>BOOK NOW</button>
            </div> */}
          </div>
          <div className="name">
            <p className='booking'>BOOKING EVERYWHERE</p>
            <h1 className='brandName'>PULKIT TOMAR</h1>
            <h4 className='ownersName' >BY TOMAR'S</h4>
          </div>
          <div className='downArrowContainer'>
            <i className="fa-solid fa-chevron-down arrow"></i>
          </div>
        </div>
      </Parallax>

      <div className="whatWeDo1">
        <div className="upperContainer">
          <p className="upperTxt">
          COMBINING TRUE EMOTIONS & AN EDITORIAL STYLE TO CREATE TIMELESS + BOLD IMAGERY.
          </p>
        </div>
        <div className="lowerContainer">
          <div className="leftContainer">
            <p className='leftTxt' >For the the couple who wants to stand out, embrace their quirks, be creative, collaborative and bold, and have the freaking best time on their wedding day!</p>
            <img className='leftImg1' src={require("../img/l1.jpg")} alt="not found" />
            {/* <Breakpoint m down >
              <img className='rightImg2' src={require("../img/r1.jpg")} alt="not found" />
              <img className='rightImg2' src={require("../img/r2.jpg")} alt="not found" />
            </Breakpoint> */}
          </div>
          {/* <Breakpoint m up> */}
          <div className="rightContainer">
            <img className='rightImg2' src={require("../img/r1.jpg")} alt="not found" />
            <img className='rightImg2' src={require("../img/r2.jpg")} alt="not found" />
            <img className='rightImg3' src={require("../img/r3.jpg")} alt="not found" />
          </div>
          {/* </Breakpoint> */}
        </div>
      </div>

      <Parallax strength={200} bgImage={Bg2} >
        <div className="whatWeDo2">
          <div>
            <h1>FOR THOSE IN LOVE + BOLDLY DRESSED</h1>
            <h6>YOU ARE UNIQUE AND YOUR PHOTOS SHOULD REFLECT THAT</h6>
          </div>
        </div>
      </Parallax>

      <div className="about">
        <div className="headingContainer">
          <h1 className="headingTxt">
            About Me
          </h1>
        </div>
        <div className="aboutDetail">
          <div className="aboutTxtContainer">
            <p className="aboutTxt">
              Pulkit is a photographer and a filmmaker currently based in Dehradun, India. His work has a vintage taste and explores the unusual beauty of the human face.He was a winner & among the Top 10 Fashion Photographers of Fashion Design Council of India's Wall of Frame Contest. His film has also been a winner in International Rare Disease Film Festival, Berlin.
            </p>
          </div>
          <div className="aboutPicContainer">
            <img className='aboutPic' src={require("../img/dp.jpg")} alt="not found" />
          </div>
        </div>
      </div>

      <Parallax strength={200} bgImage={Bg3} >
        <div className="featured">
          <div className="featuredTxt">
            <h1>RECENTLY FEATURED IN</h1>
            <p>Photovogue by Vogue Italia , International Rare Disease Film Festival – Berlin , Young Uttarakhand Cine Awards</p>
          </div>
        </div>
      </Parallax>

      <div className="contactContainer">
        <div className="logos">
          <a href="http://instagram.com/creatingtales" target={"_blank"} rel="noreferrer" >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/creatingtales" target={"_blank"} rel="noreferrer" >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCtI4qv5yjbQ-TuMRQenmZ2A" target={"_blank"} rel="noreferrer" >
          <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="contactDetails">
        <p>pulkittomar@gmail.com | <a target={"_blank"} rel="noreferrer" href="http://creatingtales.com">www.creatingtales.com</a></p>
      </div>

    </div>
  )
}
