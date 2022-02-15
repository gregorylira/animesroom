import { useState } from "react";
import { Container, InputForm, Tittle } from "./styles";
import { db } from "../../../services/firebase";
import { collection, addDoc } from "firebase/firestore";

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
<<<<<<< HEAD
  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log(event.target.value);

    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan",
    });
    console.log("Document written with ID: ", docRef.id);
=======
  const [form, setForm] = useState<formProps>(formInitialState);

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(form);
    setForm(formInitialState);
>>>>>>> 0ad073fddf2991ebce34f75945e3654f36f0e1fa
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
