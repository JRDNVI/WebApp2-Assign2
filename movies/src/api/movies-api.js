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