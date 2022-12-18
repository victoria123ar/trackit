import styled from "styled-components";

export default function Header({ urlFoto, usuario }) {
console.log(urlFoto)
console.log(usuario)

  return (
    <Container>
      <p>TrackIt</p>
      <img src={urlFoto} alt={usuario} />
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  max-width: 500px;
  width: 100%;
  height: 70px;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #126ba5;

  padding: 0 20px;

  p {
    font-family: "Playball";
    font-size: 40px;
    color: #ffff;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
