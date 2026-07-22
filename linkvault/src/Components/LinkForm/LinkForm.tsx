import React from 'react'
import style from './LinkForm.module.css'

 const LinkForm = () => {
  return (
   <form>
      <label>Enter your name:
        <input 
        type="text" 
        placeholder='Enter Link'/>
      </label>
    </form>
  )
}
export default LinkForm