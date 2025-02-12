const questions = [
    { flag: "https://flagcdn.com/w320/fr.png", options: ["France", "Germany", "Italy", "Spain"], answer: "France" },
    { flag: "https://flagcdn.com/w320/de.png", options: ["Belgium", "Netherlands", "Germany", "Austria"], answer: "Germany" },
    { flag: "https://flagcdn.com/w320/jp.png", options: ["South Korea", "Japan", "China", "Vietnam"], answer: "Japan" }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("flag").src = questions[currentQuestion].flag;
        document.getElementById("options").innerHTML = "";

        questions[currentQuestion].options.forEach(option => {
            let button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option");
            button.onclick = () => checkAnswer(option);
            document.getElementById("options").appendChild(button);
        });
    } else {
        document.querySelector(".container").innerHTML = `<h2>Game Over! Your score: ${score}/${questions.length}</h2>`;
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

loadQuestion();
