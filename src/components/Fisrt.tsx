import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import styled from "@emotion/styled";
import { setJohnIsAdmin } from "../redux/slices/sliceSecond";

const StyledButton = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.15s ease;
  margin-bottom: 1rem;
  margin-right: 0.5rem;

  &:hover {
    background-color: #4338ca;
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    background-color: #a5b4fc;
    cursor: not-allowed;
  }
`;

type User = {
  name: string;
  age: number;
  isAdmin?: boolean;
};

function First() {
  const dispatch = useDispatch<AppDispatch>();
  const admin = useSelector((state: RootState) => state.johnUser.johnIsAdmin);

  const user: User = {
    name: "John",
    age: 30,
    isAdmin: admin,
  };

  function greet(u: User = user): string {
    return `Hello, ${u.name} ${u.age} years old He is ${
      u.isAdmin ? "admin " : "not admin"
    } `;
  }

  const handleClick = () => {
    dispatch(setJohnIsAdmin(!admin));
  };

  const handleMessage = () => {
    const message = greet(user);
    alert(message);
  };

  return (
    <div>
      <StyledButton onClick={handleClick}>Is John Admin?</StyledButton>
      <StyledButton onClick={handleMessage}>Show Greeting</StyledButton>
    </div>
  );
}
export default First;
