import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Button, Stack } from "@mui/material";
import { NextPage } from "next";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Filter from "@/libs/components/property/Filter";
import { useState } from "react";
import PropertyCard from "@/libs/components/property/PropertyCard";

const PropertyList: NextPage = () => {
  console.log("Property component - pages router");

  return (
    <div id="property-list-page">
      <Stack className="container">
        <Box className="right">
          <span className="sort-label">Sort by</span>
          <Button
            className="sort-button"
            endIcon={<KeyboardArrowDownRoundedIcon />}
          >
            New
          </Button>
        </Box>
        <Stack className="property-page">
          <Stack className="filter-config">
            <Filter />
          </Stack>
          <Stack className="main-config">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <PropertyCard key={num} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
