import '../styles/index.css'
import dropDownArrow from '../assets/dropDownArrow.svg'

import { useState } from 'react';

// 1) Retourner directement un array d’éléments
export function DropDown({title, content}) {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div className='dropDown'>
        <div className='dropDown_elements'>
          <h3>{title}</h3>
          <img src={dropDownArrow} alt="dropDownArrow" onClick={()=>setIsOpen(!isOpen)} style={{transform:isOpen ? "rotate(180deg)" : 'rotate(0)'}} />
        </div>
        <div className='dropDown_Content' style={{display:isOpen ? 'block' : 'none'}}>
          <p>{content}</p>
        </div>
      </div>
    </>
  )
}



/*
aboutList.map((elem, index) => (
    <div key={index} className='dropDown'>
      <div className='dropDown_elements'>
        <h3>{elem.title}</h3>
        <img src={dropDownArrow} alt="" />
      </div>
      <div className='dropDown_Content'>
        <p>{elem.content}</p>
      </div>
    </div>

    */