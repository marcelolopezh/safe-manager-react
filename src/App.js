import { useState, useEffect } from "react";
import "./App.css";
import { LineChart } from "./components/LineChart";
import { RegistroPago } from "./components/RegistroPago";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { PlusButton } from "./components/PlusButton";
import { FormDialog } from "./components/FormDialog";
import { UserForm } from "./components/UserForm";
import { formatNumber } from "./helpers/Util";

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [usuario, setUsuario] = useState();

  useEffect(() => {
    setUsuario(localStorage.getItem("usuario"));
  }, []);

  const [openDialog, setOpenDialog] = useState(false);
  const [registroPagosAsc, setRegistroPagosAsc] = useState([]);
  const [registroPagosDesc, setRegistroPagosDesc] = useState([]);

  const handleOpenClose = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }} style={{ padding: "1rem" }}>
        {usuario != null ? (
          <>
            <FormDialog
              openDialog={openDialog}
              handleOpenClose={handleOpenClose}
              registroPagosAsc={registroPagosAsc}
              setRegistroPagosAsc={setRegistroPagosAsc}
              registroPagosDesc={registroPagosDesc}
              setRegistroPagosDesc={setRegistroPagosDesc}
            />
            <Grid container spacing={2}></Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <LineChart
                  registroPagosAsc={registroPagosAsc}
                  setRegistroPagosAsc={setRegistroPagosAsc}
                />
                <h4>
                  Total Actual $
                  {registroPagosDesc && registroPagosDesc[0]
                    ? formatNumber(registroPagosDesc[0].montoAcumulado)
                    : 0}
                </h4>
              </Grid>
              <Grid item xs={12} md={1}>
                <PlusButton handleOpenClose={handleOpenClose} />
              </Grid>
              <Grid item xs={12} md={5}>
                <RegistroPago
                  registroPagosDesc={registroPagosDesc}
                  setRegistroPagosDesc={setRegistroPagosDesc}
                />
              </Grid>
            </Grid>{" "}
          </>
        ) : (
          <UserForm setUsuario={setUsuario} />
        )}
      </Box>
    </div>
  );
}
