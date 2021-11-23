function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 15) {
    return { valido: false, texto: "a senha deve ter de 4 a 15 caracteres" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCPF, validarSenha };
