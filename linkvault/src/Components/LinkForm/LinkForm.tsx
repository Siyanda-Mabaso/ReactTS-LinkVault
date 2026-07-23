import React from 'react'
import style from './LinkForm.module.css'

 const LinkForm = () => {
  return (
   <form className={style['form']}>
    <input 
    type="text"
    placeholder='Tittle'
    className={style['input']}
     />

     <input 
    type="url"
    placeholder='https....eg'
    className={style['input']}
     />
     <button type='submit'>Add Link</button>
    </form>
  )
}
export default LinkForm