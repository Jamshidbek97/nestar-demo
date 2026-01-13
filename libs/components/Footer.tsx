import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Stack } from "@mui/material";
import useDeviceDetect from "../hooks/useDeviceDetect";

const Footer = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack className="footer-container">Footer Mobile</Stack>;
  } else {
    return (
      <Stack className="footer-container">
        <Stack className="main">
          <Stack className="left">
            <Box className="footer-box" component="div">
              <img src="/img/logo/logoWhite.svg" alt="" className="logo" />
            </Box>
            <Box component={"div"} className="footer-box">
              <span>Total free customer care</span>
              <p>010 5629 1297</p>
            </Box>
            <Box component={"div"} className="footer-box">
              <span>Total free customer care</span>
              <p>010 5629 1297</p>
              <span>Support</span>
            </Box>
            <Box component={"div"} className="footer-box">
              <p>follow us on social media</p>
              <div className="media-box">
                <FacebookOutlinedIcon />
                <TelegramIcon />
                <InstagramIcon />
                <TwitterIcon />
              </div>
            </Box>
          </Stack>
          <Stack className="right">
            <Box className="top" component="div">
              <strong>Keep yourself updated</strong>
              <div>
                <input type="email" placeholder="Your email" />
                <span>Subscribe</span>
              </div>
            </Box>
            <Box component={"div"} className="bottom">
              <div>
                <strong>popular search</strong>
                <span>Property for rent</span>
                <span>Property low to high</span>
              </div>
              <div>
                <strong>Quick links</strong>
                <span>Terms of use</span>
                <span>Privacy policy</span>
                <span>Pricing</span>
                <span>Our service</span>
                <span>Contact support</span>
                <span>FAQ</span>
              </div>
              <div>
                <strong>Discover</strong>
                <span>Soul</span>
                <span>Gyeongido</span>
                <span>Busan</span>
                <span>Jejudo</span>
              </div>
            </Box>
          </Stack>
        </Stack>
        <Stack className="second">
          <span>© Nestar - All rights reserved. Nestar 2025 </span>
          <span>Privacy Terms Sitemap</span>
        </Stack>
      </Stack>
    );
  }
};

export default Footer;
