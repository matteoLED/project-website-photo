import React from "react";
import { useRouter } from "next/router";
import style from "../style/Header.module.css";
import ImageAsset from "@/components/Image";
import Navbar from "@/components/Navigation";

const categories = [
  "Mariage",
  "Grossesse",
  "Bébé",
  "Famille",
  "Baptême",
  "Couple",
];

function CategoryList() {
  return (
    <div className={style.body}>
      <h2>Catégories de photos :</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category} </li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  const tarifs = [
    {
      name: "Juste moi",
      price: "130 euros",
      description: "Séance pour une personne, en extérieur ou en studio",
    },
    {
      name: "Pour deux",
      price: "195 euros",
      description: "Pour deux personnes, en extérieur ou en studio",
    },
    {
      name: "Famille",
      price: "220 euros",
      description:
        "Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio. 30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)",
    },
    {
      name: "Il était une fois",
      price: "160 euros",
      description:
        "Photo de grossesse (À votre domicile, en extérieur ou en studio)",
    },
    {
      name: "Mon bébé",
      price: "100 euros",
      description: "Photo d’enfant jusqu’à 3 ans (photo à domicile)",
    },
    {
      name: "J’immortalise l’événement",
      price: "sur mesure",
      description: "Prestation de mariage ou baptême sur devis",
    },
  ];

  return (
    <>
      <Navbar />
      <CategoryList />
      <div className={style.body}>
        <h2>Tarifs et prestations :</h2>
        <ul>
          {tarifs.map((tarif) => (
            <li key={tarif.name}>
              <h3>{tarif.name}</h3>
              <p>{tarif.description}</p>
              <p>{tarif.price}</p>
            </li>
          ))}
        </ul>
      </div>
      <ImageAsset />
    </>
  );
}

export default About;
