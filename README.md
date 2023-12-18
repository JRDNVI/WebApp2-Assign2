# Assignment 2 - Web API.

Name: Jordon Coady

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Feature 1 
 + Feature 2 
 + Feature 3 
 + etc

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- Movies/index.js
  - Static Endpoints
    - /tmdb/upcoming | GET | Gets a list of  upcoming movies
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

- userData/index.js
  - Static Endpoints

  - Paramised Endpoints
    - /:username | GET | Returns a user by username
    - /:username/addId | PUT | Adds an id to either the mustWatch or favourite array for a user
    - /:username/removeId | PUT | Removes an id from either the mustWatch or favourite array

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

Every Route is protected except the login and sign up page

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app. 