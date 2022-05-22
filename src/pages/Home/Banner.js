import React from 'react';
import bannar1 from '../../images/fan.jpg';
import bannar2 from '../../images/fan2.jpg';
import bannar3 from '../../images/keyboard.jpg';
import bannar4 from '../../images/mouse.jpg';
import bannar5 from '../../images/chip.jpg';
const Banner = () => {
    return (
        <div>
            
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full ">
                    <img  src={bannar1} alt='' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img  src={bannar2} alt='' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img  src={bannar3} alt='' />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img  src={bannar4} alt='' />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img  src={bannar5} alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
            </div>
        </div>
    );
};

export default Banner;