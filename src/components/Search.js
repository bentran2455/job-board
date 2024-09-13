import React from "react";
import { Button, TextField, Container } from "@mui/material";
import { MyBackGround, MySubtitle } from "./Theme";

export default function Search({ darkMode, setSearch, search }) {
  return (
    <MyBackGround>
      <Container>
        <MySubtitle>Best Jobs in Tech</MySubtitle>
        <h1 style={{ color: darkMode ? "black" : "midnightblue" }}>
          Job board for developers, designers, and marketers
        </h1>
        <form style={{ display: "flex" }}>
          <TextField
            id="standard-basic"
            label="Search for job"
            sx={{ width: "25ch" }}
            focused
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </Container>
    </MyBackGround>
  );
}
