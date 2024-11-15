import React, { useEffect, useState } from 'react'
import s from './Slider.module.css'

import image1 from "../../image/stands/виу100.jpg";
import image2 from "../../image/stands/ВОЛГАРЕММАШ.jpg";
import image3 from "../../image/stands/КСИН.jpg";
import image4 from "../../image/stands/КСПЭМ1000jpg.jpg";
import image5 from "../../image/stands/ливс.jpg";


// type Props = {
    
// }

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [trigger, setTrigger] = useState(false)
    const [slides, setSlides] = useState([
      {
        title: "Высковольная испытательная установка ВИУ-100Р",
        image: image1
      },
      {
        title: "Комплексный стенд проверки асинхронных двигателей",
        image: image2
      },
      {
        title: "Комплексный стенд испытания насосов",
        image: image3
      },
      {
        title: "Комплексный стенд испытания электрических машин КСПЭМ-1000",
        image: image4
      },
      {
        title: "Лабораторная испытательная высоковольтная станция ЛИВС",
        image: image5
      },
    ])

    useEffect(() => { 
      const timeout = setTimeout(nextSlide, trigger === false ? 3500 : 10000)
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
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        <strong className={s.slide_description}>{slides[currentSlide].title}</strong>
        <button className={s.carousel_button_next} onClick={nextSlideButtonAction}>&gt;</button>
      </div>
    );
  };
  