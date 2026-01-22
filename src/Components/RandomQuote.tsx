import { useState, useEffect } from "react";

const localQuotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Simplicity is the soul of efficiency.",
  "Make it work, make it right, make it fast.",
  "Software is a great combination between artistry and engineering."
];

export default function RandomQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * localQuotes.length);
    setQuote(localQuotes[randomIndex]);
  }, []);

  return (
    <div className="italic text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
      "{quote}"
    </div>
  );
}