import Image from "next/image";
import exterior_image from '../../public/exterior.png'

const About = () => {
  return (
    <div className={'mt-6 mb-6 w-full flex flex-col justify-center items-center'}>
      <div className={'p-4'}>
        <h1 className={'text-3xl md:text-4xl text-center font-serif'}>About Us</h1>
        <h2 className={'my-6 text-xl md:text-2xl text-center font-serif'}>Best American is Proudly Serving Raleigh&apos;s Medical Supply Needs</h2>
        <p>We have something for customers of all ages and medical needs. All our products are of the highest quality, fairly priced, and guaranteed to meet your expectations.</p>
      </div>
      <div className={'relative w-full max-w-5xl min-h-[400px]'}>
        <Image fill className={'w-full object-cover'} src={exterior_image} alt={'Best American Medical Supplies exterior'}/>
      </div>
    </div>
  )
}

export default About