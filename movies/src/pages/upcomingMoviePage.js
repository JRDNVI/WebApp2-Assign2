import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { Pagination } from "@mui/material";

const UpcomingMoviePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading, isError, refetch } = useQuery(
    ['upcoming', {page: currentPage}], 
    getUpcomingMovies
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const handleChange = (event, page) => {
    setCurrentPage(page);
    refetch({ page: currentPage })
  }

  return (
    <>
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
    <Pagination count={10} variant="outlined" color="secondary" onChange={handleChange} page={currentPage} />
  </>
  );
};

export default UpcomingMoviePage;