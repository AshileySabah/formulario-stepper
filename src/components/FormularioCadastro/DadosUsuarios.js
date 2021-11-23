import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuarios({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        aoEnviar({email, senha});
      }}
    >
      <TextField
        onChange={(evento) => {
          setEmail(evento.target.value);
        }}
        id="email"
        label="E-mail"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        onChange={(evento) => {
          setSenha(evento.target.value);
        }}
        id="senha"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuarios;
