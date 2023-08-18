import React from "react";
import TypeWriter from "../TypeWriter";
import Loading from "../Loading";
import getRandomNumber from "@/utils/getRandomNumber";

interface IProps {
  resposta: string;
  setResposta: React.Dispatch<React.SetStateAction<string>>;
  estaDigitandoResposta: boolean;
  pergunta: string;
  setPergunta: React.Dispatch<React.SetStateAction<string>>;
  agrados: string;
  setEstaDigitandoResposta: React.Dispatch<React.SetStateAction<boolean>>;
  mascara: string;
  setMascara: React.Dispatch<React.SetStateAction<string>>;
  agradosJSON: Array<{ message: string }>;
  setAgrados: React.Dispatch<React.SetStateAction<string>>;
}

const Content = ({
  setResposta,
  resposta,
  estaDigitandoResposta,
  pergunta,
  setPergunta,
  agrados,
  setEstaDigitandoResposta,
  mascara,
  setMascara,
  agradosJSON,
  setAgrados,
}: IProps) => {
  const noResponse = "Não respondo para pessoas estranhas!";
  const [pessoaEstranha, setPessoaEstranha] = React.useState(true);
  const [enviarPergunta, setEnviarPergunta] = React.useState(false);
  const [isloading, setIsLoading] = React.useState(false);

  const handleResposta = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (estaDigitandoResposta && !pessoaEstranha) {
      setResposta((prev) => prev + e.target.value.slice(-1));
      setMascara(agrados.slice(0, resposta.length));
      return;
    }
    setPergunta((prev) => prev + e.target.value.slice(-1));
  };

  const handleKeyDow = (e: React.KeyboardEvent<HTMLImageElement>) => {
    if (e.code === "ControlLeft" && estaDigitandoResposta) {
      setPergunta(agrados.slice(0, resposta.length));
      setEstaDigitandoResposta(false);
    } else if (e.code === "ControlRight") {
      setPessoaEstranha((prev) => !prev);
      setEstaDigitandoResposta((prev) => !prev);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviarPergunta(true);
    setIsLoading(true);
    handleLoading();
  };

  const handleLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, getRandomNumber(1000, 12000));
  };

  const handleNewQuestion = () => {
    setEnviarPergunta(false);
    setPergunta("");
    setResposta("");
    pessoaEstranha
      ? setEstaDigitandoResposta(false)
      : setEstaDigitandoResposta(true);
    setMascara("");
    setAgrados(agradosJSON[getRandomNumber(0, agradosJSON.length)].message);
  };

  return (
    <main onKeyDown={handleKeyDow}>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          rows={5}
          maxLength={100}
          placeholder="Digite aqui sua pergunta"
          value={estaDigitandoResposta ? mascara : pergunta}
          onChange={handleResposta}
        />
        <div className="flex flex-row gap-8">
          <button onClick={handleNewQuestion} className="btn2" type="button">
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
          <p className="resp">
            <TypeWriter
              text={pessoaEstranha ? noResponse : resposta}
              time={120}
            />
          </p>
        </div>
      )}
    </main>
  );
};

export default Content;
