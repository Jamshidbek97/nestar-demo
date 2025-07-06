import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Button, Pagination, Stack } from "@mui/material";
import { NextPage } from "next";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Filter from "@/libs/components/property/Filter";
import { useState } from "react";
import PropertyCard from "@/libs/components/property/PropertyCard";

const PropertyList: NextPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div id="property-list-page" style={{ marginBottom: "50px" }}>
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
          <Box className="filter-config">
            <Filter />
          </Box>

          <Box className="card-wrap">
            <Box className="main-config">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <PropertyCard key={i} />
              ))}
            </Box>

            <Box className="pagination-container">
              <Pagination count={10} page={1} color="primary" />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
