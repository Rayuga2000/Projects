import { useEffect, useId, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { Autoplay, Mousewheel, EffectCreative } from 'swiper/modules';
import images from '../../appwrite/config';


export default function Certificates({ id }) {
  
  return (
    <section id={id} className='card-certificates'>
      <h1><span className='border-b-4 border-b-red-500 pb-1'>Certificates</span></h1>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        direction={'horizontal'}
        mousewheel={true}
        centeredSlides={true}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[Autoplay, Mousewheel, EffectCreative]}
      >
        {
          images.map((currValue) => (
            <SwiperSlide key={useId()}><img src={currValue} /></SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}
