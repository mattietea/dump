import { FC, useMemo } from "react";
import { useInterval } from "../../lib/hooks/use-interval";

export interface WordListProps {
  text: string;
  delay: number;
  isPaused: boolean;
  index: number;
  onIndexChange: (index: number) => void;
  onCompleted: () => void;
  children: (word: string) => JSX.Element;
}

export const WordList: FC<WordListProps> = ({
  text,
  delay,
  isPaused,
  children,
  index,
  onIndexChange,
  onCompleted,
}) => {
  const words = useMemo(() => {
    return getWords(text);
  }, [text]);

  useInterval(() => {
    if (isPaused) {
      return;
    }

    if (index === words.length - 1) {
      onCompleted();
      return;
    }

    onIndexChange(index + 1);
  }, delay);

  return <>{children(words[index])}</>;
};

const getWords = (text: string): string[] => {
  return text
    .replace(/[\.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(" ")
    .filter((word) => word.length !== 1);
};
