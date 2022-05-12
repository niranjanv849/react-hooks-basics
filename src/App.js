import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import FunctionalCounters from "./components/FunctionalCounters";
import StateHookWithObject from "./components/StateHookWithObject";
import StateHookWithArray from "./components/StateHookWithArray";
import EffectHook from "./components/EffectHook";
import ConditionalRenderUseEffect from "./components/ConditionalRenderUseEffect";
import RunOnceUseEffect from "./components/RunOnceUseEffect";
import UseEffectWithCleanUp from "./components/UseEffectWithCleanUp";
import FetchingDataWithUseEffect from "./components/FetchingDataWithUseEffect";
function App() {
  console.log("SIVA");
  return (
    <div className="app">
      {/* <ClassCounter /> */}
      {/* <FunctionalCounter /> */}
      {/* <FunctionalCounters /> */}
      {/* <StateHookWithObject /> */}
      {/* <StateHookWithArray /> */}
      {/* <EffectHook /> */}
      {/* <ConditionalRenderUseEffect /> */}
      {/* <RunOnceUseEffect /> */}
      {/* <UseEffectWithCleanUp /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<FetchingDataWithUseEffect />} />
        </Routes>
      </BrowserRouter> */}
      <FetchingDataWithUseEffect />
    </div>
  );
}

export default App;
