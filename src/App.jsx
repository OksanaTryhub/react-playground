import { BrowserRouter, Route, Routes } from "react-router-dom";

import CoolButton from "./pages/CoolButton";
import Content from "./pages/Content";
import Layout from "./components/Layout";
import Third from "./pages/Third";
import Origami from "./pages/Origami";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route
            path="/cool-button"
            element={<CoolButton text="Hover over me and smile" />}
          />

          <Route path="/origami" element={<Origami />} />
          <Route path="/third" element={<Third />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
