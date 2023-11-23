const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-btn');

const questions = [
    {
        question: 'What is the name of the game developer presented on the site?',
        options: ['megrIm games', 'Rockstar Games', 'Larian Studios'],
        correctAnswer: 'megrIm games'
    },
    {
        question: 'How many games are presented on the site?',
        options: ['0', '3', '2'],
        correctAnswer: '2'
    },
    {
        question: 'What is the name of the clicker game?',
        options: ['Candy Click', 'Waifu Clicker', 'Monki Flip'],
        correctAnswer: 'Candy Click'
    },
    {
        question: 'What is the name of the runner game?',
        options: ['Babaluba Flip', 'Waifu Clicker', 'Monki Flip'],
        correctAnswer: 'Monki Flip'
    },
    {
        question: 'What social network is provided on the home page?',
        options: ['Habr', 'VK', 'Twitter'],
        correctAnswer: 'Habr'
    },
    {
        question: 'Select a social network that is not listed on the site.',
        options: ['Habr', 'VK', 'Twitter'],
        correctAnswer: 'VK'
    },
    {
        question: 'Which game has a trailer?',
        options: ['Candy Click', 'Waifu Clicker', 'Monki Flip'],
        correctAnswer: 'Monki Flip'
    },
    {
        question: 'Select a game about which there is no information on the site.',
        options: ['Candy Click', 'Waifu Clicker', 'Monki Flip'],
        correctAnswer: 'Waifu Clicker'
    },
    {
        question: 'You can enable each game directly from this site.',
        options: ['True', 'False'],
        correctAnswer: 'True'
    },
    {
        question: 'How many emails are indicated on the site for contacting the developer?',
        options: ['0', '3', '2'],
        correctAnswer: '2'
    },
];

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<br><p>${index + 1}. ${question.question}</p>`;

        const optionsList = document.createElement('ul');
        optionsList.classList.add('options');
        question.options.forEach((option, optionIndex) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<label>
                        <input type="radio" name="q${index}" value="${option}">
                        ${option}
                      </label>`;
            optionsList.appendChild(listItem);
        });

        questionDiv.appendChild(optionsList);
        quizContainer.appendChild(questionDiv);
    });
}

submitButton.onclick = function () {
    let score = 0;

    questions.forEach((question, index) => {
        const userAnswer = (document.querySelector(`input[name="q${index}"]:checked`) || {}).value;
        if (userAnswer === question.correctAnswer) {
            score++;
        }
    });

    alert(`Your score is: ${score} out of ${questions.length}`);
}

buildQuiz();