import Image from "next/image";
import exterior_image from '../../public/exterior.png'

const About = () => {
  return (
    <div className={'mt-6 mb-6 w-full flex flex-col justify-center items-center'}>
      <div className={'p-4 max-w-5xl'}>
        <h1 className={'text-3xl md:text-4xl text-center font-serif'}>About Us</h1>
        <h2 className={'my-8 text-xl md:text-2xl text-center font-serif'}>Best American is Proudly Serving Raleigh&apos;s Medical Supply Needs</h2>
        <p>Established in 2020, Best American Medical Supplies offers home respiratory and durable medical equipment supplies and services. We are accredited by the Accreditation Commission for Health Care (ACHC) and Medicaid and Medicare contracted Durable Medical Equipment (DME) partners. We strive to be our customer’s, and patient’s best option for durable home medical equipment and supplies; we value every order, and endeavor to provide excellent services all the time.</p>
      </div>
      <div className={'relative my-6 w-full max-w-5xl min-h-[400px]'}>
        <Image fill className={'w-full object-cover'} src={exterior_image} alt={'Best American Medical Supplies exterior'}/>
      </div>
    </div>
  )
}

export default About