import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import banner_image from '../public/banner.jpg';
import shoe_image from '../public/shoe.jpg';
import scooter_image from '../public/scooter.jpg';
import strap_image from '../public/strap.jpg';
import recliner_image from '../public/recliner.jpg';
import lift_image from '../public/lift.jpg';
import rollator_image from '../public/rollator.webp';
import wheelchair_image from '../public/wheelchair.jpg'
import underwear_image from '../public/underwear.jpg';
import bed_image from '../public/bed.jpg';
import cane_image from '../public/cane.webp';import slide1 from '../public/slide1.jpg'
import Slideshow from "@/app/Slideshow";


const products = [
  {
    text: "Recliners",
    image: recliner_image,
  },
  {
    text: "Scooters",
    image: scooter_image,
  },
  {
    text: "Electric Wheelchairs",
    image: wheelchair_image,
  },
  {
    text: "Lift Chairs",
    image: lift_image,
  },
  {
    text: "Diabetic Shoes",
    image: shoe_image,
  },
  {
    text: "Rollators",
    image: rollator_image,
  },
  {
    text: "Walkers and Canes",
    images: cane_image
  },
  {
    text: "Incontinence",
    image: underwear_image
  },
  {
    text: "Medical Beds",
    image: bed_image
  },
  {
    text: "Tools & Accessories",
    image: strap_image
  },
]

export default function Home() {
  return (
    <div>
      <section className="p-4">

        <Slideshow/>
      </section>
      <section className={'flex justify-center'}>
        <div className={'my-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl'}>
          {
            products.map(product =>
              <>
                {
                  product.image &&
                  <div className={'m-8 flex flex-col'} key={product.text}>
                    <Image priority src={product.image} alt={product.text}/>
                    <div className={'text-xl lg:text-2xl'}>{product.text}</div>
                  </div>
                }
              </>
            )
          }
        </div>
      </section>

      <section className={'bg-lightBlue text-2xl text-center text-white grid grid-cols-1 md:grid-cols-3'}>
        <div className={'px-4 p-8 md:py-16'}>Fast Shipping</div>
        <div className={'px-4 p-8 md:py-16'}>Reliable Quality</div>
        <div className={'px-4 p-8 md:py-16'}>Excellent Customer Service</div>
      </section>
    </div>
  )
}
