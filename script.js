// Define the questions array globally or ensure it's loaded before other scripts
const questions = [
  {
    "question": "এপিগ্রাফি (Epigraphy) বলতে কী বোঝায়?",
    "options": [
      "(a) মুদ্রা অধ্যয়ন",
      "(b) কঙ্কাল অধ্যয়ন",
      "(c) শিলালিপি অধ্যয়ন",
      "(d) মানচিত্র অধ্যয়ন"
    ],
    "answer": "(c)",
    "explanation": "Numismatics - মুদ্রা অধ্যয়ন। Osteology - কঙ্কালের অধ্যয়ন। Cartography - মানচিত্র অধ্যয়ন।"
  },
  {
    "question": "কালিদাসের নীচের কোন কাজটি শিব ও দেবী পার্বতীর পুত্র কার্তিকেয়ের জন্মের প্রেক্ষাপটের উপর ভিত্তি করে তৈরি?",
    "options": [
      "(a) মেঘদূত",
      "(b) রঘুবংসা",
      "(c) কুমারসম্ভব",
      "(d) ঋতুসমার"
    ],
    "answer": "(c)",
    "explanation": "কুমারসম্ভবম কাব্যের মূল বিষয়বস্তু তারকাসুর (হিন্দু পুরাণে একজন শক্তিশালী অসুর) বধের নিমিত্ত শিব ও পার্বতীর পুত্ররূপে কার্তিকেয়ের (যুদ্ধের ঈশ্বরের জন্ম) জন্মবিবরণ। কুমারসম্ভবম কাব্যের মূল কাহিনিটি রামায়ণ, মহাভারত, মৎস্যপুরাণ, ব্রহ্মাপুরাণ, সৌরপুরাণ, কালিকাপুরাণ ও শিবপুরাণ থেকে গৃহীত।"
  },
  {
    "question": "সংস্কৃত ব্যাকরণের বিকাশ শুরু হয় পাণিনির সাথে, তাঁর _____ গ্রন্থের মাধ্যমে।",
    "options": [
      "(a) অষ্টাধ্যায়ী",
      "(b) মহাভাষ্য",
      "(c) যাজ্ঞবল্ক্য স্মৃতি",
      "(d) মুগ্ধবোধ"
    ],
    "answer": "(a)",
    "explanation": "পাণিনি ছিলেন একজন প্রাচীন সংস্কৃত ব্যাকরণবিদ, যিনি প্রায় খ্রিস্টপূর্ব চতুর্থ শতাব্দীতে বর্তমান ভারতের উত্তর-পশ্চিম অঞ্চলের গান্ধার রাজ্যের পুষ্কলাবতী শহরে বসবাস করতেন। তিনি তাঁর অষ্টাধ্যায়ী নামক সংস্কৃত ব্যাকরণ গ্রন্থের জন্য বিখ্যাত। এই গ্রন্থে তিনি সংস্কৃত ভাষার সম্পূর্ণ ব্যাকরণকে সূত্রাকারে লিপিবদ্ধ করেছেন।"
  },
  {
    "question": "কোন প্রাচীন ভারতীয় লিপিতে ডান দিক থেকে বাম দিকে লেখা হয়?",
    "options": [
      "(a) ব্রাহ্মী",
      "(b) খরষ্ঠী",
      "(c) সারদা",
      "(d) নন্দনাগরী"
    ],
    "answer": "(b)",
    "explanation": "খরোষ্ঠী লিপি খ্রিস্টপূর্ব চতুর্থ শতাব্দী থেকে খ্রিস্টীয় তৃতীয় শতাব্দীর মধ্যে ভারতীয় উপমহাদেশে ব্যবহৃত হয়েছিল। এটি ডানদিক থেকে বাম দিকে লেখা হতো এবং গান্ধার অঞ্চলের ভাষা লেখার জন্য ব্যবহৃত হতো।"
  },
  {
    "question": "নালন্দা বিশ্ববিদ্যালয় কোন রাজ্যে অবস্থিত ছিল?",
    "options": [
      "(a) বিহার",
      "(b) উত্তরপ্রদেশ",
      "(c) পশ্চিমবঙ্গ",
      "(d) ওড়িশা"
    ],
    "answer": "(a)",
    "explanation": "নালন্দা বিশ্ববিদ্যালয় প্রাচীন ভারতের মগধ রাজ্যে (বর্তমান বিহার) অবস্থিত একটি বিখ্যাত বৌদ্ধ বিহার এবং শিক্ষাকেন্দ্র ছিল। এটি গুপ্ত সাম্রাজ্যের সময় প্রতিষ্ঠিত হয়েছিল এবং বিশ্বের প্রাচীনতম বিশ্ববিদ্যালয়গুলোর মধ্যে অন্যতম।"
  },
  {
    "question": "মৌর্য সাম্রাজ্যের প্রতিষ্ঠাতা কে ছিলেন?",
    "options": [
      "(a) অশোক",
      "(b) চন্দ্রগুপ্ত মৌর্য",
      "(c) বিন্দুসার",
      "(d) দশরথ"
    ],
    "answer": "(b)",
    "explanation": "চন্দ্রগুপ্ত মৌর্য ছিলেন মৌর্য সাম্রাজ্যের প্রতিষ্ঠাতা। তিনি আলেকজান্ডার দ্য গ্রেটের আক্রমণের পর মগধে তার ক্ষমতা প্রতিষ্ঠা করেন এবং নন্দ রাজবংশকে উৎখাত করে মৌর্য সাম্রাজ্য স্থাপন করেন।"
  },
  {
    "question": "সিন্ধু সভ্যতার প্রধান বৈশিষ্ট্য কী ছিল?",
    "options": [
      "(a) গ্রামীণ জীবনযাপন",
      "(b) নগর পরিকল্পনা",
      "(c) লোহার ব্যবহার",
      "(d) সাম্রাজ্য বিস্তার"
    ],
    "answer": "(b)",
    "explanation": "সিন্ধু সভ্যতার সবচেয়ে উল্লেখযোগ্য বৈশিষ্ট্য ছিল এর উন্নত নগর পরিকল্পনা। হরপ্পা ও মহেঞ্জোদারোর মতো শহরগুলো সুপরিকল্পিত রাস্তাঘাট, পয়ঃনিষ্কাশন ব্যবস্থা এবং দুর্গযুক্ত কাঠামোর জন্য বিখ্যাত ছিল।"
  },
  {
    "question": "বৌদ্ধ ধর্ম কে প্রতিষ্ঠা করেন?",
    "options": [
      "(a) মহাবীর",
      "(b) গুরু নানক",
      "(c) গৌতম বুদ্ধ",
      "(d) আদিনাথ"
    ],
    "answer": "(c)",
    "explanation": "বৌদ্ধ ধর্মের প্রতিষ্ঠাতা ছিলেন সিদ্ধার্থ গৌতম, যিনি 'বুদ্ধ' নামে পরিচিত। তিনি খ্রিস্টপূর্ব ষষ্ঠ শতাব্দীতে ভারতে জন্মগ্রহণ করেন এবং আধ্যাত্মিক জ্ঞান লাভের পর তার শিক্ষা প্রচার করেন।"
  },
  {
    "question": "গুপ্ত সাম্রাজ্যের সময়কালে ভারতে কোন বিদেশী পর্যটক এসেছিলেন?",
    "options": [
      "(a) ফা-হিয়েন",
      "(b) হিউয়েন সাং",
      "(c) ইবনে বতুতা",
      "(d) মেগাস্থিনিস"
    ],
    "answer": "(a)",
    "explanation": "ফা-হিয়েন ছিলেন একজন চীনা বৌদ্ধ ভিক্ষু যিনি চতুর্থ শতাব্দীর শেষের দিকে এবং পঞ্চম শতাব্দীর শুরুতে ভারত ভ্রমণ করেন। তিনি গুপ্ত সাম্রাজ্যের সময় চন্দ্রগুপ্ত দ্বিতীয়ের শাসনামলে ভারতে আসেন।"
  },
  {
    "question": "বেদ কয়টি?",
    "options": [
      "(a) 2",
      "(b) 3",
      "(c) 4",
      "(d) 5"
    ],
    "answer": "(c)",
    "explanation": "বেদ চারটি: ঋগ্বেদ, সামবেদ, যজুর্বেদ, এবং অথর্ববেদ।"
  }
];

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null); // Stores selected option index
let markedForReview = new Array(questions.length).fill(false);
// 0: unattempted (red), 1: attempted (green), 2: marked for review (yellow), 3: attempted & marked (green with red star)
let questionStates = new Array(questions.length).fill(0); // Initialize all questions as unattempted (0)

let timeLeft = 30 * 60; // 30 minutes in seconds
let timerInterval;

const questionNumberElement = document.querySelector('.question-area .question-number');
const questionTextElement = document.querySelector('.question-area .question-text');
const optionsArea = document.querySelector('.options-area');
const timeElement = document.getElementById('time');

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button'); // Corrected
const clearResponseButton = document.querySelector('.clear-response-button');
const markForReviewButton = document.querySelector('.mark-for-review-button');
const submitButton = document.querySelector('.submit-button');

const reviewArea = document.querySelector('.review-area');
const questionGridContainer = document.querySelector('.question-grid');
const testContainer = document.querySelector('.test-container');
const resultArea = document.querySelector('.result-area');
const scoreElement = document.getElementById('score');
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const unattemptedCountElement = document.getElementById('unattempted-count');
const reviewQuestionsContainer = document.getElementById('review-questions');


function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionNumberElement.textContent = `প্রশ্ন ${currentQuestionIndex + 1}`;
    questionTextElement.textContent = question.question;
    optionsArea.innerHTML = ''; // Clear previous options

    question.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = optionText;
        button.addEventListener('click', () => selectOption(index));

        // Highlight selected option if exists
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }
        optionsArea.appendChild(button);
    });

    updateNavigationButtons();
    updateMarkForReviewButton();
    updateQuestionGrid(); // Update grid on question load
}

function selectOption(selectedIndex) {
    userAnswers[currentQuestionIndex] = selectedIndex;
    // Mark as attempted (state 1) if not already marked for review (state 2 or 3)
    if (questionStates[currentQuestionIndex] !== 2 && questionStates[currentQuestionIndex] !== 3) {
        questionStates[currentQuestionIndex] = 1; // attempted (green)
    } else if (questionStates[currentQuestionIndex] === 2) {
        // If it was marked for review and now answered, it becomes attempted & marked
        questionStates[currentQuestionIndex] = 3;
    }

    // Update UI for options
    const options = optionsArea.querySelectorAll('.option');
    options.forEach((button, index) => {
        button.classList.remove('selected');
        if (index === selectedIndex) {
            button.classList.add('selected');
        }
    });
    updateQuestionGrid(); // Update grid
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function clearResponse() {
    userAnswers[currentQuestionIndex] = null;
    // If it was attempted, set back to unattempted (0)
    // If it was marked for review, keep it marked for review (2)
    if (questionStates[currentQuestionIndex] === 1 || questionStates[currentQuestionIndex] === 3) {
        questionStates[currentQuestionIndex] = markedForReview[currentQuestionIndex] ? 2 : 0;
    }

    // Update UI for options
    const options = optionsArea.querySelectorAll('.option');
    options.forEach(button => button.classList.remove('selected'));
    updateQuestionGrid(); // Update grid
}

function toggleMarkForReview() {
    markedForReview[currentQuestionIndex] = !markedForReview[currentQuestionIndex];

    if (markedForReview[currentQuestionIndex]) {
        // If marked:
        if (userAnswers[currentQuestionIndex] !== null) {
            questionStates[currentQuestionIndex] = 3; // Attempted & Marked (green with red star)
        } else {
            questionStates[currentQuestionIndex] = 2; // Marked for review (yellow)
        }
    } else {
        // If unmarked:
        if (userAnswers[currentQuestionIndex] !== null) {
            questionStates[currentQuestionIndex] = 1; // Attempted (green)
        } else {
            questionStates[currentQuestionIndex] = 0; // Unattempted (red)
        }
    }
    updateMarkForReviewButton();
    updateQuestionGrid(); // Update grid
}

function updateNavigationButtons() {
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === questions.length - 1;
}

function updateMarkForReviewButton() {
    if (markedForReview[currentQuestionIndex]) {
        markForReviewButton.textContent = "Unmark for Review";
        markForReviewButton.style.backgroundColor = '#dc3545'; // Red
        markForReviewButton.style.borderColor = '#dc3545';
    } else {
        markForReviewButton.textContent = "Mark for Review";
        markForReviewButton.style.backgroundColor = '#17a2b8'; // Turquoise
        markForReviewButton.style.borderColor = '#17a2b8';
    }
}

function updateQuestionGrid() {
    const gridButtons = questionGridContainer.querySelectorAll('.grid-button');
    gridButtons.forEach((button, index) => {
        button.classList.remove('unattempted', 'attempted', 'marked-for-review', 'current-question');
        button.innerHTML = index + 1; // Reset innerHTML to just number

        // Set colors based on state
        if (questionStates[index] === 0) {
            button.classList.add('unattempted'); // Red
        } else if (questionStates[index] === 1) {
            button.classList.add('attempted'); // Green
        } else if (questionStates[index] === 2) {
            button.classList.add('marked-for-review'); // Yellow
        } else if (questionStates[index] === 3) {
            button.classList.add('attempted'); // Green
            button.innerHTML += '<span style="color: red; position: relative; top: -5px; font-size: 0.8em;">*</span>'; // Add red star
        }

        // Highlight current question
        if (index === currentQuestionIndex) {
            button.classList.add('current-question');
        }
    });
}


function startTimer() {
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitTest();
        }
        timeLeft--;
    }, 1000);
}

function submitTest() {
    clearInterval(timerInterval); // Stop the timer
    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;

    reviewQuestionsContainer.innerHTML = ''; // Clear previous review items

    questions.forEach((question, index) => {
        const userAnswerIndex = userAnswers[index];
        const correctAnswer = question.answer; // e.g., "(c)"
        const correctAnswerOption = question.options.find(opt => opt.startsWith(correctAnswer)); // e.g., "(c) শিলালিপি অধ্যয়ন"

        let isCorrect = false;
        let userAnswerText = 'N/A';
        let userAnswerClass = 'unattempted-text'; // Default to unattempted text color

        if (userAnswerIndex !== null) {
            userAnswerText = question.options[userAnswerIndex];
            if (userAnswerText.startsWith(correctAnswer)) {
                isCorrect = true;
                correctCount++;
                score += 1; // Assuming 1 point per correct answer
                userAnswerClass = 'correct-text';
            } else {
                wrongCount++;
                userAnswerClass = 'wrong-text';
            }
        } else {
            unattemptedCount++;
        }

        const div = document.createElement('div');
        div.classList.add('review-item');
        if (isCorrect) {
            div.classList.add('correct-answer-review');
        } else if (userAnswerIndex !== null) {
            div.classList.add('wrong-answer-review');
        } else {
            div.classList.add('unattempted-answer-review');
        }

        // Status text for review area
        let statusText = '';
        if (questionStates[index] === 1) { // Attempted (green)
            statusText = '<span style="color: green;">Attempted</span>';
        } else if (questionStates[index] === 2) { // Marked for review (yellow)
            statusText = '<span style="color: orange;">Marked for Review</span>';
        } else if (questionStates[index] === 3) { // Attempted & Marked (green with red star)
            statusText = '<span style="color: green;">Attempted</span><span style="color: red; margin-left: 5px;">*</span>';
        } else { // Unattempted (red)
            statusText = '<span style="color: red;">Unattempted</span>';
        }


        div.innerHTML = `
            <p class="review-question"><b>প্রশ্ন ${index + 1}: ${question.question}</b><span class="status-text">${statusText}</span></p>
            <p class="review-user-answer">Your Answer: <span class="${userAnswerClass}">${userAnswerText}</span></p>
            <p class="review-correct-answer">Correct Answer: <span class="correct-text">${correctAnswerOption}</span></p>
            ${question.explanation ? `<p class="review-explanation">Explanation: ${question.explanation}</p>` : ''}
        `;

        reviewQuestionsContainer.appendChild(div);
    });

    scoreElement.textContent = score;
    correctCountElement.textContent = correctCount;
    wrongCountElement.textContent = wrongCount;
    unattemptedCountElement.textContent = unattemptedCount;

    testContainer.style.display = 'none';
    resultArea.style.display = 'block';
}

// Initial calls
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < questions.length; i++) {
        const button = document.createElement('button');
        button.classList.add('grid-button');
        button.textContent = i + 1;
        button.addEventListener('click', () => {
            currentQuestionIndex = i;
            loadQuestion();
        });
        questionGridContainer.appendChild(button);
    }
    
    // Initialize question states to unattempted (red)
    questionStates = new Array(questions.length).fill(0);

    loadQuestion();
    startTimer();

    nextButton.addEventListener('click', nextQuestion);
    prevButton.addEventListener('click', prevQuestion);
    clearResponseButton.addEventListener('click', clearResponse);
    markForReviewButton.addEventListener('click', toggleMarkForReview);
    submitButton.addEventListener('click', submitTest);
});
