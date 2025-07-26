// Global variables untuk quiz state
let currentQuizzes = {
    x: { currentQuestion: 0, score: 0, answers: [], questions: [] },
    xi: { currentQuestion: 0, score: 0, answers: [], questions: [] },
    xii: { currentQuestion: 0, score: 0, answers: [], questions: [] }
};

// Inisialisasi aplikasi saat DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeQuizzes();
    setupAnimations();
});

// Setup navigasi antar section
function initializeNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.content-section');

    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Update active tab
            navTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update active section
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(targetSection).classList.add('active');
        });
    });
}

// Inisialisasi semua kuis
function initializeQuizzes() {
    ['x', 'xi', 'xii'].forEach(level => {
        initializeQuiz(level);
    });
}

// Inisialisasi kuis untuk level tertentu
function initializeQuiz(level) {
    // Shuffle questions untuk randomisasi
    const shuffledQuestions = shuffleArray([...quizData[level]]);
    currentQuizzes[level].questions = shuffledQuestions;
    currentQuizzes[level].currentQuestion = 0;
    currentQuizzes[level].score = 0;
    currentQuizzes[level].answers = [];

    // Update total questions display
    document.getElementById(`total-questions-${level}`).textContent = shuffledQuestions.length;
    
    // Display first question
    displayQuestion(level);
    
    // Setup navigation buttons
    setupQuizNavigation(level);
}

// Shuffle array untuk randomisasi
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Display question untuk level tertentu
function displayQuestion(level) {
    const quiz = currentQuizzes[level];
    const question = quiz.questions[quiz.currentQuestion];
    const quizContent = document.getElementById(`quiz-content-${level}`);
    
    // Update question counter
    document.getElementById(`current-question-${level}`).textContent = quiz.currentQuestion + 1;
    
    // Shuffle options untuk setiap question
    const shuffledOptions = shuffleOptions(question.options, question.correct);
    
    quizContent.innerHTML = `
        <div class="quiz-question">
            <div class="question-text">${question.question}</div>
            <div class="quiz-options">
                ${shuffledOptions.map((option, index) => `
                    <div class="quiz-option" data-index="${option.originalIndex}" onclick="selectOption('${level}', ${option.originalIndex})">
                        <div class="option-text">${option.text}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Update navigation buttons
    updateNavigationButtons(level);
}

// Shuffle options sambil track correct answer
function shuffleOptions(options, correctIndex) {
    const optionsWithIndex = options.map((text, index) => ({ text, originalIndex: index }));
    return shuffleArray(optionsWithIndex);
}

// Handle option selection
function selectOption(level, selectedIndex) {
    const quiz = currentQuizzes[level];
    const question = quiz.questions[quiz.currentQuestion];
    const options = document.querySelectorAll(`#quiz-content-${level} .quiz-option`);
    
    // Disable all options
    options.forEach(option => {
        option.classList.add('disabled');
    });
    
    // Mark selected option
    const selectedOption = document.querySelector(`#quiz-content-${level} .quiz-option[data-index="${selectedIndex}"]`);
    selectedOption.classList.add('selected');
    
    // Show correct/incorrect feedback
    const isCorrect = selectedIndex == question.correct;
    
    if (isCorrect) {
        selectedOption.classList.add('correct');
        selectedOption.innerHTML += `<div class="option-feedback">✓ Benar!</div>`;
        quiz.score++;
    } else {
        selectedOption.classList.add('incorrect');
        selectedOption.innerHTML += `<div class="option-feedback">✗ Salah!</div>`;
        
        // Show correct answer
        const correctOption = document.querySelector(`#quiz-content-${level} .quiz-option[data-index="${question.correct}"]`);
        correctOption.classList.add('correct');
        correctOption.innerHTML += `<div class="option-feedback">✓ Jawaban yang benar</div>`;
    }
    
    // Show explanation
    setTimeout(() => {
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'question-explanation';
        explanationDiv.style.cssText = `
            margin-top: 1rem;
            padding: 1rem;
            background: #f0f8ff;
            border-left: 4px solid #667eea;
            border-radius: 5px;
            font-style: italic;
            color: #2d3748;
        `;
        explanationDiv.innerHTML = `<strong>Penjelasan:</strong> ${question.explanation}`;
        
        document.querySelector(`#quiz-content-${level} .quiz-question`).appendChild(explanationDiv);
    }, 500);
    
    // Store answer
    quiz.answers[quiz.currentQuestion] = {
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: isCorrect
    };
    
    // Update score display
    document.getElementById(`score-${level}`).textContent = quiz.score;
    
    // Enable next button
    const nextBtn = document.getElementById(`next-btn-${level}`);
    nextBtn.disabled = false;
    
    // If last question, change button text
    if (quiz.currentQuestion === quiz.questions.length - 1) {
        nextBtn.innerHTML = 'Lihat Hasil <i class="fas fa-chart-bar"></i>';
    }
}

// Setup quiz navigation
function setupQuizNavigation(level) {
    const prevBtn = document.getElementById(`prev-btn-${level}`);
    const nextBtn = document.getElementById(`next-btn-${level}`);
    
    prevBtn.onclick = () => previousQuestion(level);
    nextBtn.onclick = () => nextQuestion(level);
}

// Previous question
function previousQuestion(level) {
    const quiz = currentQuizzes[level];
    if (quiz.currentQuestion > 0) {
        quiz.currentQuestion--;
        displayQuestion(level);
    }
}

// Next question
function nextQuestion(level) {
    const quiz = currentQuizzes[level];
    
    if (quiz.currentQuestion < quiz.questions.length - 1) {
        quiz.currentQuestion++;
        displayQuestion(level);
    } else {
        // Show quiz results
        showQuizResults(level);
    }
}

// Update navigation buttons
function updateNavigationButtons(level) {
    const quiz = currentQuizzes[level];
    const prevBtn = document.getElementById(`prev-btn-${level}`);
    const nextBtn = document.getElementById(`next-btn-${level}`);
    
    // Previous button
    prevBtn.disabled = quiz.currentQuestion === 0;
    
    // Next button
    const hasAnswered = quiz.answers[quiz.currentQuestion] !== undefined;
    nextBtn.disabled = !hasAnswered;
    
    if (quiz.currentQuestion === quiz.questions.length - 1) {
        nextBtn.innerHTML = hasAnswered ? 'Lihat Hasil <i class="fas fa-chart-bar"></i>' : 'Selanjutnya <i class="fas fa-chevron-right"></i>';
    } else {
        nextBtn.innerHTML = 'Selanjutnya <i class="fas fa-chevron-right"></i>';
    }
}

// Show quiz results
function showQuizResults(level) {
    const quiz = currentQuizzes[level];
    const quizContainer = document.getElementById(`quiz-${level}`);
    const resultDiv = document.getElementById(`quiz-result-${level}`);
    
    // Hide quiz content
    document.getElementById(`quiz-content-${level}`).style.display = 'none';
    document.querySelector(`#quiz-${level} .quiz-navigation`).style.display = 'none';
    
    // Calculate percentage
    const percentage = Math.round((quiz.score / quiz.questions.length) * 100);
    
    // Update result display
    document.getElementById(`final-score-${level}`).textContent = quiz.score;
    document.getElementById(`final-total-${level}`).textContent = quiz.questions.length;
    document.getElementById(`result-percentage-${level}`).textContent = `${percentage}%`;
    
    // Show result with color coding
    const resultPercentageEl = document.getElementById(`result-percentage-${level}`);
    if (percentage >= 80) {
        resultPercentageEl.style.color = '#48bb78';
        resultPercentageEl.innerHTML += ' - Sangat Baik! 🏆';
    } else if (percentage >= 60) {
        resultPercentageEl.style.color = '#ed8936';
        resultPercentageEl.innerHTML += ' - Baik! 👍';
    } else {
        resultPercentageEl.style.color = '#f56565';
        resultPercentageEl.innerHTML += ' - Perlu Belajar Lagi 📚';
    }
    
    // Show result div
    resultDiv.style.display = 'block';
}

// Restart quiz
function restartQuiz(level) {
    // Hide result
    document.getElementById(`quiz-result-${level}`).style.display = 'none';
    
    // Show quiz content
    document.getElementById(`quiz-content-${level}`).style.display = 'block';
    document.querySelector(`#quiz-${level} .quiz-navigation`).style.display = 'flex';
    
    // Reset quiz state
    initializeQuiz(level);
}

// Setup animations
function setupAnimations() {
    // Animasi sudah di-setup di HTML dengan onclick handlers
    console.log('Animations ready');
}

// Animasi basic computer flow
function startBasicAnimation() {
    const flowItems = document.querySelectorAll('#computer-flow-x .flow-item');
    const dataPacket = document.querySelector('#computer-flow-x .data-packet');
    const processingIndicator = document.querySelector('#computer-flow-x .processing-indicator');
    const resultPacket = document.querySelector('#computer-flow-x .result-packet');
    
    // Reset animation
    flowItems.forEach(item => item.classList.remove('animated'));
    dataPacket.classList.remove('moving');
    processingIndicator.classList.remove('active');
    resultPacket.classList.remove('moving');
    
    // Start animation sequence
    setTimeout(() => {
        flowItems[0].classList.add('animated'); // Input
        dataPacket.classList.add('moving');
    }, 100);
    
    setTimeout(() => {
        flowItems[1].classList.add('animated'); // CPU
        processingIndicator.classList.add('active');
    }, 800);
    
    setTimeout(() => {
        flowItems[2].classList.add('animated'); // Output
        processingIndicator.classList.remove('active');
        resultPacket.classList.add('moving');
    }, 2000);
    
    setTimeout(() => {
        // Reset for next animation
        flowItems.forEach(item => item.classList.remove('animated'));
        dataPacket.classList.remove('moving');
        resultPacket.classList.remove('moving');
    }, 3000);
}

// Animasi CPU cycle
function startCPUCycleAnimation() {
    const cycleSteps = document.querySelectorAll('#cpu-cycle-xi .cycle-step');
    
    // Reset animation
    cycleSteps.forEach(step => step.classList.remove('active'));
    
    // Animate each step
    cycleSteps.forEach((step, index) => {
        setTimeout(() => {
            // Remove previous active
            cycleSteps.forEach(s => s.classList.remove('active'));
            // Add current active
            step.classList.add('active');
        }, index * 1000);
    });
    
    // Reset after animation
    setTimeout(() => {
        cycleSteps.forEach(step => step.classList.remove('active'));
    }, cycleSteps.length * 1000 + 500);
}

// Animasi boot process
function startBootAnimation() {
    const bootStages = document.querySelectorAll('#boot-animation-xii .boot-stage');
    
    // Reset animation
    bootStages.forEach(stage => stage.classList.remove('active'));
    
    // Animate each stage
    bootStages.forEach((stage, index) => {
        setTimeout(() => {
            stage.classList.add('active');
        }, index * 800);
    });
    
    // Reset after animation
    setTimeout(() => {
        bootStages.forEach(stage => stage.classList.remove('active'));
    }, bootStages.length * 800 + 1000);
}

// Smooth scrolling untuk navigation
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Event listeners untuk responsive behavior
window.addEventListener('resize', function() {
    // Handle responsive changes if needed
    if (window.innerWidth <= 768) {
        // Mobile adaptations
        console.log('Mobile view active');
    }
});

// Preload animations
function preloadAnimations() {
    // Preload any heavy animations or assets
    const animationElements = document.querySelectorAll('.animation-container');
    animationElements.forEach(element => {
        element.style.willChange = 'transform';
    });
}

// Initialize preloading when page loads
window.addEventListener('load', preloadAnimations);

// Utility function untuk debugging
function debugQuizState(level) {
    console.log(`Quiz ${level.toUpperCase()} State:`, currentQuizzes[level]);
}

// Error handling untuk quiz operations
function handleQuizError(level, error) {
    console.error(`Error in quiz ${level}:`, error);
    alert('Terjadi kesalahan dalam kuis. Silakan refresh halaman.');
}

// Accessibility improvements
function setupAccessibility() {
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Ensure proper tab order
            const focusableElements = document.querySelectorAll('button, .quiz-option');
            focusableElements.forEach(el => {
                el.addEventListener('focus', function() {
                    this.style.outline = '2px solid #667eea';
                });
                el.addEventListener('blur', function() {
                    this.style.outline = 'none';
                });
            });
        }
    });
}

// Initialize accessibility when DOM is ready
document.addEventListener('DOMContentLoaded', setupAccessibility);

// Performance monitoring
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        });
    }
}

monitorPerformance();
