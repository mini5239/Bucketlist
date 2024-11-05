import React from 'react';

function StickySliderNav() {
    return (
        <section className="et-hero-tabs">
            <h1>여러분의 지루한 일상을 바꿔드립니다.</h1>
            <h3>버킷 리스트 추천 사이트</h3>
            <div className="et-hero-tabs-container">
                <a className="et-hero-tab" href="#tab-es6">여행지 추천</a>
                <a className="et-hero-tab" href="#tab-flexbox">익스트림 스포츠</a>
                <a className="et-hero-tab" href="#tab-react">악기 배우기</a>
                <a className="et-hero-tab" href="#tab-angular">목공예 만들기</a>
                <a className="et-hero-tab" href="#tab-other">더 알아보기</a>
                <span className="et-hero-tab-slider"></span>
            </div>
        </section>
    );
}

export default StickySliderNav;