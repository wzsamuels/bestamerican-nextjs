"use client"

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  message: string,
};


const Contact = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);

  }

  return (
    <div className={'p-4 w-full flex flex-col justify-center items-center'}>
      <h1 className={'text-3xl md:text-4xl text-center'}>We&apos;d Love to Hear From You!</h1>
      <div className={'my-8 text-xl md:text-2xl text-center'}>
        <div className={'text-blue-600'}><a href={'tel:919896722'}>(919) 896-722</a></div>
        <div>100 Navaho Dr Ste 121, Raleigh, NC 27609-7364</div>
        <div>Monday - Friday: 8:00 AM - 5:00 PM</div>
      </div>
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
              type={'text'}
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
    </div>
  )
}

export default Contact