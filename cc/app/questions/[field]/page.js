"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function FieldPage() {
  const params = useParams();
  const field = decodeURIComponent(params.field); // ✅ Decode spaces in field name

  const [data, setData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  // ✅ Fetch questions for selected field
  useEffect(() => {
    if (!field) return;
    fetch(`/api/questions/${encodeURIComponent(field)}`) // encode for API safety
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error fetching questions:", err));
  }, [field]);

  // ✅ Handle answer selection
  const handleAnswer = (question, option) => {
    setAnswers((prev) => ({ ...prev, [question]: option }));
  };

  // ✅ Submit answers to grade API
  const handleSubmit = async () => {
    const res = await fetch("/api/grade", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ field, answers }),
    });
    const result = await res.json();
    setResult(result);
  };

  if (!data)
    return <div className="p-10 text-center">Loading questions...</div>;

  if (result)
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">{field} Results</h1>
        <p>
          Score: {result.score}/{result.total}
        </p>
        <p>Grade: {result.grade}</p>
        <p className="mt-4">{result.roadmap}</p>
        <a href="/" className="text-blue-600 underline mt-6 block">
          Back to home
        </a>
      </div>
    );

  // ✅ Render quiz questions
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">{field} Quiz</h1>

      {data.questions.map((q, i) => (
        <div key={i} className="mb-6 border p-4 rounded-lg">
          <p className="font-semibold mb-2">{q.question}</p>
          {q.options.map((opt, j) => (
            <label key={j} className="block cursor-pointer">
              <input
                type="radio"
                name={`q-${i}`}
                value={opt}
                onChange={() => handleAnswer(q.question, opt)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}
