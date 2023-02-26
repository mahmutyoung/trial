import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase": {
      return { number: state.number++, text: "increased" };
    }
    case "decrease": {
      return { number: state.number--, text: "decreased" };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default function App() {
  const initialState = { text: "", number: 10 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseHandler = () => {
    dispatch({ type: "increase", number: state.number });
  };
  const decreaseHandler = () => {
    dispatch({ type: "decrease", number: state.number });
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          width: "300px",
          margin: "20px auto",
          padding: "60px"
        }}
      >
        <button onClick={increaseHandler}>Increase</button>
        <h1>{`${state.number} Number is ${state.text}!!!`}</h1>
        <button onClick={decreaseHandler}>Decrease</button>
      </div>
    </>
  );
}
