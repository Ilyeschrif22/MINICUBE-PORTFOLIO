console.log("js")
const logo = document.getElementById('hamburger-icon');
const panel = document.getElementById('slidePanel');
const closeBtn = document.getElementById('closeBtn');

logo.addEventListener('click', () => {
    panel.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    panel.classList.remove('active');
});