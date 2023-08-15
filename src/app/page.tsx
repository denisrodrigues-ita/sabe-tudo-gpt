"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import agrados from "@/json/agrados.json";

interface IAgrados {
  [key: string]: string;
}

const Home = () => {
  const [response, setResponse] = React.useState("");
  const [responseUser, setResponseUser] = React.useState("");
  const [respBot, setRespBot] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponseUser(response);
    setResponse("");
  };

  const getRandomNumber = (min: number, max: number): number => {
    if (min >= max) {
      throw new Error("O número inicial deve ser menor que o número final.");
    }
    const randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
  };

  const keys = Object.keys(agrados) as Array<keyof IAgrados>;

  const indexRandom: number = getRandomNumber(1, keys.length);

  React.useEffect(() => {
    setRespBot(agrados[indexRandom].message);
  }, []);

  return (
    <>
      <Header />
      <Content
        response={response}
        setResponse={setResponse}
        responseUser={responseUser}
        setResponseUser={setResponseUser}
        handleSubmit={handleSubmit}
        respBot={respBot}
      />
      <Footer />
    </>
  );
};

export default Home;
