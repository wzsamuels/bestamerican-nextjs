"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import {useState} from "react";

type Inputs = {
  name: string,
  email: string,
  message: string,
};


const Contact = () => {
  const [message, setMessage] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async data => {
    setMessage("Submitting your feedback...")
    console.log(data);
    let body = JSON.stringify(data)
    //emailForm("Test Subject", data)
    const requestOptions = {
      method: "POST",
      body
    };

    const response = await fetch('/api/email', requestOptions)
    const responseData = await response.json();
    console.log(responseData.$metadata);

    if(responseData.$metadata.httpStatusCode === 200) {
      setMessage("Your message has been successfully sent! We'll respond shortly to any questions or concerns.");
    } else {
      setMessage("There was a server error sending your message. Please call us at the number above.");
    }
  }

  return (
    <div className={'mt-6 mb-6 p-4 w-full flex flex-col justify-center items-center'}>
      <h1 className={'text-3xl md:text-4xl text-center font-serif'}>We&apos;d Love to Hear From You!</h1>
      <div className={'mt-4 mb-8 text-xl md:text-2xl text-center'}>
        <div className={'my-2'}>(919) 896-7222</div>
        <div className={'my-2'}>1100 Navaho Dr Ste 121, Raleigh, NC 27609-7364</div>
        <div className={'my-2'}>Monday - Friday: 8:00 AM - 5:00 PM</div>
      </div>
      { message ?
        <div className='min-h-[20rem] flex justify-center items-center'>
          <div  className={'max-w-5xl w-full text-xl text-center border border-lightBlue p-4 sm:p-6 rounded-xl'}>
            {message}
          </div>
        </div>
        :
        <form
          className={'flex flex-col max-w-5xl w-full'}
          onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className={'grid gap-8 grid-cols-2 w-full my-4 '}>
            <div className={'w-full flex flex-col relative'}>
              <input
                className={'border border-black p-4 flex-grow peer placeholder:text-transparent text-lg'}
                type={'text'}
                placeholder="name"
                {...register("name", {required: true})} />
              <label
                className="absolute left-0 ml-1 top-4 -translate-y-3 bg-white px-1 text-xs duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-xs"
              >
                Name
              </label>
              {errors.name && <span className={'text-red-600 text-sm'}>This field is required</span>}
            </div>

            <div className={'w-full flex flex-col relative'}>
              <input
                className={'border border-black p-4 flex-grow peer placeholder:text-transparent text-lg'}
                type={'email'}
                placeholder={'Email'}
                {...register("email", { required: true })} />
              <label
                className="absolute left-0 ml-1 top-4 -translate-y-3 bg-white px-1 text-xs duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-xs"
              >
                Email
              </label>
              {errors.email && <span className={'text-red-600 text-sm'}>This field is required</span>}
            </div>
          </div>
          <div className={'w-full flex flex-col relative'}>
        <textarea
          className={'border border-black p-4 flex-grow peer placeholder:text-transparent text-lg'}
          placeholder={'Comment'}
          {...register('message', { required: true})}/>
            <label
              className="absolute left-0 ml-1 top-4 -translate-y-3 bg-white px-1 text-xs duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-xs"
            >
              Comment
            </label>
            {errors.message && <span className={'text-red-600 text-sm'}>This field is required</span>}
            {/* errors will return when field validation fails  */}
          </div>


          <div className={'flex justify-center '}>
            <input className={'mt-6 rounded text-xl py-4 px-8 border-2 hover:opacity-90 cursor-pointer bg-lightBlue text-white transition-all '} type="submit" />
          </div>
        </form>
      }
    </div>
  )
}

export default Contact