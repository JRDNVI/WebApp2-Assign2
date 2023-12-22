// export const getMovies = (args) => {
//     const [, idPart] = args.queryKey
//     const { page } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//        throw error
//     });
//   };

//   export const getUpcomingMovies = (args) => {
//     const [, idPart] = args.queryKey;
//     const { page } = idPart;
//     return fetch(
//         `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//     });
//   };
  
//   export const getMovie = (args) => {
//     // console.log(args)
//     const [, idPart] = args.queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   //New
//   export const getMovieCredits = (args) => {
//     const [, idPart] = args.queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       console.log(response.json)
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };
  
//   //New
//   export const getActorDetails = (args) => {
//     const [, idPart] = args.queryKey;
//     const { id } = idPart;

//     return fetch(
//       `https://api.themoviedb.org/3/search/person?query=${id}&api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   //New
//   export const getFullActorProfile = (args) => {
//     const [, idPart] = args.queryKey;
//     const { id } = idPart

//     return fetch(
//       `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=movie_credits`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       console.log(response.json);
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   //New 
//   export const getLatestMovie = () => {
//     return fetch(
//         `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//     });
//   };

//   //New
//   export const getTopRatedMovies = (args) => {
//     const [, idPart] = args.queryKey
//     const { page } = idPart;
//     return fetch(
//         `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//     });
//   };
  
//   //New
//   export const getNowPlayingMovies = (args) => {
//     const [, idPart] = args.queryKey
//     const { page } = idPart;
//     return fetch(
//         `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//     });
//   };

//   export const getGenres = async () => {
//     return fetch(
//       "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
//         process.env.REACT_APP_TMDB_KEY +
//         "&language=en-US"
//     ).then( (response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };
  
//   export const getMovieImages = ({ queryKey }) => {
//     const [, idPart] = queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then( (response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
  
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   //new
//   export const getPopularActors = (args) => {
//     const [, idPart] = args.queryKey
//     const {page} = idPart
    
//     return fetch(
//       `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
//     ).then( (response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
  
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   export const getMovieReviews = (args) => {
//     const [, idPart] = args.queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     )
//     .then( (response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
  
//     })
//     .catch((error) => {
//       throw error
//    });
//   };