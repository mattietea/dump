import {
  cva,
  VariantProps as ClassVariantProps,
} from "class-variance-authority";

export const variants = cva("", {
  variants: {
    x: {
      1: "space-x-1",
      2: "space-x-2",
      3: "space-x-3",
      4: "space-x-4",
      5: "space-x-5",
      6: "space-x-6",
    },
    y: {
      1: "space-y-1",
      2: "space-y-2",
      3: "space-y-3",
      4: "space-y-4",
      5: "space-y-5",
      6: "space-y-6",
    },
  },
});

export type VariantProps = ClassVariantProps<typeof variants>;
