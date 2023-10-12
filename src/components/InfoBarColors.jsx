const InfoBarColors = ({name, props }) => {
  let color1 = "";
  let color2 = "";
  let color3 = "";
  let color4 = "";
  let color5 = "";
  if (props === 0) {
    color1 = "#023240";
    color2 = "#023240";
    color3 = "#023240";
    color4 = "#023240";
    color5 = "#023240";
  } else if (props > 0 && props <= 2) {
    color1 = "#08d7f7";
    color2 = "#023240";
    color3 = "#023240";
    color4 = "#023240";
    color5 = "#023240";
  } else if (props > 2 && props <= 4) {
    color1 = "#08d7f7";
    color2 = "#08d7f7";
    color3 = "#023240";
    color4 = "#023240";
    color5 = "#023240";
  } else if (props > 4 && props <= 6) {
    color1 = "#08d7f7";
    color2 = "#08d7f7";
    color3 = "#08d7f7";
    color4 = "#023240";
    color5 = "#023240";
  } else if (props > 6 && props <= 8) {
    color1 = "#08d7f7";
    color2 = "#08d7f7";
    color3 = "#08d7f7";
    color4 = "#08d7f7";
    color5 = "#023240";
  } else if (props > 8 && props <= 10) {
    color1 = "#08d7f7";
    color2 = "#08d7f7";
    color3 = "#08d7f7";
    color4 = "#08d7f7";
    color5 = "#08d7f7";
  }
  return (
    <div className="champion-one-stat">
      <p>{name}</p>
      <div className="bar-level-container">
        <div className="bar-level">
          <div
            className="first-level"
            style={{ backgroundColor: `${color1}` }}
          ></div>
          <div
            className="second-level"
            style={{ backgroundColor: `${color2}` }}
          ></div>
          <div
            className="third-level"
            style={{ backgroundColor: `${color3}` }}
          ></div>
          <div
            className="forth-level"
            style={{ backgroundColor: `${color4}` }}
          ></div>
          <div
            className="fifth-level"
            style={{ backgroundColor: `${color5}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InfoBarColors;
