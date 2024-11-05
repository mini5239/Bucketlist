import React, { useState } from 'react';
import ProjectCategory from './ProjectCategory';

function Collection() {
    const [categories] = useState([
        {
            id: 1,
            name: '패러글라이딩',
            thumbnail: process.env.PUBLIC_URL + '/images/sports1.jpg',
            projects: [
                { id: 1, acf: { project_client: '끝없이 펼쳐진 하늘을 나는 짜릿함! 자연과 하나 되어 자유롭게 비행하는 스릴을 느껴보세요' } }      
            ],
        },
        {
            id: 2,
            name: '스쿠버 다이빙',
            thumbnail: process.env.PUBLIC_URL + '/images/sports2.png',
            projects: [
                { id: 2, acf: {  project_client: '깊은 바닷속 신비로운 세계 탐험! 다채로운 해양 생물과 산호초 사이를 자유롭게 유영해보세요.' } },
            ]
        },
        {
            id: 3,
            name: '번지 점프',
            thumbnail: process.env.PUBLIC_URL + '/images/sports3.png',
            projects: [
                { id: 3, acf: {project_client: '순간의 두려움을 극복하고 맞이하는 자유 낙하! 아찔한 높이에서 내려다보는 세상은 색다른 짜릿함을 선사합니다.' } },
            ],
        },
        {
            id: 4,
            name: '카레이싱',
            thumbnail: process.env.PUBLIC_URL + '/images/sports4.png',
            projects: [
                { id: 4, acf: {  project_client: '끝없이 이어지는 트랙 위에서 속도의 한계를 넘나들다! 엔진 소리와 함께 아드레날린이 솟구치는 순간을 경험하세요' } },
            ],
        },
        {
            id: 5,
            name: '승마',
            thumbnail: process.env.PUBLIC_URL + '/images/sports5.png',
            projects: [
                { id: 5, acf: { project_client: '자연 속에서 말과 하나 되어 달리다! 말의 박력과 유대감을 느끼며 색다른 자유를 만끽하세요.' } },
            ],
        }

    ]);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleCategoryClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="categories--menu-container">
            <ul className="categories menu">
                {categories.map((cat, index) => (
                    <ProjectCategory
                        key={cat.id}
                        cat={cat}
                        active={index === activeIndex}
                        handleClick={() => handleCategoryClick(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Collection;
