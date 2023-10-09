import { useState } from "react";

const ShowMoreButton = (props) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div>
      <button onClick={toggle}>v</button>
      {open && <div className="toggle">{props.children}</div>}
    </div>
  );
};

export default ShowMoreButton;
