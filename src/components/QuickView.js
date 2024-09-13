import React from "react";
import JobItem from "./JobItem";
import { MyQuickView } from "./Theme";
import { useTheme } from "@mui/material/styles";

function QuickView({ job, closeQuickView }) {
  let QuickViewClicked = true;
  const theme = useTheme();
  return (
    <MyQuickView
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "dimgrey" : "#edf7f6",
      }}
    >
      <i onClick={closeQuickView} className="qv_close far fa-times-circle"></i>
      <JobItem job={job} QuickViewClicked={QuickViewClicked} />
    </MyQuickView>
  );
}

export default QuickView;
