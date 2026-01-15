interface Props {
  children: string;
  type?: string;
  handleClick: (message: string) => void;
  message: string;
}

const Button = ({
  children,
  type = "primary",
  handleClick,
  message,
}: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + type}
      onClick={() => handleClick(message)}
    >
      {children}
    </button>
  );
};

export default Button;
