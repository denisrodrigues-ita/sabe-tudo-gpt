"use client";

import React from "react";
import Header from "@/components/Header";
import Content from "@/components/Content";
import agradosJSON from "@/json/agrados.json";
import getRandomNumber from "@/utils/getRandomNumber";

const Home = () => {
  const [agrados, setAgrados] = React.useState("");
  const [resposta, setResposta] = React.useState("");
  const [pergunta, setPergunta] = React.useState("");
  const [estaDigitandoResposta, setEstaDigitandoResposta] =
    React.useState(true);
    const [mascara, setMascara] = React.useState("");

  React.useEffect(() => {
    setAgrados(agradosJSON[indexRandom].message);
  }, []);

  // const getRandomNumber = (min: number, max: number): number => {
  //   if (min >= max) {
  //     throw new Error("O número inicial deve ser menor que o número final.");
  //   }
  //   const randomNumber = Math.random() * (max - min) + min;
  //   return Math.floor(randomNumber);
  // };

  const keys = Object.keys(agradosJSON);

  const indexRandom: number = getRandomNumber(1, keys.length);

  return (
    <>
      <Header />
      <Content
        setResposta={setResposta}
        resposta={resposta}
        estaDigitandoResposta={estaDigitandoResposta}
        pergunta={pergunta}
        setPergunta={setPergunta}
        agrados={agrados}
        setEstaDigitandoResposta={setEstaDigitandoResposta}
        mascara={mascara}
        setMascara={setMascara}
        agradosJSON={agradosJSON}
        setAgrados={setAgrados}
      />
    </>
  );
};

export default Home;
