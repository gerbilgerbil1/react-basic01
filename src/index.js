import ReactDom, { render } from "react-dom";

const App = () => {
  return (
    <>
      <h1>こんにちは!</h1>
      <p>元気です</p>
    </>
  );
};

ReactDom: render(<App />, document.getElementById("root"));
