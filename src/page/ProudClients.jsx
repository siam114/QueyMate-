import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import img1 from '../assets/product/bikroi.png'
import img2 from '../assets/product/chaldal.jpg'
import img3 from '../assets/product/Daraz.png'
import img4 from '../assets/product/evely.png'
import img5 from '../assets/product/Rokomari.png'
import img6 from '../assets/product/ryans.jpg'
import img7 from '../assets/product/shwapno.jpg'


const ProudClients = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
         className: "center px-10",
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    return (
         <>
        {/* <h2 className="text-3xl font-bold text-center mb-5 mt-10">OUR PROUD CLIENTS</h2> */}
         <div className="slider-container py-20">
          <Slider {...settings}>
            <div>
             <img src={img1} alt="" className="md:w-32 md:h-32"/>
            </div>
            <div>
            <img src={img2} alt="" className="md:w-32 md:h-32"/>
            </div>
            <div>
            <img src={img3} alt="" className="md:w-32 md:h-32"/>
            </div>
            <div>
            <img src={img4} alt="" className="md:w-32 md:h-32"/>
            </div>
            <div>
            <img src={img5} alt="" className="md:w-32 md:h-32"/>
            </div>
            <div>
            <img src={img6} alt="" className="md:w-32 md:h-32"/>
            </div>
            <div>
             <img src={img7} alt="" className="md:w-36 md:h-36"/>
            </div>
           
          </Slider>
         </div>
       </>
    );
};

export default ProudClients;