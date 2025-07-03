import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const CS: NextPage = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">Cs center</Stack>
    </div>
  );
};

export default withLayoutBasic(CS);
