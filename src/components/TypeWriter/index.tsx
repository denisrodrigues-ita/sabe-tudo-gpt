import React from "react";

interface IProps {
  text: string;
  time: number;
}

const TypeWriter = ({ text, time }: IProps) => {
  const [displayText, setDisplayText] = React.useState("");
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, time);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return <span>{displayText}</span>;
};

export default TypeWriter;
