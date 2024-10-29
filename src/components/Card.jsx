import styled from "styled-components";


const Section = styled.section`
  border: 3px solid #00BFFF;
  width: 80vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
     
    padding: 40px;
    margin: 60px;
    border-radius: 8px;
    text-align: center;

  img {
    width: 100%;
    height: auto;
    

  }
`;

export default function Card({ artista, musica, foto, dia }) {
  return (
    
    <Section>
      <h2>
        {artista} - {musica}
      </h2>
      <img src={foto} alt={`Foto do artista ${artista}`} />
      <p>{dia}</p>
    </Section>
  );
}