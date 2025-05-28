import type { User } from "./UserType";

type GreetingProps = {
  user: User;
};

function Greeting({ user }: GreetingProps) {
  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <p>Age: {user.age}</p>
      <p>Status: {user.isAdmin ? "Admin" : "Not admin"}</p>
    </div>
  );
}

export default Greeting;
