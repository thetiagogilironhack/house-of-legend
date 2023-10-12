import { useEffect, useState } from "react";
import arrowleft from "../assets/left-arrow.png";
import arrowright from "../assets/right-arrow.png";

const ImageSlider = ({ skinsArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? skinsArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === skinsArray.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [skinsArray]);

  return (
    <>
      <div
        className="slider"
        style={{ backgroundImage: `url(${skinsArray[currentIndex]})` }}
      >
        <div className="slider-background"></div>

        <div className="one-slide">
            <div className="arrow" onClick={goToPrevious}>
              <img src={arrowleft} />
            </div>
          <img className="slide-img" src={skinsArray[currentIndex]} />
          <div className="arrow" onClick={goToNext}>
              <img src={arrowright} />
            </div>
        </div>

        <div className="dots-container">
          {skinsArray.map((_, slideIndex) => {
            return (
              <div
                key={slideIndex}
                className={`dots-styles ${slideIndex === currentIndex ? 'active-dot' : ''}`}
                onClick={() => goToSlide(slideIndex)}
              >
                ●
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
