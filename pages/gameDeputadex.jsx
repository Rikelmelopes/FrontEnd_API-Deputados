import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Pagina from "../components/Pagina";

const HealthBar = ({ value }) => {
  return (
    <ProgressBar
      now={value}
      label={`${value}%`}
      variant={value > 50 ? "success" : "danger"}
    />
  );
};

const MAX_HEALTH = 100; // Valor máximo da vida dos Pokémon

const App = () => {
  const [pokemon1Health, setPokemon1Health] = useState(MAX_HEALTH);
  const [pokemon2Health, setPokemon2Health] = useState(MAX_HEALTH);
  const [attacks] = useState([
    { name: "Ataque 1", damage: 20 },
    { name: "Ataque 2", damage: 30 },
    { name: "Ataque 3", damage: 40 },
  ]);
  const [message, setMessage] = useState("");
  const [deputyPhoto, setDeputyPhoto] = useState(null);

  useEffect(() => {
    const fetchDeputyPhoto = async () => {
      try {
        const response = await fetch(
          "https://dadosabertos.camara.leg.br/api/v2/deputados/178957/fotos"
        );
        const data = await response.json();
        const photoUrl = data.dados[0].url;
        setDeputyPhoto(photoUrl);
      } catch (error) {
        console.error("Erro ao obter a foto do deputado:", error);
      }
    };

    fetchDeputyPhoto();
  }, []);

  const attackPokemon = (damage) => {
    setPokemon2Health((prevHealth) => prevHealth - damage); // Diminui a vida do Pokémon 2 com base no dano do ataque

    if (pokemon2Health - damage <= 0) {
      setPokemon2Health(MAX_HEALTH); // Reinicia a vida do Pokémon 2 para o valor máximo
      setMessage("Você venceu!"); // Exibe mensagem de vitória
      return;
    }

    // Jogada do computador
    const randomAttackIndex = Math.floor(Math.random() * attacks.length);
    const computerDamage = attacks[randomAttackIndex].damage;
    setPokemon1Health((prevHealth) => prevHealth - computerDamage);

    if (pokemon1Health - computerDamage <= 0) {
      setPokemon1Health(MAX_HEALTH); // Reinicia a vida do Pokémon 1 para o valor máximo
      setMessage("Você perdeu!"); // Exibe mensagem de derrota
      return;
    }

    setMessage(""); // Limpa a mensagem
  };

  const handleAttack = (damage) => {
    if (message) {
      // Se houver uma mensagem, exibe-a em um alerta
      setMessage("");
      alert(message);
    } else {
      attackPokemon(damage);
    }
  };

  const handleReset = () => {
    setPokemon1Health(MAX_HEALTH);
    setPokemon2Health(MAX_HEALTH);
    setMessage("");
  };

  return (
    <Pagina>
      {deputyPhoto && (
        <img
          src={deputyPhoto}
          alt="Foto do Deputado"
          style={{ width: "200px", marginBottom: "20px" }}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "400px",
          marginBottom: "20px",
        }}
      >
        <div style={{ width: "45%", marginRight: "10px" }}>
          <h4>Seu Pokémon</h4>
          <HealthBar value={pokemon1Health} />
        </div>
        <div style={{ width: "45%", marginLeft: "10px" }}>
          <h4>Inimigo</h4>
          <HealthBar value={pokemon2Health} />
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Button
          onClick={() => handleAttack(attacks[0].damage)}
          variant={message ? "secondary" : "primary"} // Destaca o botão se houver uma mensagem
        >
          {attacks[0].name}
        </Button>
        <Button
          onClick={() => handleAttack(attacks[1].damage)}
          variant={message ? "secondary" : "primary"} // Destaca o botão se houver uma mensagem
        >
          {attacks[1].name}
        </Button>
        <Button
          onClick={() => handleAttack(attacks[2].damage)}
          variant={message ? "secondary" : "primary"} // Destaca o botão se houver uma mensagem
        >
          {attacks[2].name}
        </Button>
      </div>
      {message && (
        <>
          <p>{message}</p>
          <Button onClick={handleReset} variant="primary">
            Reiniciar
          </Button>
        </>
      )}
    </Pagina>
  );
};

export default App;
