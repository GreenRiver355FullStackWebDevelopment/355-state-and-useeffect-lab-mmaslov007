import { Box, Button } from "@mui/material";

export default function Cards({ pokemons, onSelect }) {
  return (
    <Box component="section" className="cards-container">
      {pokemons.map((p) => (
        <Button
          key={p.name}
          className="pokemon-button"
          onClick={async () => {
            const res = await fetch(p.url);
            const data = await res.json();
            onSelect(data);
          }}
        >
          {p.name}
        </Button>
      ))}
    </Box>
  );
}
