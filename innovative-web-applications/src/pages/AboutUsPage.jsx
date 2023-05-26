import icon1 from "../img/about-us-icon-1.svg";
import icon2 from "../img/about-us-icon-2.svg";
import icon3 from "../img/about-us-icon-3.svg";
import icon4 from "../img/about-us-icon-4.svg";

import "../styles/style.scss";

const AboutUsPage = () =>{
    return(
        <section className="about-us-page">
            <div className="about-us-page__header container">
                <div className="title">
                    ABOUT US
                </div>
                <hr className="title-line" />
                <div className="subtitle">
                    Transforming Visions into Digital Realities
                </div>
            </div>
            <div className="about-us-page__content container">
                <div className="about-us-page__content__el">
                    <h1>
                        Innovative Web Applications is a leading provider of modern website applications. We specialize in creating cutting-edge solutions that drive business growth and enhance user experiences. With our team of skilled developers and designers, we craft tailor-made web applications that captivate users and deliver seamless functionality.
                    </h1>
                </div>
                <div className="about-us-page__content__el">
                    <img src={icon1} alt="icon1" />
                </div>
                <div className="about-us-page__content__el">
                    <img src={icon2} alt="icon2" />
                </div>
                <div className="about-us-page__content__el">
                    <h1>
                        Our commitment to innovation sets us apart. We stay ahead of industry trends and leverage the latest technologies to create exceptional digital experiences. Through close collaboration with our clients, we ensure that our web applications align with their vision and deliver measurable results.  
                    </h1>
                </div>
                <div className="about-us-page__content__el">
                    <h1>
                        At Innovative Web Applications, we go beyond just building websites. We offer transformative solutions that empower businesses to thrive in the digital realm. Whether you're a startup or an established brand, we have the expertise to bring your digital vision to life.
                    </h1>
                </div>
                <div className="about-us-page__content__el">
                    <img src={icon3} alt="icon3" />
                </div>
                <div className="about-us-page__content__el">
                    <img src={icon4} alt="icon4" />
                </div>
                <div className="about-us-page__content__el">
                    <h1>
                        Experience the limitless possibilities of modern web applications with Innovative Web Applications. Join us on the journey to shape your digital success. 
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default AboutUsPage;