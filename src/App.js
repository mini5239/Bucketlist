// App.js
import React, { useEffect } from 'react';
import StickySliderNav from './components/StickySliderNav';
import MainContent from './components/MainContent';
import './App.scss';
import $ from 'jquery';

class StickyNavigation {
  constructor() {
    this.currentId = null;
    this.currentTab = $('.et-hero-tab').first(); // 기본 첫 번째 탭으로 초기화
    this.tabContainerHeight = 70;
    let self = this;

    $('.et-hero-tab').click(function (e) {
      self.onTabClick(e, $(this));
    });

    $(window).scroll(() => { this.onScroll(); });
    $(window).resize(() => { this.onResize(); });

    this.setSliderCss(); // 초기 탭에 대한 슬라이더 CSS 설정
  }

  onTabClick(e, element) {
    e.preventDefault();
    let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
    $('html, body').animate({ scrollTop: scrollTop }, 600);
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkTabContainerPosition() {
    let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
    if ($(window).scrollTop() > offset) {
      $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
    } else {
      $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
    }
  }

  findCurrentTabSelector() {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    $('.et-hero-tab').each(function () {
      let id = $(this).attr('href');
      let offsetTop = $(id).offset().top - self.tabContainerHeight;
      let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
      if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if (this.currentId !== newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css('width');
      left = this.currentTab.position().left; // position().left 사용으로 정확한 위치 계산
      
      // 첫 번째 섹션인 경우 left 값을 강제로 0px으로 설정
      if (this.currentTab.is($('.et-hero-tab').first())) {
        left = 0;
      }
    }
    $('.et-hero-tab-slider').css('width', width);
    $('.et-hero-tab-slider').css('left', `${left}px`);
  }
}

function App() {
  useEffect(() => {
    const stickyNav = new StickyNavigation();

    return () => {
      $(window).off('scroll');
      $(window).off('resize');
      $('.et-hero-tab').off('click');
    };
  }, []);

  const slides = [
    {
      city: 'Paris',
      country: 'France',
      img: process.env.PUBLIC_URL + '/images/paris.jpg',
      description: '빛과 사랑의 도시 파리, \n 예술과 낭만이 넘쳐흐르는 프랑스의 심장부에서 에펠탑과 고풍스러운 거리 풍경을 만끽하세요.',
    },
    {
      city: 'Singapore',
      img: process.env.PUBLIC_URL + '/images/singapore.jpg',
      description: '동남아시아의 활기찬 허브 싱가포르, \n 초고층 빌딩과 열대 자연이 조화를 이루며 현대적이고 다양한 문화가 공존하는 곳입니다.',
    },
    {
      city: 'Prague',
      country: 'Czech Republic',
      img: process.env.PUBLIC_URL + '/images/prague.jpg',
      description: '동화 속에 나올 법한 프라하, \n 중세 건축과 풍부한 역사가 어우러진 체코의 수도에서 유럽의 고풍스러운 매력을 느껴보세요.',
    },
    {
      city: 'Amsterdam',
      country: 'Netherlands',
      img: process.env.PUBLIC_URL + '/images/amsterdam.jpg',
      description: '운하와 문화의 도시 암스테르담, \n 아름다운 운하와 자전거가 가득한 네덜란드의 수도에서 예술과 자유로움을 경험해보세요.',
    },
    {
      city: 'Moscow',
      country: 'Russia',
      img: process.env.PUBLIC_URL + '/images/moscow.jpg',
      description: '역사가 살아 숨 쉬는 모스크바, \n 붉은 광장과 크렘린 궁전이 있는 러시아의 중심에서 동유럽의 웅장함과 고전을 만나보세요.',
    },
  ];


  return (
    <div>
      <StickySliderNav />
      <MainContent slides={slides} /> 
    </div>
  );
}

export default App;
