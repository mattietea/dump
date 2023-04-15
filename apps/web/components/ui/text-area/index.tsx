import { ChangeEventHandler, TextareaHTMLAttributes, forwardRef } from "react";
import { classes } from "../../../lib/utils/classes";
import { VariantProps, variants } from "./variants";

type HTMLTextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange"
>;

export interface TextAreaProps extends HTMLTextareaProps, VariantProps {
  onChange?: (value: string) => void;
  value?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { className, variant, onChange, ...rest } = props;

    const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      onChange?.(event.target.value);
    };

    return (
      <textarea
        ref={ref}
        className={classes(variants({ variant }), className)}
        onChange={handleOnChange}
        {...rest}
      />
    );
  }
);

TextArea.displayName = "TextArea";
