import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack>
      <Stack flexDirection={"column"}>
        <Box className="container">Popular properties</Box>
        <Stack className="container">Top Agents</Stack>
        <Box>Top properties</Box>
        <Container>Events</Container>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
