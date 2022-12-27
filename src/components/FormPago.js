import React from "react";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
export const FormPago = ({ dataForm, setDataForm }) => {

  const tipo = [
    { id: 1, value: "Depósito", name: "tipoTransaccion" },
    { id: 2, value: "Retiro", name: "tipoTransaccion" },
  ];

  const handleChangeForm = (event) => {
    if (event) {
      setDataForm({
        ...dataForm,
        [event.target.name]: event.target.value,
      });
    }
  };
  return (
    <>
      <FormControl required sx={{ m: 1, minWidth: 250 }} size={"small"}>
        <InputLabel style={{ marginTop: "0.1rem" }}> Tipo Transacción</InputLabel>
        <Select
          defaultValue={""}
          label="Tipo de Transacción"
          onChange={handleChangeForm}
          name="tipoTransaccion"
          value={dataForm.tipoTransaccion}
        >
          {tipo.map((tipo) => {
            return (
              <MenuItem value={tipo.value} key={tipo.value}>
                {tipo.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <br></br>

      <FormControl required sx={{ m: 1, minWidth: 250 }} size={"small"}>
        <TextField
          style={{ marginTop: "0.1rem" }}
          required
          id="outlined-required"
          label="Monto"
          size="small"
          onChange={handleChangeForm}
          name={"monto"}
          value={dataForm.monto}
          type="number"
          min={1}
          max={1000000}
        />
      </FormControl>
    </>
  );
};
