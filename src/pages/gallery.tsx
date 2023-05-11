import React from "react";
import Image from "next/image";
import styles from "../style/Image.module.css";
import style from "../style/Header.module.css";
import Navigation from "../components/Navigation";
import styled from "@emotion/styled";
import Navbar from "../components/Navigation";

function Gallery() {
  const images = [
    { url: "/biche.jpg", title: "Image 1" },
    { url: "/loutre.jpg", title: "Image 2" },
    { url: "/mariage.webp", title: "Image 3" },
    { url: "/oiseau.webp", title: "Image 4" },
    { url: "/table.webp", title: "Image 5" },
    { url: "/chateau.jpg", title: "Image 6" },
  ];

  const renderGridTile = (images) => (
    <div
      key={images.url}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: 0,
        paddingTop: "75%",
        borderRadius: "8px",
      }}
    >
      <img
        src={images.url}
        alt={images.title}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          padding: "8px",
          fontSize: "1.2rem",
          fontFamily: "Inter,sans-serif",
          fontWeight: "bold",
          textShadow: "1px 1px #000",
        }}
      >
        {images.title}
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div style={{ padding: "16px" }}>
        <h1 style={{ textAlign: "center" }} className={style.header}>
          Gallery Photo
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {images.map(renderGridTile)}
        </div>
      </div>
    </>
  );
}

export default Gallery;
