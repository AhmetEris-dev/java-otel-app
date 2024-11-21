import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';
import './ContentCarouselComment.css'
 
const CommentNavbar = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={15}
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="custom-swiper"
    >
      <SwiperSlide><div className="container shadow mt-5 mb-5 bg-white" style={{width: '500px', height: '200px', borderRadius: '5px'}}><span className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt esse voluptatum veritatis, est praesentium inventore minima vero odio, maxime fuga, dolorum tempore! A quam adipisci blanditiis reiciendis eveniet odio!
      Consectetur temporibus, deserunt repellat molestiae rem assumenda dignissimos minus omnis eligendi incidunt? Repellendus, nisi? Ipsa, perferendis. Sequi natus possimus doloribus consequuntur necessitatibus officiis eligendi tenetur ab voluptas. Neque, vel repellendus.</span></div></SwiperSlide>
      <SwiperSlide><div className="container shadow mt-5 mb-5 bg-white"  style={{width: '500px', height: '200px', borderRadius: '5px'}}><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt esse voluptatum veritatis, est praesentium inventore minima vero odio, maxime fuga, dolorum tempore! A quam adipisci blanditiis reiciendis eveniet odio!
      Consectetur temporibus, deserunt repellat molestiae rem assumenda dignissimos minus omnis eligendi incidunt? Repellendus, nisi? Ipsa, perferendis. Sequi natus possimus doloribus consequuntur necessitatibus officiis eligendi tenetur ab voluptas. Neque, vel repellendus.</span></div></SwiperSlide>
      <SwiperSlide><div className="container  shadow mt-5 mb-5 bg-white"  style={{width: '500px', height: '200px', borderRadius: '5px'}}><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt esse voluptatum veritatis, est praesentium inventore minima vero odio, maxime fuga, dolorum tempore! A quam adipisci blanditiis reiciendis eveniet odio!
      Consectetur temporibus, deserunt repellat molestiae rem assumenda dignissimos minus omnis eligendi incidunt? Repellendus, nisi? Ipsa, perferendis. Sequi natus possimus doloribus consequuntur necessitatibus officiis eligendi tenetur ab voluptas. Neque, vel repellendus.</span></div></SwiperSlide>
      <SwiperSlide><div className="container  shadow mt-5 mb-5 bg-white"  style={{width: '500px', height: '200px', borderRadius: '5px'}}><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt esse voluptatum veritatis, est praesentium inventore minima vero odio, maxime fuga, dolorum tempore! A quam adipisci blanditiis reiciendis eveniet odio!
      Consectetur temporibus, deserunt repellat molestiae rem assumenda dignissimos minus omnis eligendi incidunt? Repellendus, nisi? Ipsa, perferendis. Sequi natus possimus doloribus consequuntur necessitatibus officiis eligendi tenetur ab voluptas. Neque, vel repellendus.</span></div></SwiperSlide>
      <SwiperSlide><div className="container  shadow mt-5 mb-5  bg-white"  style={{width: '500px', height: '200px', borderRadius: '5px'}}><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt esse voluptatum veritatis, est praesentium inventore minima vero odio, maxime fuga, dolorum tempore! A quam adipisci blanditiis reiciendis eveniet odio!
      Consectetur temporibus, deserunt repellat molestiae rem assumenda dignissimos minus omnis eligendi incidunt? Repellendus, nisi? Ipsa, perferendis. Sequi natus possimus doloribus consequuntur necessitatibus officiis eligendi tenetur ab voluptas. Neque, vel repellendus.</span></div></SwiperSlide>
    </Swiper>
  );
};
 
export default CommentNavbar;