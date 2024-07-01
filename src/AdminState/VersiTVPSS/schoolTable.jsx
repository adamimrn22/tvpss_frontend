import { useState, useEffect, useCallback } from "react";
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
  Checkbox,
} from "@mui/material";
import SearchBar from "../components/Filters/SearchBar";
import FilterButtonMenu from "../components/Filters/FilterButtonMenu";
import RowsPerPageSelector from "../components/Filters/RowsPerPageSelector";
import CustomPagination from "../components/Filters/CustomPagination";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "./DeleteModal"; // Import DeleteModal
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

import ExportButton from "../ExportButton";

const SchoolTable = ({ schools }) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter, setFilter] = useState("");
  const [sortColumn, setSortColumn] = useState("schoolName");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredCount, setFilteredCount] = useState(0);
  const [selected, setSelected] = useState(new Set()); // State for selected rows
  const [selectAll, setSelectAll] = useState(false); // State for header checkbox
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [schoolToDelete, setSchoolToDelete] = useState(null);

  useEffect(() => {
    const filtered = schools.filter(
      (school) =>
        school.schoolName.toLowerCase().includes(search.toLowerCase()) &&
        (filter === "" || school.status === filter)
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
  }, [schools, search, filter, sortColumn, sortOrder]);

  const totalPages = Math.ceil(filteredCount / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const tableHeight = Math.min(filteredData.length * 50 + 56, 400);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
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
      localStorage.setItem("alertSeverity", "success");

      // Close modal
      closeDeleteModal();

      window.location.reload();
    }
  };

  // Handler for the header checkbox to select/deselect all checkboxes
  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    setSelected(
      checked
        ? new Set(filteredData.slice(startIndex, endIndex).map((row) => row.id))
        : new Set()
    );
  };

  // Handler for individual row checkboxes
  const handleCheckboxChange = (event, id) => {
    const checked = event.target.checked;
    setSelected((prev) => {
      const newSelected = new Set(prev);
      if (checked) {
        newSelected.add(id);
      } else {
        newSelected.delete(id);
      }
      return newSelected;
    });
  };

  // Check if a row is selected
  const isSelected = (id) => selected.has(id);

  // Determine if the header checkbox should be checked or indeterminate
  const isHeaderChecked =
    selected.size === filteredData.slice(startIndex, endIndex).length;
  const isHeaderIndeterminate =
    selected.size > 0 &&
    selected.size < filteredData.slice(startIndex, endIndex).length;

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" sx={{ my: 1 }}>
          <Stack direction={"row"} sx={{ p: 0, m: 0 }}>
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
          </Stack>
          <Stack direction={"row"} justifyContent={"end"}>
            <ExportButton />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#c62828",
                boxShadow: 0,
                "&:hover": {
                  backgroundColor: "#b71c1c", // Darker red for hover state
                },
              }}
              startIcon={<DeleteIcon />}
            >
              Hapus
            </Button>

            <RowsPerPageSelector
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
            />
          </Stack>
        </Stack>

        {/* Table */}
        <TableContainer sx={{ minHeight: tableHeight, overflow: "auto" }}>
          <Table>
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={isHeaderIndeterminate}
                    checked={isHeaderChecked}
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center">
                    <TableSortLabel
                      active={sortColumn === "schoolCode"}
                      direction={
                        sortColumn === "schoolCode" ? sortOrder : "asc"
                      }
                      onClick={() => handleSort("schoolCode")}
                    >
                      Kod Sekolah
                    </TableSortLabel>
                  </Stack>
                </TableCell>
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
                    active={sortColumn === "principalName"}
                    direction={
                      sortColumn === "principalName" ? sortOrder : "asc"
                    }
                    onClick={() => handleSort("principalName")}
                  >
                    Nama Pengawai Sekolah
                  </TableSortLabel>
                </TableCell>
                <TableCell>Versi</TableCell>
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
              </TableRow>
            </TableHead>
            {/* Table Body */}
            <TableBody>
              {filteredData.slice(startIndex, endIndex).map((school, index) => (
                <TableRow key={school.id} selected={isSelected(school.id)}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected(school.id)}
                      onChange={(event) =>
                        handleCheckboxChange(event, school.id)
                      }
                    />
                  </TableCell>
                  <TableCell>{school.schoolCode}</TableCell>
                  <TableCell>{school.schoolName}</TableCell>
                  <TableCell>{school.principalName}</TableCell>
                  <TableCell>{school.version}</TableCell>
                  <TableCell>{school.status}</TableCell>
                  <TableCell>
                    <Stack alignItems={"center"}>
                      <Link
                        to={`/AdminState/ValidasiTVPSS/NotifikasiSekolah`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="contained">Lihat</Button>
                      </Link>
                    </Stack>
                  </TableCell>
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

      {/* <IconButton
                        aria-label="delete"
                        onClick={() => openDeleteModal(school)}
                      >
                        <DeleteIcon />
                      </IconButton> */}
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
