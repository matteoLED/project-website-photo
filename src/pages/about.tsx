import React from "react";
import { useRouter } from "next/router";
import style from "../style/Header.module.css";
import ImageAsset from "@/components/Image";
import Navbar from "@/components/Navigation";
import About from "@/components/About";

function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}

export default AboutPage;
