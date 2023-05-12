import React from "react";
import Image from "next/image";
import styles from "../style/Image.module.css";
import style from "../style/Header.module.css";
import Navigation from "../components/Navigation";
import styled from "@emotion/styled";
import Navbar from "../components/Navigation";
import PhotoGallery from "@/components/PhotoCategory";

function GalleryPage() {
  return (
    <>
      <PhotoGallery />
    </>
  );
}

export default GalleryPage;
