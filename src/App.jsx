import CoolButton from "./components/CoolButton";

function App() {
  return (
    <>
      <h1 className="font-semibold text-center py-4 bg-gradient-to-t from-red-300 to-indigo-400">
        React Playground
      </h1>
      <CoolButton text="Hover over me and smile" />
    </>
  );
}

export default App;
