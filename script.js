const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yesBtn');
const noBtn = document.querySelector('.noBtn');

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'YEEEEEEEY!! see You';
    gif.src ='https://media1.giphy.com/avatars/evanredborja/1CfWierMfFFD.gif';
});

noBtn.addEventListener('mouseover', () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
})