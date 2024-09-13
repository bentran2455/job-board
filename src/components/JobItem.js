import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useTheme } from "@mui/material/styles";
import { MyJobCategoryBadge, MyTypo } from "./Theme";
import { Typography } from "@mui/material";
function JobItem({ job, QuickViewClicked }) {
  const theme = useTheme();
  return (
    <>
      <h3 style={{ color: theme.palette.mode === "dark" ? "white" : "black" }}>
        {job.title}
      </h3>
      {QuickViewClicked ? (
        <div>
          <MyTypo variant="overline" gutterBottom>
            <span>{job.remote ? "Remotely" : "In-office"}</span>
            <span>Year of experience: {job.yrsXPExpected}</span>
          </MyTypo>
          <Typography variant="body2" gutterBottom>
            {job.description}{" "}
          </Typography>
        </div>
      ) : (
        <div>
          <span
            className="job-location"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "1em",
            }}
          >
            <LocationOnOutlinedIcon
              style={{ width: "0.8rem", height: "0.8rem" }}
            />
            {job.city}
          </span>
          <div className="skill-list" style={{ margin: "18px 0" }}>
            {job.skills.slice(0, 5).map((skill, index) => (
              <MyJobCategoryBadge key={index}>
                <div>{skill}</div>
              </MyJobCategoryBadge>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default JobItem;
