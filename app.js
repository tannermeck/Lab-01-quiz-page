import { isYes } from './utils.js';

const quizButton = document.getElementById('click-me');
const results = document.getElementById('results');

quizButton.addEventListener('click', ()=> {
    const confirmed = confirm('Would you like to start the quiz');
    console.log(confirmed);
    if (confirmed){
        const name = prompt('What is your name?');
        const ans1 = prompt('Do I like sleeping?');
        const ans2 = prompt('Do I like squirrels?');
        const ans3 = prompt('Do I like to bark at the UPS guy?');
        console.log(name, ans1, ans2, ans3);
        let score = 0;
        if (isYes(ans1)) {
            score++;
        }
        if (isYes(ans2)) {
            score++;
        }
        if (isYes(ans3)) {
            score++;
        }
        results.textContent = `${name} your score is ${score}`;
    } else {
        console.log('user cancelled');
    }
});