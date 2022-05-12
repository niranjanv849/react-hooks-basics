import "./App.css";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import FunctionalCounters from "./components/FunctionalCounters";
import StateHookWithObject from "./components/StateHookWithObject";
import StateHookWithArray from "./components/StateHookWithArray";
import EffectHook from "./components/EffectHook";
import ConditionalRenderUseEffect from "./components/ConditionalRenderUseEffect";
import RunOnceUseEffect from "./components/RunOnceUseEffect";
import UseEffectWithCleanUp from "./components/UseEffectWithCleanUp";

function App() {
  return (
    <div className="app">
      {/* <ClassCounter /> */}
      {/* <FunctionalCounter /> */}
      <FunctionalCounters />
      <StateHookWithObject />
      <StateHookWithArray />
      <EffectHook />
      <ConditionalRenderUseEffect />
      <RunOnceUseEffect />
      <UseEffectWithCleanUp />
    </div>
  );
}

export default App;
