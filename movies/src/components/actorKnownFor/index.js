import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ActorKnownFor = ({ knownFor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMovie = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextMovie = () => {
    if (currentIndex < knownFor.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentMovie = knownFor[currentIndex];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card style={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="400"
            image={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
            alt={currentMovie.original_title}
          />
          <CardContent>
            <Typography variant="h6" component="p">
              {currentMovie.original_title}
            </Typography>
            <Typography variant="body2" component="p">
              Release Date: {currentMovie.release_date}
            </Typography>
            <Typography variant="body2" component="p">
              Vote Average: {currentMovie.vote_average}
            </Typography>
          </CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton onClick={prevMovie}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton onClick={nextMovie}>
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ActorKnownFor;
