import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import style from "../style/Contact.module.css";
import Navbar from "@/components/Navigation";

import { TextField, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  label: {
    textAlign: "start",
    justifyContent: "center",
  },
  customSize: {
    width: "80%",
    height: "50px",
  },
  textField: {
    margin: "0.2rem ",
    width: "120%",
    height: "50px",
    "& input": {
      borderRadius: "0.5rem",
      outline: "transparent",
      "&:focus": {
        border: "1px outlined blue",
      },
    },
  },
});

function EnvoyerButton() {
  const buttonStyle = {
    padding: "8px",
    margin: "0.5rem",
    borderRadius: "0.2rem",
    width: "80%",
    boxShadow: "none", // pour enlever le shadow
  };
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      style={buttonStyle}
      type="submit"
    >
      Envoyer
    </Button>
  );
}

function Contact() {
  const classes = useStyles();
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
          <TextField
            label="Name"
            variant="outlined"
            className={classes.textField}
            classes={{ root: classes.label }}
            inputProps={{ style: { height: "5px" } }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            className={classes.textField}
            classes={{ root: classes.label }}
            inputProps={{ style: { height: "5px" } }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Message"
            variant="outlined"
            className={classes.textField}
            classes={{ root: classes.label }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <EnvoyerButton />
        </form>
      </div>
    </>
  );
}
export default Contact;
