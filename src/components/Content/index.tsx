"use client";
import React from "react";

const Content = () => {
  const [response, setResponse] = React.useState("");
  const [responseUser, setResponseUser] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponseUser(response);
    setResponse("");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          rows={5}
          maxLength={255}
          placeholder="Digite aqui sua pergunta"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />
        <button className="btn" type="submit">
          Enviar pergunta!
        </button>
      </form>
      <div className="respdiv">
        <p className="resp">{responseUser}</p>
      </div>
    </main>
  );
};

export default Content;
