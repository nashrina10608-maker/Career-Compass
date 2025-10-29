export async function POST(req) {
  try {
    const { field, answers } = await req.json();

    // Define answer keys for grading
    const answerKeys = {
      Engineering: {
        "Do you enjoy solving technical problems?": "Yes",
        "Do you like working with machines or technology?": "Yes",
      },
      Arts: {
        "Do you enjoy drawing or creative expression?": "Yes",
        "Are you interested in history or literature?": "Yes",
      },
      Business: {
        "Do you like managing or leading teams?": "Yes",
        "Are you interested in finance or entrepreneurship?": "Yes",
      },
      Medicine: {
        "Do you like biology and helping people?": "Yes",
        "Are you patient and empathetic?": "Yes",
      },
      "Computer Science": {
        "Do you enjoy solving logical and programming problems?": "Yes",
        "Do you like building apps or exploring AI?": "Yes",
      },
    };

    const roadmap = {
      Engineering:
        "Focus on STEM subjects, learn basic coding (Python/C++), explore engineering branches like CS, Mechanical, Civil.",
      Arts:
        "Develop your creative portfolio, learn about fine arts, literature, and visual design. Explore fields like animation or fashion.",
      Business:
        "Study basic economics, finance, and management. Learn leadership and entrepreneurship through real-world projects.",
      Medicine:
        "Focus on biology and chemistry, volunteer in healthcare, and prepare for medical entrance exams.",
      "Computer Science":
        "Start learning Python or JavaScript, explore AI, web development, and problem-solving on platforms like LeetCode.",
    };

    const correctAnswers = answerKeys[field];
    if (!correctAnswers) {
      return Response.json(
        { error: `No grading data for field: ${field}` },
        { status: 400 }
      );
    }

    // Calculate score
    let score = 0;
    const total = Object.keys(correctAnswers).length;

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
      if (answers[question] === correctAnswer) {
        score++;
      }
    }

    // Grade scale
    const percentage = (score / total) * 100;
    let grade = "Needs Improvement";
    if (percentage >= 80) grade = "Excellent";
    else if (percentage >= 60) grade = "Good";
    else if (percentage >= 40) grade = "Average";

    // Return full response
    return Response.json({
      field,
      score,
      total,
      grade,
      roadmap: roadmap[field],
    });
  } catch (error) {
    console.error("Error grading:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
