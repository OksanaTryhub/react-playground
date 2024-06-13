import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";
import OrigamiLogoRolodex from "../components/OrigamiLogoRolodex ";
import OrigamiLogoItem from "../components/OrigamiLogoItem";

const Origami = () => {
  return (
    <section className="h-screen pt-[70px]">
      <div className="container flex flex-col mx-auto p-3">
        <div className="flex h-72 flex-col items-center justify-center gap-12 bg-neutral-950 px-4 py-24 md:flex-row">
          <OrigamiLogoRolodex
            items={[
              <OrigamiLogoItem
                key={1}
                className="bg-orange-300 text-neutral-900"
              >
                <SiAmazon />
              </OrigamiLogoItem>,
              <OrigamiLogoItem
                key={2}
                className="bg-green-300 text-neutral-900"
              >
                <SiGoogle />
              </OrigamiLogoItem>,
              <OrigamiLogoItem key={3} className="bg-blue-300 text-neutral-900">
                <SiMeta />
              </OrigamiLogoItem>,
              <OrigamiLogoItem key={4} className="bg-white text-black">
                <SiGithub />
              </OrigamiLogoItem>,
              <OrigamiLogoItem
                key={5}
                className="bg-purple-300 text-neutral-900"
              >
                <SiTwitch />
              </OrigamiLogoItem>,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Origami;
