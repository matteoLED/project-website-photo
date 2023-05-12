import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import style from "../style/Contact.module.css";
import Navbar from "@/components/Navigation";

const inputStyles = {
  borderRadius: "0.2rem",
  outline: "transparent",
  height: "20px",
  width: "100%",
  padding: "0.5rem",
  border: "1px solid #2a9d8f",

  marginBottom: "1rem",
};

const buttonStyles = {
  backgroundColor: "#2a9d8f",
  color: "white",
  padding: "10px",
  margin: "0.5rem",
  borderRadius: "0.2rem",
  width: "80%",
  boxShadow: "none",
  border: "none",
  cursor: "pointer",
};

function EnvoyerButton() {
  return (
    <button style={buttonStyles} type="submit">
      Envoyer
    </button>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xlekvgeb", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (result.ok) {
      alert("Votre message a été envoyé !");
      router.push("/");
    } else {
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  return (
    <>
      <Navbar />
      <div className={style.container}>
        <header>
          <h1>Contacter - Charles Cantin Photographe</h1>
        </header>
      </div>
      <div className={style.formPostion}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h2 className={style.container}>Formulaire de contact</h2>
          <input
            type="text"
            placeholder="Prénom"
            style={inputStyles}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            style={inputStyles}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className={style.container}
            style={{ ...inputStyles, height: "200px" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <EnvoyerButton />
        </form>
      </div>
    </>
  );
}
export default Contact;
