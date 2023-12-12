import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function FilterPersonCard(props) {

  return (
    <div className="filter-person-card">
      <TextField
        type="text"
        label="Search..."
        variant="outlined"
        value={props.searchValue}
        onChange={(e) => props.onUserInput("name", e.target.value)}
      />
    </div>
  );
}
