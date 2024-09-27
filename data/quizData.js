const quizData = [
  {
    id: 1,
    question: "Which planet is known as the 'Red Planet'?",
    options: [
      { answer: "Venus", isCorrect: false },
      { answer: "Mars", isCorrect: true },
      { answer: "Jupiter", isCorrect: false },
      { answer: "Saturn", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Who painted the Mona Lisa?",
    options: [
      { answer: "Vincent van Gogh", isCorrect: false },
      { answer: "Leonardo da Vinci", isCorrect: true },
      { answer: "Pablo Picasso", isCorrect: false },
      { answer: "Michelangelo", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "What is the chemical symbol for water?",
    options: [
      { answer: "Wo", isCorrect: false },
      { answer: "Wa", isCorrect: false },
      { answer: "H2O", isCorrect: true },
      { answer: "H2", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Which planet is closest to the Sun?",
    options: [
      { answer: "Mars", isCorrect: false },
      { answer: "Earth", isCorrect: false },
      { answer: "Mercury", isCorrect: true },
      { answer: "Venus", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "What is the tallest mammal in the world?",
    options: [
      { answer: "Elephant", isCorrect: false },
      { answer: "Giraffe", isCorrect: true },
      { answer: "Rhino", isCorrect: false },
      { answer: "Hippopotamus", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      { answer: "William Shakespeare", isCorrect: true },
      { answer: "Jane Austen", isCorrect: false },
      { answer: "Charles Dickens", isCorrect: false },
      { answer: "Mark Twain", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "What is the chemical symbol for gold?",
    options: [
      { answer: "Au", isCorrect: true },
      { answer: "Ag", isCorrect: false },
      { answer: "Gd", isCorrect: false },
      { answer: "Gl", isCorrect: false },
    ],
  },
  {
    id: 8,
    question: "What is the largest mammal in the world?",
    options: [
      { answer: "Blue Whale", isCorrect: true },
      { answer: "African Elephant", isCorrect: false },
      { answer: "Hippopotamus", isCorrect: false },
      { answer: "Giraffe", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "What is the tallest mountain in the world?",
    options: [
      { answer: "Mount Kilimanjaro", isCorrect: false },
      { answer: "Mount Everest", isCorrect: true },
      { answer: "K2", isCorrect: false },
      { answer: "Mount Fuji", isCorrect: false },
    ],
  },
  {
    id: 10,
    question:
      "Which scientist is credited with discovering the process of electromagnetism?",
    options: [
      { answer: "Isaac Newton", isCorrect: false },
      { answer: "James Clerk Maxwell", isCorrect: false },
      { answer: "Michael Faraday", isCorrect: true },
      { answer: "Albert Einstein", isCorrect: false },
    ],
  },
  {
    id: 11,
    question: "Which of these is NOT a noble gas?",
    options: [
      { answer: "Helium", isCorrect: false },
      { answer: "Neon", isCorrect: false },
      { answer: "Argon", isCorrect: false },
      { answer: "Nitrogene", isCorrect: true },
    ],
  },
  {
    id: 12,
    question: "What is the largest organ in the human body by surface area?",
    options: [
      { answer: "Liver", isCorrect: false },
      { answer: "Skin", isCorrect: true },
      { answer: "Lungs", isCorrect: false },
      { answer: "Large intestine", isCorrect: false },
    ],
  },
  {
    id: 13,
    question:
      "In Greek mythology, who is the god/goddess of wisdom and warfare?",
    options: [
      { answer: "Aphrodite", isCorrect: false },
      { answer: "Hera", isCorrect: false },
      { answer: "Athena", isCorrect: true },
      { answer: "Artemis", isCorrect: false },
    ],
  },
  {
    id: 14,
    question: "Which composer is famous for his 'Moonlight Sonata'?",
    options: [
      { answer: "Wolfgang Amadeus Mozart", isCorrect: false },
      { answer: "Ludwig van Beethoven", isCorrect: true },
      { answer: "Johann Sebastian Bach", isCorrect: false },
      { answer: "Franz Schubert", isCorrect: false },
    ],
  },
  {
    id: 15,
    question: "What is the chemical symbol for the element silver?",
    options: [
      { answer: "Si", isCorrect: false },
      { answer: "Ag", isCorrect: true },
      { answer: "Sn", isCorrect: false },
      { answer: "Au", isCorrect: false },
    ],
  },
  {
    id: 16,
    question: "Which planet in our solar system has the most moons?",
    options: [
      { answer: "Jupiter", isCorrect: true },
      { answer: "Saturn", isCorrect: false },
      { answer: "Uranus", isCorrect: false },
      { answer: "Neptune", isCorrect: false },
    ],
  },
  {
    id: 17,
    question: "Who was the first woman to win a Nobel Prize?",
    options: [
      { answer: "Marie Curie", isCorrect: true },
      { answer: "Rosalind Franklin", isCorrect: false },
      { answer: "Dorothy Crowfoot Hodgkin", isCorrect: false },
      { answer: "Gerty Cori", isCorrect: false },
    ],
  },
  {
    id: 18,
    question: "Which of these animals does NOT lay eggs?",
    options: [
      { answer: "Platypus", isCorrect: false },
      { answer: "Komodo dragon", isCorrect: false },
      { answer: "Seahorse", isCorrect: true },
      { answer: "Platypus", isCorrect: false },
    ],
  },
  {
    id: 19,
    question:
      "What is the longest river in the world by discharge and drainage area?",
    options: [
      { answer: "Amazon River", isCorrect: true },
      { answer: "Nile River", isCorrect: false },
      { answer: "Yangtze River", isCorrect: false },
      { answer: "Mississippi River", isCorrect: false },
    ],
  },

  {
    id: 20,
    question: "What is the capital of France?",
    options: [
      { answer: "London", isCorrect: false },
      { answer: "Berlin", isCorrect: false },
      { answer: "Paris", isCorrect: true },
      { answer: "Rome", isCorrect: false },
    ],
  },
];

export default quizData;
