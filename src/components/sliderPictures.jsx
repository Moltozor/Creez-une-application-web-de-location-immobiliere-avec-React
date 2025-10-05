import { useState } from 'react'
import '../styles/index.css'
import arrowLeft from '../assets/arrowLeft.svg'
import arrowRight from '../assets/arrowRight.svg'


export function SliderPictures({ pictures = [] }) {


    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyles = {
        height: '415px',
        position: 'relative',
        marginInline: '100px',
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        cursor: 'pointer',
        left: '50px',
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        cursor: 'pointer',
        right: '50px',
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${pictures[currentIndex]})`,
        borderRadius: '25px',
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
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>
                <img src={arrowLeft} alt="Image précédente" />
            </div>

            <div style={rightArrowStyles} onClick={goToNext}>
                <img src={arrowRight} alt="Image suivante" />
            </div>
            <div style={slideStyles}></div>
        </div>
    )

}