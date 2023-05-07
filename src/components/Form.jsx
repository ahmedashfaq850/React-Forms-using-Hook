import React from 'react'

const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor='username'>Username</label>
        <input type='text' id="username" name='username'/>
        
        <label htmlFor='email'>Email</label>
        <input type="email" name="email" id=""email/>

        <label htmlFor='password'>Password</label>
        <input type='password' name="password" />

      </form>
    </div>
  )
}

export default Form
