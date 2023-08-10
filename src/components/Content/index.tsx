import React from "react";

const Content = () => {
  return (
    <main>
      <form action="submit">
        <textarea
          name="question"
          id="a"
          className="textarea"
          rows={5}
          maxLength={255}
          placeholder="Digite aqui sua pergunta"
        />
      </form>
    </main>
  );
};

export default Content;
