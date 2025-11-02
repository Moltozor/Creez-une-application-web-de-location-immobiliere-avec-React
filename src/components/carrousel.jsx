import { useState } from 'react'
import '../styles/index.css'
import arrowLeft from '../assets/arrowLeft.svg'
import arrowRight from '../assets/arrowRight.svg'


export function Carrousel({ pictures = [] }) {


    const [currentIndex, setCurrentIndex] = useState(0)


    const handleImage = {
        backgroundImage: `url(${pictures[currentIndex]})`,
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }


    return (
        <div className='sliderStyles'>
            <div className='leftArrowStyles' onClick={goToPrevious}>
                <img src={arrowLeft} alt="Image précédente" />
            </div>

            <div className='rightArrowStyles' onClick={goToNext}>
                <img src={arrowRight} alt="Image suivante" />
            </div>
            <div className='slideStyles' style={handleImage}></div>
        </div>
    )

}