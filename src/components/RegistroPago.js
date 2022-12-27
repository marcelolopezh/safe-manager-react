import React, { useEffect } from "react";
import { getRegistroPagos } from "../helpers/GetRegistroPagos";
import { formatNumber } from "../helpers/Util";

import moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const RegistroPago = ({ registroPagosDesc, setRegistroPagosDesc }) => {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 10;
  const ordenamiento = "descendente";
  useEffect(() => {
    getRegistroPagos(ordenamiento).then((res) => {
      setRegistroPagosDesc(res);
    });
    // eslint-disable-next-line
  }, []);

  const handleDeletePago = () => {};

  const getColor = (transaccion) => {
    if (!transaccion.tipoOperacion) return "black";
    return transaccion.tipoOperacion === "Depósito" ? "green" : "red";
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white" }} align="center">
                Fecha
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                {" "}
                Usuario
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Tipo Operación
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Monto Operación
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Monto Total
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Acción
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {true
              ? registroPagosDesc
                  .slice()
                  .sort()
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((transaccion) => (
                    <TableRow
                      key={transaccion.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        style={{ fontSize: "0.7rem" }}
                        component="th"
                        scope="row"
                      >
                        {moment(transaccion.fechaTransaccion).format("DD-MM")}
                      </TableCell>
                      <TableCell style={{ fontSize: "0.7rem" }}>
                        {transaccion.usuario.toUpperCase()}
                      </TableCell>
                      <TableCell style={{ fontSize: "0.7rem" }}>
                        {transaccion.tipoOperacion}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "0.7rem",
                          color: getColor(transaccion),
                        }}
                      >
                        ${formatNumber(transaccion.monto)}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "0.7rem",
                        }}
                      >
                        <p style={{ fontSize: "0.8rem", color: "blue" }}>
                          ${formatNumber(transaccion.montoAcumulado)}
                        </p>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => handleDeletePago(transaccion._id)}
                          size="small"
                        >
                          <DeleteIcon color="primary" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
              : "No existe información"}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={registroPagosDesc ? registroPagosDesc.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </>
  );
};
