import React from "react";
import TypeWriter from "../TypeWriter";
import Loading from "../Loading";

interface IProps {
  resposta: string;
  setResposta: React.Dispatch<React.SetStateAction<string>>;
  estaDigitandoResposta: boolean;
  pergunta: string;
  setPergunta: React.Dispatch<React.SetStateAction<string>>;
  agrados: string;
  setEstaDigitandoResposta: React.Dispatch<React.SetStateAction<boolean>>;
  teste: string;
  setTeste: React.Dispatch<React.SetStateAction<string>>;
}

const Content = ({
  setResposta,
  resposta,
  estaDigitandoResposta,
  pergunta,
  setPergunta,
  agrados,
  setEstaDigitandoResposta,
  teste,
  setTeste,
}: IProps) => {
  const [enviarPergunta, setEnviarPergunta] = React.useState(false);
  const [isloading, setIsLoading] = React.useState(false);

  const handleResposta = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (estaDigitandoResposta) {
      setResposta((prev) => prev + e.target.value.slice(-1));
      setTeste(agrados.slice(0, resposta.length));
      return;
    }
    setPergunta((prev) => prev + e.target.value.slice(-1));
  };

  const handleKeyDow = (e: React.KeyboardEvent<HTMLImageElement>) => {
    if (e.key === "Control" && estaDigitandoResposta) {
      setPergunta(agrados.slice(0, resposta.length));
      setEstaDigitandoResposta(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviarPergunta(true);
    setIsLoading(true);
    handleLoading();
  };

  const getRandomNumber = (min: number, max: number): number => {
    if (min >= max) {
      throw new Error("O número inicial deve ser menor que o número final.");
    }
    const randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
  };

  const handleLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, getRandomNumber(1000, 12000));
  };

  return (
    <main onKeyDown={handleKeyDow}>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          rows={5}
          maxLength={100}
          placeholder="Digite aqui sua pergunta"
          value={estaDigitandoResposta ? teste : pergunta}
          onChange={handleResposta}
        />
        <div className="flex flex-row gap-8">
          <button className="btn2" type="button">
            Nova pergunta!
          </button>
          <button className="btn1" type="submit">
            Enviar pergunta!
          </button>
        </div>
        {isloading && <Loading />}
      </form>
      {enviarPergunta && !isloading && (
        <div className="respdiv">
          {resposta && (
            <p className="resp">
              <TypeWriter text={resposta} time={100} />
            </p>
          )}
        </div>
      )}
    </main>
  );
};

export default Content;
