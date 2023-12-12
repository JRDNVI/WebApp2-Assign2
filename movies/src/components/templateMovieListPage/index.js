import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [voteCount, setVoteCount] = useState("0");
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return voteCount !== "" ? m.vote_average >= parseInt(voteCount): true;
    });

    if(selectedSortOption === "release_date") displayedMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

    if(selectedSortOption === "vote_average") displayedMovies.sort((a, b) => b.vote_average - a.vote_average); 
    
    console.log(displayedMovies)

    const handleChange = (type, value) => {
      console.log(type)
      if (type === "name") {
        setNameFilter(value);
      } else if (type === "genre") {
        setGenreFilter(value);
      } else if (type === "sort") {
        setSelectedSortOption(value);
      } else if(type ===  "vote") {
        setVoteCount(value);
      }
    };
    
  
  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            voteFilter={voteCount}
            genreFilter={genreFilter}
            sortOption={selectedSortOption}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;