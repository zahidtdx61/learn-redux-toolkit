import { Helmet } from "react-helmet-async";
import Users from "../components/Users";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>Home</div>
      <Users />
    </>
  );
};

export default Home;
