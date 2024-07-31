import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useContext } from "react";
import useTable from "../../../hooks/useTable";
import Alerta from "../../../global/utils/alerta";
import { labelDisplayedRows, labelRowsPerPage } from "../../../utils/I18n";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RutinasContext } from "../context/RutinasContext";

const columns = [
  { id: "nombre", label: "Nombre" },
  { id: "descripcion", label: "Descripción" },
  { id: "acciones", label: "Acciones" },
];

interface TableRutinasProps {
  searchRutinas: any;
}

const TableRutinas = ({ searchRutinas }: TableRutinasProps) => {
  const { loading, handleOpenModalInfo, rutinas, getRutinaInfo, deleteRutina } =
    useContext(RutinasContext);
  const { handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } =
    useTable();

  const handleOpenModal = (id: number) => {
    handleOpenModalInfo();
    getRutinaInfo(id);
  };

  return (
    <>
      {rutinas.length === 0 && !loading ? (
        <Alerta type="info" titulo="No hay rutinas registrados" />
      ) : (
        <Card
          sx={{
            overflowX: "auto",
            boxShadow: "2px 2px 10px 5px rgba(0, 0, 0, 0.1)",
            mt: 4,
          }}
        >
          <Box sx={{ maxWidth: 1100 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="center"
                      sx={{
                        "&.MuiTableCell-root": {
                          backgroundColor: "#f97316",
                          color: "#FFFFFF",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rutinas
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((rutina) => (
                    <TableRow key={rutina.id}>
                      <TableCell align="center">{rutina.nombre}</TableCell>
                      <TableCell align="center">{rutina.descripcion}</TableCell>
                      <TableCell align="center">
                        <Tooltip title="Editar">
                          <IconButton
                            color="warning"
                            onClick={() => handleOpenModal(rutina.id)}
                          >
                            <FaEdit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar">
                          <IconButton
                            color="error"
                            onClick={() => deleteRutina(rutina.id)}
                          >
                            <MdDelete />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={searchRutinas().length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage={labelRowsPerPage}
              labelDisplayedRows={labelDisplayedRows}
            />
          </Box>
        </Card>
      )}
    </>
  );
};

export default TableRutinas;
