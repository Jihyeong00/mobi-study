import { useNavigate } from "react-router-dom";
import Button from "../../compoents/button/Button";

const Home = () => {
  const navigator = useNavigate();
  const natvigateToTodoPage = () => {
    navigator("/todo");
  };

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={natvigateToTodoPage}>Go to TodoPage</Button>
    </div>
  );
};
export default Home;
