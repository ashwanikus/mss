'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

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
        <div className="relative w-full h-[500px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                loop={true}
                pagination={{ clickable: true }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
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
