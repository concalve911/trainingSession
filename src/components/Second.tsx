import Greeting from "./Greeting";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  setName,
  setAge,
  setIsAdmin,
  setUser,
  User,
} from "../redux/slices/slice";
import styled from "@emotion/styled";

const Button = styled.button`
  background: #d6d3d1;
  border: none;
  color: #000;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 4px;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    border-color: #6366f1;
  }
`;

const RadioWrapper = styled.label`
  display: flex;
  gap: 0.4rem;
  font-size: 0.95rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  width: 5%;

  input[type="radio"] {
    accent-color: #6366f1;
    transform: scale(1.2);
  }
`;

function Second() {
  const dispatch = useDispatch<AppDispatch>();
  const { name, age, isAdmin, user } = useSelector(
    (state: RootState) => state.user
  );

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(event.target.value));
  };

  const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(Number(event.target.value)));
  };

  const handleAdmin = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIsAdmin(event.target.value === "true"));
  };

  function greet(u: User): string {
    return `Hello, ${u.name} ${u.age} years old He is ${
      u.isAdmin ? "admin " : "not admin"
    } `;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setUser());
  };

  const onClick = () => {
    alert(greet(user!));
  };
  return (
    <>
      {user && <Greeting user={user} />}
      <form onSubmit={handleSubmit}>
        <label>
          <Input
            type="text"
            placeholder="Name"
            onChange={handleName}
            value={name}
          />
        </label>
        <label>
          <Input
            type="number"
            placeholder="Age"
            onChange={handleAge}
            value={age}
          />
        </label>
        <p>Are you admin?</p>
        <RadioWrapper>
          <Input
            type="radio"
            name="isAdmin"
            value="true"
            checked={isAdmin === true}
            onChange={handleAdmin}
          />
          Yes
        </RadioWrapper>
        <RadioWrapper>
          <Input
            type="radio"
            name="isAdmin"
            value="false"
            checked={isAdmin === false}
            onChange={handleAdmin}
          />
          No
        </RadioWrapper>
        <Button type="submit"> Send</Button>
        <Button onClick={onClick}> Show</Button>
      </form>
    </>
  );
}

export default Second;
