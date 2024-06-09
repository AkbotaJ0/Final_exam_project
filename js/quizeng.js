document.addEventListener('DOMContentLoaded', function() {
    const questions = {
        ent: [
            { question: "1.What is 2 + 2?", options: ["3", "4", "5", "6"], answer: 1 },
            { question: "2.What is 5 * 5?", options: ["10", "15", "20", "25"], answer: 3 },
            { question: "3.What is 10 - 3?", options: ["6", "7", "8", "9"], answer: 1 },
            { question: "4.What is 9 / 3?", options: ["2", "3", "4", "5"], answer: 1 },
            { question: "5.What is 3^2?", options: ["6", "7", "8", "9"], answer: 3 },
        ],
        calc1: [
            { question: "1.Integral of x dx?", options: ["x^2/2 + C", "x + C", "ln(x) + C", "e^x + C"], answer: 0 },
            { question: "2.Derivative of x^2?", options: ["x", "2x", "x^3", "2x^2"], answer: 1 },
            { question: "3.Derivative of e^x?", options: ["e^x", "x^e", "1", "ln(x)"], answer: 0 },
            { question: "4.Integral of 1/x dx?", options: ["x", "x^2", "ln(x) + C", "e^x + C"], answer: 2 },
            { question: "5.Derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], answer: 0 },
        ],
        calc2: [
            { question: "1.What is a double integral?", options: ["Integral of an integral", "Integral over an area", "Integral of a function of two variables", "Integral of an area"], answer: 2 },
            { question: "2.Derivative of a function of two variables?", options: ["Partial derivative", "Total derivative", "Gradient", "Divergence"], answer: 0 },
            { question: "3.What is divergence?", options: ["Gradient", "Flow", "Curve", "Area"], answer: 1 },
            { question: "4.Integral of x^2 dx?", options: ["x^3/3 + C", "x^2 + C", "x + C", "ln(x) + C"], answer: 0 },
            { question: "5.What is a Taylor series?", options: ["Integral", "Derivative", "Sum", "Sequence"], answer: 2 },
        ],
        lin: [
            { question: "1.What is a matrix?", options: ["Number", "Array of numbers", "Function", "Graph"], answer: 1 },
            { question: "2.Determinant of a matrix?", options: ["Number", "Array of numbers", "Function", "Graph"], answer: 0 },
            { question: "3.Inverse matrix?", options: ["Transposed matrix", "Identity matrix", "Matrix multiplier", "Matrix inverse to the original"], answer: 3 },
            { question: "4.Rank of a matrix?", options: ["Number", "Array of numbers", "Function", "Graph"], answer: 0 },
            { question: "5.What is a linear space?", options: ["Set of vectors", "Set of numbers", "Set of functions", "Set of matrices"], answer: 0 },
        ],
        dis: [
            { question: "1.What is a graph in discrete mathematics?", options: ["Function", "Number", "Set of vertices and edges", "Set of points"], answer: 2 },
            { question: "2.What is a vertex?", options: ["Intersection point of edges", "Point on a graph", "Array of numbers", "Function"], answer: 0 },
            { question: "3.What is an edge?", options: ["Line connecting vertices", "Point on a graph", "Array of numbers", "Function"], answer: 0 },
            { question: "4.What is a cycle in a graph?", options: ["Path starting and ending at the same vertex", "Curved line", "Array of numbers", "Function"], answer: 0 },
            { question: "5.What is a tree?", options: ["Graph without cycles", "Graph with cycles", "Set of numbers", "Set of functions"], answer: 0 },
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

        alert(`Your score: ${score} out of 5`);
        console.log(`Results: ${userAnswers}`);
        document.getElementById('submit-sound').play();
    });
});
