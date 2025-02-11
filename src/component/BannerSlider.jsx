// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/bgimage/image1.png'
import bgimg2 from '../assets/bgimage/image2.jpg'
import bgimg3 from '../assets/bgimage/image3.jpg'

const BannerSlider = () => {
    return (
        <div className='w-full mx-auto'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Slide
              image={bgimg1}
              text='Find any products by image'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={bgimg2}
              text='The visitor was recommended two different types of the product'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={bgimg3}
              text='QueryMate makes online shopping easier'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default BannerSlider;