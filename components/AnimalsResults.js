import LinearProgress from "@material-ui/core/LinearProgress";
import { Grid } from "@material-ui/core";
import AnimalItem from "./AnimalItem";
const AnimalsResults = (props) => {
  if (props.loading) {
    return <LinearProgress style={{ width: "100%", height: 5 }} />;
  }

  return (
    <Grid
      style={{ width: "100%" }}
      container
      justify="center"
      alignItems="center"
    >
      {props.results.map((result) => (
        <AnimalItem key={result.id} result={result} />
      ))}
    </Grid>
  );
};

export default AnimalsResults;