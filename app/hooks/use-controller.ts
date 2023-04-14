import { useCallback, useReducer } from "react";

type State = {
  text: string;
  index: number;
  delay: number;
  isPaused: boolean;
};

type Action =
  | { type: "setText"; payload: string }
  | { type: "setIndex"; payload: number }
  | { type: "setDelay"; payload: number }
  | { type: "toggleIsPaused" }
  | { type: "restart" };

export const useController = (init: State) => {
  const [state, dispatch] = useReducer(
    (state: State, action: Action): State => {
      switch (action.type) {
        case "setText":
          return { ...state, text: action.payload };
        case "setDelay":
          return { ...state, delay: action.payload };
        case "toggleIsPaused":
          return { ...state, isPaused: !state.isPaused };
        case "setIndex":
          return { ...state, index: action.payload };
        case "restart":
          return { ...state, index: 0, isPaused: true };
        default:
          return state;
      }
    },
    init
  );

  const handleSetText = useCallback((value: State["text"]): void => {
    dispatch({ type: "setText", payload: value });
  }, []);

  const handleSetIndex = useCallback((value: State["index"]): void => {
    dispatch({ type: "setIndex", payload: value });
  }, []);

  const handleSetDelay = useCallback((value: State["delay"]): void => {
    dispatch({ type: "setDelay", payload: value });
  }, []);

  const handleToggleIsPaused = useCallback((): void => {
    dispatch({ type: "toggleIsPaused" });
  }, []);

  const handleRestart = useCallback((): void => {
    dispatch({ type: "restart" });
  }, []);

  return [
    state,
    {
      setText: handleSetText,
      setDelay: handleSetDelay,
      setIndex: handleSetIndex,
      toggleIsPaused: handleToggleIsPaused,
      restart: handleRestart,
    },
  ] as const;
};
