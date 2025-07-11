import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";

const PropertyDetail = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>Homepage mobile</Stack>;
  } else {
    return (
      <>
        <Container>
          <Stack flexDirection={"column"}>
            <Container>Property Detail</Container>
          </Stack>
        </Container>
      </>
    );
  }
};
export default withLayoutBasic(PropertyDetail);
