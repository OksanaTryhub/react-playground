import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const OrigamiLogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};

OrigamiLogoItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default OrigamiLogoItem;
