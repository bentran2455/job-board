import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled({ page, handlePageChange }) {
  return (
    <Stack spacing={2} sx={{ alignItems: "center", marginTop: "1em" }}>
      <Typography>Page: {page}</Typography>
      <Pagination count={3} page={page} onChange={handlePageChange} />
    </Stack>
  );
}
