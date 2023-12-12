import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviePage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import ActorDetailsPage from "./pages/actorDetailsPage";
import TopRatedPage from "./pages/topRatedMoviePage"
import InTheatresPage from "./pages/InTheatresPage";
import AuthOptionsPage from "./pages/authOptionPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import PopularActorPage from "./pages/popularActorPage";
import AuthContextProvider from "./contexts/authContext";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import ProtectedRoutes from "./protectedRoutes";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const firebaseConfig = {
  apiKey: "AIzaSyBmx7udH48OtH044h7tlFjgp_K2dL65B2U",
  authDomain: "web-app-940c1.firebaseapp.com",
  projectId: "web-app-940c1",
  storageBucket: "web-app-940c1.appspot.com",
  messagingSenderId: "1093837811286",
  appId: "1:1093837811286:web:0923b93495fb01bb0115f7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthContextProvider>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
          <Route path="/loginPage" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route element={<ProtectedRoutes />} >
          <Route path="/authPage/" element={<AuthOptionsPage/>} />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/mustWatch" element={<MustWatchMoviesPage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/movies/topRated" element={<TopRatedPage />} />
          <Route path="/movies/playingNow" element={<InTheatresPage />} />
          <Route path="/actors" element={<PopularActorPage/>} />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/actor/:name" element={<ActorDetailsPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          </Route>
        </Routes>
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);