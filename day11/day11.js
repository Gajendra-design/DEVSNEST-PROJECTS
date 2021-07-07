let countdown = document.querySelector("#countdowm");
let qnas = document.querySelector('.qnacontainer');
let previousbtn = document.querySelector('#previous');
let submitbtn = document.querySelector('#submit');
let nextbtn = document.querySelector('#next');
let qunaarray = [{
    question: 'how are you',
    optionA: 'fine',
    optionB: 'not fine',
    optionC: 'worst stage in mulife',
    optionD: "don't know"
}, {
    question: 'what do you do',
    optionA: 'B.TECH',
    optionB: 'MBBS',
    optionC: 'B.SC',
    optionD: "CA"
}, {
    question: 'what colour you like',
    optionA: 'red',
    optionB: 'yellow',
    optionC: 'white',
    optionD: "blue"
}, {
    question: 'what is your favorite anime',
    optionA: 'death note',
    optionB: 'one piece',
    optionC: 'naruto',
    optionD: "attock on titons"
}, {
    question: 'what is your favourite show',
    optionA: 'dark',
    optionB: 'game of throns',
    optionC: 'breaking bads',
    optionD: "money heiest"
}]
let i = 0;
let html = `<div>${qunaarray[i].question}</div>
<div>${qunaarray[i].optionA}</div>
<div>${qunaarray[i].optionB}</div>
<div>${qunaarray[i].optionC}</div>
<div>${qunaarray[i].optionD}</div>`;
qnas.innerHTML = html;
nextbtn.addEventListener('click', () => {
    if (i < qunaarray.length) {
        i++;
        html = `<div>${qunaarray[i].question}</div>
    <div>${qunaarray[i].optionA}</div>
    <div>${qunaarray[i].optionB}</div>
    <div>${qunaarray[i].optionC}</div>
    <div>${qunaarray[i].optionD}</div>`;
        qnas.innerHTML = html;
        console.log(html);
    }
    else {
        html = `<div> no more questions</div>`;
        qnas.innerHTML = html;
        console.log('no more question');
    }
});
previousbtn.addEventListener('click', () => {
    if (i >0 && i <= qunaarray.length) {
        i--;
        html = `<div>${qunaarray[i].question}</div>
    <div>${qunaarray[i].optionA}</div>
    <div>${qunaarray[i].optionB}</div>
    <div>${qunaarray[i].optionC}</div>
    <div>${qunaarray[i].optionD}</div>`;
        qnas.innerHTML = html;
        console.log(html);
    }

});