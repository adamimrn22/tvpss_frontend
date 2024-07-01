import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Stack,
  Box,
  TableSortLabel,
  Typography,
  IconButton,
} from "@mui/material";
import SearchBar from "../../components/Filters/SearchBar";
import FilterButtonMenu from "../../components/Filters/FilterButtonMenu";
import RowsPerPageSelector from "../../components/Filters/RowsPerPageSelector";
import CustomPagination from "../../components/Filters/CustomPagination";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteModal from "./DeleteModal"; // Import DeleteModal

const UserTable = ({ users }) => {
  const [page, setPage] = useState(1); // Start with page 1
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter, setFilter] = useState("");
  const [sortColumn, setSortColumn] = useState("name"); // Default sort column
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const [filteredData, setFilteredData] = useState([]); // State to hold filtered and sorted data
  const [filteredCount, setFilteredCount] = useState(0); // Initial count before filtering
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Effect to update filteredData and filteredCount whenever search, filter, or users change
  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) &&
        (filter === "" || user.userType === filter)
    );
    const sorted = filtered.sort((a, b) => {
      const compareA = a[sortColumn];
      const compareB = b[sortColumn];
      return sortOrder === "asc"
        ? compareA.localeCompare(compareB)
        : compareB.localeCompare(compareA);
    });
    setFilteredData(sorted);
    setFilteredCount(sorted.length);
  }, [users, search, filter, sortColumn, sortOrder]);

  // Calculate total pages based on filteredData and rowsPerPage
  const totalPages = Math.ceil(filteredCount / rowsPerPage);
  // Calculate the start index and end index for current page
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Adjusting the height of TableContainer based on the number of rows
  const tableHeight = Math.min(filteredData.length * 50 + 56, 400);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); // Reset page to 1 when changing rows per page
  };

  const handleFilterButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleFilterSelect = (value) => {
    setFilter(value);
    setPage(1); // Reset page to 1 when applying filters
    setAnchorEl(null);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const openDeleteModal = (user) => {
    setUserToDelete(user);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setUserToDelete(null);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      console.log(`Deleting ${userToDelete.name}`);

      // Set success message
      localStorage.setItem(
        "showAlert",
        `Data ${userToDelete.name} telah berjaya Dipadam`
      );
      localStorage.setItem("alertSeverity", "success"); // Or 'error' if there was an error

      // Close modal
      closeDeleteModal();

      window.location.reload();
    }
  };

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2 }}>
        {/* Search Bar and Filters */}
        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ p: 0, m: 0 }}>
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FilterButtonMenu
              anchorEl={anchorEl}
              onButtonClick={handleFilterButtonClick}
              onClose={handleFilterClose}
              onSelect={handleFilterSelect}
            />
          </Box>
          <RowsPerPageSelector
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          />
        </Stack>

        {/* Table */}
        <TableContainer sx={{ minHeight: tableHeight, overflow: "auto" }}>
          <Table>
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <TableCell>Bil</TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center">
                    <TableSortLabel
                      active={sortColumn === "name"}
                      direction={sortColumn === "name" ? sortOrder : "asc"}
                      onClick={() => handleSort("name")}
                    >
                      Nama Penuh
                    </TableSortLabel>
                    <Typography variant="body2" color="textSecondary">
                      {`(${filteredCount})`}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "email"}
                    direction={sortColumn === "email" ? sortOrder : "asc"}
                    onClick={() => handleSort("email")}
                  >
                    Alamat Email
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "state"}
                    direction={sortColumn === "state" ? sortOrder : "asc"}
                    onClick={() => handleSort("state")}
                  >
                    Negeri
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "userType"}
                    direction={sortColumn === "userType" ? sortOrder : "asc"}
                    onClick={() => handleSort("userType")}
                  >
                    Jenis Pengguna
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>Aksi</TableCell>
                {/* Add more headers as needed */}
              </TableRow>
            </TableHead>
            {/* Table Body */}
            <TableBody>
              {filteredData.slice(startIndex, endIndex).map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.state}</TableCell>
                  <TableCell>{user.userType}</TableCell>
                  <TableCell>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Link
                        to="/SuperAdmin/PengurusanPengguna/KemaskiniPengguna"
                        style={{ textDecoration: "none" }}
                      >
                        <IconButton aria-label="edit">
                          <EditIcon />
                        </IconButton>
                      </Link>
                      <IconButton
                        aria-label="delete"
                        onClick={() => openDeleteModal(user)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                  {/* Add more cells as needed */}
                </TableRow>
              ))}
              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    Pengguna tidak dijumpai
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <CustomPagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{ mt: 2, mb: 2, justifyContent: "center" }}
        />
      </Paper>

      {/* Delete Modal */}
      <DeleteModal
        open={deleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        itemName={userToDelete?.name || ""}
      />
    </>
  );
};

export default UserTable;
