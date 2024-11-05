// src/components/Wood.js
import React, { useState } from 'react';


const slidesData = [
  {
    id: 1,
    heading: 'Crafting with Precision',
    text: '손끝에서 탄생하는 정교한 목공예의 세계!',
  },
  {
    id: 2,
    heading: 'The Art of Woodworking',
  text: '나무와 함께하는 창조의 시간.',
  },
  {
    id: 3,
    heading: 'Timeless Beauty in Wood',
    text: '오래 남을 목공예 작품을 만들어 보세요.',
  },
  {
    id: 4,
    heading: 'From Raw Wood to Masterpiece',
    text: '자연 속 나무가 나만의 예술작품으로!',
  },

];

const Wood = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slidingBlocked, setSlidingBlocked] = useState(false);
  const totalSlides = slidesData.length;
  const slidingDuration = 1300; // 애니메이션 지속 시간과 일치시키기 위해 설정

  const goToSlide = (index) => {
    if (slidingBlocked) return;

    setSlidingBlocked(true);
    setCurrentSlide(index);

    setTimeout(() => {
      setSlidingBlocked(false);
    }, slidingDuration * 0.75);
  };

  const nextSlide = () => {
    const nextIndex = currentSlide + 1 > totalSlides ? 1 : currentSlide + 1;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentSlide - 1 < 1 ? totalSlides : currentSlide - 1;
    goToSlide(prevIndex);
  };

  return (
    <div className="slider">
      <div className="slider__slides">
        {slidesData.map((slide, index) => {
          const isActive = currentSlide === slide.id;
          const isPrev = currentSlide === slide.id + 1 || (slide.id === 1 && currentSlide === totalSlides);
          return (
            <div
              key={slide.id}
              className={`slide ${isActive ? 's--active' : ''} ${isPrev ? 's--prev' : ''} slide-${slide.id}`}
              data-slide={slide.id}
            >
              <div className="slide__inner">
                <div className="slide__content">
                  <h2 className="slide__heading">{slide.heading}</h2>
                  <p className="slide__text">{slide.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="slider__control" onClick={prevSlide}>

      </div>
      <div className="slider__control slider__control--right m--right" onClick={nextSlide}>

      </div>
    </div>
  );
};

export default Wood;
