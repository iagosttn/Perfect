const letters = document.querySelectorAll('.letter');

letters.forEach(letter => {
    letter.addEventListener('animationend', () => {
        letter.style.display = 'none';
    });
});

setInterval(() => {
    letters[0].style.display = 'block';
    letters[1].style.display = 'block';
}, 2000);

const heart = document.querySelector('.heart');

setInterval(() => {
heart.style.animationDuration = 
${Math.random() * 2 + 1}s
;
}, 2000);

const outline = document.querySelector('.heart-outline');
const fill = document.querySelector('.heart-fill');

setInterval(() => {
outline.style.animationDuration = 
${Math.random() * 2 + 1}s
;
fill.style.animationDuration = 
${Math.random() * 2 + 1}s
;
}, 2000);