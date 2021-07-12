import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleIsLoggingStockData } from "../store/slices/is-logging.js";

function ToggleLogging() {
  const dispatch = useDispatch();
  const isLogging = useSelector((state) => state.isLoggingStockData);

  const buttonText = `${isLogging ? "Pause" : "Resume"} Log`;

  function handleClick() {
    dispatch(toggleIsLoggingStockData());
  }
  return (
    <button data-testid="toggle-logging-button" onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default ToggleLogging;
