import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Search from "./Search";
import JobList from "./JobList";
import PaginationControlled from "./Pagination";
import Form from "./Form";
import axios from "axios";

function JobBoard({ handleSwitch, darkMode }) {
  const [username, setUserName] = useState();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [jobData, setJobData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [clickLogIn, setClickLogIn] = useState(false);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    if (page == null || page === "") {
      return;
    }
    axios
      .get(`http://localhost:3000/jobs?_page=${page}`)
      .then((res) => {
        setJobData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  // Handle search
  useEffect(() => {
    if (!search) {
      setFilterData(jobData);
      return;
    } else {
      const filter = jobData.filter((el) =>
        el.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilterData(filter);
    }
  }, [search, jobData]);
  return (
    <Box sx={{ maxWidth: "lg", marginInline: "auto", position: "relative" }}>
      {clickLogIn ? <Form setUserName={setUserName} username={username} /> : ""}
      <ResponsiveAppBar
        handleSwitch={handleSwitch}
        darkMode={darkMode}
        username={username}
        clickLogIn={clickLogIn}
        setClickLogIn={setClickLogIn}
      />
      <Search darkMode={darkMode} search={search} setSearch={setSearch} />
      <JobList
        page={page}
        jobData={filterData}
        clickLogIn={clickLogIn}
        username={username}
        setClickLogIn={setClickLogIn}
      />
      <PaginationControlled page={page} handlePageChange={handlePageChange} />
    </Box>
  );
}

export default JobBoard;
