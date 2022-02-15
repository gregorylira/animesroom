import { Container, InputForm, Tittle } from "./styles";
import { db } from "../../../services/firebase";
import { collection, addDoc } from "firebase/firestore";

export function Form() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log(event.target.value);

    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan",
    });
    console.log("Document written with ID: ", docRef.id);
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
