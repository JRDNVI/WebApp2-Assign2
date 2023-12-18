import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAdd from "@mui/icons-material/PlaylistAdd";
import { AuthContext } from "../../contexts/authContext";

const AddToPlaylistIcon = ({ movie }) => {
    const context = useContext(AuthContext);

    const handleAddToPlaylist = (e) => {
        e.preventDefault();
        context.addToMustWatch(context.userName, movie.id);
        console.log(context.mustWatch)
    };

    return (
        <IconButton aria-label="Add to playlist" onClick={handleAddToPlaylist}>
            <PlaylistAdd color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToPlaylistIcon;