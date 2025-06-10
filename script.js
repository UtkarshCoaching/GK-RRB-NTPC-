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
      "(c) নিরুক্ত",
      "(d) যাস্ক"
    ],
    "answer": "(a)",
    "explanation": "সংস্কৃত ব্যাকরণের বিকাশ শুরু হয় পাণিনির (খ্রিস্টপূর্ব চতুর্থ শতাব্দীর) সঙ্গে, তাঁর অষ্টাধ্যায়ী গ্রন্থের মাধ্যমে। এটি ভাষার একটি বিশ্লেষণ, যেখানে এটি সঠিকভাবে বর্ণনা করার জন্য ব্যাকরণের একটি সম্পূর্ণ কার্যকরী তত্ত্ব সরবরাহ করে।"
  },
  {
    "question": "নিম্নলিখিত কোন বেদে জাদু মন্ত্র এবং আকর্ষণ রয়েছে?",
    "options": [
      "(a) ঋগ্বেদ",
      "(b) যজুর্বেদ",
      "(c) সামবেদ",
      "(d) অথর্ববেদ"
    ],
    "answer": "(d)",
    "explanation": "অথর্ববেদ: অথর্ববেদ হলো 'অথর্বণদের জ্ঞানের ভান্ডার'। অথর্ববেদ হলো চতুর্থ বেদ। এটি অথর্বণ এবং অঙ্গিরাকে উৎসর্গীকৃত। অথর্ববেদে জাদু মন্ত্র এবং আকর্ষণ রয়েছে। এটি প্রধানত রোগ নিরাময়, দীর্ঘ জীবন লাভ এবং বিভিন্ন ধরনের জাগতিক আকাঙ্ক্ষা পূরণের সাথে সম্পর্কিত।"
  },
  {
    "question": "বৌদ্ধ ধর্মের মূল ভিত্তি কী?",
    "options": [
      "(a) আর্য অষ্টাঙ্গিক মার্গ",
      "(b) আর্য সত্য",
      "(c) আর্য পঞ্চশীল",
      "(d) আর্য দশশীল"
    ],
    "answer": "(b)",
    "explanation": "বৌদ্ধ ধর্মের মূল ভিত্তি হল চারটি আর্য সত্য (Four Noble Truths)। এই সত্যগুলি হল: দুঃখ, দুঃখের কারণ, দুঃখ নিরোধ, দুঃখ নিরোধের মার্গ (পথ)।"
  },
  {
    "question": "বৌদ্ধ ধর্মে, 'ত্রিমুকটি' বলতে কী বোঝায়?",
    "options": [
      "(a) বুদ্ধ, ধর্ম, সংঘ",
      "(b) ধর্ম, সংঘ, নির্বাণ",
      "(c) বুদ্ধ, ধর্ম, অষ্টাঙ্গিক মার্গ",
      "(d) সংঘ, নির্বাণ, প্রজ্ঞা"
    ],
    "answer": "(a)",
    "explanation": "বৌদ্ধ ধর্মে, 'ত্রিমুকটি' বা ত্রিরত্ন (Three Jewels) বলতে বুদ্ধ (শিক্ষক), ধর্ম (শিক্ষা) এবং সংঘ (সম্প্রদায়) বোঝায়।"
  },
  {
    "question": "কোন প্রাচীন ভারতীয় গ্রন্থে শূন্যের ধারণার প্রথম উল্লেখ পাওয়া যায়?",
    "options": [
      "(a) ঋগ্বেদ",
      "(b) উপনিষদ",
      "(c) আর্যভট্টীয়",
      "(d) ব্রহ্মগুপ্ত সিদ্ধান্ত"
    ],
    "answer": "(c)",
    "explanation": "শূন্যের ধারণার প্রথম উল্লেখযোগ্য এবং পদ্ধতিগত আলোচনা আর্যভট্ট (খ্রিস্টীয় পঞ্চম শতাব্দী) তার আর্যভট্টীয় গ্রন্থে করেছেন।"
  },
  {
    "question": "সিন্ধু সভ্যতার কোন স্থানটি পোতাশ্রয় (ডকইয়ার্ড) এর জন্য পরিচিত?",
    "options": [
      "(a) হরপ্পা",
      "(b) মহেঞ্জোদারো",
      "(c) লোথাল",
      "(d) কালিবঙ্গান"
    ],
    "answer": "(c)",
    "explanation": "লোথাল (গুজরাটে অবস্থিত) সিন্ধু সভ্যতার একটি গুরুত্বপূর্ণ স্থান যা একটি প্রাচীন পোতাশ্রয় বা ডকইয়ার্ডের জন্য পরিচিত।"
  },
  {
    "question": "বৌদ্ধ ধর্মে 'থেরাবাদ' বলতে কী বোঝায়?",
    "options": [
      "(a) মহাযান বৌদ্ধ ধর্মের একটি শাখা",
      "(b) 'বزرুপ্তের পথ' নামেও পরিচিত",
      "(c) বুদ্ধের আদি শিক্ষার প্রতি বিশ্বস্ত একটি ঐতিহ্য",
      "(d) তিব্বতি বৌদ্ধ ধর্মের একটি রূপ"
    ],
    "answer": "(c)",
    "explanation": "থেরাবাদ (Theravada) বৌদ্ধ ধর্ম বুদ্ধের আদি শিক্ষার প্রতি বিশ্বস্ত একটি ঐতিহ্য। এটি দক্ষিণ-পূর্ব এশিয়া এবং শ্রীলঙ্কায় প্রচলিত।"
  },
  {
    "question": "মহাজনপদগুলির মধ্যে কোনটি সবচেয়ে শক্তিশালী ছিল?",
    "options": [
      "(a) কোশল",
      "(b) মগধ",
      "(c) অবন্তী",
      "(d) বৎস"
    ],
    "answer": "(b)",
    "explanation": "ষোড়শ মহাজনপদের মধ্যে মগধ ছিল সবচেয়ে শক্তিশালী। এর কারণ ছিল এর কৌশলগত অবস্থান, উর্বর ভূমি, এবং লোহার খনিজ সম্পদের সহজলভ্যতা।"
  }
];


let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
// 0: unattempted (red), 1: attempted (green), 2: marked for review (yellow), 3: attempted & marked (green with red star)
let questionStates = new Array(questions.length).fill(0);
let markedForReview = new Array(questions.length).fill(false); // ট্র্যাক করে কোনটি মার্ক করা হয়েছে
let timeLeft = 1800; // 30 minutes in seconds
let timerInterval;

const questionNumberElement = document.querySelector('.question-number');
const questionTextElement = document.querySelector('.question-text');
const optionsArea = document.querySelector('.options-area');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const clearResponseButton = document.querySelector('.clear-response-button');
const markForReviewButton = document.querySelector('.mark-for-review-button');
const submitButton = document.querySelector('.submit-button');
const timeElement = document.getElementById('time');
const questionGridContainer = document.querySelector('.question-grid');
const resultArea = document.querySelector('.result-area');
const testContainer = document.querySelector('.test-container');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timeElement.textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleSubmit();
        }
    }, 1000);
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionNumberElement.textContent = `প্রশ্ন ${currentQuestionIndex + 1}`;
    questionTextElement.textContent = question.question;
    optionsArea.innerHTML = ''; // Clear previous options

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(index));
        optionsArea.appendChild(button);
    });

    // হাইলাইট ইউজার অ্যানসার
    if (userAnswers[currentQuestionIndex] !== null) {
        optionsArea.children[userAnswers[currentQuestionIndex]].classList.add('selected');
    }

    updateNavigationButtons();
    updateQuestionGrid();
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;

    // যদি প্রশ্নটি মার্ক করা না থাকে, তাহলে এটিকে attempted (সবুজ) হিসেবে চিহ্নিত করুন
    if (questionStates[currentQuestionIndex] !== 2 && questionStates[currentQuestionIndex] !== 3) {
        questionStates[currentQuestionIndex] = 1; // attempted (green)
    } else if (questionStates[currentQuestionIndex] === 2) { // যদি মার্ক করা থাকে এবং উত্তর দেওয়া হয়
        questionStates[currentQuestionIndex] = 3; // attempted & marked (green with red star)
    }

    loadQuestion(); // অপশন হাইলাইট করতে পুনরায় লোড করুন
}

function clearResponse() {
    userAnswers[currentQuestionIndex] = null;
    // যদি প্রশ্নটি মার্ক করা না থাকে, তাহলে এটিকে unattempted (লাল) হিসেবে চিহ্নিত করুন
    if (questionStates[currentQuestionIndex] === 1) { // যদি উত্তর দেওয়া থাকে এবং তারপর ক্লিয়ার করা হয়
        questionStates[currentQuestionIndex] = 0; // unattempted (red)
    } else if (questionStates[currentQuestionIndex] === 3) { // যদি উত্তর দেওয়া ও মার্ক করা থাকে
        questionStates[currentQuestionIndex] = 2; // marked for review (yellow)
    }
    markedForReview[currentQuestionIndex] = false; // মার্কও তুলে দিন
    loadQuestion();
}

function toggleMarkForReview() {
    markedForReview[currentQuestionIndex] = !markedForReview[currentQuestionIndex];

    if (markedForReview[currentQuestionIndex]) {
        if (userAnswers[currentQuestionIndex] !== null) {
            questionStates[currentQuestionIndex] = 3; // Attempted & Marked (green with red star)
        } else {
            questionStates[currentQuestionIndex] = 2; // Marked for review (yellow)
        }
    } else {
        // যদি মার্ক তুলে নেওয়া হয়
        if (userAnswers[currentQuestionIndex] !== null) {
            questionStates[currentQuestionIndex] = 1; // Attempted (green)
        } else {
            questionStates[currentQuestionIndex] = 0; // Unattempted (red)
        }
    }
    loadQuestion();
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

function updateNavigationButtons() {
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === questions.length - 1;

    // 'Mark for Review' বাটনের টেক্সট আপডেট করুন
    if (markedForReview[currentQuestionIndex]) {
        markForReviewButton.textContent = 'Unmark for Review';
    } else {
        markForReviewButton.textContent = 'Mark for Review';
    }
}

function updateQuestionGrid() {
    questionGridContainer.innerHTML = ''; // Clear existing buttons
    questions.forEach((_, index) => {
        const button = document.createElement('button');
        button.classList.add('grid-button');
        button.textContent = index + 1;

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


        if (index === currentQuestionIndex) {
            button.classList.add('current-question');
        }
        button.addEventListener('click', () => {
            currentQuestionIndex = index;
            loadQuestion();
        });
        questionGridContainer.appendChild(button);
    });
}


function handleSubmit() {
    clearInterval(timerInterval);
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;

    questions.forEach((question, index) => {
        const userAnswerIndex = userAnswers[index];
        if (userAnswerIndex !== null) {
            // যদি উত্তর দেওয়া অপশনের টেক্সট, সঠিক উত্তরের টেক্সটের সাথে মেলে
            if (question.options[userAnswerIndex] === question.answer) {
                correctCount++;
            } else {
                wrongCount++;
            }
        } else {
            unattemptedCount++;
        }
    });

    document.getElementById('score').textContent = correctCount;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = wrongCount;
    document.getElementById('unattempted-count').textContent = unattemptedCount;

    testContainer.style.display = 'none';
    resultArea.style.display = 'block';

    displayReview();
}

function displayReview() {
  const reviewContainer = document.getElementById('review-questions');
  reviewContainer.innerHTML = ''; // Clear previous review items

  questions.forEach((question, index) => {
    const div = document.createElement('div');
    div.classList.add('review-item');

    let userAnswerText = 'Unattempted';
    let correctAnswerText = question.answer;
    let userAnswerClass = 'unattempted-text'; // Default class
    let statusText = 'Unattempted';
    let reviewItemClass = 'unattempted-answer-review';


    const userAnswerIndex = userAnswers[index];
    if (userAnswerIndex !== null) {
      userAnswerText = question.options[userAnswerIndex];
      if (question.options[userAnswerIndex] === question.answer) {
        userAnswerClass = 'correct-text';
        statusText = 'Correct';
        reviewItemClass = 'correct-answer-review';
      } else {
        userAnswerClass = 'wrong-text';
        statusText = 'Wrong';
        reviewItemClass = 'wrong-answer-review';
      }
    } else {
        // If unattempted, but marked for review, display accordingly
        if (markedForReview[index]) {
            statusText = 'Marked for Review';
            reviewItemClass = 'unattempted-answer-review'; // or a new class for marked but unattempted
        }
    }
    div.classList.add(reviewItemClass);

    // Add star if marked for review (even if attempted)
    if (markedForReview[index] && questionStates[index] === 3) { // Only if attempted and marked
        statusText += '<span style="color: red;">*</span>'; // Add red star to status text
    }


    div.innerHTML = `
      <p class="review-question"><b>প্রশ্ন ${index + 1}: ${question.question}</b><span class="status-text">${statusText}</span></p>
      <p class="review-user-answer">Your Answer: <span class="${userAnswerClass}">${userAnswerText}</span></p>
      <p class="review-correct-answer">Correct Answer: <span class="correct-text">${correctAnswerText}</span></p>
      ${question.explanation ? `<p class="review-explanation">Explanation: ${question.explanation}</p>` : ''}
    `;

    reviewContainer.appendChild(div);
  });
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
    
    loadQuestion();
    startTimer();

    nextButton.addEventListener('click', nextQuestion);
    prevButton.addEventListener('click', prevQuestion);
    clearResponseButton.addEventListener('click', clearResponse);
    markForReviewButton.addEventListener('click', toggleMarkForReview);
    submitButton.addEventListener('click', handleSubmit);
});
