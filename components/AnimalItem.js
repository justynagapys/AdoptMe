import React, { useState } from "react";
import {CardMedia,Grid,CircularProgress} from "@material-ui/core";
import { FiCameraOff } from 'react-icons/fi';
import { makeStyles } from "@material-ui/core/styles";
import InfoItem from "./InfoItem";
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  photo: {
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
let AnimalPhoto;

  if (result.photos && result.photos[0] && result.photos[0].full) {
    AnimalPhoto = () => (
      <div className={classes.photo} style={{display: "flex", alignItems: "center",
      justifyContent: "center", flexDirection: "column", backgroundColor: "rgb(200,200,200)",}}>
        <CardMedia component="img" className={classes.photo} image={result.photos[0].full}
        onLoad={() => setImageLoading(false)} style={imageLoading ? { display: "none" } : {}}/>
        {imageLoading && <CircularProgress />}
      </div>
    );
  } else {
    AnimalPhoto = () => (
      <div className="flex items-center justify-center" className={classes.photo}
      style={{ display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", backgroundColor: "#120311", }} >
        <FiCameraOff className="center text-adopt-pink animate-pulse" size="3em"/>
        <p className="center text-white">No photo found</p>
      </div>
    );
  }

return (
    <Grid item xs={6} lg={3} style={{ padding: 5}}>
      <div className="p-2 bg-gray-100 rounded-xl text-center">
        <AnimalPhoto className="object-cover rounded-xl"/>
        <div className="my-3">
          <h2 className="text-xl uppercase font-bold text-dark-purple underline decoration-adopt-pink py-2" style={{ height: 40 }}>{result.name}</h2>
          <div className="flex justify-center mt-3">
            <InfoItem type="Age:" text={result.age}  />
            <InfoItem type="Gender:" text={result.gender}  />
            <InfoItem type="Size:" text={result.size}  />
            <InfoItem type="Coat:" text={result.coat}  />
          </div>
          <div style={{ height: 110}} className="my-3">
            <InfoItem type="Description:" text={result.description} />
          </div>
        </div>
        <div className="m-2 text-center">
          <Link href={result.url}>
            <button className="bg-transparent w-full hover:bg-adopt-pink text-adopt-pink font-semibold hover:text-white py-2 px-4 border border-dark-purple hover:border-transparent rounded">
            ADOPT ME
            </button>
          </Link>
        </div>
      </div>
    </Grid>
  );
};
export default AnimalItem;

