import Image from "next/image";
import exterior_image from '../../public/exterior.png'

const About = () => {
  return (
    <div className={'flex flex-col items-center'}>
      <h1>About Us</h1>
      <div className={'relative w-full max-w-5xl min-h-[400px]'}>
        <Image fill className={'p-4 w-full object-cover'} src={exterior_image} alt={'Best American Medical Supplies exterior'}/>
      </div>
    </div>
  )
}

export default About