import PropTypes from "prop-types";
import Header from "./Header";
import { Link, useLocation } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import { paths } from "../data/paths";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const currentIndex = paths.findIndex((item) => item.path === pathname);
  const nextRoute =
    currentIndex !== -1 && currentIndex < paths.length - 1
      ? paths[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container flex flex-col mx-auto mt-20 p-3 ">
        <div className="flex">
          <Link
            to={"/"}
            className={`flex gap-4 items-center text-lg p-3 mr-auto hover:text-indigo-600 hover:scale-110 transition-all duration-300 ease-in ${
              pathname === "/" && "hidden"
            }`}
          >
            <GiReturnArrow className="" />
            Back to Content
          </Link>
          {nextRoute && nextRoute.path && (
            <Link
              to={nextRoute.path}
              className="flex gap-4 items-center text-lg p-3 ml-auto hover:text-indigo-600 hover:scale-110 transition-all duration-300 ease-in"
            >
              Go to Next Feature
              <GiReturnArrow className="flex rotate-180" />
            </Link>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
