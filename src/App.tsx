import styled from "styled-components";
import PlaceList from "./components/PlaceList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <PlaceList />
    </Container>
  );
}
