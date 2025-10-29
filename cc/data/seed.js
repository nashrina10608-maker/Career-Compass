import clientPromise from "../lib/mongodb.js";

const fields = [
  {
    name: "Engineering",
    questions: [
      {
        question: "What is Ohm’s Law?",
        options: [
          "V = IR",
          "F = ma",
          "E = mc^2",
          "P = VI"
        ],
        correctAnswer: "V = IR",
      },
      {
        question: "Which programming language is most used for embedded systems?",
        options: ["Python", "C", "Java", "Ruby"],
        correctAnswer: "C",
      },
      {
        question: "What does CAD stand for?",
        options: [
          "Computer-Aided Design",
          "Central Axis Diagram",
          "Computer Algorithm Device",
          "Control and Design"
        ],
        correctAnswer: "Computer-Aided Design",
      },
    ],
    roadmap: "Start with math & physics fundamentals → learn programming (C/C++) → specialize in electronics, mechanical, or software → build real-world projects → take internships → pursue advanced degrees or certifications.",
  },

  {
    name: "Medicine",
    questions: [
      {
        question: "Which organ purifies blood in the human body?",
        options: ["Heart", "Liver", "Kidney", "Lungs"],
        correctAnswer: "Kidney",
      },
      {
        question: "What is the basic structural unit of life?",
        options: ["Tissue", "Organ", "Cell", "Atom"],
        correctAnswer: "Cell",
      },
      {
        question: "Which vitamin helps in blood clotting?",
        options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
        correctAnswer: "Vitamin K",
      },
    ],
    roadmap: "Study biology and chemistry → prepare for NEET/MCAT → pursue MBBS → specialize (MD/MS) → practice or research → continue lifelong learning.",
  },

  {
    name: "Business",
    questions: [
      {
        question: "What does ROI stand for?",
        options: ["Return on Investment", "Rate of Interest", "Revenue on Income", "Range of Industry"],
        correctAnswer: "Return on Investment",
      },
      {
        question: "Which statement shows company profitability?",
        options: ["Balance Sheet", "Cash Flow Statement", "Income Statement", "Budget Report"],
        correctAnswer: "Income Statement",
      },
      {
        question: "What is market segmentation?",
        options: [
          "Dividing a market into distinct groups",
          "Increasing product prices",
          "Selling in bulk",
          "Acquiring competitors"
        ],
        correctAnswer: "Dividing a market into distinct groups",
      },
    ],
    roadmap: "Understand economics → learn accounting, finance, and marketing → build networking skills → pursue MBA or start a venture → keep up with business trends.",
  },

  {
    name: "Arts",
    questions: [
      {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Van Gogh"],
        correctAnswer: "Leonardo da Vinci",
      },
      {
        question: "What is the primary color combination?",
        options: ["Red, Yellow, Blue", "Green, Orange, Purple", "Black, White, Grey", "Red, Green, Blue"],
        correctAnswer: "Red, Yellow, Blue",
      },
      {
        question: "Which art movement is Pablo Picasso associated with?",
        options: ["Impressionism", "Cubism", "Surrealism", "Modernism"],
        correctAnswer: "Cubism",
      },
    ],
    roadmap: "Master drawing and design → study art history → build a portfolio → experiment with digital tools → showcase online → attend exhibitions.",
  },

  {
    name: "Computer Science",
    questions: [
      {
        question: "Which of these is a programming language?",
        options: ["HTML", "Python", "SQL", "CSS"],
        correctAnswer: "Python",
      },
      {
        question: "What does OOP stand for?",
        options: ["Object-Oriented Programming", "Operational Output Processing", "Ordered Object Process", "Output-Oriented Programming"],
        correctAnswer: "Object-Oriented Programming",
      },
      {
        question: "Which data structure uses FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        correctAnswer: "Queue",
      },
    ],
    roadmap: "Learn programming basics → master data structures & algorithms → explore web or AI → contribute to open source → build real-world projects → apply for internships.",
  },
];

async function seedDatabase() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    await db.collection("fields").deleteMany({});
    await db.collection("fields").insertMany(fields);

    console.log("✅ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
