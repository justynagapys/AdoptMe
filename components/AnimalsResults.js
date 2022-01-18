import { Grid } from "@material-ui/core";
import AnimalItem from "./AnimalItem";
const AnimalsResults = (props) => {

  return (
    <Grid style={{ width: "100%"}} container justify="center" alignItems="center">
      {props.results.map((result) => (
        <AnimalItem key={result.id} result={result} />
      ))}
    </Grid>
  );
};

export default AnimalsResults;