import { useState } from "react";

const ImageSlider = ({ champion, skins }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <div style={{backgroudImage : `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skins[currentIndex]}.jpg)`}}></div>
    </div>
  );
};

export default ImageSlider;
