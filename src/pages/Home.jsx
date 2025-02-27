import { useEffect, useState } from "react";
import { Container, Heading } from "@chakra-ui/react";
import { fetchTrending } from "../sevices/api";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchTrending("day")
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);

  console.log(data, 'data')

  return (
    <Container maxW={"container.xl"}>
      <Heading as="h2" fontSize={"md"} textTransform={"uppercase"}>
        Trending
      </Heading>
    </Container>
  );
};

export default Home;
