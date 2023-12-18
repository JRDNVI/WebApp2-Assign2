export const getMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getUpcomingMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/upcoming', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getGenres = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/genres', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getTopRatedMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/top_rated', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getNowPlayingMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/now_playing', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getLatestMovie = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/latest', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getPopularActors = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/popular_actors', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getMovie = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movie/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getMovieCredits = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/cast/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getMovieImages = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/images/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    
    return response.json();
  };

  export const getActorDetails = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    console.log(id);
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/actor/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getFullActorProfile = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/actor/${id}/profile`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getMovieReviews = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/reviews/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };
  

   export const login = async (username, password) => {
      const response = await fetch('http://localhost:8080/api/users', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      return response.json();
  };
  
  export const signup = async (username, password) => {
      const response = await fetch('http://localhost:8080/api/users?action=register', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      return response.json();
  };

  export const getUserData = async (username) => {
    const response = await fetch(
      `http://localhost:8080/api/userData/${username}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    });
    return response.json();
  };

  export const addMovieIDtoList = async (username, movieID, arrayName) => {
    console.log(username, movieID, arrayName);
    const response = await fetch(
      `http://localhost:8080/api/userData/${username}/addId`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify({ arrayName: arrayName, id: movieID  })
    });
    return response.json();
  };

  export const removeMovieIDFromList = async (username, movieID, arrayName) => {
    const response = await fetch(
      `http://localhost:8080/api/userData/${username}/removeId`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify({ arrayName: arrayName, id: movieID  })
    });
    return response.json();
  };