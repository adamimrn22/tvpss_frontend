import { Pagination, Typography, Stack } from "@mui/material";
const CustomPagination = ({ count, page, onChange }) => {
  return (
    <>
      <Stack
        backgroundColor={"#EAEDFA"}
        padding="0 15px"
        borderRadius={"5px"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography>Menunjukkan 1 hingga 15 daripada entri</Typography>
        <Pagination
          count={count}
          page={page}
          onChange={onChange}
          color="primary"
          variant="outlined"
          shape="rounded"
          sx={{
            mt: 2,
            mb: 2,
            justifyContent: "center",
            "& .MuiPaginationItem-root": {
              color: "#333",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "primary.main",
              color: "#fff",
              "&:hover": {
                cursor: "default",
              },
            },
          }}
        />
      </Stack>
    </>
  );
};

export default CustomPagination;
