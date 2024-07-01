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
  Checkbox,
  TableSortLabel,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import SearchBar from "../../components/Filters/SearchBar";
import FilterButtonMenu from "../../components/Filters/FilterButtonMenu";
import RowsPerPageSelector from "../../components/Filters/RowsPerPageSelector";
import CustomPagination from "../../components/Filters/CustomPagination";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "./DeleteModal";
import TolakModal from "./TolakPermohonan"; // Assuming you have a separate component for TolakModal
import LulusModal from "./LulusPermohonan"; // Assuming you have a separate component for LulusModal

import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import ExportButton from "../../ExportButton";
import StatusChip from "./StatusChip";

const AllUserKrewMohonTable = ({ users }) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter, setFilter] = useState("PENDING");
  const [sortColumn, setSortColumn] = useState("namaPenuh");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredCount, setFilteredCount] = useState(0);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [tolakModalOpen, setTolakModalOpen] = useState(false);
  const [lulusModalOpen, setLulusModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  // Effect to update filteredData and filteredCount whenever search, filter, or users change
  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.namaPenuh.toLowerCase().includes(search.toLowerCase()) &&
        (filter === "" || user.status === filter)
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

  const openDeleteModal = (user) => {
    setUserToDelete(user);
    setDeleteModalOpen(true);
  };

  const openTolakModal = (user) => {
    setUserToDelete(user);
    setTolakModalOpen(true);
  };

  const openLulusModal = (user) => {
    setUserToDelete(user);
    setLulusModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setUserToDelete(null);
  };

  const closeTolakModal = () => {
    setTolakModalOpen(false);
    setUserToDelete(null);
  };

  const closeLulusModal = () => {
    setLulusModalOpen(false);
    setUserToDelete(null);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      console.log(`Deleting ${userToDelete.namaPenuh}`);

      // Set success message
      localStorage.setItem(
        "showAlert",
        `Data ${userToDelete.namaPenuh} telah berjaya Dipadam`
      );
      localStorage.setItem("alertSeverity", "success");

      // Close modal and refresh
      closeDeleteModal();
      window.location.reload();
    }
  };

  const confirmTolak = () => {
    if (userToDelete) {
      // Set success message
      localStorage.setItem(
        "showAlert",
        `Permohonan pelajar telah berjaya ditolak`
      );
      localStorage.setItem("alertSeverity", "success");

      // Close modal and refresh
      closeTolakModal();
      window.location.reload();
    }
  };

  const confirmLulus = () => {
    if (userToDelete) {
      // Set success message
      localStorage.setItem(
        "showAlert",
        `Permohonan pelajar telah berjaya diluluskan`
      );
      localStorage.setItem("alertSeverity", "success");

      // Close modal and refresh
      closeLulusModal();
      window.location.reload();
    }
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows([...filteredData]);
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowCheckboxChange = (event, user) => {
    const selectedIndex = selectedRows.findIndex(
      (selectedUser) => selectedUser.kadPengenalan === user.kadPengenalan
    );
    let newSelectedRows = [];

    if (selectedIndex === -1) {
      newSelectedRows = [...selectedRows, user];
    } else if (selectedIndex === 0) {
      newSelectedRows = [];
    } else if (selectedIndex > 0) {
      newSelectedRows = [
        ...selectedRows.slice(0, selectedIndex),
        ...selectedRows.slice(selectedIndex + 1),
      ];
    }

    setSelectedRows(newSelectedRows);
  };

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack direction={"row"} justifyContent={"end"} sx={{ mb: 4 }}>
          <ExportButton />
          <Button
            onClick={() => openTolakModal(1)}
            variant="outlined"
            startIcon={<BlockOutlinedIcon />}
            sx={{ color: "red", mx: 1 }}
          >
            Tolak Permohonan
          </Button>
          <Button
            variant="contained"
            onClick={() => openLulusModal(3)}
            startIcon={<CheckCircleOutlinedIcon />}
          >
            Lulus Permohonan
          </Button>
        </Stack>

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

        <TableContainer sx={{ minHeight: tableHeight, overflow: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    checked={selectAll}
                    onChange={toggleSelectAll}
                    color="primary"
                  />
                </TableCell>
                <TableCell>Bil</TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center">
                    <TableSortLabel
                      active={sortColumn === "namaPenuh"}
                      direction={sortColumn === "namaPenuh" ? sortOrder : "asc"}
                      onClick={() => handleSort("namaPenuh")}
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
                    active={sortColumn === "kadPengenalan"}
                    direction={
                      sortColumn === "kadPengenalan" ? sortOrder : "asc"
                    }
                    onClick={() => handleSort("kadPengenalan")}
                  >
                    Kad Pengenalan
                  </TableSortLabel>
                </TableCell>
                <TableCell>Tingkatan</TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "jawatan"}
                    direction={sortColumn === "jawatan" ? sortOrder : "asc"}
                    onClick={() => handleSort("jawatan")}
                  >
                    Jawatan
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
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.slice(startIndex, endIndex).map((user, index) => (
                <TableRow key={user.kadPengenalan}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.some(
                        (selectedUser) =>
                          selectedUser.kadPengenalan === user.kadPengenalan
                      )}
                      onChange={(event) => handleRowCheckboxChange(event, user)}
                      color="primary"
                    />
                  </TableCell>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>{user.namaPenuh}</TableCell>
                  <TableCell>{user.kadPengenalan}</TableCell>
                  <TableCell>{user.tingkatan}</TableCell>
                  <TableCell>{user.jawatan}</TableCell>
                  <TableCell>
                    <StatusChip statusType={user.status} />
                  </TableCell>
                  <TableCell>
                    <Stack direction={"row"} justifyContent={"center"}>
                      <Link
                        to="/AdminSchool/PermohonanKrewDetail"
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="contained">Lihat</Button>
                      </Link>
                      <IconButton
                        aria-label="delete"
                        onClick={() => openDeleteModal(user)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    Permohonan tidak dijumpai
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

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
        itemName={userToDelete?.namaPenuh || ""}
      />

      {/* Tolak Modal */}
      <TolakModal
        open={tolakModalOpen}
        onClose={closeTolakModal}
        onConfirm={confirmTolak}
      />

      {/* Lulus Modal */}
      <LulusModal
        open={lulusModalOpen}
        onClose={closeLulusModal}
        onConfirm={confirmLulus}
      />
    </>
  );
};

export default AllUserKrewMohonTable;
