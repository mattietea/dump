import { ChangeEventHandler, FC, HTMLAttributes } from "react";

export interface TextAreaProps
  extends Omit<HTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  onChange: (value: string) => void;
  value: string;
}

export const TextArea: FC<TextAreaProps> = ({ onChange, ...rest }) => {
  const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      className="w-full h-64 p-4 border border-gray-300 rounded-lg text-gray-900"
      placeholder="Type something here..."
      onChange={handleOnChange}
      {...rest}
    />
  );
};
