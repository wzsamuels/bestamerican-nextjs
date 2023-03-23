import Image from "next/image";
import exterior_image from '../../public/exterior.png'

const About = () => {
  return (
    <div className={'mt-6 mb-6 p-4 w-full flex flex-col justify-center items-center'}>
      <h1 className={'text-3xl md:text-4xl text-center font-serif'}>About Us</h1>
      <h2 className={'my-6 text-xl md:text-2xl text-center font-serif'}>Proudly Serving Raleigh&apos;s Medical Needs</h2>

      <div className={'relative w-full max-w-5xl min-h-[400px]'}>
        <Image fill className={'p-4 w-full object-cover'} src={exterior_image} alt={'Best American Medical Supplies exterior'}/>
      </div>
    </div>
  )
}

export default About