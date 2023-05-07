import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
     // FOrm object
    const form = useForm()

    // Destructure objects from form
    const {register, handleSubmit, formState} = form

    // Destructure Error from fromState
    const {errors} = formState;

    // Form handle logic
    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>  {/* This will prevent the browser to vaildate the data */}
        <label htmlFor='email'>Email</label>
        <input type='text' id="email" placeholder='Enter Email Address' {...register("email", {
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email is not correct'
            }
            /* For normal fields */
            /* 
            required: {
                value: true,
                message: "Username is required"
            }
            */ 
        })}/>
        <p>
            {errors.email?.message}
        </p>
        <label htmlFor='email'>Password</label>
        <input type='password' id="password" placeholder='Enter Your password' {...register("password")}/>
        <p>
            {errors.password?.message}
        </p>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
