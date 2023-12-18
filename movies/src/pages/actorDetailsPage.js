import React from "react";
import { useParams } from "react-router-dom";
import { getActorDetails } from "../api/movies-api";
import { useQuery } from 'react-query';
import { getFullActorProfile } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import ActorDetails from "../components/actorDetails";

const ActorDetailsPage = () => {
  const { name } = useParams();
  const nameParts = name.split(" ");
  const apiName = nameParts.join("+");

  const { data, error, isLoading, isError } = useQuery(
    ["actor", { id: apiName }], 
    getActorDetails
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  console.log(data.results[0].id)
  console.log(data.results[0])
  
  return (
    <ActorDetails actor={data.results[0].id} actorBasicInfo={data.results[0]} />
  );
};

export default ActorDetailsPage;