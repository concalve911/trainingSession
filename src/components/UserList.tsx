import Greeting from "./Greeting";
import type { User } from "./UserType";

type Props = {
  users: User[];
};

function UserList({ users }: Props) {
  return (
    <div>
      {users.map((user, index) => (
        <Greeting key={index} user={user} />
      ))}
    </div>
  );
}

export default UserList;
