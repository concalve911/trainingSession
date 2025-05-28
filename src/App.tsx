import First from "./components/Fisrt";
import { User } from "./components/UserType";
import UserList from "./components/UserList";
import Second from "./components/Second";

const users: User[] = [
  { name: "Alice", age: 30, isAdmin: true },
  { name: "Bob", age: 25, isAdmin: false },
];

function App() {
  return (
    <div>
      <First />
      <Second />
      <UserList users={users} />
    </div>
  );
}
export default App;
