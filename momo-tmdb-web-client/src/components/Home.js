import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { HomeStyles } from "../styles/HomeStyles";
import LatestMovies from "./LatestMovies";
import PopularMovies from "./PopularMovies";

const images = [
  {
    url: "https://image.tmdb.org/t/p/w500/AoWY1gkcNzabh229Icboa1Ff0BM.jpg",
    title: "Popular",
    width: "50%",
    listComponent: <LatestMovies />,
    onClick: () => {}
  },
  {
    url: "https://image.tmdb.org/t/p/w500/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",
    title: "Latest",
    width: "50%",
    listComponent: <PopularMovies />,
  },
];

export default function Home() {
  const classes = HomeStyles();
  const getList = type => {
    
  }
  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          onClick={(e) => {
            getList(e.target.attribute)
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
