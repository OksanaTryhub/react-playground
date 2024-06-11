import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CoolButton = ({ text }) => {
  const [hovered, setHovered] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [inputTxt, setInputTxt] = useState("");
  const randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    if (!hovered) {
      setDisplayText(inputTxt ? "*".repeat(inputTxt.length) : text);
    } else {
      setDisplayText(inputTxt || text);
    }

    let interval;
    if (hovered) {
      setIsAnimating(true);
      let currentText = "";
      let charIndex = 0;

      interval = setInterval(() => {
        if (charIndex < (inputTxt || text).length) {
          currentText = (inputTxt || text).substring(0, charIndex + 1);
          setDisplayText(
            currentText +
              generateRandomString((inputTxt || text).length - charIndex - 1)
          );
          charIndex++;
        } else {
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, 100);
    } else {
      setDisplayText(inputTxt ? "*".repeat(inputTxt.length) : text);
    }

    return () => clearInterval(interval);
  }, [hovered, inputTxt, text]);

  const generateRandomString = (length) => {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  };

  const onChangeHandler = (e) => {
    setInputTxt(e.target.value);
  };

  return (
    <div className="inline-flex flex-col gap-10 p-[150px] items-center justify-center w-full">
      <button
        className="relative inline-flex items-center justify-center min-w-[315px] p-4 font-bold text-white bg-slate-500 rounded-md group overflow-hidden hover:text-indigo-300 hover:shadow-all hover:shadow-indigo-300 hover:scale-110 transition-all duration-700 ease-in"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {displayText}
        {isAnimating && (
          <div className="absolute hidden group-hover:block group-hover:animate-moving w-full ">
            <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-b from-transparent to-[rgba(165,180,252,0.8)]"></span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-t from-indigo-300 via-indigo-400 to-indigo-300"></span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-t from-transparent to-[rgba(165,180,252,0.9)]"></span>
          </div>
        )}
      </button>

      <input
        type="text"
        placeholder="Enter any text and hover over the button"
        onChange={onChangeHandler}
        className="w-[315px] focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 p-4 rounded-lg border "
      />
    </div>
  );
};

CoolButton.propTypes = {
  text: PropTypes.string.isRequired,
};
export default CoolButton;
