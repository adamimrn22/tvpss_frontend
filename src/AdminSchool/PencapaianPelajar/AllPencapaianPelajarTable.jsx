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
import SearchBar from "./Filters/SearchBar";
import FilterButtonMenu from "./Filters/FilterButtonMenu";
import RowsPerPageSelector from "./Filters/RowsPerPageSelector";
import CustomPagination from "./Filters/CustomPagination";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "./DeleteModal";

import AktifChip from "./StatusChip";

const AllPencapaianPelajarTable = ({ users }) => {
  console.log(users);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter, setFilter] = useState("PENDING");
  const [sortColumn, setSortColumn] = useState("jenisPencapaian");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredCount, setFilteredCount] = useState(0);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.jenisPencapaian.toLowerCase().includes(search.toLowerCase()) &&
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
      console.log(`Deleting ${userToDelete.jenisPencapaian}`);

      localStorage.setItem(
        "showAlert",
        `Data ${userToDelete.jenisPencapaian} telah berjaya Dipadam`
      );
      localStorage.setItem("alertSeverity", "success");

      closeDeleteModal();
      window.location.reload();
    }
  };

  const confirmTolak = () => {
    if (userToDelete) {
      localStorage.setItem(
        "showAlert",
        `Permohonan pelajar telah berjaya ditolak`
      );
      localStorage.setItem("alertSeverity", "success");

      closeTolakModal();
      window.location.reload();
    }
  };

  const confirmLulus = () => {
    if (userToDelete) {
      localStorage.setItem(
        "showAlert",
        `Permohonan pelajar telah berjaya diluluskan`
      );
      localStorage.setItem("alertSeverity", "success");

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
      (selectedUser) => selectedUser.kod === user.kod
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
                      active={sortColumn === "jenisPencapaian"}
                      direction={
                        sortColumn === "jenisPencapaian" ? sortOrder : "asc"
                      }
                      onClick={() => handleSort("jenisPencapaian")}
                    >
                      Jenis Pencapaian
                    </TableSortLabel>
                    <Typography variant="body2" color="textSecondary">
                      {`(${filteredCount})`}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "kod"}
                    direction={sortColumn === "kod" ? sortOrder : "asc"}
                    onClick={() => handleSort("kod")}
                  >
                    Kod
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "jenisPermohonan"}
                    direction={
                      sortColumn === "jenisPermohonan" ? sortOrder : "asc"
                    }
                    onClick={() => handleSort("jenisPermohonan")}
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
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.slice(startIndex, endIndex).map((user, index) => (
                <TableRow key={user.kod}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.some(
                        (selectedUser) => selectedUser.kod === user.kod
                      )}
                      onChange={(event) => handleRowCheckboxChange(event, user)}
                      color="primary"
                    />
                  </TableCell>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>{user.jenisPencapaian}</TableCell>
                  <TableCell>{user.kod}</TableCell>
                  <TableCell>{user.jenisPermohonan}</TableCell>
                  <TableCell>
                    <AktifChip statusType={user.status} />
                  </TableCell>
                  <TableCell>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2} // Adjust spacing between items if needed
                    >
                      <Link
                        to={`/AdminSchool/PencapaianPelajar/Permohonan${
                          user.jenisPermohonan === "bulk" ? "/Bulk" : "/Single"
                        }`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="contained">Lihat</Button>
                      </Link>
                      {user.status === "PENDING" && (
                        <IconButton
                          aria-label="delete"
                          onClick={() => openDeleteModal(user)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
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

        {/* Delete Modal */}
        <DeleteModal
          open={deleteModalOpen}
          onClose={closeDeleteModal}
          onConfirm={confirmDelete}
          itemName={userToDelete?.namaPenuh || ""}
        />
      </Paper>
    </>
  );
};

export default AllPencapaianPelajarTable;
