import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  classes: string;
}

const Button = ({ children, classes }: Props) => {
  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
};

export default Button;
