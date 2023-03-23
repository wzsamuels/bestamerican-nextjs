import Image from 'next/image';

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
import cane_image from '../public/cane.webp';

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

      <div className={'h-[50vh] md:h-[75vh] w-full relative overflow-hidden'}>
        <Image fill className={'h-auto w-full object-cover '} src={banner_image} alt={''}/>
        <div className={'absolute bg-black w-full h-full opacity-70 top-0'}/>
        <div className={'w-full flex justify-center absolute top-0 z-10 w-full h-full flex flex-col justify-around items-center text-white'}>
          <div className={'max-w-[700px] leading-normal md:leading-loose lg:leading-loose text-center px-4 text-4xl md:text-5xl lg:text-6xl'}>
            Quality Medical Equipment You Can Depend On
          </div>
          <div className={'text-center text-lg md:text-2xl lg:text-3xl'}>
            <div>(919) 896-7222</div>
            <div>1100 Navaho Dr Ste 121, Raleigh, NC 27609</div>
            <div>Monday - Friday: 8:00 AM - 5:00 PM</div>
          </div>
        </div>
      </div>

      <div className={'flex justify-center'}>
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
      </div>

      <div className={'bg-lightBlue text-2xl text-center text-white grid grid-cols-1 md:grid-cols-3'}>
        <div className={'px-4 p-8 md:py-16'}>Fast Shipping</div>
        <div className={'px-4 p-8 md:py-16'}>Reliable Quality</div>
        <div className={'px-4 p-8 md:py-16'}>Excellent Customer Service</div>
      </div>
    </div>
  )
}
