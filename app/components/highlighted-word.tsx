import { FC } from "react";

interface Props {
  children?: string;
  position: number;
}

export const HighlightedWord: FC<Props> = ({ children, position }) => {
  if (!children) {
    return null;
  }

  if (children?.length < position) {
    return <span>{children}</span>;
  }

  return (
    <p>
      {children.split("").map((value, index) => {
        const isHighlighted = index === position;

        return (
          <span
            key={index}
            className={isHighlighted ? "text-red-500" : undefined}
          >
            {value}
          </span>
        );
      })}
    </p>
  );
};
