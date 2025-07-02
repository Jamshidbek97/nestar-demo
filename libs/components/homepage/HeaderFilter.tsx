import { Stack, Box } from "@mui/material";
import ExpandMoreInfo from "@mui/icons-material/ExpandMore";
import React from "react";

const HeaderFilter = () => {
  return (
    <>
      <Stack className="search-box">
        <Stack className="select-box">
          <Box className="box on" component="div">
            <span>Location</span>
            <ExpandMoreInfo />
          </Box>
          <Box className="box " component="div">
            <span>7 rooms</span>
            <ExpandMoreInfo />
          </Box>
        </Stack>
        <Stack className="search-box-other">
          <Box className="advanced-filter">
            <img src="/img/icons/tune.svg" alt="" />
            <span>Advanced</span>
          </Box>
          <Box className="search-btn">
            <img src="/img/icons/search-white.svg" alt="" />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default HeaderFilter;
