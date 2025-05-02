import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import CardDetail from "./components/CardDetail.jsx";

import { Box, Container, Typography, Button } from "@mui/material";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState(null);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      const { results } = await res.json();
      setPokemons(results);
      setSelected(null);
    })();
  }, [offset]);

  const handleNext = () => setOffset((o) => o + limit);
  const handleBack = () => setOffset((o) => Math.max(0, o - limit));

  const handleSelect = (pokemon) => {
    setSelected(pokemon);
  };

  return (
    <Box
      className="app"
      sx={{
        backgroundColor: "#d40000",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "white", mb: 3 }}>
          Pokémon List
        </Typography>

        <Cards pokemons={pokemons} onSelect={handleSelect} />

        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            onClick={handleBack}
            sx={{
              backgroundColor: "#555",
              color: "#ccc",
              "&:hover": { backgroundColor: "#666" },
            }}
            disabled={offset === 0}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              backgroundColor: "#ffd700",
              color: "#000",
              "&:hover": { backgroundColor: "#ffdc2f" },
            }}
          >
            Next
          </Button>
        </Box>

        {selected && <CardDetail pokemon={selected} />}
      </Container>
    </Box>
  );
}
