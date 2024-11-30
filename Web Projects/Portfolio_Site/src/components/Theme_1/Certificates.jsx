import { useEffect, useId, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { Autoplay, Mousewheel, EffectCreative } from 'swiper/modules';

export default function Certificates({id}) {
  const [certificates,setCertificates] = useState([])
  
  useEffect(() => {
      fetch('/files')
      .then((res) => res.json())
      .then((data) => {
        setCertificates(data)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])
  
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
          certificates.map((currValue) => (
            <SwiperSlide key={useId()}><img src={currValue} /></SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}
