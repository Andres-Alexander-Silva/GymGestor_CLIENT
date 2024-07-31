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
import { EjerciciosContext } from "../context/EjerciciosContext";

const columns = [
  { id: "nombre", label: "Nombre" },
  { id: "descripcion", label: "Descripción" },
  { id: "acciones", label: "Acciones" },
];

interface TableEjerciciosProps {
  searchEjercicios: any;
}

const TableEjercicios = ({ searchEjercicios }: TableEjerciciosProps) => {
  const { loading, handleOpenModalInfo, ejercicios, getEjercicioInfo, deleteEjercicio } =
    useContext(EjerciciosContext);
  const { handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } =
    useTable();

  const handleOpenModal = (id: number) => {
    handleOpenModalInfo();
    getEjercicioInfo(id);
  };

  return (
    <>
      {ejercicios.length === 0 && !loading ? (
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
                {ejercicios
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((ejercicio) => (
                    <TableRow key={ejercicio.id}>
                      <TableCell align="center">{ejercicio.nombre}</TableCell>
                      <TableCell align="center">{ejercicio.descripcion}</TableCell>
                      <TableCell align="center">
                        <Tooltip title="Editar">
                          <IconButton
                            color="warning"
                            onClick={() => handleOpenModal(ejercicio.id)}
                          >
                            <FaEdit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar">
                          <IconButton
                            color="error"
                            onClick={() => deleteEjercicio(ejercicio.id)}
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
              count={searchEjercicios().length}
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

export default TableEjercicios;
