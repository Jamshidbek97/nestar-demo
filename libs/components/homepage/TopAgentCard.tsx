import { Stack, Box, Divider, Typography } from "@mui/material";
const TopAgentCard = () => {
  return (
    <Stack className="top-card-box">
      <Box>
        <img className="card-img" src="/img/profile/girl.svg" alt="" />
      </Box>
      <Box className="info">
        <h1>Martin</h1>
        <p>Agent</p>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;
