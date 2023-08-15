import React from "react";

interface IProps {
  response: string;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
  responseUser: string;
  setResponseUser: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  respBot: string;
}

const Content = ({
  response,
  setResponse,
  responseUser,
  setResponseUser,
  handleSubmit,
  respBot,
}: IProps) => {

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
        <p className="resp">{respBot.slice(0, response.length)}</p>
      </div>
    </main>
  );
};

export default Content;
