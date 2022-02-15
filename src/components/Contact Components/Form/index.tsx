import { useState } from "react";
import { Container, InputForm, Tittle } from "./styles";

interface formProps {
  name: string;
  email: string;
  message: string;
}

const formInitialState: formProps = {
  name: "",
  email: "",
  message: "",
};

export function Form() {
  const [form, setForm] = useState<formProps>(formInitialState);

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(form);
    setForm(formInitialState);
  }

  return (
    <Container>
      <Tittle>
        <h1>Como podemos ajudar?</h1>
        <h3>Mande a sua mensagem!</h3>
      </Tittle>
      <InputForm>
        <form name="contactForm" className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            name="msg"
            placeholder="Digite a sua mensagem"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>

          <input type="submit" value="Enviar" />
        </form>
      </InputForm>
    </Container>
  );
}
