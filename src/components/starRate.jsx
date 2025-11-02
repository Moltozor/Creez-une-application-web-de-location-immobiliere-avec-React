import '../styles/index.css'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useState } from 'react';

export function StarRate({ dataRate }) {

    return (
        <>

            {Array.from({ length: 5 }).map((_, i) => {
                return i < dataRate ? <FaStar key={i} style={{color: '#FF6060', fontSize: '24px'}} /> : <FaStar key={i} style={{color: '#E3E3E3', fontSize: '24px'}} />
            })}

        </>
    )
}

