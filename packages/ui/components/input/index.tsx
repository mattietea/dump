import { InputHTMLAttributes, forwardRef } from "react";

import { VariantProps, variants } from "./variants";

import { classes } from "ui";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

export interface InputProps extends VariantProps, HTMLInputProps {
  onChange: (value: string) => void;
  value: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, variant, onChange, ...rest } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: This should work without the ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore 2339
    onChange(event.target.value);
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
