"use client";
import { FC } from "react";

import { useController } from "../hooks/use-controller";

import { HighlightedWord } from "./highlighted-word";
import { WordList, WordListProps } from "./word-list";


export const Controller: FC = () => {
  const [state, dispatch] = useController({
    text: "",
    isPaused: true,
    index: 0,
    delay: 500,
  });

  const handleOnCompleted: WordListProps["onCompleted"] = () => {
    dispatch.restart();
  };

  return (
    <>
      <button onClick={dispatch.toggleIsPaused}>
        {state.isPaused ? "Start" : "Pause"}
      </button>
      {!state.isPaused && (
        <WordList
          {...state}
          delay={1000}
          onCompleted={handleOnCompleted}
          onIndexChange={dispatch.setIndex}
        >
          {(word) => <HighlightedWord position={2}>{word}</HighlightedWord>}
        </WordList>
      )}
    </>
  );
};
