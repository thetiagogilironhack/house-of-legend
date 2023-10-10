import { useState } from "react";
import arrowleft from "../assets/left-arrow.png";
import arrowright from "../assets/right-arrow.png";

const ImageSlider = ({ championName, skinsArray }) => {
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

  return (
    <>
      <div className="slider">
        <div className="arrow-left" onClick={goToPrevious}>
          <img src={arrowleft} />
        </div>
        <div className="arrow-right" onClick={goToNext}>
          <img src={arrowright} />
        </div>
        <div
          className="one-slide"
          style={{ backgroundImage: `url(${skinsArray[currentIndex]})` }}
        ></div>
        <div
        className="bg-image"
        style={{ backgroundImage: `url(${skinsArray[currentIndex]})` }}
      ></div>
      </div>
      
    </>
  );
};

export default ImageSlider;
