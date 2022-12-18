import styled from "styled-components";

export default function Criar() {
  const dias = [
    { id: 0, dia: "D" },
    { id: 1, dia: "S" },
    { id: 2, dia: "T" },
    { id: 3, dia: "Q" },
    { id: 4, dia: "Q" },
    { id: 5, dia: "S" },
    { id: 6, dia: "S" },
  ];

  return (
    <>
      <Botao>
        <p>Meus hábitos</p>
        <button>+</button>
      </Botao>
      <NovoHabito>
      <input placeholder="nome do hábito" type="text" />
        <Dias>
        {dias.map((button) => (
          <Dia key={button.id} type="button" id={button.id}>
            {button.dia}
          </Dia>
        ))}
        </Dias>
        <Botoes>
          <BotaoCancelar>Cancelar</BotaoCancelar>
          <BotaoSalvar>Salvar</BotaoSalvar>
        </Botoes>
      </NovoHabito>
    </>
  );
}

const Botao = styled.div`
  max-width: 340px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;
  margin-bottom: 30px;

  p {
    font-family: "Lexend Deca";
    font-size: 22px;
    color: #126ba5;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 17px 17px 20px 17px;
    width: 40px;
    height: 35px;

    background-color: #52b6ff;
    border: none;
    border-radius: 5px;

    font-family: "Lexend Deca";
    font-size: 28px;
    color: #fff;
  }
`;

const NovoHabito = styled.form`
  box-sizing: border-box;

  width: 340px;
  height: 180px;

  background-color: #ffff;

  border-radius: 5px;

  display: flex;
  flex-direction: column;

  padding: 20px;
  margin-bottom: 30px;

  input {
    box-sizing: border-box;

    width: 303px;
    height: 45px;

    border: 1px solid #d4d4d4;
    border-radius: 5px;

    padding: 0 10px;
  }

  input::placeholder {
    font-family: "Lexend Deca";
    font-size: 20px;
    color: #dbdbdb;
  }
`;

const Dias = styled.div`
margin-top: 10px;
margin-bottom: 20px;

display: flex;
`

const Dia = styled.div`

    width: 30px;
    height: 30px;

    margin-right: 5px;

    background: #fff;

    border: 1px solid #d4d4d4;
    border-radius: 5px;

    font-family: "Lexend Deca";
    font-size: 20px;
    color: #dbdbdb;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Botoes = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BotaoCancelar = styled.button`
  background: #ffff;

  border: none;

  font-family: "Lexend Deca";
  font-size: 16px;
  color: #52b6ff;

  margin-right: 15px;
`;

const BotaoSalvar = styled.button`
  width: 84px;
  height: 35px;

  background: #52b6ff;

  border: none;
  border-radius: 5px;

  font-family: "Lexend Deca";
  font-size: 16px;
  color: #fff;
`;
