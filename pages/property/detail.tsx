import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";

const PropertyDetail = () => {
  return (
    <>
      <Container>
        <Stack flexDirection={"column"}>
          <Container>Property Detail</Container>
        </Stack>
      </Container>
    </>
  );
};

export default withLayoutBasic(PropertyDetail);
