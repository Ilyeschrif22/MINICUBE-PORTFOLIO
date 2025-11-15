const hamMenu = document.getElementById('hamMenu');
const hamIcon = document.getElementById('hamIcon');
const hamMenuList = document.getElementById('hamList')
const statueImage = document.getElementById('statueImage')
count = 1;

hamMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    hamMenu.classList.toggle('active');

});

const menuLinks = document.querySelectorAll('.menu-content a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        hamMenu.classList.remove('active');
        hamIcon.classList.remove('active');

    });
});



/* ham menu */
hamMenu.addEventListener('click', () => {
})

hamMenu.addEventListener('click', () => {
    if (count % 2 === 0) {
        hamMenuList.classList.add('hidden');
        count++;
    }
    else {
        setTimeout(() => {
            hamMenuList.classList.remove('hidden');
        }, 500);
        count++;
    }
})


