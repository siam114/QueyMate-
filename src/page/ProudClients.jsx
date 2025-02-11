import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import img1 from '../assets/product/bikroi.png';
import img2 from '../assets/product/chaldal.jpg';
import img3 from '../assets/product/Daraz.png';
import img4 from '../assets/product/evely.png';
import img5 from '../assets/product/Rokomari.png';
import img6 from '../assets/product/ryans.jpg';
import img7 from '../assets/product/shwapno.jpg';

const ProudClients = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 3, 
        slidesToScroll: 1, 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center mb-5 mt-10">OUR PROUD CLIENTS</h2>
            <div className="slider-container py-20">
                <Slider {...settings}>
                    <div>
                        <img src={img1} alt="Client 1" className="w-24 h-24 md:w-32 md:h-32 mx-auto"/>
                    </div>
                    <div>
                        <img src={img2} alt="Client 2" className="w-24 h-24 md:w-32 md:h-32 mx-auto"/>
                    </div>
                    <div>
                        <img src={img3} alt="Client 3" className="w-24 h-24 md:w-32 md:h-32 mx-auto"/>
                    </div>
                    <div>
                        <img src={img4} alt="Client 4" className="w-24 h-24 md:w-32 md:h-32 mx-auto"/>
                    </div>
                    <div>
                        <img src={img5} alt="Client 5" className="w-24 h-24 md:w-32 md:h-32 mx-auto"/>
                    </div>
                    <div>
                        <img src={img6} alt="Client 6" className="w-24 h-24 md:w-32 md:h-32 mx-auto"/>
                    </div>
                    <div>
                        <img src={img7} alt="Client 7" className="w-24 h-24 md:w-36 md:h-36 mx-auto"/>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default ProudClients;
