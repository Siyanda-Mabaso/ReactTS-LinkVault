import React from 'react'
import style from './LinkCard.module.css'
import  type {  LinkProps } from './LinkProps' 

 export const LinkCard:React.FC<LinkProps> = ({title,description,url}) => {
  return (
    <div className={style['card']}>

        <div className={style['info']}>
            <h3 className={style['title']}>{title}</h3>
            <p className={style['url']}>{url}</p>
             <p className={style['description']}>{description}</p>
        </div>
        <div className={style['actions']}>
            <button className={style['edit-btn']}>Edit</button>
            <button className={style['delete-btn']}>Delete</button>
        </div>
    </div>
  )
}
