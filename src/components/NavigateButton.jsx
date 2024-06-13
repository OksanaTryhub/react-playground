import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { getRandomColor } from "../utils/randomColorGenerator";

const NavigateButton = ({ path, text }) => {
  const [hoverColor, setHoverColor] = useState("rgba(0, 0, 0, 0.1)");
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    const randomColor = getRandomColor();
    setHoverColor(randomColor);
  };

  const handleMouseLeave = () => {
    setHoverColor("rgba(0, 0, 0, 0.1)");
  };

  const handleBtnClick = () => {
    console.log("CLICK");
    navigate(`${path}`);
  };
  return (
    <button
      style={{
        "--tw-shadow": `0 -4px 6px -1px ${hoverColor}, 0 -2px 4px -2px ${hoverColor},0 4px 6px -1px ${hoverColor}, 0 2px 4px -2px ${hoverColor}, -4px 0 6px -1px ${hoverColor}, -2px 0 4px -2px ${hoverColor}, 4px 0 6px -1px ${hoverColor}, 2px 0 4px -2px ${hoverColor}`,
      }}
      className="w-[250px] h-[50px] border rounded-lg flex items-center justify-center font-medium hover:text-indigo-500 hover:shadow-all hover:scale-110 transition-all duration-300 ease-in"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleBtnClick()}
    >
      to {text}
    </button>
  );
};

NavigateButton.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavigateButton;
