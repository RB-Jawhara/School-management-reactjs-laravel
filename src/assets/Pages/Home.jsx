import { useContext } from "react";
import { UserStateContext } from "../../Context/UserContext.jsx";

const Home = () => {

  const { logout } = useContext(UserStateContext);

  return (
    <div>
      <h1>Welcome</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;