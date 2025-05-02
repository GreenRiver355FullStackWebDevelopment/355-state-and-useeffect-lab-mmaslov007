import { Card, CardContent, Typography, Box } from "@mui/material";

export default function CardDetail({ pokemon }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        mx: "auto",
        mt: 4,
        backgroundColor: "#ccc",
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ color: "#b59a2a", mb: 2 }}
        >
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Typography>

        <Box
          component="img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          sx={{ mb: 2 }}
        />

        <Typography variant="body2">Height: {pokemon.height}</Typography>
        <Typography variant="body2">Weight: {pokemon.weight}</Typography>
        <Typography variant="body2">
          Type: {pokemon.types.map((t) => t.type.name).join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}
