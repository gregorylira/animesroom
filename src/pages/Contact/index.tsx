import { Form } from "../../components/Contact Components/Form";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Contact() {
  return (
    <Container>
      <Header></Header>
      <main>
        <Form></Form>
      </main>
      <Footer></Footer>
    </Container>
  );
}
