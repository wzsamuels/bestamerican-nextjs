'use client'

import {Carousel} from "react-responsive-carousel";
import Image from "next/image";

import slide1 from '../public/slide1.jpg'
import slide2 from '../public/slide2.jpg'
import slide3 from '../public/slide3.jpg'
import slide4 from '../public/slide4.jpg'
import kneewalker from '../public/slides/kneewalker.jpg'
import wheelchair from '../public/slides/wheelchair.webp'
import cane from '../public/slides/cane.webp'
import rollator from '../public/slides/rollator.webp'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const slideShow = [
  {
    image: slide1,
    text: "Vive Health Electric Wheelchair Model V"
  },
  {
    image: slide2,
    text: "All Terrain Knee Walker"
  },
  {
    image: rollator,
    text: "Bariatric Rollator"
  },
  {
    image: cane,
    text: "Folding Offset Swivel Cane"
  },
]

const Slideshow = () => {
  return (
    <div className='w-full  flex justify-center'>
      <div className='max-w-2xl'>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
        >
          {
            slideShow.map((slide, index) =>
              <div key={index} className='w-full'>
                <img className='w-full h-full' src={slide.image.src} alt={''}/>
                <div className="legend">
                  <p className=' max-w-lg'>
                    {slide.text}
                  </p>
                </div>
              </div>)
          }
        </Carousel>
      </div>
    </div>
  )
}

export default Slideshow