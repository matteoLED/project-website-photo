import Image from "next/image";
import styles from "../style/Image.module.css";
import style from "../style/Header.module.css";
import Navigation from "../components/Navigation";
import styled from "@emotion/styled";
import Navbar from "../components/Navigation";

import React, { useState } from "react";

const photos = [
  { id: 1, category: "Mariage", url: "/mariage.webp" },
  { id: 2, category: "Grossesse", url: "/grossesse.webp" },
  { id: 3, category: "Bébé", url: "/bebe.jpg" },
  { id: 4, category: "Famille", url: "/family.jpg" },
  { id: 5, category: "Famille", url: "/famille2.jpg" },
  { id: 6, category: "Baptême", url: "/bapteme.jpg" },
  { id: 7, category: "Couple", url: "/couple.jpg" },
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredPhotos =
    selectedCategory !== "Tous"
      ? photos.filter((photo) => photo.category === selectedCategory)
      : photos;

  return (
    <div className={style.body}>
      <ul
        style={{ display: "flex", listStyle: "none", margin: 0, padding: 10 }}
      >
        <li onClick={() => handleCategorySelect("Tous")}>
          <button className={styles.button}>Tous</button>
        </li>
        <li onClick={() => handleCategorySelect("Mariage")}>
          <button className={styles.button}>Mariage</button>
        </li>
        <li onClick={() => handleCategorySelect("Grossesse")}>
          <button className={styles.button}>Grossesse</button>
        </li>
        <li onClick={() => handleCategorySelect("Bébé")}>
          <button className={styles.button}>Bébé</button>
        </li>
        <li onClick={() => handleCategorySelect("Famille")}>
          <button className={styles.button}>Famille</button>
        </li>
        <li onClick={() => handleCategorySelect("Baptême")}>
          <button className={styles.button}>Baptême</button>
        </li>
        <li onClick={() => handleCategorySelect("Couple")}>
          <button className={styles.button}>Couple</button>
        </li>
      </ul>
      <div className={styles.categoryfilterli}>
        {filteredPhotos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.url}
            alt={photo.category}
            width={300}
            height={300}
          />
        ))}
      </div>
    </div>
  );
}

function PhotoGallery() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "16px" }}>
        <h1 style={{ textAlign: "center" }} className={style.header}>
          Gallery Photo
        </h1>
        <Gallery />
      </div>
    </>
  );
}

export default PhotoGallery;
