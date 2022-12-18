import Logo from "../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Login from "../components/Home/Login"

export default function Home({ setUrlFoto, setUsuario }) {


  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Login setUrlFoto={setUrlFoto} setUsuario={setUsuario}/>
      <Link to="/Cadastro">
        <p>Não tem uma conta? Cadastre-se</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;

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