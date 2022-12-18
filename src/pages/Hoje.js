import Header from "../components/Header";
import styled from "styled-components";
import check from "../assets/check.png";
import { Link } from "react-router-dom";

export default function Hoje({ urlFoto, usuario }) {
  return (
    <>
      <Header urlFoto={urlFoto} usuario={usuario} />
      <Container>
        <Titulo>
          <h1>Segunda, 17/05</h1>
          <p>Nenhum hábito concluído ainda</p>
        </Titulo>
        <Habito>
          <Texto>
            <h4>Ler 1 capítulo de livro</h4>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </Texto>
          <Check>
            <img src={check} alt="Check" />
          </Check>
        </Habito>
        <Footer>
          <Link to="/Habitos" style={{ textDecoration: "none" }}>
            <p>Hábitos</p>
          </Link>
          <HojeBotao>
            <span>Hoje</span>
          </HojeBotao>
          <Link to="/Historico" style={{ textDecoration: "none" }}>
            <p>Histórico</p>
          </Link>
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
  margin-bottom: 30px;

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

const Habito = styled.div`
  box-sizing: border-box;

  width: 340px;
  height: 91px;

  background-color: #ffff;

  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  margin-bottom: 10px;
`;

const Texto = styled.div`
  h4 {
    font-family: "Lexend Deca";
    font-size: 20px;
    color: #666666;
    margin-bottom: 10px;
  }

  p {
    font-family: "Lexend Deca";
    font-size: 13px;
    color: #666666;
    line-height: 15px;
  }
`;

const Check = styled.div`
  width: 69px;
  height: 69px;

  background: #e7e7e7;

  border: 1px solid #ebebeb;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 35px;
    height: 28px;
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
