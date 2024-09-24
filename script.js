const quesJSON = [
    {
      correctAnswer: 'Three ',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      correctAnswer: 'L. Frank Baum',
      options: [
        'Suzanne Collins',
        'James Fenimore Cooper',
        'L. Frank Baum',
        'Donna Leon',
      ],
      question:
        "Which author wrote 'The Wonderful Wizard of Oz'?",
    },
    {
      correctAnswer: 'Atlanta United',
      options: [
        'Atlanta United',
        'Atlanta Impact',
        'Atlanta Bulls',
        'Atlanta Stars',
      ],
      question:
        'Which of these is a soccer team based in Atlanta?',
    },
    {
      correctAnswer: 'A Nanny',
      options: [
        'A Sow',
        'A Lioness',
        'A Hen',
        'A Nanny',
      ],
      question: 'A female goat is known as what?',
    },
    {
      correctAnswer: 'P. L. Travers',
      options: [
        'J. R. R. Tolkien',
        'P. L. Travers',
        'Lewis Carroll',
        'Enid Blyton',
      ],
      question:
        "Which author wrote 'Mary Poppins'?",
    },
  ];

let score = 0;
let currentQuestion = 0;

const quesEle = document.getElementById("question");
const optionEle = document.getElementById("options");
const scoreEle = document.getElementById("score");
const nextEle = document.getElementById("next");
const totalScore = quesJSON.length;

showQuestion();

nextEle.addEventListener('click', () => {
    scoreEle.textContent = `Score: ${score} / ${totalScore}`;
    nextQuestion();
});

function showQuestion(){
    const {correctAnswer, options, question} = quesJSON[currentQuestion];

    quesEle.textContent = question;

    const shuffledOptions = shuffleOptions(options);

    shuffledOptions.forEach((option) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        optionEle.appendChild(btn);

        btn.addEventListener('click', () => {
            if(option === correctAnswer) {
                score++;
            } else {
                score -= 0.25;
            }
            console.log(score);
            scoreEle.textContent = `Score: ${score} / ${totalScore}`;
            nextQuestion();
        });
    });
}

function nextQuestion() {
    currentQuestion++;
    optionEle.innerHTML = "";
    if(currentQuestion >= quesJSON.length) {
        quesEle.textContent = "Quiz Completed!!!";
        nextEle.remove();
    } else {
        showQuestion();
    }
}

function shuffleOptions(options){
    for(let i = options.length-1; i >= 0; i--){
        const j = Math.floor(Math.random() * i+1);
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}