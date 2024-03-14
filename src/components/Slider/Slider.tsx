import React, { useEffect, useState } from 'react'
import s from './Slider.module.css'

type Props = {
    
}

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([
        "https://www.rosmebel-nt.ru/images/2018/02/07/vakansii.jpg", 
        "https://kh174.ru/images/obsluzhivanie%20sistemy%20ventilyatsii.jpg",
        "https://sgm.by/slider/build/1.jpg"
    ]);
    let interval: any = null


    useEffect(() => {
        console.log("ttt")
        interval = setInterval(nextSlide, 2000)
        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        if (currentSlide === slides.length - 1) {
          setCurrentSlide(() => 0);
        } else {
          setCurrentSlide((value) => value + 1);
        }
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
        clearInterval(interval)
        setTimeout(() => nextSlide(), 10000)
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
  