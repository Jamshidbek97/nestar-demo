import { Stack, Box, Divider, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PropertyCard = () => {
  return (
    <Stack className="property-card">
      <Box
        className="card-img"
        sx={{
          backgroundImage: 'url("/img/banner/types/apartment.webp")',
        }}
      >
        <div className="status">TOP</div>
        <div className="price">$14,000</div>
      </Box>

      <Box className="info">
        <strong className="title">Kingstone Apartment</strong>
        <p className="desc">Busan, City center, 200–5</p>

        <div className="options">
          <div>
            <img src="/img/icons/bed.svg" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" />
            <span>7 room</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" />
            <span>170 m²</span>
          </div>
        </div>

        <Divider sx={{ my: 2 }} />

        <div className="bott">
          <p>Rent</p>
          <div className="view-like-box">
            <IconButton>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography>100</Typography>
            <IconButton>
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
            <Typography>100</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default PropertyCard;
