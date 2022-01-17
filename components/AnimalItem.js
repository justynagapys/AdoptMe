import React, { useState } from "react";
import {CardMedia,Grid,Card,CardActionArea,CardHeader,CircularProgress} from "@material-ui/core";
import { FiCameraOff } from 'react-icons/fi';
import { makeStyles } from "@material-ui/core/styles";
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  image: {
    height: 400,
    [theme.breakpoints.up("lg")]: {
      height: 250,
    },
  },
}));

const AnimalItem = (props) => {
  const { result } = props;
  const classes = useStyles();
  const [imageLoading, setImageLoading] = useState(true);
  let ImageComponent;

  if (result.photos && result.photos[0] && result.photos[0].full) {
    ImageComponent = () => (
      <div
        className={classes.image}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "rgb(200,200,200)",
        }}
      >
        <CardMedia
          component="img"
          className={classes.image}
          image={result.photos[0].full}
          onLoad={() => setImageLoading(false)}
          style={imageLoading ? { display: "none" } : {}}
        />
        {imageLoading && <CircularProgress />}
      </div>
    );
  } else {
    ImageComponent = () => (
      <div className="flex items-center justify-center"
        className={classes.image}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "rgb(200,200,200)",
        }}
      >
        <FiCameraOff  className="center text-adopt-pink rounded-lg animate-pulse" size="5em"/>
        <p className="center text-black rounded-lg animate-pulse">No photo found</p>
      </div>
    );
  }

  return (
    <Grid item xs={6} lg={3} style={{ padding: 5 }}>
      <Link href={result.url}>
        <Card className={classes.card}>
          <CardActionArea>
            <ImageComponent />
            <CardHeader
            className=" hover:bg-hover-pink hover:text-black m-auto text-center bg-adopt-pink text-white"
              title={result.name}
            />
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};
export default AnimalItem;