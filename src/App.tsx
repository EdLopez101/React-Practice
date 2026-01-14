import Button from "./components/Button";

const onButtonClick = (message: string) => {
  console.log(message);
};

function App() {
  return (
    <div>
      <Button message="Primary" type="primary" handleClick={onButtonClick}>
        Primary
      </Button>
      <Button message="Danger" type="danger" handleClick={onButtonClick}>
        Danger
      </Button>
      <Button message="Link" type="link" handleClick={onButtonClick}>
        Link
      </Button>
    </div>
  );
}

export default App;
