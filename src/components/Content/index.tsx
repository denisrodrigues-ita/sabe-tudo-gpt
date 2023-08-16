import React from "react";

interface IProps {
  response: string;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
  responseComplete: string;
  setResponseComplete: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  respJSON: string;
  isAsking: boolean;
}

const Content = ({
  response,
  setResponse,
  responseComplete,
  setResponseComplete,
  handleSubmit,
  respJSON,
  isAsking,
}: IProps) => {

  const handleValue = () => {
    return respJSON.slice(0, response.length);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          rows={5}
          maxLength={100}
          placeholder="Digite aqui sua pergunta"
          value={handleValue()}
          onChange={(e) => setResponse(e.target.value)}
        />
        <div className="flex flex-row gap-8">
          <button className="btn bg-sandy-brown" type="button">
            Nova pergunta!
          </button>
          <button className="btn" type="submit">
            Enviar pergunta!
          </button>
        </div>
      </form>
      <div className="respdiv">
        <p className="resp">{responseComplete}</p>
      </div>
    </main>
  );
};

export default Content;
