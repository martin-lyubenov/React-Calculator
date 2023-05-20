import { useReducer } from "react";

import classes from "./Form.module.css";

const initialState = { result: "0", prevValue: null, currentSign: "" };

const calculatorReducor = (state, action) => {
  if (action.type === "+") {
    let newResult;
    let prevValue;

    if (state.prevValue === null) {
      prevValue = Number(state.result);
      newResult = "";
    } else {
      newResult = state.prevValue + Number(state.result);
      prevValue = null;
    }

    return {
      result: newResult,
      prevValue,
      currentSign: action.type,
    };
  }

  if (action.type === "-") {
    let newResult;
    let prevValue;

    if (state.prevValue === null) {
      prevValue = Number(state.result);
      newResult = "";
    } else {
      newResult = state.prevValue - Number(state.result);
      prevValue = null;
    }

    return {
      result: newResult,
      prevValue,
      currentSign: action.type,
    };
  }

  if (action.type === "/") {
    let newResult;
    let prevValue;

    if (state.prevValue === null) {
      prevValue = Number(state.result);
      newResult = "";
    } else {
      newResult = state.prevValue / Number(state.result);
      prevValue = null;
    }

    return {
      result: newResult,
      prevValue,
      currentSign: action.type,
    };
  }

  if (action.type === "*") {
    let newResult;
    let prevValue;

    if (state.prevValue === null) {
      prevValue = Number(state.result);
      newResult = "";
    } else {
      newResult = state.prevValue * Number(state.result);
      prevValue = null;
    }

    return {
      result: newResult,
      prevValue,
      currentSign: action.type,
    };
  }

  if (action.type === "AC") {
    return initialState;
  }

  if (action.type === "+/-") {
    let result;
    if (!state.result.toString().includes("-")) {
      result = "-" + state.result;
    } else {
      result = state.result.toString().replace("-", "");
    }

    return {
      result,
      prevValue: state.prevValue,
      currentSign: state.currentSign,
    };
  }

  if (action.type === "=") {
    let result = Number(state.prevValue) + Number(state.result);

    switch (state.currentSign) {
      case "+":
        result = Number(state.prevValue) + Number(state.result);
        break;

      case "-":
        result = Number(state.prevValue) - Number(state.result);
        break;

      case "*":
        result = Number(state.prevValue) * Number(state.result);
        break;

      case "/":
        result = Number(state.prevValue) / Number(state.result);
        break;
    }

    result.toString();

    return {
      result,
      prevValue: null,
      currentSign: "",
    };
  }

  if (action.type === "%") {
    let result = Number(state.result) / 100;
    result.toString();

    return {
      result,
      prevValue: state.prevValue,
      currentSign: state.currentSign,
    };
  }

  if (action.type === "digit") {
    let result = state.result + action.value;
    result.toString();

    return {
      result,
      prevValue: state.prevValue,
      currentSign: state.currentSign,
    };
  }

  return initialState;
};

function Form() {
  const [calculatorState, dispatchCalculator] = useReducer(
    calculatorReducor,
    initialState
  );

  function operatorClickHandler(event) {
    dispatchCalculator({ type: event.target.value });
  }

  function digitClickHandler(event) {
    dispatchCalculator({ type: "digit", value: event.target.value });
  }

  return (
    <form className={classes.form}>
      <input
        className={classes.result}
        type="text"
        id="result"
        readOnly
        value={calculatorState.result}
      />
      <input onClick={operatorClickHandler} type="button" value="AC" />
      <input onClick={operatorClickHandler} type="button" value="+/-" />
      <input onClick={operatorClickHandler} type="button" value="%" />
      <input
        onClick={operatorClickHandler}
        className={classes.operators}
        type="button"
        value="/"
      />
      <input onClick={digitClickHandler} type="button" value="7" />
      <input onClick={digitClickHandler} type="button" value="8" />
      <input onClick={digitClickHandler} type="button" value="9" />
      <input
        onClick={operatorClickHandler}
        className={classes.operators}
        type="button"
        value="*"
      />
      <input onClick={digitClickHandler} type="button" value="4" />
      <input onClick={digitClickHandler} type="button" value="5" />
      <input onClick={digitClickHandler} type="button" value="6" />
      <input
        onClick={operatorClickHandler}
        className={classes.operators}
        type="button"
        value="-"
      />
      <input onClick={digitClickHandler} type="button" value="1" />
      <input onClick={digitClickHandler} type="button" value="2" />
      <input onClick={digitClickHandler} type="button" value="3" />
      <input
        onClick={operatorClickHandler}
        type="button"
        className={classes.operators}
        value="+"
      />
      <input
        onClick={digitClickHandler}
        className={classes.zero}
        type="button"
        value="0"
      />
      <input onClick={digitClickHandler} type="button" value="." />
      <input
        onClick={operatorClickHandler}
        type="button"
        className={classes.operators}
        value="="
      />
    </form>
  );
}

export default Form;
