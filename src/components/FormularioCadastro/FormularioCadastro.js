import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState(0);

  useEffect(() => {
    if (etapaAtual === formularios.length) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuarios aoEnviar={coletarDados} validacoes={validacoes}/>,
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes}/>,
    <Typography variant="h3" component="p" align="center">
      Agradecemos pelo cadastro!
    </Typography>,
  ];

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, dados });
    proximo();
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
