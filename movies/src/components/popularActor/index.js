import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const CardComponent = ({ data }) => {
  return (
    <div>
      {data.map((actor, index) => (
        <Card key={index} style={{ margin: 16, display: 'flex' }}>
          <Link to={`/actor/${actor.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <CardMedia
              component="img"
              alt={actor.name}
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              style={{ width: 100, height: 130, objectFit: 'cover', marginLeft: "10px" }}
            />
          </Link>
          <div style={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                {actor.name}
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary={`Popularity: ${actor.popularity}`} />
                </ListItem>
              </List>
            </CardContent>
          </div>
          {actor.known_for && actor.known_for.length > 0 && (
            <Link to={`/movies/${actor.known_for[0].id}`} style={{ textDecoration: 'none' }}>
              <CardMedia
                component="img"
                alt={actor.known_for[0].title}
                src={`https://image.tmdb.org/t/p/w200${actor.known_for[0].poster_path}`}
                style={{ width: 100, height: 120, objectFit: 'cover' }}
              />
            </Link>
          )}
        </Card>
      ))}
    </div>
  );
};

export default CardComponent;
