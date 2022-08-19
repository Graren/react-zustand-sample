import "./App.css";
import ZustandCounter from "./librarySpecific/Counter";
import useRootStore from "./store";
import { useEffect } from "react";

const selector = (key) => (s) => s[key];

function App() {
  const yeah = useRootStore(selector("yeah"));
  const waitTillItsCool = useRootStore((s) => s.waitTillItsCool);

  useEffect(() => {
    waitTillItsCool();
  }, [waitTillItsCool]);

  return (
    <>
      <span>{yeah}</span>
      <ZustandCounter />;
    </>
  );
}

export default App;
