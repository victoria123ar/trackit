import Header from "../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Historico({ urlFoto, usuario }) {
  return (
    <>
      <Header urlFoto={urlFoto} usuario={usuario} />
      <Container>
        <Titulo>
          <h1>Histórico</h1>
        </Titulo>
        <Texto>
          <h4>Em breve você poderá ver o histórico dos seus hábitos aqui!</h4>
        </Texto>
        <Footer>
          <Link to="/Habitos" style={{ textDecoration: "none" }}>
            <p>Hábitos</p>
          </Link>
          <Link to="/Hoje" style={{ textDecoration: "none" }}>
            <HojeBotao>
              <span>Hoje</span>
            </HojeBotao>
          </Link>
          <p>Histórico</p>
        </Footer>
      </Container>
    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;

  width: 100%;
  max-height: 800px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f2f2f2;

  margin-top: 70px;
`;

const Titulo = styled.div`
  max-width: 345px;
  width: 100%;

  margin-top: 30px;
  margin-bottom: 20px;

  h1 {
    font-family: "Lexend Deca";
    font-size: 22px;
    color: #126ba5;
    margin-bottom: 6px;
  }

  p {
    font-family: "Lexend Deca";
    font-size: 18px;
    color: #bababa;
  }
`;

const Texto = styled.div`
  width: 340px;

  h4 {
    font-family: "Lexend Deca";
    font-size: 18px;
    color: #666666;
    margin-bottom: 10px;
  }
`;

const Footer = styled.div`
  box-sizing: border-box;

  max-width: 500px;
  width: 100%;
  height: 70px;

  position: fixed;
  bottom: 0;
  left: 0;

  background: #fff;
  align-items: center;
  justify-content: space-around;

  display: flex;

  padding: 0 5px;

  p {
    font-family: "Lexend Deca";
    font-size: 20px;
    color: #52b6ff;
  }
`;

const HojeBotao = styled.div`
  box-sizing: border-box;

  width: 91px;
  height: 91px;

  background: #52b6ff;

  border-radius: 50%;

  margin-bottom: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: "Lexend Deca";
    font-size: 18px;
    color: #fff;
  }
`;
