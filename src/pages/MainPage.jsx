import "./mainPage.css";
import { Parallax } from "react-parallax";
import Bg1 from "../img/bg1.jpg"
import Bg2 from "../img/bg2.jpg"
import Bg3 from "../img/bg3.jpg"

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
            Lorem ipsum, dolor sit amet consectetur reiciendis aut ea earum alias aliquam dolorum fugiat incidunt?
          </p>
        </div>
        <div className="lowerContainer">
          <div className="leftContainer">
            <p className='leftTxt' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, veritatis. Natus sed quod quia laudantium?</p>
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
            We're The 'Creating Tales'
          </h1>
        </div>
        <div className="aboutDetail">
          <div className="aboutTxtContainer">
            <p className="aboutTxt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam exercitationem reprehenderit deserunt earum dolorem nam aliquid deleniti consectetur quam, eius fugiat repudiandae atque itaque aliquam excepturi obcaecati. Earum quia, quos eum nulla voluptatum suscipit, ut officia saepe facilis corporis blanditiis laudantium quas natus nostrum molestiae vel possimus numquam, repudiandae perspiciatis
              repellat sit voluptate aut. Cupiditate nostrum consequatur ipsum id, hic consequuntur eius, nulla architecto dolorem sed placeat magnam odio. Omnis consequuntur animi, corporis ullam dolores numquam quo quibusdam. Accusamus eaque aliquid reprehenderit. Culpa, libero error ex beatae facere necessitatibus vero nobis reiciendis debitis labore cum accusamus cupiditate quo, fugiat minus!
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
          <a href="http://" target={"_blank"} >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="http://" target={"_blank"} >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="http://" target={"_blank"} >
            <i className="fa-brands fa-pinterest-p"></i>
          </a>
        </div>
      </div>
      <div className="contactDetails">
        <p>pulkittomar@gmail.com | <a href="http://creatingtales.com">www.creatingtales.com</a></p>
      </div>

    </div>
  )
}
