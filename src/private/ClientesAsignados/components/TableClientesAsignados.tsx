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
import { FaEdit } from "react-icons/fa";
import { ClientesAsignadosContext } from "../context/ClientesAsignados";
import ModalAsignarRutina from "./ModalAsignarRutina";

const columns = [
  { id: "cedula", label: "Cedula" },
  { id: "nombres", label: "Nombres" },
  { id: "apellidos", label: "Apellido" },
  { id: "peso", label: "Peso" },
  { id: "estatura", label: "Estatura" },
  { id: "acciones", label: "acciones" },
];

interface TableClientesAsignadosProps {
  searchClientes: any;
}

const TableClientesAsignados = ({
  searchClientes,
}: TableClientesAsignadosProps) => {
  const { loading, handleOpenModalAsignarRutina, clientes } = useContext(
    ClientesAsignadosContext
  );
  const { handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } =
    useTable();

  return (
    <>
      {clientes.length === 0 && !loading ? (
        <Alerta type="info" titulo="No hay clientes asignados" />
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
                {clientes
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((cliente: any) => (
                    <TableRow key={cliente.cedula}>
                      <TableCell align="center">
                        {cliente.usuario.cedula}
                      </TableCell>
                      <TableCell align="center">
                        {cliente.usuario.nombre}
                      </TableCell>
                      <TableCell align="center">
                        {cliente.usuario.apellido}
                      </TableCell>
                      <TableCell align="center">
                        {cliente.usuario.peso}
                      </TableCell>
                      <TableCell align="center">
                        {cliente.usuario.estatura}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Asignar Rutina">
                          <IconButton
                            onClick={() => handleOpenModalAsignarRutina()}
                            color="warning"
                          >
                            <FaEdit />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                      <ModalAsignarRutina idCliente={cliente.usuario.cedula} />
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={searchClientes().length}
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

export default TableClientesAsignados;
