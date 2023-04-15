import { FC, PropsWithChildren } from "react";

const H2: FC<PropsWithChildren> = (props) => {
  return <h2 className="text-lg font-semibold tracking-tight" {...props} />;
};

const Subtle: FC<PropsWithChildren> = (props) => {
  return (
    <p className="text-sm text-slate-500 dark:text-slate-400" {...props} />
  );
};

export const Typography = {
  H2,
  Subtle,
};
