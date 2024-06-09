document.addEventListener('DOMContentLoaded', function() {
    const questions = {
        ent: [
            { question: "1.2 + 2 неше болады?", options: ["3", "4", "5", "6"], answer: 1 },
            { question: "2.5 * 5 неше болады?", options: ["10", "15", "20", "25"], answer: 3 },
            { question: "3.10 - 3 неше болады?", options: ["6", "7", "8", "9"], answer: 1 },
            { question: "4.9 / 3 неше болады?", options: ["2", "3", "4", "5"], answer: 1 },
            { question: "5.3^2 неше болады?", options: ["6", "7", "8", "9"], answer: 3 },
        ],
        calc1: [
            { question: "1.Интеграл x dx?", options: ["x^2/2 + C", "x + C", "ln(x) + C", "e^x + C"], answer: 0 },
            { question: "2.x^2 туындысы?", options: ["x", "2x", "x^3", "2x^2"], answer: 1 },
            { question: "3.e^x туындысы?", options: ["e^x", "x^e", "1", "ln(x)"], answer: 0 },
            { question: "4.1/x dx интегралы?", options: ["x", "x^2", "ln(x) + C", "e^x + C"], answer: 2 },
            { question: "5.sin(x) туындысы?", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], answer: 0 },
        ],
        calc2: [
            { question: "1.Қос интеграл деген не?", options: ["Интегралдан интеграл", "Аймақ бойынша интеграл", "Екі айнымалы функциядан интеграл", "Ауданнан интеграл"], answer: 2 },
            { question: "2.Екі айнымалы функция туындысы?", options: ["Жеке туынды", "Толық туынды", "Градиент", "Дивергенция"], answer: 0 },
            { question: "3.Дивергенция деген не?", options: ["Градиент", "Ағын", "Иілім", "Аудан"], answer: 1 },
            { question: "4.x^2 dx интегралы?", options: ["x^3/3 + C", "x^2 + C", "x + C", "ln(x) + C"], answer: 0 },
            { question: "5.Тейлор қатары деген не?", options: ["Интеграл", "Туынды", "Қосу", "Кезек"], answer: 2 },
        ],
        lin: [
            { question: "1.Матрица деген не?", options: ["Сан", "Сандар массиві", "Функция", "График"], answer: 1 },
            { question: "2.Матрицаның анықтауышы?", options: ["Сан", "Сандар массиві", "Функция", "График"], answer: 0 },
            { question: "3.Кері матрица?", options: ["Транспонирленген матрица", "Бірлік матрица", "Матрицалық көбейткіш", "Бастапқы матрицаға кері матрица"], answer: 3 },
            { question: "4.Матрицаның дәрежесі?", options: ["Сан", "Сандар массиві", "Функция", "График"], answer: 0 },
            { question: "5.Сызықтық кеңістік деген не?", options: ["Векторлар жиыны", "Сандар жиыны", "Функциялар жиыны", "Матрицалар жиыны"], answer: 0 },
        ],
        dis: [
            { question: "1.Дискретті математикадағы граф деген не?", options: ["Функция", "Сан", "Төбелер мен қабырғалар жиыны", "Нүктелер жиыны"], answer: 2 },
            { question: "2.Төбе деген не?", options: ["Қабырғалардың қиылысу нүктесі", "Графиктегі нүкте", "Сандар массиві", "Функция"], answer: 0 },
            { question: "3.Қабырға деген не?", options: ["Төбелерді қосатын сызық", "Графиктегі нүкте", "Сандар массиві", "Функция"], answer: 0 },
            { question: "4.Графтағы цикл деген не?", options: ["Бір төбеден басталып, сол төбеге оралатын жол", "Иілім", "Сандар массиві", "Функция"], answer: 0 },
            { question: "5.Ағаш деген не?", options: ["Циклсіз граф", "Циклдері бар граф", "Сандар жиыны", "Функциялар жиыны"], answer: 0 },
        ],
    };

    document.getElementById('subject-select').addEventListener('change', function() {
        const subject = this.value;
        const quizDiv = document.getElementById('quiz');
        quizDiv.innerHTML = '';

        questions[subject].forEach((q, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `
                <p>${q.question}</p>
                ${q.options.map((option, i) => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="question${index}" value="${i}">
                        <label class="form-check-label">${option}</label>
                    </div>
                `).join('')}
            `;
            quizDiv.appendChild(questionElement);
        });
    });

    document.getElementById('submit-btn').addEventListener('click', function() {
        const subject = document.getElementById('subject-select').value;
        const userAnswers = [];
        questions[subject].forEach((q, index) => {
            const answer = document.querySelector(`input[name="question${index}"]:checked`);
            if (answer) {
                userAnswers.push(parseInt(answer.value));
            } else {
                userAnswers.push(-1);
            }
        });

        let score = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === questions[subject][index].answer) {
                score++;
            }
        });

        alert(`Сіздің нәтижеңіз: ${score} / 5`);
        console.log(`Нәтижелер: ${userAnswers}`);
        document.getElementById('submit-sound').play();
    });
});
