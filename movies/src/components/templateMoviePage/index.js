import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import MovieCredits from "../movieCredits";
import { getMovieImages } from "../../api/movies-api";
import { getMovieCredits } from "../../api/movies-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const TemplateMoviePage = ({ movie, children }) => {
    const { data , error, isLoading, isError } = useQuery(
        ["images", { id: movie.id }],
        getMovieImages
      );
    
      const { data: credits, error: creditError, isLoading: creditIsLoading, isError: creditIsError } = useQuery(
        ["credit", { id: movie.id}],
        getMovieCredits
    );
    
    
    if (isLoading || creditIsLoading) {
      return <Spinner />;
    }
  
    if (isError || creditIsError) {
      return <h1>{error || creditError}</h1>;
    }
  
    const images = data.posters[0];
    const reducedCast = credits.cast.splice(0, 16)
    console.log(credits)

  return (
    <>
      <MovieHeader movie={movie} />
      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageListItem key={images.file_path} cols={1} >
              <img
                src={`https://image.tmdb.org/t/p/w500/${images.file_path}`}
                alt={images.poster_path}
              />
            </ImageListItem>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
      <MovieCredits cast={reducedCast} />
    </>
  );
};

export default TemplateMoviePage;