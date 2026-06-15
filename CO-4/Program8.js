import Message from "./Message";
import withButton from "./withButton";

const MessageWithButton = withButton(Message);

function App() {
  return (
    <div>
      <MessageWithButton text="Hello, world!" />
      <MessageWithButton text="Welcome to React HOCs!" />
    </div>
  );
}

export default App;