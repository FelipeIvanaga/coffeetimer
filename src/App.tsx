import { ChangeEvent, useEffect, useState } from "react";
import { Clock } from "./components/Clock";

function App() {
  const [clock, setClock] = useState(0);
  const [running, setRunning] = useState(false);
  const [startAt, setStartAt] = useState(0);

  useEffect(() => {
    if (running) {
      updateClock();
    }
  }, [clock]);

  function updateClock() {
    setTimeout(() => {
      setClock(clock + 0.01);
    }, 10);
  }

  function handleStart() {
    setRunning(true);
    updateClock();
  }

  function handleStop() {
    setRunning(false);
  }

  function handleReset() {
    setRunning(false);
    setTimeout(() => {
      setClock(startAt);
    }, 100);
  }

  function handleChangeStartAt(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const start = value.length === 0 ? 0 : parseFloat(value);
    setStartAt(start);
    if (!running) {
      setClock(start);
    }
  }

  return (
    <div className="flex max-w-lg mx-auto py-16 justify-center items-center flex-col">
      <div className="flex flex-row items-center gap-2 py-4">
        <label htmlFor="startAt" className="text-xl">
          Starting at:{" "}
        </label>
        <input
          value={startAt}
          onChange={handleChangeStartAt}
          type="number"
          className="w-16 bg-overlay2 bg-opacity-20 rounded px-2 py-1 text-yellow"
          name="startAt"
        />
      </div>
      <div className="py-16 flex flex-col items-center">
        <Clock time={clock} />

        <div className="flex gap-4 my-8">
          <button
            onClick={handleStart}
            className="py-2 px-3 bg-green bg-opacity-80 hover:bg-opacity-100 transition-all text-base text-xl font-bold uppercase rounded"
          >
            Start
          </button>

          <button
            onClick={handleStop}
            className="py-2 px-3 bg-peach bg-opacity-80 hover:bg-opacity-100 transition-all text-base text-xl font-bold uppercase rounded"
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            className="py-2 px-3 bg-red bg-opacity-80 hover:bg-opacity-100 transition-all text-base text-xl font-bold uppercase rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
