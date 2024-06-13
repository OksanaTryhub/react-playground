const getRandomColor = (format = "hex") => {
  switch (format) {
    case "hex":
      return getRandomHexColor();
    case "rgb":
      return getRandomRgbColor();
    case "hsl":
      return getRandomHslColor();
    default:
      throw new Error("Unsupported color format!");
  }
};

const getRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomRgbColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const getRandomHslColor = () => {
  const h = Math.floor(Math.random() * 361); // Оттенок от 0 до 360
  const s = Math.floor(Math.random() * 101); // Насыщенность от 0% до 100%
  const l = Math.floor(Math.random() * 101); // Светлота от 0% до 100%
  return `hsl(${h}, ${s}%, ${l}%)`;
};

export {
  getRandomColor,
  getRandomHexColor,
  getRandomRgbColor,
  getRandomHslColor,
};
