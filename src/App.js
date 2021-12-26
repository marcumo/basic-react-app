import {
  Text,
  Button,
  FormControl,
  FormLabel,
  Select,
  Input,
  Box
} from "@chakra-ui/react";

export default function App() {
  return (
    <div className="App">
      <Text>Basic To-do App</Text>
      <Box p={"5"}>
        <FormControl>
          <FormLabel htmlFor="type-of-task">Type of Task</FormLabel>
          <Select id="type-of-task" placeholder="Select type of task">
            <option>Work</option>
            <option>Home</option>
            <option>Street</option>
          </Select>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input id="description" placeholder="Description" />
        </FormControl>
        <Button>Add Task</Button>
      </Box>
      <Box>List of Tasks</Box>
    </div>
  );
}
