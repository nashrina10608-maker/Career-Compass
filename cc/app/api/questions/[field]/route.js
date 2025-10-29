export async function GET(req, context) {
  const { field } = await context.params;
  const data = {
    Engineering: {
      questions: [
        {
          question: "Do you enjoy solving technical problems?",
          options: ["Yes", "No"],
          answer: "Yes",
        },
        {
          question: "Do you like working with machines or technology?",
          options: ["Yes", "No"],
          answer: "Yes",
        },
      ],
      roadmap:
        "Focus on STEM subjects, learn basic coding (Python/C++), explore engineering branches like CS, Mechanical, or Civil.",
    },

    Arts: {
      questions: [
        {
          question: "Do you enjoy expressing yourself through art or writing?",
          options: ["Yes", "No"],
          answer: "Yes",
        },
        {
          question: "Do you appreciate creativity over logic?",
          options: ["Yes", "No"],
          answer: "Yes",
        },
      ],
      roadmap:
        "Explore literature, visual arts, and design. Build a portfolio and join creative workshops.",
    },

    Business: {
      questions: [
        {
          question: "Are you interested in leadership and strategy?",
          options: ["Yes", "No"],
          answer: "Yes",
        },
        {
          question: "Do you enjoy analyzing markets or managing people?",
          options: ["Yes", "No"],
          answer: "Yes",
        },
      ],
      roadmap:
        "Study business fundamentals, economics, and finance. Learn communication and management skills.",
    },

    Medicine: {
      questions: [
        {
          question: "Do you like learning about the human body and health?",
          options: ["Yes", "No"],
          answer: "Yes",
        },
        {
          question: "Do you want to help people through science or care?",
          options: ["Yes", "No"],
          answer: "Yes",
        },
      ],
      roadmap:
        "Study biology and chemistry. Prepare for medical entrance exams and gain experience in healthcare environments.",
    },

    "Computer Science": {
      questions: [
        {
          question: "Do you enjoy solving logical and programming problems?",
          options: ["Yes", "No"],
          answer: "Yes",
        },
        {
          question: "Do you like building apps or exploring AI?",
          options: ["Yes", "No"],
          answer: "Yes",
        },
      ],
      roadmap:
        "Learn programming (Python, C++), explore data structures, algorithms, and AI/ML topics. Build real-world projects.",
    },
  };

  const result = data[field];
  if (!result) {
    return new Response(JSON.stringify({ error: `Field not found: ${field}` }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
}
