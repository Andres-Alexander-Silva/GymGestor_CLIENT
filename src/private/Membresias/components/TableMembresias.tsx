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
import { MembresiasContext } from "../context/MembresiasContext";

const columns = [
  { id: "nombre", label: "Nombre" },
  { id: "descripcion", label: "Descripción" },
  { id: "precio", label: "Precio" },
  { id: "duracion", label: "Duración" },
  { id: "estado", label: "Estado" },
  { id: "acciones", label: "Acciones" },
];

interface TableMembresiasProps {
  searchMembresias: any;
}

const TableMembresias = ({ searchMembresias }: TableMembresiasProps) => {
  const {
    loading,
    handleOpenModalInfo,
    membresias,
    getMembresiaInfo,
    deleteMembresia,
  } = useContext(MembresiasContext);
  const { handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } =
    useTable();

  const handleOpenModal = (id: number) => {
    handleOpenModalInfo();
    getMembresiaInfo(id);
  };

  return (
    <>
      {membresias.length === 0 && !loading ? (
        <Alerta type="info" titulo="No hay membresias registrados" />
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
                {searchMembresias()
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((membresia: any) => (
                    <TableRow key={membresia.id}>
                      <TableCell align="center">{membresia.nombre}</TableCell>
                      <TableCell align="center">
                        {membresia.descripcion}
                      </TableCell>
                      <TableCell align="center">{membresia.precio}</TableCell>
                      <TableCell align="center">{membresia.duracion}</TableCell>
                      <TableCell align="center">
                        {membresia.estado ? "Activo" : "Inactivo"}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Editar" arrow>
                          <IconButton
                            onClick={() => handleOpenModal(membresia.id)}
                            color="warning"
                          >
                            <FaEdit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar" arrow>
                          <IconButton
                            onClick={() => deleteMembresia(membresia.id)}
                            color="error"
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
              count={searchMembresias().length}
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

export default TableMembresias;
