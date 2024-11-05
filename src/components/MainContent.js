// MainContent.js
import React from 'react';
import CitiesSlider from './CitiesSlider';
import Collection from './Collection';
import Music from './Music';
import Wood from './Wood';
import Other from './Other';
function MainContent({ slides }) {  // slides를 props로 받아옴
    return (
        <main className="et-main">
            <section className="et-slide" id="tab-es6">
                <h1>눈과 귀가 즐거운</h1>
                <h3>여행으로 여기는 어때요?</h3>
                <CitiesSlider slides={slides} /> {/* slides 전달 */}
            </section>
            <section className="et-slide" id="tab-flexbox">
                <h1>스릴 넘치고 짜릿한</h1>
                <h3>한계를 뛰어넘는 익스트림 스포츠의 세계로</h3>
                <Collection /> {/* tab-flexbox 섹션에 Collection 추가 */}
            </section>
            <section className="et-slide" id="tab-react">
                <h1>음악의 매력에 빠져보세요</h1>
                <h3>감성 가득한 멜로디와 리듬의 세계로</h3>
                <Music/>
            </section>
            <section className="et-slide" id="tab-angular">
                <h1>나만의 작품, 손끝에서 탄생하다</h1>
                <h3>자연을 담아낸 목공예의 세계로 초대합니다 </h3>
                <Wood/>
            </section>
            <section className="et-slide" id="tab-other">
                <h1>Other</h1>
                <a href='#' id='other'>다른 컨텐츠 찾기</a>
                <Other/>
            </section>
        </main>
    );
}

export default MainContent;
