import { useState } from "react";
import Input from "./InputMenu/Input";
import Scene from "./scene/Scene";

function App() {
  const [coords, set_coords] = useState<Array<[]>>(Array<[]>);
  const [is_loaded, setis_loaded] = useState<boolean>(false);
  const [height, set_height] = useState<number>(0);
  const [radius, set_radius] = useState<number>(0);
  const [segments, set_segments] = useState<number>(0);

  const change_coords = (coords: Array<[]>) => {
    set_coords(coords);
    setis_loaded(true);
  };

  const handle_height_change = (height: number) => {
    set_height(height);
  };

  const handle_radius_change = (radius: number) => {
    set_radius(radius);
  };

  const handle_segments_change = (segments: number) => {
    set_segments(segments);
  };

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
        <Input
          handle_height_change={handle_height_change}
          change_coords={change_coords}
          handle_radius_change={handle_radius_change}
          handle_segments_change={handle_segments_change}
        ></Input>
        {is_loaded && (
          <Scene
            segments={segments}
            radius={radius}
            coords={coords}
            height={height}
          ></Scene>
        )}
        {/* <Scene coords={coords} height={2}></Scene> */}
      </div>
    </>
  );
}

export default App;
