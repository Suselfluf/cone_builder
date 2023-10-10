import { useState } from "react";
import axios from "axios";

import Scene from "./scene/Scene";

function App() {
  const handleFormSubmit = (form: EventTarget): void => {
    const apiUrl = "http://127.0.0.1:5000/trian";
    axios.post(apiUrl, form).then((resp) => {
      console.log(resp);
    });
    set_height(3);
  };

  const [height, set_height] = useState<number>(2);

  return (
    <>
      <h1>Hello front</h1>
      {height}
      <Scene height={2}></Scene>
      <canvas id="scene_bg"></canvas>
      <div className="input_wrapper">
        <form
          action="submit"
          onSubmit={(event) => {
            event.preventDefault();
            handleFormSubmit(event.target);
          }}
        >
          <div className="height_input">
            <p>Height</p>
            <input type="number" name="height" />
          </div>
          <div className="radius_input">
            <p>Radius</p>
            <input type="number" name="radius" />
          </div>
          <div className="segments_input">
            <p>Number of segments</p>
            <input type="number" name="segmentsN" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
