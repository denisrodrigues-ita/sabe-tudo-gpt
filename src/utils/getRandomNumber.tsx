const getRandomNumber = (min: number, max: number): number => {
  if (min >= max) {
    throw new Error("O número inicial deve ser menor que o número final.");
  }
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
}; 

export default getRandomNumber;