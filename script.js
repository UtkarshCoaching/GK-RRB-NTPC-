const questions = [
  {
    "question": "ভারতের বৃহত্তম লবণের জলের হ্রদ কোনটি?",
    "options": ["(a) চিল্কা হ্রদ", "(b) সম্বর হ্রদ", "(c) পুলিকট হ্রদ", "(d) কোলেরু হ্রদ"],
    "answer": "(a)",
    "explanation": "চিল্কা হ্রদ ভারতের বৃহত্তম উপকূলীয় উপহ্রদ এবং বিশ্বের দ্বিতীয় বৃহত্তম লবণাক্ত হ্রদ।"
  },
  {
    "question": "আরাবল্লী পর্বতশ্রেণীর সর্বোচ্চ শৃঙ্গ কোনটি?",
    "options": ["(a) গুরু শিখর", "(b) মাউন্ট এভারেস্ট", "(c) দোদাবেটা", "(d) আনাইমুদি"],
    "answer": "(a)",
    "explanation": "গুরু শিখর হলো আরাবল্লী পর্বতশ্রেণীর সর্বোচ্চ শৃঙ্গ, যা রাজস্থানের সিরোহি জেলায় অবস্থিত।"
  },
  {
    "question": "ভারতের কোন রাজ্যটি 'মসলার বাগান' নামে পরিচিত?",
    "options": ["(a) কেরালা", "(b) কর্ণাটক", "(c) তামিলনাড়ু", "(d) অন্ধ্রপ্রদেশ"],
    "answer": "(a)",
    "explanation": "কেরালা তার সুগন্ধি মসলার জন্য বিখ্যাত এবং 'মসলার বাগান' নামে পরিচিত।"
  },
  {
    "question": "ভারতের কোন নদীর উৎস 'গঙ্গোত্রী হিমবাহ'?",
    "options": ["(a) যমুনা", "(b) গঙ্গা", "(c) ব্রহ্মপুত্র", "(d) সিন্ধু"],
    "answer": "(b)",
    "explanation": "গঙ্গা নদীর প্রধান ধারা ভাগীরথীর উৎস হলো উত্তরাখণ্ডের উত্তরকাশী জেলার গঙ্গোত্রী হিমবাহ।"
  },
  {
    "question": "পৃথিবীর বৃহত্তম মরুভূমি কোনটি?",
    "options": ["(a) থর মরুভূমি", "(b) সাহারা মরুভূমি", "(c) গোবি মরুভূমি", "(d) আটাকামা মরুভূমি"],
    "answer": "(b)",
    "explanation": "সাহারা মরুভূমি হলো পৃথিবীর বৃহত্তম উষ্ণ মরুভূমি, যা আফ্রিকার উত্তর অংশে অবস্থিত।"
  },
  {
    "question": "ভারতের কোন রাজ্যটিতে সবচেয়ে বেশি বনভূমি রয়েছে?",
    "options": ["(a) অরুণাচল প্রদেশ", "(b) মধ্যপ্রদেশ", "(c) ছত্তিশগড়", "(d) ওড়িশা"],
    "answer": "(b)",
    "explanation": "আয়তনের দিক থেকে মধ্যপ্রদেশে ভারতের সবচেয়ে বেশি বনভূমি রয়েছে।"
  },
  {
    "question": "কোন গ্রহটি 'লাল গ্রহ' নামে পরিচিত?",
    "options": ["(a) শুক্র", "(b) মঙ্গল", "(c) বৃহস্পতি", "(d) শনি"],
    "answer": "(b)",
    "explanation": "মঙ্গল গ্রহ তার পৃষ্ঠে আয়রন অক্সাইডের উপস্থিতির কারণে লালচে দেখায়।"
  },
  {
    "question": "সুন্দরবন ডেল্টা কোন দুটি নদীর মিলনস্থলে গঠিত হয়েছে?",
    "options": ["(a) গঙ্গা ও যমুনা", "(b) গঙ্গা ও ব্রহ্মপুত্র", "(c) সিন্ধু ও ব্রহ্মপুত্র", "(d) মহানদী ও গোদাবরী"],
    "answer": "(b)",
    "explanation": "সুন্দরবন ডেল্টা গঙ্গা ও ব্রহ্মপুত্র নদীর মিলিত প্রবাহ দ্বারা গঠিত, যা পৃথিবীর বৃহত্তম ম্যানগ্রোভ বন।"
  },
  {
    "question": "ভারতের সর্বনিম্ন বিন্দু কোনটি?",
    "options": ["(a) কুত্তানাদ", "(b) আন্দামান ও নিকোবর দ্বীপপুঞ্জ", "(c) কন্যাকুমারী", "(d) সুন্দরবন"],
    "answer": "(a)",
    "explanation": "কেরালার কুত্তানাদ অঞ্চলটি সমুদ্রপৃষ্ঠ থেকে নিচে অবস্থিত এবং ভারতের সর্বনিম্ন বিন্দু।"
  },
  {
    "question": "পৃথিবীর ছাদ নামে পরিচিত কোনটি?",
    "options": ["(a) হিমালয়", "(b) পামির মালভূমি", "(c) আন্দিজ পর্বতমালা", "(d) রকি পর্বতমালা"],
    "answer": "(b)",
    "explanation": "পামির মালভূমিকে পৃথিবীর ছাদ বলা হয় কারণ এটি বিশ্বের সর্বোচ্চ মালভূমি।"
  },
  {
    "question": "ভারতের কোন শহরকে 'গোলাপী শহর' বলা হয়?",
    "options": ["(a) দিল্লি", "(b) জয়পুর", "(c) উদয়পুর", "(d) আগ্রা"],
    "answer": "(b)",
    "explanation": "রাজস্থানের জয়পুর শহরটি তার গোলাপী রঙের স্থাপত্যের জন্য 'গোলাপী শহর' নামে পরিচিত।"
  },
  {
    "question": "কোন মহাদেশে 'আন্দিজ পর্বতমালা' অবস্থিত?",
    "options": ["(a) আফ্রিকা", "(b) এশিয়া", "(c) দক্ষিণ আমেরিকা", "(d) উত্তর আমেরিকা"],
    "answer": "(c)",
    "explanation": "আন্দিজ পর্বতমালা দক্ষিণ আমেরিকার পশ্চিম উপকূলে অবস্থিত এবং বিশ্বের দীর্ঘতম পর্বতশ্রেণী।"
  },
  {
    "question": "কোন গ্যাসকে 'গ্রিনহাউস গ্যাস' বলা হয় যা বিশ্ব উষ্ণায়নে (Global Warming) অবদান রাখে?",
    "options": ["(a) অক্সিজেন", "(b) নাইট্রোজেন", "(c) কার্বন ডাই অক্সাইড", "(d) হাইড্রোজেন"],
    "answer": "(c)",
    "explanation": "কার্বন ডাই অক্সাইড হলো একটি প্রধান গ্রিনহাউস গ্যাস যা বায়ুমণ্ডলে তাপ আটকে রাখে এবং বিশ্ব উষ্ণায়নে অবদান রাখে।"
  },
  {
    "question": "ভারতের কোন রাজ্য 'কফি উৎপাদন'-এ অগ্রণী?",
    "options": ["(a) কেরালা", "(b) তামিলনাড়ু", "(c) কর্ণাটক", "(d) অন্ধ্রপ্রদেশ"],
    "answer": "(c)",
    "explanation": "কর্ণাটক ভারতের কফি উৎপাদনের প্রায় ৭০% এরও বেশি উৎপাদন করে।"
  },
  {
    "question": "পৃথিবীর গভীরতম মহাসাগর কোনটি?",
    "options": ["(a) আটলান্টিক মহাসাগর", "(b) ভারত মহাসাগর", "(c) প্রশান্ত মহাসাগর", "(d) আর্কটিক মহাসাগর"],
    "answer": "(c)",
    "explanation": "প্রশান্ত মহাসাগর হলো পৃথিবীর বৃহত্তম এবং গভীরতম মহাসাগর, যার মধ্যে মারিয়ানা ট্রেঞ্চ অবস্থিত।"
  },
  {
    "question": "ভারতের দীর্ঘতম সড়ক কোনটি?",
    "options": ["(a) NH 44", "(b) NH 2", "(c) NH 7", "(d) NH 1"],
    "answer": "(a)",
    "explanation": "NH 44 (National Highway 44) ভারতের দীর্ঘতম জাতীয় সড়ক, যা শ্রীনগর থেকে কন্যাকুমারী পর্যন্ত বিস্তৃত।"
  },
  {
    "question": "নীলগিরি পাহাড়ের সর্বোচ্চ শৃঙ্গ কোনটি?",
    "options": ["(a) মাউন্ট এভারেস্ট", "(b) দোদাবেটা", "(c) আনাইমুদি", "(d) কলসুবাই"],
    "answer": "(b)",
    "explanation": "দোদাবেটা হলো তামিলনাড়ুর নীলগিরি পাহাড়ের সর্বোচ্চ শৃঙ্গ।"
  },
  {
    "question": "ভারতের কোন রাজ্যে 'কাজিরাঙ্গা জাতীয় উদ্যান' অবস্থিত?",
    "options": ["(a) পশ্চিমবঙ্গ", "(b) আসাম", "(c) বিহার", "(d) উত্তরপ্রদেশ"],
    "answer": "(b)",
    "explanation": "আসামের কাজিরাঙ্গা জাতীয় উদ্যান একশৃঙ্গ গন্ডারের জন্য বিখ্যাত।"
  },
  {
    "question": "সূর্য থেকে পৃথিবীর দূরত্ব কত?",
    "options": ["(a) প্রায় ১০ কোটি কিমি", "(b) প্রায় ১৫ কোটি কিমি", "(c) প্রায় ২০ কোটি কিমি", "(d) প্রায় ২৫ কোটি কিমি"],
    "answer": "(b)",
    "explanation": "সূর্য থেকে পৃথিবীর গড় দূরত্ব প্রায় ১৫ কোটি কিলোমিটার (৯৩ মিলিয়ন মাইল)।"
  },
  {
    "question": "বিশ্বের সবচেয়ে উঁচু জলপ্রপাত কোনটি?",
    "options": ["(a) নায়াগ্রা জলপ্রপাত", "(b) ভিক্টোরিয়া জলপ্রপাত", "(c) এঞ্জেল জলপ্রপাত", "(d) ইগুয়াজু জলপ্রপাত"],
    "answer": "(c)",
    "explanation": "এঞ্জেল জলপ্রপাত ভেনিজুয়েলায় অবস্থিত এবং এটি বিশ্বের সবচেয়ে উঁচু জলপ্রপাত।"
  },
  {
    "question": "ভারতের কোন রাজ্যটি 'সিলিকন ভ্যালি অফ ইন্ডিয়া' নামে পরিচিত?",
    "options": ["(a) মুম্বাই", "(b) চেন্নাই", "(c) বেঙ্গালুরু", "(d) হায়দ্রাবাদ"],
    "answer": "(c)",
    "explanation": "বেঙ্গালুরু ভারতের প্রধান তথ্যপ্রযুক্তি কেন্দ্র এবং 'সিলিকন ভ্যালি অফ ইন্ডিয়া' নামে পরিচিত।"
  },
  {
    "question": "কোন নদীর উপর 'ভাকরা নাঙ্গাল বাঁধ' নির্মিত হয়েছে?",
    "options": ["(a) শতদ্রু", "(b) সিন্ধু", "(c) ঝিলাম", "(d) চেনাব"],
    "answer": "(a)",
    "explanation": "ভাকরা নাঙ্গাল বাঁধ শতদ্রু নদীর উপর নির্মিত একটি গ্র্যাভিটি বাঁধ, যা পাঞ্জাব ও হিমাচল প্রদেশের সীমান্তে অবস্থিত।"
  },
  {
    "question": "পৃথিবীর বৃহত্তম বদ্বীপ কোনটি?",
    "options": ["(a) গঙ্গা-ব্রহ্মপুত্র বদ্বীপ", "(b) মিসিসিপি বদ্বীপ", "(c) নীল নদের বদ্বীপ", "(d) ভল্গা বদ্বীপ"],
    "answer": "(a)",
    "explanation": "গঙ্গা-ব্রহ্মপুত্র বদ্বীপ (সুন্দরবন ডেল্টা) হলো পৃথিবীর বৃহত্তম বদ্বীপ, যা ভারত ও বাংলাদেশের মধ্যে অবস্থিত।"
  },
  {
    "question": "কোন গ্রহটি আমাদের সৌরজগতের সবচেয়ে বড় গ্রহ?",
    "options": ["(a) মঙ্গল", "(b) পৃথিবী", "(c) বৃহস্পতি", "(d) শনি"],
    "answer": "(c)",
    "explanation": "বৃহস্পতি আমাদের সৌরজগতের বৃহত্তম গ্রহ, যার ভর অন্যান্য সব গ্রহের মোট ভরের আড়াই গুণেরও বেশি।"
  },
  {
    "question": "ভারতের 'ম্যানচেস্টার' নামে পরিচিত শহর কোনটি?",
    "options": ["(a) মুম্বাই", "(b) আহমেদাবাদ", "(c) কানপুর", "(d) কোয়েম্বাটুর"],
    "answer": "(b)",
    "explanation": "আহমেদাবাদ তার বিশাল টেক্সটাইল শিল্পের জন্য 'ভারতের ম্যানচেস্টার' নামে পরিচিত।"
  }
];

const questionNumberElement = document.querySelector('.question-number');
const questionTextElement = document.querySelector('.question-text');
const optionsAreaElement = document.querySelector('.options-area');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const submitButton = document.querySelector('.submit-button');
const clearResponseButton = document.querySelector('.clear-response-button');
const markForReviewButton = document.querySelector('.mark-for-review-button'); // New element
const resultAreaElement = document.querySelector('.result-area');
const scoreElement = document.getElementById('score');
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const unattemptedCountElement = document.getElementById('unattempted-count');
const timeElement = document.getElementById('time');
const reviewContainer = document.getElementById('review-questions');
const questionGridContainer = document.querySelector('.question-grid');

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let markedForReview = new Array(questions.length).fill(false); // New array for review status
let timeLeft = 15 * 60; // 35 minutes in seconds
let timerInterval;
let totalScore = 0;

// Utility function to shuffle an array (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
  timeElement.textContent = formatTime(timeLeft);
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    showResult();
  } else {
    timeLeft--;
  }
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionNumberElement.textContent = `প্রশ্ন ${currentQuestionIndex + 1}`;
  questionTextElement.textContent = currentQuestion.question;

  // Shuffle options
  const shuffledOptions = [...currentQuestion.options];
  shuffleArray(shuffledOptions);


  optionsAreaElement.innerHTML = '';
  shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.classList.add('option');
    button.textContent = option;
    button.addEventListener('click', (event) => selectAnswer(event, option));
    optionsAreaElement.appendChild(button);

    if (userAnswers[currentQuestionIndex] === option) {
      button.classList.add('selected');
    }
  });

  prevButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = currentQuestionIndex === questions.length - 1;

  // Update mark for review button state
  if (markedForReview[currentQuestionIndex]) {
    markForReviewButton.classList.add('marked');
    markForReviewButton.textContent = 'Unmark Review';
  } else {
    markForReviewButton.classList.remove('marked');
    markForReviewButton.textContent = 'Mark for Review';
  }

  updateReviewButtons();
}

function selectAnswer(event, answer) {
  userAnswers[currentQuestionIndex] = answer;
  // Marked for review should remain even after answering.
  // This line is intentionally commented out to allow for "answered and marked for review" state.
  // markedForReview[currentQuestionIndex] = false;
  const options = document.querySelectorAll('.option');
  options.forEach(option => option.classList.remove('selected'));
  event.target.classList.add('selected');
  updateReviewButtons(); // শুধু রিভিউ বাটনগুলো আপডেট করুন
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
    markedForReview[currentQuestionIndex] = false; // Also clear review mark
    loadQuestion();
}

function toggleMarkForReview() {
    markedForReview[currentQuestionIndex] = !markedForReview[currentQuestionIndex];
    if (currentQuestionIndex < questions.length - 1) { // শেষ প্রশ্ন না হলে পরের প্রশ্নে যাও
        nextQuestion();
    } else { // শেষ প্রশ্ন হলে শুধু বর্তমান প্রশ্নটি রিফ্রেশ করো (মার্ক স্টেটাস দেখানোর জন্য)
        loadQuestion();
    }
}

function submitTest() {
  clearInterval(timerInterval);
  showResult();
}

function showResult() {
  document.querySelector('.header').style.display = 'none';
  document.querySelector('.question-area').style.display = 'none';
  document.querySelector('.options-area').style.display = 'none';
  document.querySelector('.navigation-area').style.display = 'none';
  document.querySelector('.review-area').style.display = 'none';
  resultAreaElement.style.display = 'block';

  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;
  totalScore = 0;

  questions.forEach((question, index) => {
    const correctAnswerText = question.options.find(opt => opt.startsWith(question.answer));

    if (userAnswers[index] === correctAnswerText) {
      correctCount++;
      totalScore++;
    } else if (userAnswers[index] !== null) {
      wrongCount++;
      totalScore -= 0.33;
    } else {
        unattemptedCount++;
    }
  });

  totalScore = Math.max(0, totalScore);

  scoreElement.textContent = totalScore.toFixed(2);
  correctCountElement.textContent = correctCount;
  wrongCountElement.textContent = wrongCount;
  unattemptedCountElement.textContent = unattemptedCount;

  displayReview();
}

function updateReviewButtons() {
    const currentReviewButtons = questionGridContainer.querySelectorAll('.grid-button');

    Array.from(currentReviewButtons).forEach((button, index) => {
        // Remove all previous status classes
        button.classList.remove('answered', 'unanswered', 'current-question', 'marked-for-review');

        // Set 'current-question' class
        if (index === currentQuestionIndex) {
            button.classList.add('current-question');
        }

        // Set status classes based on user's action
        if (userAnswers[index] !== null) { // If answered
            button.classList.add('answered');
            if (markedForReview[index]) {
                button.classList.add('marked-for-review'); // If answered AND marked
            }
        } else if (markedForReview[index]) { // If only marked for review (not answered)
            button.classList.add('marked-for-review');
        } else { // If neither answered nor marked for review
            button.classList.add('unanswered');
        }
    });
}


function displayReview() {
  reviewContainer.style.display = 'flex';
  reviewContainer.style.flexDirection = 'column';
  reviewContainer.style.alignItems = 'flex-start';
  reviewContainer.style.gap = '20px';
  reviewContainer.innerHTML = '';

  questions.forEach((question, index) => {
    const div = document.createElement('div');
    div.classList.add('review-item');
    div.style.width = '100%';
    let userAnswerText = userAnswers[index] || 'No Answer';
    let correctAnswerText = question.options.find(opt => opt.startsWith(question.answer)) || 'N/A';

    let statusText = '';
    let userAnswerClass = '';

    // Determine the status and apply appropriate classes/text for the review summary
    if (userAnswers[index] === correctAnswerText) {
        userAnswerClass = 'correct-text';
        div.classList.add('correct-answer-review');
        statusText = ' (Correct Answer)';
    } else if (userAnswers[index] !== null) {
        userAnswerClass = 'wrong-text';
        div.classList.add('wrong-answer-review');
        statusText = ' (Wrong Answer)';
    } else if (markedForReview[index]) {
        // This case is for questions marked for review but not answered
        div.classList.add('marked-for-review-review');
        statusText = ' (Marked for Review - Unanswered)'; // Clarify in summary
    } else {
        div.classList.add('unanswered-review');
        statusText = ' (Unanswered)';
    }

    // If answered and marked for review, append the star icon in the summary
    if (userAnswers[index] !== null && markedForReview[index]) {
        statusText += ' <span style="color: red;">*</span>'; // Add red star to status text
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
    markForReviewButton.addEventListener('click', toggleMarkForReview); // New event listener
    submitButton.addEventListener('click', submitTest);

    updateReviewButtons();
});
