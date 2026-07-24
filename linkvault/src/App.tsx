import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import  LinkForm  from './Components/LinkForm/LinkForm';

import './App.css'
import { useState } from 'react';
import {type LinkProps } from './Components/LinkCard/LinkProps';
import { LinkList } from './Components/LinkCard/LinkList';

function App() {

  const [links,setLinks]=useState<LinkProps[]>([])
  const addlink =(newlink:LinkProps)=>{
    setLinks((prevLinks) => {
      return [...prevLinks,newlink]})
  }
  return (
    <>
    
      <Header/>
      <SearchBar/>
      <LinkForm
      onsave={addlink}/>
      <LinkList links={links}/>
    </>
  )
}

export default App;
