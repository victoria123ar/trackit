import Logo from "../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Cadastrar from "../components/Cadastro/Cadastrar";

export default function Cadastro({ setUrlFoto, setUsuario }) {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Cadastrar setUrlFoto={setUrlFoto} setUsuario={setUsuario}/>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-bottom: 30px;
  }

  p {
    font-family: "Lexend Deca";
    font-size: 14px;
    color: #52b6ff;
    text-decoration: underline;
  }
`;
