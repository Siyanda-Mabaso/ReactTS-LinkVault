
import type { LinkProps } from '../LinkCard/LinkProps'
import style from './LinkForm.module.css'
import { useState } from 'react'

type LinkFormProps={
  onsave:(link:LinkProps) => void
}
 const LinkForm:React.FC<LinkFormProps> = ({onsave}) => {

    const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
      const [url, setUrl] = useState('');

       const handlesubmit=()=>{
        onsave({id:Date.now(),
          title,description,url
     
        }
      )
      setTitle('')
      setUrl('')
      setDescription('')
      
       }


  return (
   <div className={style['form']}>
    <input 
    type="text"
    placeholder='Tittle'
    className={style['input']}
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    
  
     />
        <input 
    type="text"
    placeholder='Description'
    className={style['input']}
     value={description}
    onChange={(e) => setDescription(e.target.value)}
    
     />

     <input 
    type="text"
    placeholder='https....eg'
    className={style['input']}
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    
     />
     <button type='submit' onClick={handlesubmit}>Add Link</button>
    </div>
  )
}
export default LinkForm

