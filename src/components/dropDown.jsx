import '../styles/index.css'
import dropDownArrow from '../assets/dropDownArrow.svg'

import { useState } from 'react';

export function DropDown({ title, content }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='dropDown'>
        <div className='dropDown_elements'>
          <h3>{title}</h3>
          <img src={dropDownArrow} alt="dropDownArrow" onClick={() => setIsOpen(!isOpen)} style={{ transform: isOpen ? "rotate(180deg)" : 'rotate(0)' }} />
        </div>
        <div className='dropDown_Content' style={{ display: isOpen ? 'block' : 'none' }}>
          {Array.isArray(content)
            ?
            <div className='dropDown_Content_equipments'>
                {content.map((e, i) => (
              <div key={i}>
                <p>{e}</p>
              </div>
              ))}
            </div>
            :
            <p className='dropDown_Content_Description'>{content}</p>
          }
        </div>
      </div>
    </>
  )
}