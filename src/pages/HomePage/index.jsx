import { Typography } from "@mui/material";
import { Container } from "./HomePage.styled";

const HomePage = () => {
  return (
    <main>
      <Container>
        <Typography variant="h1" component="h1"> Welcome!</Typography>
        <Typography variant="h2" component="h2"> You can create your personal Phone book</Typography>
      </Container>
    </main>
  );
};

export default HomePage;
