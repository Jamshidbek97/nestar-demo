import { Stack, Box, Divider, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
const TopPropertyCard = () => {
  return (
    <Stack className="trend-card-box">
      <Box
        className="card-img"
        style={{ backgroundImage: `url("/img/banner/types/house.webp")` }}
      >
        <div>$550 000</div>
      </Box>
      <Box className="info">
        <strong className="title">Run Will building</strong>
        <p className="desc">Seoul Gangnam Apartment</p>
        <div className="options">
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>3 beds</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>6 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>300 m</span>
          </div>
        </div>
        <Divider sx={{ mt: "1px", mb: "1px" }} />
        <div className="bott">
          <p>rent</p>
          <div className="view-like-box">
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">120</Typography>
            <IconButton color="default">
              <FavoriteIcon />
            </IconButton>
            <Typography className="view-cnt">120</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TopPropertyCard;
