import styles from "../style/Header.module.css";
import Head from "next/head";
import React from "react";
import Navbar from "@/components/Navigation";
import ImageAsset from "@/components/Image";
import Footer from "./Footer";

export default function Header() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-content">
            <Navbar />
            <div className={styles.header1}>
              {" "}
              <h1> Charles Cantin - Photographe</h1> <ImageAsset />
              <p>&copy; 2021 Charles Cantin - Photographe</p>
            </div>
            {/* <Footer/> */}
          </div>
        </section>
      </main>

      {/* <footer className={styles.header}></footer> */}
    </>
  );
}
