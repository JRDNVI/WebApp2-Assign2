import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getFullActorProfile } from "../../api/tmdb-api";
import Spinner from "../spinner";
import { useQuery } from "react-query";
import PageTemplate from "../templateMovieListPage";
import Grid from "@mui/material/Grid";
import ActorKnownFor from "../actorKnownFor";

const ActorDetails = ({ actor, actorBasicInfo }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["actorFull", { id: actor }],
    getFullActorProfile
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card style={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="400"
              image={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
              alt={data.name}
            />
            <CardContent>
              <Typography variant="h6" component="p">
                Actor: {data.name}
              </Typography>
              <Typography variant="body2" component="p">
                Birthday: {data.birthday}
              </Typography>
              <Typography variant="body2" component="p">
                Place of Birth: {data.place_of_birth}
              </Typography>
              <Typography variant="body2" component="p">
                Popularity: {data.popularity}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9} xl={10}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h4" component="p">
                Biography
              </Typography>
              <Typography variant="body2" component="p">
                {data.biography}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h4" component="p">
                Most Known Movies
              </Typography>
              <ActorKnownFor knownFor={actorBasicInfo.known_for} />
            </Grid>
          </Grid>
        </Grid>
        <PageTemplate
          title={data.name + "'s Movie Roles"}
          movies={data.movie_credits.cast}
          action={(movie) => {
            return null;
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ActorDetails;
