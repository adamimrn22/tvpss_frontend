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
import SearchBar from "./components/Filters/SearchBar";
import FilterButtonMenu from "./components/Filters/FilterButtonMenu";
import RowsPerPageSelector from "./components/Filters/RowsPerPageSelector";
import CustomPagination from "./components/Filters/CustomPagination";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "./DeleteModal";
import TolakModal from "./TolakPermohonan";
import EditIcon from "@mui/icons-material/Edit";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

import ExportButton from "../ExportButton";

const EquipmentTable = ({ equipment }) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter, setFilter] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredCount, setFilteredCount] = useState(0);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [tolakModalOpen, setTolakModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  // Effect to update filteredData and filteredCount whenever search, filter, or equipment change
  useEffect(() => {
    const filtered = equipment.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (filter === "" || item.status === filter)
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
  }, [equipment, search, filter, sortColumn, sortOrder]);

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

  const openDeleteModal = (item) => {
    setItemToDelete(item);
    setDeleteModalOpen(true);
  };

  const openTolakModal = (item) => {
    setItemToDelete(item);
    setTolakModalOpen(true);
  };

  const openLulusModal = (item) => {
    setItemToDelete(item);
    setLulusModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setItemToDelete(null);
  };

  const closeTolakModal = () => {
    setTolakModalOpen(false);
    setItemToDelete(null);
  };

  const closeLulusModal = () => {
    setLulusModalOpen(false);
    setItemToDelete(null);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      console.log(`Deleting ${itemToDelete.name}`);

      // Set success message
      localStorage.setItem(
        "showAlert",
        `Data ${itemToDelete.name} telah berjaya Dipadam`
      );
      localStorage.setItem("alertSeverity", "success");

      // Close modal and refresh
      closeDeleteModal();
      window.location.reload();
    }
  };

  const confirmTolak = () => {
    if (itemToDelete) {
      // Set success message
      localStorage.setItem("showAlert", `Data barang berjaya dipadam!`);

      // Close modal and refresh
      closeTolakModal();
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

  const handleRowCheckboxChange = (event, item) => {
    const selectedIndex = selectedRows.findIndex(
      (selectedItem) => selectedItem.name === item.name
    );
    let newSelectedRows = [];

    if (selectedIndex === -1) {
      newSelectedRows = [...selectedRows, item];
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
            startIcon={<DeleteIcon />}
            sx={{ color: "red", mx: 1 }}
          >
            Buang Barang
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
                      active={sortColumn === "name"}
                      direction={sortColumn === "name" ? sortOrder : "asc"}
                      onClick={() => handleSort("name")}
                    >
                      Nama Peralatan
                    </TableSortLabel>
                    <Typography variant="body2" color="textSecondary">
                      {`(${filteredCount})`}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "jenis"}
                    direction={sortColumn === "jenis" ? sortOrder : "asc"}
                    onClick={() => handleSort("jenis")}
                  >
                    Jenis
                  </TableSortLabel>
                </TableCell>
                <TableCell>Lokasi</TableCell>
                <TableCell>Tarikh Diperolehi</TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "status"}
                    direction={sortColumn === "status" ? sortOrder : "asc"}
                    onClick={() => handleSort("status")}
                  >
                    status
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.slice(startIndex, endIndex).map((item, index) => (
                <TableRow key={item.name}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.some(
                        (selectedItem) => selectedItem.name === item.name
                      )}
                      onChange={(event) => handleRowCheckboxChange(event, item)}
                      color="primary"
                    />
                  </TableCell>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.jenis}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.dateAcquired}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <Stack direction={"row"} justifyContent={"center"}>
                      <Link
                        to="/AdminSchool/BilanganBarang/Kemaskini"
                        style={{ textDecoration: "none" }}
                      >
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                      </Link>
                      <IconButton
                        aria-label="delete"
                        onClick={() => openDeleteModal(item)}
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
                    Peralatan tidak dijumpai
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
        itemName={itemToDelete?.name || ""}
      />

      {/* Tolak Modal */}
      <TolakModal
        open={tolakModalOpen}
        onClose={closeTolakModal}
        onConfirm={confirmTolak}
      />
    </>
  );
};

export default EquipmentTable;
