var currentQuest = 0;
function answerClickHandler(answer, ask) {
    document.getElementById("audio").play();
    if (answer) {
        if (ask.GameOver === true) {
            document.getElementById('question-title').innerHTML = question.title;
            document.getElementById('question-description').innerHTML = question.description;
            document.getElementById("audio").play();
            console.log('yes');
            currentQuest = 0;
            return setQuest();
        }
        for (var i = 0; i < ask.answers.length; i++) {
            if (answer.toLowerCase() === ask.answers[i].text) {
                currentQuest = ask.answers[i].Goto;
                return setQuest();
            }
        }
        if (ask.GoToWrong) {
            current = ask.GoToWrong;
            return setQuest();
        }

    }
}
function genAsk(ask) {
    var div = document.createElement('div');
    var span = document.createElement('span');
    span.innerHTML = ask.question;
    var input = document.createElement('input');
    input.placeholder = 'Ответ пиши!';
    input.classList.add('RPG-input');
    var button = document.createElement('button');
    button.innerHTML = 'Ответ';
    button.addEventListener('click', function () { answerClickHandler(input.value, ask) });
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(button);
    document.getElementById('question-asks').appendChild(div);
}


function setQuest() {
    var question = quest[currentQuest];
    document.getElementById('question-title').innerHTML = question.title;
    document.getElementById('question-description').innerHTML = question.description;
    document.getElementById('question-image').src = question.image;
    document.getElementById('question-asks').innerHTML = '';
    console.log(question.asks[0]);
    for (var i = 0; i < question.asks.length; i++) {
        genAsk(question.asks[i]);
    }
}