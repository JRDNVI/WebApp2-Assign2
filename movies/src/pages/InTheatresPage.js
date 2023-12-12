import React, {useState} from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from "../components/templateMovieListPage";
import { getNowPlayingMovies } from "../api/movies-api";
import { Pagination } from "@mui/material";

const InTheatresPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading, isError, refetch } = useQuery('Now Playing', 
    getNowPlayingMovies 
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const handleChange = (event, page) => {
    setCurrentPage(page);
    refetch({ page: currentPage })
  }
  
  return (
    <>
    <PageTemplate
      title="In Theatres"
      movies={data.results}
      action={(movie) => {
        return null;
      }}
    />
    <Pagination count={5} variant="outlined" color="secondary" onChange={handleChange} page={currentPage} />
  </>
  );
};

export default InTheatresPage;