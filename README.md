# Assignment 2 - Web API.

Name: Jordon Coady

## Setup requirements.

+ Movies folder (APP)
 - npm install
 - create .env in the project
    REACT_APP_TMDB_KEY=your_key
    FAST_REFRESH=false
  

+ Movies-api folder (API)
  - npm install --save-dev  @babel/core @babel/preset-env @babel/node nodemon @babel/eslint-parser
  - .env file
    NODEENV=development
    PORT=8080
    HOST=localhost
    mongoDB=YourMongoURL
    TMDB_KEY=your_key
    secret=YourJWTSecret

## API Design

- Movies/index.js
  - Static Endpoints
    - /tmdb/upcoming | GET | Gets a list of upcoming movies
    - /tmdb/genres | GET | Gets a list of genres
    - /tmdb/top_rated | GET | Gets a list of Top Rated Movies
    - /tmdb/now_playing | GET | Gets movies that are in theatres
    - /tmdb/latest | GET | Gets a single movie 
    - /tmdb/popular_actors | GET | Gets a list of popular people

  - Paramised Endpoints 
    - /tmdb/movie/:id | GET | Get a movie by id
    - /tmdb/cast/:id | GET | Gets the cast of a movie given an id
    - /tmdb/images/:id | GET | Gets movie posters for a given movie
    - /tmdb/actor/:id | GET | Searchs a person by there name 
    - /tmdb/actor/:id/profile | GET | returns a full profile base of thier id
    - /tmdb/reviews/:id | GET | Get reviews for a given movie

- userData/index.js
  - Static Endpoints

  - Paramised Endpoints
    - /:username | GET | Returns a user by username
    - /:username/addId | PUT | Adds an id to either the mustWatch or favourite array for a user
    - /:username/removeId | PUT | Removes an id from either the mustWatch or favourite array


## Security and Authentication

+ Security
  - bcrypt is used to encrypt users password using 10 rounds of salting before they are saved or updated to the database.

+ Authentication
   - bcrypt is used to compare a password entered by a user against the hashed password stored in the database.
   - The authenticateUser() function in api/users/index.js, creates the JWT token using a SECRET pre-defined in the 
     .env file and signed with the username. The token is then returned to the client for use in future requests. 

 + Protected Routes
  - /authPage/
  - /movies/favorites
  - /movies/mustWatch
  - /movies/upcoming
  - /movies/topRated
  - /movies/playingNow
  - /actors
  - /reviews/form
  - /actor/:name
  - /reviews/:id
  - /movies/:id
  - /
  - *

## Integrating with React App

When integrating the API to my react app I started by converting the static endpoints first. I created a fetch request to tmdb 
in movies-api/api/tmdb-api.js. Then I created a new endpoint for that request in movies/index.js. I tested it with postman to ensure 
the backend was working before moving onto the frontend. In the frontend I created a fetch request to my API e.g., "http://localhost:8080/api/movies/tmdb/latest"
in movies/src/api/movies-api.js. The last step was changing which file in /movies/src/api/ was used to fetch requests, I changed it to point to my API.
This process was carried out for the remaining static endpoints. 

I moved onto the paramised endpoints next. I had to pass variables back in the request so the backend could make the fetch to TMDB 
e.g., `http://localhost:8080/api/movies/tmdb/movie/${id}` Then in movies-api/api/movies/index.js I parsed the id from the url. 

`const id = parseInt(req.params.id);`
`const movie = await getMovie( id );`

Then I passed the id to movies-api/api/tmdb-api.js. I continued with this process for the remaining paramised endpoints.