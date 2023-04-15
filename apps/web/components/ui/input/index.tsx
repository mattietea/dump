import { ChangeEventHandler, InputHTMLAttributes, forwardRef } from "react";

import { classes } from "../../../lib/utils/classes";

import { VariantProps, variants } from "./variants";


export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">,
    VariantProps {
  onChange?: (value: string) => void;
  value?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, variant, onChange, ...rest } = props;

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      ref={ref}
      className={classes(variants({ variant }), className)}
      onChange={handleOnChange}
      {...rest}
    />
  );
});

Input.displayName = "Input";
