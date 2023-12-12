import React, {useState} from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/movies-api";
import { Pagination } from "@mui/material";

const ActorDetailsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading, isError, refetch } = useQuery('Top Rated',
    getTopRatedMovies 
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
      title="Top Rated Movies"
      movies={data.results}
      action={(movie) => {
        return null;
      }}
    />

    <Pagination count={10} variant="outlined" color="secondary" onChange={handleChange} page={currentPage} />
    </>
  );
};

export default ActorDetailsPage;