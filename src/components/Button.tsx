interface Props {
  children: string;
  classes: string;
  handleClick: (message: string) => void;
  message: string;
}

const Button = ({ children, classes, handleClick, message }: Props) => {
  return (
    <button
      type="button"
      className={classes}
      onClick={() => handleClick(message)}
    >
      {children}
    </button>
  );
};

export default Button;
