import { Container, InputForm, Tittle } from "./styles";

export function Form() {
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(event.target.value);
  }

  return (
    <Container>
      <Tittle>
        <h1>Como podemos ajudar?</h1>
        <h3>Mande a sua mensagem!</h3>
      </Tittle>
      <InputForm>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nome" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="msg" placeholder="Digite a sua mensagem"></textarea>

          <input type="submit" value="Enviar" />
        </form>
      </InputForm>
    </Container>
  );
}
