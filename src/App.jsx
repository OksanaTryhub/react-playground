import CoolButton from "./components/CoolButton";

function App() {
  return (
    <div className="flex flex-col h-screen ">
      <h1 className="font-semibold text-center py-4 bg-gradient-to-t from-slate-300 via-indigo-300 to-slate-300">
        React Playground
      </h1>
      <CoolButton text="Hover over me and smile" />
    </div>
  );
}

export default App;
