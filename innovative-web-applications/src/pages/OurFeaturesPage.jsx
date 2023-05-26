import "../styles/style.scss";

import responsiveWebDesign from "../img/our-features-page-icon-1.svg";
import progressiveWebApps from "../img/our-features-page-icon-2.svg";
import userCentricInterfaces from "../img/our-features-page-icon-3.svg";
import ecommerceOptimization from "../img/our-features-page-icon-4.svg";

const OurFeaturesPage = () =>{
    return(
        <section className="our-features-page">

            <script>

            </script>

            <div className="our-features-page__header container">
                <div className="title">
                    OUR FEATURES
                </div>
                <hr className="title-line" />
                <div className="subtitle">
                    Revolutionize Your Web Applications
                </div>
            </div>
            <div className="our-features-page__content container">
                <div className="our-features-page__content__el">
                    <img src={responsiveWebDesign} alt="icon1" />
                    <h1>Responsive Web Design</h1>
                </div>
                <div className="our-features-page__content__el">
                    <img src={progressiveWebApps} alt="icon2" />
                    <h1>Progressive Web Apps</h1>
                </div>
                <div className="our-features-page__content__el">
                    <img src={userCentricInterfaces} alt="icon3" />
                    <h1>User-Centric Interfaces</h1>
                </div>
                <div className="our-features-page__content__el">
                    <img src={ecommerceOptimization} alt="icon4" />
                    <h1>E-commerce Optimization</h1>
                </div>
            </div>
        </section>
    )
}

export default OurFeaturesPage;