//jshint esversion: 6

// upButton
let upbtn = document.querySelector('.upbtn');

upbtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});