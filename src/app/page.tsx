"use client";

import React from "react";
import Header from "@/components/Header";
import Content from "@/components/Content";
import agrados from "@/json/agrados.json";

const Home = () => {
  const [response, setResponse] = React.useState("");
  const [responseComplete, setResponseComplete] = React.useState("");
  const [respJSON, setRespJSON] = React.useState("");
  const [isAsking, setIsAsking] = React.useState(true);

  React.useEffect(() => {
    setResponseComplete((prev) => prev + response.slice(-1));
  }, [response]);

  React.useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAsking]);

  React.useEffect(() => {
    setRespJSON(agrados[indexRandom].message);
  }, []);

  const getRandomNumber = (min: number, max: number): number => {
    if (min >= max) {
      throw new Error("O número inicial deve ser menor que o número final.");
    }
    const randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
  };

  const keys = Object.keys(agrados);

  const indexRandom: number = getRandomNumber(1, keys.length);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey) {
      setIsAsking(false);
      setResponse;
      event.stopPropagation();
    }
  };

  return (
    <>
      <Header />
      <Content
        response={response}
        setResponse={setResponse}
        responseComplete={responseComplete}
        setResponseComplete={setResponseComplete}
        respJSON={respJSON}
        isAsking={isAsking}
      />
    </>
  );
};

export default Home;
