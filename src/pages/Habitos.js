import Header from "../components/Header";
import styled from "styled-components";
import Lixeira from "../assets/lixeira.png";
import { Link } from "react-router-dom";
import Criar from "../components/Habitos/Criar";

export default function Habitos({ urlFoto, usuario }) {
  return (
    <>
      <Header urlFoto={urlFoto} usuario={usuario} />
      <Container>
        <Criar />
        <HabitosContainer>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </HabitosContainer>
        <Habito>
          <Texto>
            <p>Ler 1 capítulo de livro</p>
            <img src={Lixeira} alt="Lixeira" />
          </Texto>
          <Dias>
            <button>D</button>
            <button>S</button>
            <button>T</button>
            <button>Q</button>
            <button>Q</button>
            <button>S</button>
            <button>S</button>
          </Dias>
        </Habito>
        <Habito>
          <Texto>
            <p>Ler 1 capítulo de livro</p>
            <img src={Lixeira} alt="Lixeira" />
          </Texto>
          <Dias>
            <button>D</button>
            <button>S</button>
            <button>T</button>
            <button>Q</button>
            <button>Q</button>
            <button>S</button>
            <button>S</button>
          </Dias>
        </Habito>
        <Habito>
          <Texto>
            <p>Ler 1 capítulo de livro</p>
            <img src={Lixeira} alt="Lixeira" />
          </Texto>
          <Dias>
            <button>D</button>
            <button>S</button>
            <button>T</button>
            <button>Q</button>
            <button>Q</button>
            <button>S</button>
            <button>S</button>
          </Dias>
        </Habito>
        <Footer>
          <p>Hábitos</p>
          <Link to="/Hoje" style={{ textDecoration: "none" }}>
            <HojeBotao>
              <span>Hoje</span>
            </HojeBotao>
          </Link>
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

const HabitosContainer = styled.div`
  width: 340px;

  p {
    font-family: "Lexend Deca";
    font-size: 18px;
    color: #666666;
    line-height: 20px;

    display: none;
  }
`;

const Habito = styled.div`
  box-sizing: border-box;

  width: 340px;
  height: 91px;

  background-color: #ffff;

  border-radius: 5px;

  display: flex;
  flex-direction: column;

  padding: 20px;
  margin-bottom: 10px;
`;

const Texto = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-family: "Lexend Deca";
    font-size: 20px;
    color: #666666;
  }

  img {
    width: 13px;
    height: 15px;
  }
`;

const Dias = styled.div`
  margin-top: 10px;

  button {
    width: 30px;
    height: 30px;

    margin-right: 5px;

    background: #fff;

    border: 1px solid #d4d4d4;
    border-radius: 5px;

    font-family: "Lexend Deca";
    font-size: 20px;
    color: #dbdbdb;
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
