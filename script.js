// Global variables
let currentQuiz = null;
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const selectionSection = document.getElementById('selection-section');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');
const wordElement = document.getElementById('word');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const scoreElement = document.getElementById('score');
const progressElement = document.getElementById('progress');
const quizTitleElement = document.getElementById('quiz-title');
const finalScoreElement = document.getElementById('final-score');
const percentageElement = document.getElementById('percentage');
const restartBtn = document.getElementById('restart-btn');
const retryBtn = document.getElementById('retry-btn');

// Event listeners
backBtn.addEventListener('click', backToMenu);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', backToMenu);
retryBtn.addEventListener('click', retryCurrentQuiz);

// Select and start a quiz
function selectQuiz(quizNumber) {
    currentQuiz = quizNumber;
    
    const quizMap = {
        1: { data: quizData.day1, title: 'Day 1 Quiz' },
        2: { data: quizData.day2, title: 'Day 2 Quiz' },
        3: { data: quizData.day3, title: 'Day 3 Quiz' },
        4: { data: quizData.day4, title: 'Day 4 Quiz' },
        5: { data: quizData.day5, title: 'Day 5 Quiz' },
        6: { data: quizData.day6, title: 'Day 6 Quiz' },
        7: { data: quizData.day7, title: 'Day 7 Quiz' }
    };
    
    if (quizMap[quizNumber]) {
        questions = quizMap[quizNumber].data;
        quizTitleElement.textContent = quizMap[quizNumber].title;
    }
    
    // Shuffle questions for variety
    questions = shuffleArray([...questions]);
    
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    
    selectionSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    displayQuestion();
}

// Shuffle array utility
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Display current question
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    wordElement.textContent = question.word;
    optionsElement.innerHTML = '';
    nextBtn.disabled = true;
    
    updateProgress();
    
    // Create option elements
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionDiv.addEventListener('click', () => selectOption(option, optionDiv, question));
        optionsElement.appendChild(optionDiv);
    });
}

// Handle option selection
function selectOption(selectedOption, selectedElement, question) {
    const allOptions = document.querySelectorAll('.option');
    
    // Disable all options
    allOptions.forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';
    });
    
    // Check if correct
    if (selectedOption === question.correct) {
        selectedElement.classList.add('correct');
        score++;
        updateScore();
    } else {
        selectedElement.classList.add('wrong');
        // Highlight the correct answer
        allOptions.forEach(option => {
            if (option.textContent.includes(question.correct)) {
                option.classList.add('correct');
            }
        });
    }
    
    nextBtn.disabled = false;
}

// Next question
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// Update score display
function updateScore() {
    scoreElement.textContent = score;
}

// Update progress display
function updateProgress() {
    progressElement.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
}

// Show results
function showResults() {
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    
    const percentage = Math.round((score / questions.length) * 100);
    finalScoreElement.textContent = `${score}/${questions.length}`;
    
    let message = '';
    let color = '';
    
    if (percentage >= 90) {
        color = '#28a745';
        message = '🎉 Excellent! Outstanding performance!';
    } else if (percentage >= 75) {
        color = '#17a2b8';
        message = '👏 Great job! You\'re doing very well!';
    } else if (percentage >= 60) {
        color = '#ffc107';
        message = '💪 Good effort! Keep practicing!';
    } else if (percentage >= 50) {
        color = '#fd7e14';
        message = '📚 Not bad! Review and try again!';
    } else {
        color = '#dc3545';
        message = '📖 Keep studying! Practice makes perfect!';
    }
    
    percentageElement.textContent = `${percentage}% - ${message}`;
    percentageElement.style.color = color;
}

// Back to menu
function backToMenu() {
    quizSection.classList.add('hidden');
    resultSection.classList.add('hidden');
    selectionSection.classList.remove('hidden');
    currentQuiz = null;
    questions = [];
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
}

// Retry current quiz
function retryCurrentQuiz() {
    resultSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    
    // Reshuffle questions
    questions = shuffleArray([...questions]);
    
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    displayQuestion();
}
