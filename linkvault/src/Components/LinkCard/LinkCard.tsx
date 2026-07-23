import React from 'react'
import style from './LinkCard.module.css'
 const LinkCard = () => {
  return (
    <div className={style['card']}>

        <div className={style['info']}>
            <h3 className={style['title']}>Google</h3>
            <p className={style['url']}>https.google.com</p>
        </div>
        <div className={style['actions']}>
            <button className={style['edit-btn']}>Edit</button>
            <button className={style['delete-btn']}>Delete</button>
        </div>
    </div>
  )
}
export default LinkCard 