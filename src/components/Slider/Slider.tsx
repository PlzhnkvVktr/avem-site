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
      setCurrentSlide((value) => {
        return value === 0 ? slides.length - 1 : value - 1
      })
    }
    
    const prevSlideButtonAction = () => {
      prevSlide()
      setTrigger(true)
    }

    const nextSlideButtonAction = () => {
        nextSlide()
        setTrigger(true)
    }
  
    return (
      <div className={s.carousel}>
        <button className={s.carousel_button_prev} onClick={prevSlideButtonAction}>&lt;</button>
        <img src={slides[currentSlide]} alt={slides[currentSlide]} style={{ width: '80%', margin: 'auto' }} />
        <button className={s.carousel_button_next} onClick={nextSlideButtonAction}>&gt;</button>
      </div>
    );
  };
  