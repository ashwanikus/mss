'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider = () => {
    const images = [
        '/mss/banners/mss1.jpg',
        '/mss/banners/mss2.jpg',
        '/mss/banners/mss3.jpg',
        '/mss/banners/mss4.jpg',
        '/mss/banners/mss5.jpg',
        '/mss/banners/mss6.jpg',
    ];

    return (
        <div className="relative flex w-full mb-8">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={false}
                loop={true}
                parallax={true}
                autoplay={true}
                pagination={{
                    dynamicBullets: true
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="relative flex justify-center items-center">
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="w-fill"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;
