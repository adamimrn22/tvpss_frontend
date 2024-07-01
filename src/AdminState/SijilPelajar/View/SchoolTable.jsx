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
  Button,
} from "@mui/material";
import SearchBar from "./components/Filters/SearchBar";
import FilterButtonMenu from "./components/Filters/FilterButtonMenu";
import RowsPerPageSelector from "./components/Filters/RowsPerPageSelector";
import CustomPagination from "./components/Filters/CustomPagination";
import DeleteModal from "./DeleteModal"; // Import DeleteModal

const SchoolTable = ({ schools }) => {
  const [page, setPage] = useState(1); // Start with page 1
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter, setFilter] = useState("");
  const [sortColumn, setSortColumn] = useState("schoolName"); // Default sort column
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const [filteredData, setFilteredData] = useState([]); // State to hold filtered and sorted data
  const [filteredCount, setFilteredCount] = useState(0); // Initial count before filtering
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [schoolToDelete, setSchoolToDelete] = useState(null);

  // Effect to update filteredData and filteredCount whenever search, filter, or schools change
  useEffect(() => {
    const filtered = schools.filter(
      (school) =>
        school.schoolName.toLowerCase().includes(search.toLowerCase()) &&
        (filter === "" || school.jenis === filter)
    );

    console.log(filter);
    const sorted = filtered.sort((a, b) => {
      const compareA = a[sortColumn];
      const compareB = b[sortColumn];
      return sortOrder === "asc"
        ? compareA.localeCompare(compareB)
        : compareB.localeCompare(compareA);
    });
    setFilteredData(sorted);
    setFilteredCount(sorted.length);
  }, [schools, search, filter, sortColumn, sortOrder]);

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
    setPage(1);
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

  const openDeleteModal = (school) => {
    setSchoolToDelete(school);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSchoolToDelete(null);
  };

  const confirmDelete = () => {
    if (schoolToDelete) {
      console.log(`Deleting ${schoolToDelete.schoolName}`);

      // Set success message
      localStorage.setItem(
        "showAlert",
        `Data ${schoolToDelete.schoolName} telah berjaya Dipadam`
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
                      active={sortColumn === "schoolName"}
                      direction={
                        sortColumn === "schoolName" ? sortOrder : "asc"
                      }
                      onClick={() => handleSort("schoolName")}
                    >
                      Nama Sekolah
                    </TableSortLabel>
                    <Typography variant="body2" color="textSecondary">
                      {`(${filteredCount})`}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "schoolCode"}
                    direction={sortColumn === "schoolCode" ? sortOrder : "asc"}
                    onClick={() => handleSort("schoolCode")}
                  >
                    Kod Sekolah
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "principalName"}
                    direction={
                      sortColumn === "principalName" ? sortOrder : "asc"
                    }
                    onClick={() => handleSort("principalName")}
                  >
                    Nama Pengetua
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "jenis"}
                    direction={sortColumn === "jenis" ? sortOrder : "asc"}
                    onClick={() => handleSort("jenis")}
                  >
                    Jenis Pencapaian
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "jenisMohon"}
                    direction={sortColumn === "jenisMohon" ? sortOrder : "asc"}
                    onClick={() => handleSort("jenisMohon")}
                  >
                    Jenis Permohonan
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "status"}
                    direction={sortColumn === "status" ? sortOrder : "asc"}
                    onClick={() => handleSort("status")}
                  >
                    Status
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>Aksi</TableCell>
                {/* Add more headers as needed */}
              </TableRow>
            </TableHead>
            {/* Table Body */}
            <TableBody>
              {filteredData.slice(startIndex, endIndex).map((school, index) => (
                <TableRow key={school.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>{school.schoolName}</TableCell>
                  <TableCell>{school.schoolCode}</TableCell>
                  <TableCell>{school.principalName}</TableCell>
                  <TableCell>{school.jenis}</TableCell>
                  <TableCell>{school.jenisMohon}</TableCell>
                  <TableCell>{school.status}</TableCell>
                  <TableCell>
                    {school.status === "Menunggu Kelulusan" ? (
                      <Link
                        to={
                          school.jenisMohon === "bulk"
                            ? "/AdminState/SijilPelajar/JanaSijil/bulk"
                            : "/AdminState/SijilPelajar/JanaSijil/single"
                        }
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="contained" color="primary">
                          JANA
                        </Button>
                      </Link>
                    ) : (
                      <Link
                        to={
                          school.jenisMohon === "bulk"
                            ? "/AdminState/SijilPelajar/LihatSijil/bulk"
                            : "/AdminState/SijilPelajar/LihatSijil/single"
                        }
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="outlined" color="primary">
                          LIHAT
                        </Button>
                      </Link>
                    )}
                  </TableCell>

                  {/* Add more cells as needed */}
                </TableRow>
              ))}
              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    Sekolah tidak dijumpai
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
        itemName={schoolToDelete?.schoolName || ""}
      />
    </>
  );
};

export default SchoolTable;
