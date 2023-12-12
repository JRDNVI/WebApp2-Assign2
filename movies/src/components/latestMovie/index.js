import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const LatestMovie = ({ latest }) => {
  return (
    <>
    <Typography variant="h4" sx={{ color: 'black', textAlign: 'center', paddingTop: "10px" }}>
      Latest Movie
    </Typography>
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {latest.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Overview: {latest.overview}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Release Date: {latest.release_date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Popularity: {latest.popularity}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
};

export default LatestMovie;