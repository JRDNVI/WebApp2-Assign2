import React, { useState, createContext } from "react";
import { login, signup, getUserData, addMovieIDtoList, removeMovieIDFromList } from "../api/movies-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");
  const [favouriteIDs, setFavouriteIDs] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
      const data = await getUserData(username);
      setFavouriteIDs(data.favouriteIDs)
      setMustWatch(data.mustWatchIDs)
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  const addToFavorites = async (user, movieID) => {
    const result = await addMovieIDtoList(user, movieID, "favouriteIDs" );
    console.log(result.code);
    setFavouriteIDs(prevIDs => [...prevIDs, movieID])
    return (result.code == 201)?  true : false;
  }

  const addToMustWatch = async (user, movieID) => {
    const result = await addMovieIDtoList(user, movieID, "mustWatchIDs" );
    console.log(result.code);
    setMustWatch(prevIDs => [...prevIDs, movieID])
    return (result.code == 201)?  true : false;
  }

  const removeFromFavorites = async (movieID) => {
    const result = await removeMovieIDFromList(userName, movieID, "favouriteIDs" );
    console.log(result.code);
    setFavouriteIDs(prevIDs => prevIDs.filter(id => id!== movieID))
    return (result.code == 201) ?  true : false;
  }

  const removeFromMustWatch = async (movieID) => {
    const result = await removeMovieIDFromList(userName, movieID, "mustWatchIDs" );
    console.log(result.code);
    setMustWatch(prevIDs => prevIDs.filter(id => id!== movieID))
    return (result.code == 201)?  true : false;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        addToFavorites,
        addToMustWatch,
        removeFromFavorites,
        removeFromMustWatch,
        userName,
        favouriteIDs,
        mustWatch
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;