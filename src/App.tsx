import Button from "./components/Button";

const onButtonClick = (message: string) => {
  console.log(message);
};

function App() {
  return (
    <div>
      <Button
        message="Primary"
        classes="btn btn-primary"
        handleClick={onButtonClick}
      >
        Primary
      </Button>
      <Button
        message="Danger"
        classes="btn btn-danger"
        handleClick={onButtonClick}
      >
        Danger
      </Button>
      <Button message="Link" classes="btn btn-link" handleClick={onButtonClick}>
        Link
      </Button>
    </div>
  );
}

export default App;
