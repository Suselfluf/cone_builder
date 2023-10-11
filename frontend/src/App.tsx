import Input from "./InputMenu/Input";
import Scene from "./scene/Scene";

function App() {
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
        <Input></Input>
        <Scene height={2}></Scene>
      </div>
    </>
  );
}

export default App;
