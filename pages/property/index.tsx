import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  console.log("Property component - pages router");

  return (
    <>
      <Container>Property list</Container>
    </>
  );
};

export default withLayoutBasic(PropertyList);
