import React, { useState } from "react";
import JobItem from "./JobItem";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import QuickView from "./QuickView";

export default function JobList({
  page,
  jobData,
  clickLogIn,
  username,
  setClickLogIn,
}) {
  const [selectedJobId, setSelectedJobId] = useState("");
  const handleClickOnJob = (id) => {
    if (!username) {
      setClickLogIn(!clickLogIn);
      return;
    } else {
      setSelectedJobId(id);
    }
  };
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {jobData ? (
        jobData.slice(0, 5).map((job) => (
          <Grid key={job.id} size={4}>
            <Card
              style={{ textAlign: "center", height: "100%" }}
              id={job.id}
              onClick={() => handleClickOnJob(job.id)}
            >
              <CardActionArea style={{ position: "unset" }}>
                <JobItem job={job} page={page} />
              </CardActionArea>
            </Card>
            {selectedJobId === job.id ? (
              <QuickView
                job={job}
                closeQuickView={() => setSelectedJobId("")}
              />
            ) : (
              ""
            )}
          </Grid>
        ))
      ) : (
        <p>Loadding jobs...</p>
      )}
    </Grid>
  );
}
