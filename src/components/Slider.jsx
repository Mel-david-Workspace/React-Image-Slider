/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 500); // Change slide every 0.5s

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, []);

  return (
    <div css={sliderStyles}>
      <button onClick={goToPrevSlide} css={arrowStyles}>
        {'<'}
      </button>
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} css={imageStyles} />
      <button onClick={goToNextSlide} css={arrowStyles}>
        {'>'}
      </button>
    </div>
  );
};

const sliderStyles = css`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const imageStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const arrowStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 15px 20px;
  font-size: 2rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-50%) scale(1.1);
  }

  &:first-of-type {
    left: 20px;
  }

  &:last-of-type {
    right: 20px;
  }
`;

export default Slider;
