import {
  VariantProps as ClassVariantProps,
  cva,
} from "class-variance-authority";

export const variants = cva(
  "flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
  {
    variants: {
      variant: {
        flush: "h-auto rounded-none border-0 focus:ring-0 p-0",
      },
    },
  }
);

export type VariantProps = ClassVariantProps<typeof variants>;
