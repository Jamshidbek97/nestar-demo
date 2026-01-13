import {
  Stack,
  Typography,
  OutlinedInput,
  IconButton,
  Tooltip,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const roomOptions = ["Any", "1", "2", "3", "4", "5+"];

const Filter = () => {
  const [searchText, setSearchText] = useState<string>("");
  //   const [showMore, setShowMore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["Rent"]);
  const [selectedRoom, setSelectedRoom] = useState("Any");
  const [selectedBedroom, setSelectedBedroom] = useState("Any");
  const [propertyPrice, setPropertyPrice] = useState({ start: 0, end: 250000 });
  const [squareMin, setSquareMin] = useState<number | string>(0);
  const [squareMax, setSquareMax] = useState<number | string>(500);

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((opt) => opt !== option)
        : [...prev, option]
    );
  };

  return (
    <Stack className="filter-main">
      <Stack className="find-your-home">
        <Typography className="title-main">Find your home</Typography>
        <Stack className="input-box" alignItems="center">
          <OutlinedInput
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="What are you looking for?"
            className="search-input"
            fullWidth
            size="small"
            sx={{
              borderRadius: "8px",
              fontSize: "14px",
              backgroundColor: "#fff",
              paddingRight: "40px",
            }}
            endAdornment={
              <>
                <img
                  src="/img/icons/search_icon.png"
                  alt="search"
                  style={{ width: 18, marginRight: 8 }}
                />
                <Tooltip title="Reset">
                  <IconButton size="small" onClick={() => setSearchText("")}>
                    <RefreshIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
          />
        </Stack>
      </Stack>
      <Stack className="find-your-home">
        <p className="title-main" style={{ marginTop: "10px" }}>
          Property Location
        </p>
        {["SEOUL", "BUSAN", "INCHEON", "DAEGU"].map((type: string) => (
          <Stack
            key={type}
            direction="row"
            alignItems="center"
            spacing={1}
            className="checkbox-row"
          >
            <Checkbox
              id={type}
              className="property-checkbox"
              color="default"
              size="small"
              value={type}
            />
            <label htmlFor={type} style={{ cursor: "pointer" }}>
              <Typography className="property-type">{type}</Typography>
            </label>
          </Stack>
        ))}
      </Stack>
      <Stack className="find-your-home">
        <p className="title-main" style={{ marginTop: "10px" }}>
          Property Type
        </p>
        {["APARTMENT", "HOUSE", "Villa"].map((type: string) => (
          <Stack
            key={type}
            direction="row"
            alignItems="center"
            spacing={1}
            className="checkbox-row"
          >
            <Checkbox
              id={type}
              className="property-checkbox"
              color="default"
              size="small"
              value={type}
            />
            <label style={{ cursor: "pointer" }}>
              <Typography className="property-type">{type}</Typography>
            </label>
          </Stack>
        ))}
      </Stack>
      <Stack className="find-your-home">
        <p className="title-main" style={{ marginTop: "10px" }}>
          Rooms
        </p>
        <Stack direction="row" spacing={1} className="button-group">
          {roomOptions.map((label) => (
            <Button
              key={label}
              variant={selectedRoom === label ? "contained" : "outlined"}
              onClick={() => setSelectedRoom(label)}
              className={`room-button ${
                selectedRoom === label ? "active" : ""
              }`}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Stack>
      <Stack className="find-your-home">
        <p className="title-main" style={{ marginTop: "10px" }}>
          Bedrooms
        </p>
        <Stack direction="row" spacing={1} className="button-group">
          {roomOptions.map((label) => (
            <Button
              key={label}
              variant={selectedBedroom === label ? "contained" : "outlined"}
              onClick={() => setSelectedBedroom(label)}
              className={`room-button ${
                selectedBedroom === label ? "active" : ""
              }`}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Stack>
      <Stack className="find-your-home">
        <p className="title-main" style={{ marginTop: "10px" }}>
          Options
        </p>
        {["Buy", "Rent"].map((opt) => (
          <Stack direction="row" alignItems="center" spacing={1} key={opt}>
            <Checkbox
              checked={selectedOptions.includes(opt)}
              onChange={() => toggleOption(opt)}
              size="small"
            />
            <Typography className="property-type">{opt}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack className="find-your-home">
        <p className="title-main" style={{ marginTop: "10px" }}>
          Square Meter
        </p>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Select
            value={squareMin}
            onChange={(e) => setSquareMin(e.target.value)}
            displayEmpty
            size="small"
            sx={{ minWidth: 80 }}
          >
            <MenuItem value={0}>Min</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={200}>200</MenuItem>
          </Select>
          <Typography>-</Typography>
          <Select
            value={squareMax}
            onChange={(e) => setSquareMax(e.target.value)}
            displayEmpty
            size="small"
            sx={{ minWidth: 80 }}
          >
            <MenuItem value={500}>500</MenuItem>
            <MenuItem value={700}>700</MenuItem>
            <MenuItem value={1000}>1000</MenuItem>
          </Select>
        </Stack>
      </Stack>

      <Stack className="find-your-home">
        <p className="title-main" style={{ marginTop: "10px" }}>
          Price Range
        </p>
        <Stack direction="row" spacing={2}>
          <OutlinedInput
            size="small"
            value={propertyPrice.start}
            onChange={(e) =>
              setPropertyPrice((prev) => ({ ...prev, min: e.target.value }))
            }
            sx={{ width: "100%" }}
            placeholder="Min"
          />
          <OutlinedInput
            size="small"
            value={propertyPrice.end}
            onChange={(e) =>
              setPropertyPrice((prev) => ({ ...prev, max: e.target.value }))
            }
            sx={{ width: "100%" }}
            placeholder="Max"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Filter;
