import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Other = () => {
  const imagesRef = useRef([]);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  // 이미지 파일 이름을 배열로 관리
  const images = [
    'air.jpg',
    'bongsa.jpg',
    'camp.jpg',
    'dacu.jpg',
    'juntong.jpg',
    'mokjang.png',
    'perfume.png',
    'ring.jpeg',
    'wedding.jpg',
    'coffe.jpg',
  ];

  // 리니어 인터폴레이션과 맵 함수
  const lerp = (a, b, n) => (1 - n) * a + n * b;
  const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

  const getMousePosition = (e) => {
    let posX = e.clientX;
    let posY = e.clientY;

    return { x: posX, y: posY };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = getMousePosition(e);
    };
    window.addEventListener('mousemove', handleMouseMove);

    gsap.fromTo(
      imagesRef.current,
      { scale: 1.2, autoAlpha: 0, ease: 'power3.inOut' },
      { scale: 1, autoAlpha: 1, stagger: 0.1, duration: 2.5 }
    );

    imagesRef.current.forEach((img, i) => {
      const values = { x: 0, y: 0 };
      const xStart = gsap.utils.random(16, 64);
      const yStart = gsap.utils.random(-16, 64);

      const render = () => {
        values.x = lerp(
          values.x,
          map(mousePos.current.x, 0, window.innerWidth, -xStart, xStart),
          0.07
        );
        values.y = lerp(
          values.y,
          map(mousePos.current.y, 0, window.innerHeight, -yStart, yStart),
          0.07
        );

        gsap.set(img, { x: values.x, y: values.y });
        requestAnimationFrame(render);
      };
      render();
    });

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="other-image-grid">
      <div className="other-title">
      </div>
      {images.map((imageName, i) => (
        <div key={i} className={`other-image-grid__item other-pos-${i + 1}`}>
          <img
            ref={(el) => (imagesRef.current[i] = el)}
            src={`${process.env.PUBLIC_URL}/images/${imageName}`}
            alt=""
            className="other-img"
          />
        </div>
      ))}
    </div>
  );
};

export default Other;
