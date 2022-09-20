import "./App.css";
import { ChakraProvider, Button, Spinner, Input } from "@chakra-ui/react";
import DisplayJohn, { JohnProfile } from "./components/DisplayJohn.js";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Button colorScheme="red" size="lg">
          Button 1
        </Button>
        <Button colorScheme="green" size="md">
          Button 2
        </Button>
        <Button colorScheme="blue" size="sm">
          Button 3
        </Button>

        <Spinner color="red" size="lg"></Spinner>
        <Spinner color="blue" size="md"></Spinner>
        <Spinner color="pink" size="sm"></Spinner>

        <Input
          size="lg"
          width="100px"
          variant="outline"
          borderColor="red"
        ></Input>
        <Input
          size="lg"
          width="100px"
          variant="flushed"
          borderColor="green"
        ></Input>
        <Input
          size="lg"
          width="100px"
          variant="filled"
          borderColor="gray"
        ></Input>
        <DisplayJohn />
        <JohnProfile />
      </ChakraProvider>
    </div>
  );
}

export default App;
