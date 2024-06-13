import NavigateButton from "../components/NavigateButton";
import { paths } from "../data/paths";

const Content = () => {
  return (
    <section className="h-screen pt-[70px]">
      <div className="container flex wrap mx-auto p-3 gap-8">
        {paths.slice(1).map(({ path, name }) => (
          <NavigateButton key={path} path={path} text={name} />
        ))}
      </div>
    </section>
  );
};

export default Content;
