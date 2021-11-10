import React from "react";
import clsx from "clsx";
import { Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},

  hero: {
    height: 500,
  },

  heroVideoContainer: {
    background: `linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.35) 100%)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },

  heroHeaderContainer: {
    [theme.breakpoints.down("sm")]: {
      "& h1": {
        fontSize: "2.25rem",
      },
      "& h2": {
        fontSize: "2rem",
      },
    },
  },
}));

interface LandingHero {
  children: React.ReactNode;
  background?: string;
}

// a reusable landing header with an image
const Landing = ({ children, background = "" }: LandingHero) => {
  const classes = useStyles();

  return (
    <>
      <Box
        className={classes.hero}
        display="flex"
        alignItems="center"
        position="relative"
        zIndex={1}
      >
        <Box
          className={classes.heroHeaderContainer}
          color="white"
          width="100%"
          maxWidth="1250px"
          margin="0 auto"
          px={6}
        >
          {children}
        </Box>
      </Box>

      <Box
        className={clsx(classes.hero, classes.heroVideoContainer)}
        position="absolute"
        width="100%"
        top={0}
        overflow="hidden"
        style={{
          background: `linear-gradient(#fff, rgba(255, 255, 255, 0.0)), url(${background})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      ></Box>
    </>
  );
};

export default Landing;
