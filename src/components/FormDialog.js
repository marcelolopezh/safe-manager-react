import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { FormPago } from "./FormPago";
import { createRegistroPago } from "../helpers/CreateRegistroPago";
import { getRegistroPagos } from "../helpers/GetRegistroPagos";
export const FormDialog = ({
  openDialog,
  handleOpenClose,
  setRegistroPagosAsc,
  setRegistroPagosDesc,
}) => {
  const [dataForm, setDataForm] = useState({
    usuario: localStorage.getItem("usuario"),
    monto: 0,
    tipoTransaccion: "",
  });
  const descendente = "descendente";
  const ascendente = "ascendente";

  const clearDataForm = () => {
    setDataForm({
      usuario: localStorage.getItem("usuario"),
      monto: 0,
      tipoTransaccion: "",
    });
  };

  const handleSendDataForm = () => {
    //validar datos
    createRegistroPago(dataForm).then((res) => {
      getRegistroPagos(ascendente).then((resp) => {
        setRegistroPagosAsc(resp);
        clearDataForm();
      });
      getRegistroPagos(descendente).then((resp) => {
        setRegistroPagosDesc(resp);
        clearDataForm();
      });
    });
    handleOpenClose();
  };

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleOpenClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Formulario de Ingreso de Pago
        </DialogTitle>
        <DialogContent>
          <FormPago dataForm={dataForm} setDataForm={setDataForm} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenClose} style={{ color: "red" }}>
            Cerrar
          </Button>
          <Button onClick={handleSendDataForm} style={{ color: "green" }}>
            Ingresar Pago
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
