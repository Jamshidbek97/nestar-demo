import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <Stack flexDirection={"column"}>
        <Box>Popular properties</Box>
        <Box>Top Agents</Box>
        <Box>Top properties</Box>
        <Box>Events</Box>
      </Stack>
    </Container>
  );
};

export default withLayoutMain(Home);
