import React, { useEffect, useState } from 'react'
import s from './Slider.module.css'

type Props = {
    
}

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [trigger, setTrigger] = useState(false)
    const [slides, setSlides] = useState([
        "https://www.rosmebel-nt.ru/images/2018/02/07/vakansii.jpg", 
        "https://kh174.ru/images/obsluzhivanie%20sistemy%20ventilyatsii.jpg",
        "https://sgm.by/slider/build/1.jpg"
    ])

    useEffect(() => { 
      const timeout = setTimeout(nextSlide, trigger === false ? 2000 : 10000)
      setTrigger(false)
      return () => clearTimeout(timeout); 
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((value) => {
          return value === slides.length - 1 ? 0 : value + 1
        });
    }

    const prevSlide = () => {
        if (currentSlide === 0) {
          setCurrentSlide(() => slides.length - 1);
        } else {
          setCurrentSlide((value) => value - 1);
        }
    }

    const nextSlideButtonAction = () => {
        nextSlide()
        setTrigger(true)
    }
  
    return (
      <div style={{ width: '100%', margin: 'auto', display: 'flex', justifyContent: 'center' }}>
        <img src={slides[currentSlide]} alt={slides[currentSlide]} style={{ width: '80%', margin: 'auto' }} />
        <button onClick={prevSlide}>Prev</button>
        <button onClick={() => {
            nextSlideButtonAction()
        }}>Next</button>
      </div>
    );
  };
  