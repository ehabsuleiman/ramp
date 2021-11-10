import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Main from "./Main";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface ICard {
  type: string;
  data: any;
}

// a reusable landing header with an image
const CardComponent = ({ type, data }: ICard) => {
  return (
    <Card sx={{ height: 200 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Here we test the "{type}"  type.
        </Typography>

        <Main input={data}></Main>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
