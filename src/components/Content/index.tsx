import React from "react";

interface IProps {
  response: string;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
  responseComplete: string;
  setResponseComplete: React.Dispatch<React.SetStateAction<string>>;
  respJSON: string;
  isAsking: boolean;
}

const Content = ({
  response,
  setResponse,
  responseComplete,
  setResponseComplete,
  respJSON,
  isAsking,
}: IProps) => {

  const handleValue = () => {
    if (isAsking) return respJSON.slice(0, response.length);
    return respJSON.slice(0, response.length) + response;                 
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(response);
  };

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
