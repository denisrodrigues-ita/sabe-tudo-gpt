"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import agrados from "@/json/agrados.json";

const Home = () => {
  const [response, setResponse] = React.useState("");
  const [responseUser, setResponseUser] = React.useState("");
  const [responseBot, setResponseBot] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponseUser(response);
    setResponse("");
  };

  const getRandomNumber = (min: number, max: number): number => {
    if (min >= max) {
      throw new Error("O número inicial deve ser menor que o número final.");
    }
    // Calcula um número aleatório entre min (inclusive) e max (exclusive)
    const randomNumber = Math.random() * (max - min) + min;
    // Arredonda o número para garantir que seja um número inteiro
    return Math.floor(randomNumber);
  };

  console.log(agrados);

  return (
    <>
      <Header />
      <Content
        response={response}
        setResponse={setResponse}
        responseUser={responseUser}
        setResponseUser={setResponseUser}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
};

export default Home;
