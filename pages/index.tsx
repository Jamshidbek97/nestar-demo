import PopularProperties from "@/libs/components/homepage/PopularProperties";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: NextPage = () => {
  return (
    <Stack className="home-page">
      <TrendProperties />
      <PopularProperties />
      <Stack>
        <Stack className="container">Advertisements</Stack>
      </Stack>
      <Stack>
        <Stack className="container">Top Properties</Stack>
      </Stack>
      <Stack>
        <Stack className="container">Top Agents</Stack>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
