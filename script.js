// グローバル変数
let currentCategory = null;
let currentQuestionIndex = 0;
let scores = {};

// DOM要素
const categorySelection = document.getElementById('category-selection');
const categoryButtons = document.getElementById('category-buttons');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressBar = document.getElementById('progress');
const resultContent = document.getElementById('result-content');
const restartBtn = document.getElementById('restart-btn');

// 初期化
function init() {
    renderCategoryButtons();
    restartBtn.addEventListener('click', restart);
}

// カテゴリーボタンを表示
function renderCategoryButtons() {
    categoryButtons.innerHTML = '';
    Object.keys(quizData).forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = category;
        btn.addEventListener('click', () => startQuiz(category));
        categoryButtons.appendChild(btn);
    });
}

// 診断開始
function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    scores = {};
    
    // スコアを初期化
    const destinations = quizData[category].destinations;
    Object.keys(destinations).forEach(dest => {
        scores[dest] = 0;
    });
    
    // 画面切り替え
    categorySelection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    resultSection.classList.add('hidden');
    
    // 質問数を表示
    totalQuestionsSpan.textContent = quizData[category].questions.length;
    
    // 最初の質問を表示
    showQuestion();
}

// 質問を表示
function showQuestion() {
    const question = quizData[currentCategory].questions[currentQuestionIndex];
    
    // 質問テキストを表示
    questionText.textContent = question.question;
    
    // 進捗を更新
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / quizData[currentCategory].questions.length) * 100;
    progressBar.style.width = progress + '%';
    
    // 選択肢を表示
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = option.text;
        btn.addEventListener('click', () => selectOption(option.scores));
        optionsContainer.appendChild(btn);
    });
}

// 選択肢を選択
function selectOption(optionScores) {
    // スコアを加算
    Object.keys(optionScores).forEach(dest => {
        if (scores[dest] !== undefined) {
            scores[dest] += optionScores[dest];
        }
    });
    
    // 次の質問へ
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData[currentCategory].questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 結果を表示
function showResult() {
    // 最高スコアの目的地を見つける
    let maxScore = -1;
    let resultDestination = null;
    
    Object.keys(scores).forEach(dest => {
        if (scores[dest] > maxScore) {
            maxScore = scores[dest];
            resultDestination = dest;
        }
    });
    
    const destination = quizData[currentCategory].destinations[resultDestination];
    
    // 結果を表示
    resultContent.innerHTML = `
        <div class="result-card">
            <h3>${destination.name}（${destination.country}）</h3>
            <img src="${destination.image}" alt="${destination.name}" class="result-image">
            <div class="result-description">
                <p>${destination.description}</p>
            </div>
            <div class="result-links">
                <h4>もっと詳しく知る</h4>
                <ul>
                    ${destination.links.map(link => 
                        `<li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.text}</a></li>`
                    ).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // 画面切り替え
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
}

// 最初に戻る
function restart() {
    currentCategory = null;
    currentQuestionIndex = 0;
    scores = {};
    
    categorySelection.classList.remove('hidden');
    quizSection.classList.add('hidden');
    resultSection.classList.add('hidden');
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', init);
