import Pagination from '@mui/material/Pagination';
const CustomPagination = ({ count, page, onChange }) => {
  return (
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
        justifyContent: 'center',
        '& .MuiPaginationItem-root': {
          color: '#333'
        },
        '& .MuiPaginationItem-root.Mui-selected': {
          backgroundColor: 'primary.main',
          color: '#fff',
          '&:hover': {
            cursor: 'default'
          }
        }
      }}
    />
  );
};

export default CustomPagination;
