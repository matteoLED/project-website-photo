import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import style from "../style/Contact.module.css";
import Navbar from "@/components/Navigation";
import Contact from "@/components/Contact";

function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}
export default ContactPage;
