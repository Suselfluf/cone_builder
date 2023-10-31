import axios from "axios";

export default function Input(props: any) {
  const handleFormSubmit = (form: EventTarget): void => {
    const apiUrl = "http://127.0.0.1:5000/trian";
    axios
      .post(apiUrl, form)
      .then((resp) => {
        props.change_coords(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
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
            <input
              onChange={(e) => {
                props.handle_height_change(e.target.value);
              }}
              type="number"
              name="height"
            />
          </div>
          <div className="radius_input">
            <p>Radius</p>
            <input
              onChange={(e) => {
                props.handle_radius_change(e.target.value);
              }}
              type="number"
              name="radius"
            />
          </div>
          <div className="segments_input">
            <p>Number of segments</p>
            <input
              onChange={(e) => {
                props.handle_segments_change(e.target.value);
              }}
              type="number"
              name="segmentsN"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
