import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { FalsyComponenet } from "./components/Types";
import Landing from "./components/Landing";
import Grid from "@mui/material/Grid";
import CardComponent from "./components/Card";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Landing background="https://assets-global.website-files.com/5f8dd056c51c1d04c3eaa497/61021f74c8164e5ecc8fb7d2_Group%201731.png">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: '"Domaine Display", serif',
            color: "rgba(0, 0, 0, 0.87)",
          }}
        >
          Ramp Take Home
        </Typography>
      </Landing>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-between"}
        direction="column"
        spacing={2}
      >
        <Grid item xs={3}>
          <CardComponent type={"Array"} data={["test", "input", "here"]} />
        </Grid>
        <Grid item xs={3}>
          <CardComponent type={"Other"} data={234324} />
        </Grid>
        <Grid item xs={3}>
          <CardComponent type={"Falsy"} data={false} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
