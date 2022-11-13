var current=0;
function questTextHandler(){
    var question=quest[current];
    var textQuest=document.getElementById('questText');
    textQuest.innerHTML=question.text[current][0];
    for (var i=0; i<question.answer.length;i++){
        var button=document.createDocumentFragment('div');
        button.className="questButton";
        button.id = i;
        button.innerHTML=question.answer[i];
        button.add
    }
    for
}