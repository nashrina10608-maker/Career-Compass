"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    fetch("/api/fields")
      .then((res) => res.json())
      .then(setFields)
      .catch(console.error);
  }, []);

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Choose Your Field</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {fields.map((f) => (
          <Link
            key={f.name}
            href={`/questions/${encodeURIComponent(f.name)}`}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {f.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
