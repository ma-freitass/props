import Card from "./components/Card";
import GlobalStyle from "./styles/GlobalStyle";


export default function App() {
  return (
    <>
    <GlobalStyle />
      <h1>Playlist da Maiala</h1>
      <Card
        artista="Adele"
        musica="Someone Like you"
        foto="https://i.scdn.co/image/ab67616d0000b2732118bf9b198b05a95ded6300"
        dia="Segunda-Feira"
      />
      <Card
        artista="Luiz Lins"
        musica="A musica mais triste do ano"
        foto="https://i.scdn.co/image/ab6761610000e5eb2f36d1fb614f48cf5122eccc"
        dia="Terça-feira"
      />
      <Card
        artista="Glória Groove"
        musica="Bonekinha"
        foto="https://i.scdn.co/image/ab6761610000e5eb40d903006ac86513ece09120"
        dia="Quarta-feira"
      />
      <Card
        artista="Bruno Mars"
        musica="die with a smile"
        foto="https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd"
        dia="Quinta-feira"
      />
      <Card
        artista="Liniker"
        musica="Caju"
        foto="https://i.scdn.co/image/ab67616d0000b2738eb00294c4856633a918e9ce"
        dia="Sexta-feira"
      />
    </>
  );
}
