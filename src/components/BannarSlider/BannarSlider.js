import React, { Component } from "react";
import Slider from "react-slick";
import "./BannarSlider.css"

const BannarSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className=" bg-container">
            <div className="container">
                <Slider {...settings}>
                    <div>
                        <img className="img-slider" src="https://image.freepik.com/free-psd/take-away-paper-cup-with-straw-mockup_439185-2287.jpg" alt="" />
                    </div>
                    <div>
                        <img className="img-slider" src="https://image.freepik.com/free-psd/paper-bag-with-coffee-mock-up_23-2148884501.jpg" alt="" />
                    </div>
                    <div>
                        <img className="img-slider" src="https://image.freepik.com/free-psd/paper-bag-concept-with-mock-up_23-2148807313.jpg" alt="" />
                    </div>
                    <div><img className="img-slider" src="https://image.freepik.com/free-vector/thank-you-wedding-card-template_23-2148690044.jpg" alt="" />

                    </div>

                    <div>
                        <img className="img-slider" src="https://image.freepik.com/free-psd/paper-bag-concept-with-mock-up_23-2148807317.jpg" alt="" />
                    </div>


                </Slider>
            </div>
        </div>
    );
};


export default BannarSlider;