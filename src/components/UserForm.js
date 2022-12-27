import React, { useState } from "react";
import "../assets/img/daniel.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
const imgPatricia = require("../assets/img/patricia.svg");
const imgDaniel = require("../assets/img/daniel.svg");
const imgMarcelo = require("../assets/img/marcelo.svg");

export const UserForm = ({ setUsuario }) => {
  const [user, setUser] = useState();

  const users = [
    {
      nombre: "patricia",
      img: imgPatricia,
    },
    {
      nombre: "daniel",
      img: imgDaniel,
    },
    {
      nombre: "marcelo",
      img: imgMarcelo,
    },
  ];

  const handleSetUser = (user) => {
    setUser(user);
  };

  const setUsuarioForm = (user) => {
    localStorage.setItem("usuario", user);
    setUsuario(localStorage.getItem("usuario"));
  };

  //shuffle array

  return (
    <div>
      <h2>Selecciona tu Usuario</h2>
      <hr></hr>
      {users.map((element) => {
        return (
          <Grid
            key={element.nombre}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={4}></Grid>
            <Grid
              item
              xs={4}
              alignItems="center"
              justifyContent="center"
              onClick={() => handleSetUser(element.nombre)}
            >
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: 100,
                  borderColor: "black",
                  "&:hover": {
                    backgroundColor: "#37AFCD",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <img
                  width={100}
                  src={require(`../assets/img/${element.nombre}-avatar.png`)}
                  alt={element.nombre}
                ></img>
                <br></br>
                <h4>{element.nombre.toUpperCase()}</h4>
              </Box>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        );
      })}
      <hr></hr>
      <Button
        variant="contained"
        disabled={user == null}
        onClick={() => setUsuarioForm(user)}
      >
        Continuar
      </Button>
    </div>
  );
};
