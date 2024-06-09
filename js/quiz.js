document.addEventListener('DOMContentLoaded', function() {
    const questions = {
        ent: [
            { question: "1.Сколько будет 2 + 2?", options: ["3", "4", "5", "6"], answer: 1 },
            { question: "2.Сколько будет 5 * 5?", options: ["10", "15", "20", "25"], answer: 3 },
            { question: "3.Сколько будет 10 - 3?", options: ["6", "7", "8", "9"], answer: 1 },
            { question: "4.Сколько будет 9 / 3?", options: ["2", "3", "4", "5"], answer: 1 },
            { question: "5.Сколько будет 3^2?", options: ["6", "7", "8", "9"], answer: 3 },
        ],
        calc1: [
            { question: "1.Интеграл от x dx?", options: ["x^2/2 + C", "x + C", "ln(x) + C", "e^x + C"], answer: 0 },
            { question: "2.Производная от x^2?", options: ["x", "2x", "x^3", "2x^2"], answer: 1 },
            { question: "3.Производная от e^x?", options: ["e^x", "x^e", "1", "ln(x)"], answer: 0 },
            { question: "4.Интеграл от 1/x dx?", options: ["x", "x^2", "ln(x) + C", "e^x + C"], answer: 2 },
            { question: "5.Производная от sin(x)?", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], answer: 0 },
        ],
        calc2: [
            { question: "1.Что такое двойной интеграл?", options: ["Интеграл от интеграла", "Интеграл по области", "Интеграл от функции двух переменных", "Интеграл от площади"], answer: 2 },
            { question: "2.Производная от функции двух переменных?", options: ["Частная производная", "Полная производная", "Градиент", "Дивергенция"], answer: 0 },
            { question: "3.Что такое дивергенция?", options: ["Градиент", "Поток", "Кривая", "Площадь"], answer: 1 },
            { question: "4.Интеграл от x^2 dx?", options: ["x^3/3 + C", "x^2 + C", "x + C", "ln(x) + C"], answer: 0 },
            { question: "5.Что такое ряд Тейлора?", options: ["Интеграл", "Производная", "Сумма", "Последовательность"], answer: 2 },
        ],
        lin: [
            { question: "1.Что такое матрица?", options: ["Число", "Массив чисел", "Функция", "График"], answer: 1 },
            { question: "2.Определитель матрицы?", options: ["Число", "Массив чисел", "Функция", "График"], answer: 0 },
            { question: "3.Обратная матрица?", options: ["Транспонированная матрица", "Единичная матрица", "Матричный множитель", "Матрица, обратная исходной"], answer: 3 },
            { question: "4.Ранг матрицы?", options: ["Число", "Массив чисел", "Функция", "График"], answer: 0 },
            { question: "5.Что такое линейное пространство?", options: ["Набор векторов", "Множество чисел", "Множество функций", "Множество матриц"], answer: 0 },
        ],
        dis: [
            { question: "1.Что такое граф в дискретной математике?", options: ["Функция", "Число", "Множество вершин и ребер", "Множество точек"], answer: 2 },
            { question: "2.Что такое вершина?", options: ["Точка пересечения ребер", "Точка на графике", "Массив чисел", "Функция"], answer: 0 },
            { question: "3.Что такое ребро?", options: ["Линия, соединяющая вершины", "Точка на графике", "Массив чисел", "Функция"], answer: 0 },
            { question: "4.Что такое цикл в графе?", options: ["Путь, начинающийся и заканчивающийся в одной вершине", "Кривая линия", "Массив чисел", "Функция"], answer: 0 },
            { question: "5.Что такое дерево?", options: ["Граф без циклов", "Граф с циклами", "Множество чисел", "Множество функций"], answer: 0 },
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

        alert(`Ваш счет: ${score} из 5`);
        console.log(`Результаты: ${userAnswers}`);
        document.getElementById('submit-sound').play();
    });
});
