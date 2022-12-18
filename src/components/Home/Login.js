import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function Login({ setUrlFoto, setUsuario }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const [desabilitado, setDesabilitado] = useState(false);

  function login(e) {
    e.preventDefault();
    setDesabilitado(true);

    const postData = {
      email: email,
      password: senha,
    };

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        postData
      )
      .then((resposta) => {
        setUrlFoto(resposta.data.image);
        setUsuario(resposta.data.name);
        navigate("/Hoje");
      })
      .catch((erro) => {
        alert(erro.response.data.message);
        setDesabilitado(false);
      });
  }
  return (
    <Form onSubmit={(e) => login(e)}>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={!desabilitado ? false : true}
      />
      <input
        placeholder="senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        disabled={!desabilitado ? false : true}
      />
      <Botao disabled={!desabilitado ? false : true}>
        {desabilitado ? (
          <ThreeDots height="50" width="50" radius="13" color="#fff" />
        ) : (
          "Entrar"
        )}
      </Botao>
    </Form>
  );
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 15px;

  input {
    box-sizing: border-box;

    width: 303px;
    height: 45px;

    border: 1px solid #d4d4d4;
    border-radius: 5px;

    margin-bottom: 6px;

    padding: 0px 10px;

    font-family: "Lexend Deca";
    font-size: 20px;
    color: #666666;
  }

  input::placeholder {
    font-family: "Lexend Deca";
    font-size: 20px;
    color: #d4d4d4;
  }
`;

const Botao = styled.button`
  width: 303px;
  height: 45px;

  background-color: #52b6ff;
  border: none;
  border-radius: 5px;

  font-family: "Lexend Deca";
  font-size: 21px;
  color: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
