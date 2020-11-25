/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import tora from "./tora.json";

export default function FreeSolo({ onChange }) {
  return (
    <div style={{ width: 300 }} dir="rtl">
      <Autocomplete
        dir="rtl"
        id="free-solo-2-demo"
        disableClearable
        onChange={onChange}
        options={Object.keys(tora.parasha).map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
}
