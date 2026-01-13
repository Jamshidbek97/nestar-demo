import { Stack, Box } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import TopAgentCard from "./TopAgentCard";

const TopAgents = () => {
  const [topAgents, setTopAgents] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <Stack className={"top-agents"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Agents</span>
            <p>Our Agents are always ready to serve you</p>
          </Box>
          <Box className={"right"}>
            <div className={"more-box"}>
              <Link href={"/agent"}>
                <span>See All Agents</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>

        <Stack className={"card-box"}>
          <Swiper
            className={"popular-property-swiper"}
            slidesPerView={"auto"}
            spaceBetween={25}
            navigation={{
              nextEl: ".swiper-popular-next",
              prevEl: ".swiper-popular-prev",
            }}
            pagination={{
              el: ".swiper-popular-pagination",
              clickable: true,
            }}
          >
            {topAgents.map((property, index) => (
              <SwiperSlide key={index} className={"popular-property-slide"}>
                <TopAgentCard />
              </SwiperSlide>
            ))}
            ;
          </Swiper>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default TopAgents;
