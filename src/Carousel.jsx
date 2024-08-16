import React, { useState, useEffect } from 'react';
import {
  CarouselContainer,
  Slide,
  Title,
  Image,
  Description,
  PrevButton,
  NextButton,
  IndicatorContainer,
  Indicator,
  CarouselWrapper,
  IndicatorWrapper
} from './styles';

const Carousel = ({ items, autoPlay = true, autoPlayTime = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const lastIndex = items.length - 1;
    const index = currentIndex === 0 ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, autoPlayTime);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoPlay, autoPlayTime]);

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <Slide style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <Title>{items[currentIndex].title}</Title>
          <Image src={items[currentIndex].image} alt={items[currentIndex].title} />
          <Description>{items[currentIndex].description}</Description>
        </Slide>
        <PrevButton onClick={prevSlide}>❮</PrevButton>
        <NextButton onClick={nextSlide}>❯</NextButton>
      </CarouselContainer>
      <IndicatorWrapper>
        <IndicatorContainer>
          {items.map((_, index) => (
            <Indicator
              key={index}
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </IndicatorContainer>
      </IndicatorWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;
