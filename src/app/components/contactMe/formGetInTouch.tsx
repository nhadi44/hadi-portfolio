'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

type Inputs = {
  name: string,
  email: string,
  message: string
}

export const FormGetInTouch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <h1 className="text-blue-500 font-semibold text-4xl mb-4">Get In Touch</h1>
      <p className="text-slate-900 dark:text-slate-100 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at aut autem earum inventore laborum minima
        nemo nesciunt nostrum sit?
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="name" className="text-slate-900 dark:text-slate-100 block mb-1">Full Name</label>
          <input defaultValue={''} {...register('name')} name="name"
                 className={`text-slate-900 border-2 border-blue-300 dark:border-0 rounded-md w-full px-4 py-2 outline-blue-500 mb-1 ${errors.name && 'outline-red-500 border-2 border-red-500'}`}
                 placeholder="John Doe" />
          <span>{errors.name && <span className="text-sm text-red-500">Please enter your name</span>}</span>
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="text-slate-900 dark:text-slate-100 block mb-1">Email Address</label>
          <input defaultValue={''} {...register('email')}
                 className={`text-slate-900 border-2 border-blue-300 dark:border-0 rounded-md w-full px-4 py-2 outline-blue-500 ${errors.email && 'outline-red-500 border-2 border-red-500'}`}
                 placeholder="jhondoe@mail.com" />
          <span>{errors.email && <span className="text-sm text-red-500">Please enter a valid email</span>}</span>
        </div>
        <div className="mb-2">
          <label htmlFor="message" className="text-slate-900 dark:text-slate-100 block mb-1">Your Message</label>
          <textarea defaultValue={''} {...register('message')}
                    className={`text-slate-900 border-blue-300 dark:border-0 rounded-md w-full px-4 py-2 outline-blue-500 ${errors.message && 'outline-red-500 border-2 border-red-500'}`}
                    rows={10} placeholder="Your message here" />
          {errors.message && <span className="text-sm text-red-500">Please enter a message</span>}
        </div>

        <button type="submit"
                className="bg-blue-500 text-white w-full px-4 py-3 rounded-md hover:bg-blue-600 transition duration-100 ease-in">Send
          Message
        </button>
      </form>
    </>
  );
};