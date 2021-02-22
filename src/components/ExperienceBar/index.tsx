//Styles
import { Container, ExpBar, ExpCurrent } from "./styles";

const ExperienceBar = () => (
  <Container>
    <span>0 xp</span>
    <div>
      <ExpBar width="50%" />
      <ExpCurrent left="50%">300 xp</ExpCurrent>
    </div>
    <span>600 xp</span>
  </Container>
);

export default ExperienceBar;
