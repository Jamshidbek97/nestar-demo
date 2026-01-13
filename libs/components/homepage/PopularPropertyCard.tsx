import React from "react";
import { Stack, Box, Divider, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PopularPropertyCard: React.FC = () => {
  return (
    <Stack className="popular-card-box">
      <Box
        className="card-img"
        sx={{
          backgroundImage: 'url("/img/banner/types/apartment.webp")',
        }}
      >
        <div
          className="status"
          style={{ position: "absolute", top: 10, left: 10 }}
        >
          <img src="/img/icons/electricity.svg" alt="status" />
          <span>Top</span>
        </div>
        <div
          className="price"
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            color: "black",
            fontWeight: 600,
          }}
        >
          $520000
        </div>
      </Box>

      <Box className="info" sx={{ mt: 2 }}>
        <strong className="title">Busan City Hall Apartments</strong>
        <p className="desc">Good wills</p>

        <div
          className="options"
          style={{ display: "flex", gap: "12px", marginTop: "8px" }}
        >
          <div>
            <img src="/img/icons/bed.svg" alt="bed" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="rooms" />
            <span>7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="area" />
            <span>220 m²</span>
          </div>
        </div>

        {/* Divider */}
        <Divider sx={{ mt: "15px", mb: "17px" }} />

        {/* Bottom section */}
        <div
          className="bott"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0 }}>Rent</p>
          <div
            className="view-like-box"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">50</Typography>
            <IconButton color="default">
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
            <Typography className="view-cnt">250</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default PopularPropertyCard;
