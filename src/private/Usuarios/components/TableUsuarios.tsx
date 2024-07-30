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
import { useContext, useEffect } from "react";
import { UsuariosContext } from "../context/UsuariosContext";
import useTable from "../../../hooks/useTable";
import Alerta from "../../../global/utils/alerta";
import { labelDisplayedRows, labelRowsPerPage } from "../../../utils/I18n";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const columns = [
  { id: "cedula", label: "Cedula" },
  { id: "nombres", label: "Nombres" },
  { id: "apellidos", label: "Apellido" },
  { id: "telefono", label: "Telefono" },
  { id: "direccion", label: "Dirección" },
  { id: "peso", label: "Peso" },
  { id: "estatura", label: "Estatura" },
  { id: "rol", label: "Rol" },
  { id: "acciones", label: "acciones" },
];

interface TableUsuariosProps {
  searchUsuarios: any;
}

const TableUsuarios = ({ searchUsuarios }: TableUsuariosProps) => {
  const {
    loading,
    handleOpenModalInfo,
    usuarios,
    getUsuarioInfo,
    getUsuarios,
    deleteUsuario,
  } = useContext(UsuariosContext);
  const { handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } =
    useTable();

  const handleOpenModal= (id: number) => {
    handleOpenModalInfo();
    getUsuarioInfo(id);
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <>
      {usuarios.length === 0 && !loading ? (
        <Alerta type="info" titulo="No hay usuarios registrados" />
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
                {searchUsuarios()
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((usuario: any) => (
                    <TableRow key={usuario.cedula}>
                      <TableCell align="center">{usuario.cedula}</TableCell>
                      <TableCell align="center">{usuario.nombre}</TableCell>
                      <TableCell align="center">{usuario.apellido}</TableCell>
                      <TableCell align="center">{usuario.telefono}</TableCell>
                      <TableCell align="center">{usuario.direccion}</TableCell>
                      <TableCell align="center">{usuario.peso}</TableCell>
                      <TableCell align="center">{usuario.estatura}</TableCell>
                      <TableCell align="center">{usuario.rol_id === 1 ? "ADMINISTRADOR" : usuario.rol_id === 2 ? "CLIENTE" : "ENTRENADOR"}</TableCell>
                      <TableCell align="center">
                        <Tooltip title="Editar" color="warning">
                          <IconButton
                            onClick={() => handleOpenModal(usuario.cedula)}
                          >
                            <FaEdit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar" color="error">
                          <IconButton
                            onClick={() => deleteUsuario(usuario.cedula)}
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
              count={searchUsuarios().length}
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

export default TableUsuarios;
