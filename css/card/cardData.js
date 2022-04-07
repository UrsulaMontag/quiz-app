import CardQuestions from "./card.js";

export default async function CardData(urlAdress) {
  const response = fetch(urlAdress);
  try {
    const response = await fetch(urlAdress);
    const data = await response.json();
    console.log(data);
    return CardQuestions(data.results);
  } catch (error) {
    console.error(`Upps das war ein Fehler: ${error}`);
    return null;
  }
}
