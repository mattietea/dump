"use client";

import { ChangeEventHandler, FC, HTMLAttributes, forwardRef } from "react";

export interface TextAreaProps
  extends Omit<HTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  onChange?: (value: string) => void;
  value?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      props?.onChange?.(event.target.value);
    };

    return (
      <textarea
        {...props}
        ref={ref}
        className={`w-full h-64 py-2 px-3 border border-slate-200 rounded-lg ${props.className}`}
        onChange={handleOnChange}
      />
    );
  }
);

TextArea.displayName = "TextArea";
