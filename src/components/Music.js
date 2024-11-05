import $ from 'jquery';
import React, { useEffect } from 'react';

function Music() {
    useEffect(() => {
        $(function(){
            $('.carousel-item').eq(0).addClass('active');
            var total = $('.carousel-item').length;
            var current = 0;
            $('#moveRight').on('click', function(){
              var next=current;
              current= current+1;
              setSlide(next, current);
            });
            $('#moveLeft').on('click', function(){
              var prev=current;
              current = current- 1;
              setSlide(prev, current);
            });
            function setSlide(prev, next){
              var slide= current;
              if(next>total-1){
               slide=0;
                current=0;
              }
              if(next<0){
                slide=total - 1;
                current=total - 1;
              }
                     $('.carousel-item').eq(prev).removeClass('active');
                     $('.carousel-item').eq(slide).addClass('active');
                setTimeout(function(){
          
                },800);
              
          
              
              console.log('current '+current);
              console.log('prev '+prev);
            }
          });
    }, []);

    return (
        <div className="carousel">
            {<div class="carousel">
    <div class="carousel__nav">
        <span id="moveLeft" class="carousel__arrow">
            <svg class="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
                <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
            </svg>
        </span>
        <span id="moveRight" class="carousel__arrow" >
            <svg class="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
            </svg>
        </span>
    </div>
    <div class="carousel-item carousel-item--1">
        <div class="carousel-item__image"></div>
        <div class="carousel-item__info">
            <div class="carousel-item__container">
                <h2 class="carousel-item__subtitle">Feel the Beat </h2>
                <h1 class="carousel-item__title">Drums</h1>
                <p class="carousel-item__description">강렬한 리듬과 박자로 가득한 드럼의 세계에 빠져보세요. 당신의 열정을 음악으로 표현해보세요.</p>
                <a href="#" class="carousel-item__btn">Start Learning Drums</a>
            </div>
        </div>
    </div>
    <div class="carousel-item carousel-item--2">
        <div class="carousel-item__image"></div>
        <div class="carousel-item__info">
            <div class="carousel-item__container">
                <h2 class="carousel-item__subtitle">Strum the Strings </h2>
                <h1 class="carousel-item__title">Guitar</h1>
                <p class="carousel-item__description">감미로운 선율부터 경쾌한 리듬까지, 기타로 다양한 감정을 표현해보세요.</p>
                <a href="#" class="carousel-item__btn">Learn to Play Guitar</a>
            </div>
        </div>
    </div>
    <div class="carousel-item carousel-item--3">
        <div class="carousel-item__image"></div>
        <div class="carousel-item__info">
            <div class="carousel-item__container">
                <h2 class="carousel-item__subtitle">Keys to Harmony </h2>
                <h1 class="carousel-item__title">Piano</h1>
                <p class="carousel-item__description">우아하고 감동적인 피아노 선율로 마음을 울려보세요. 첫 건반을 눌러보는 순간, 특별한 여정이 시작됩니다.</p>
                <a href="#" class="carousel-item__btn">Discover the Piano</a>
            </div>
        </div>
    </div>

    <div class="carousel-item carousel-item--4">
        <div class="carousel-item__image"></div>
        <div class="carousel-item__info">
            <div class="carousel-item__container">
                <h2 class="carousel-item__subtitle">Strings of Elegance </h2>
                <h1 class="carousel-item__title">Violin </h1>
                <p class="carousel-item__description">깊은 감성과 섬세한 음색의 바이올린을 통해 음악의 아름다움을 느껴보세요.</p>
                <a href="#" class="carousel-item__btn">Learn the Violin</a>
            </div>
        </div>
    </div>
</div>
}
        </div>
    );
}

export default Music;