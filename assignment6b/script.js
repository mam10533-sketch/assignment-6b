document.addEventListener('scroll', function() {
    const elementsToAnimate = document.querySelectorAll('.scene:not(.scene-1), .conclusion');
    const triggerPoint = window.innerHeight * 0.75;

    elementsToAnimate.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add('visible');
        }
    });
});


function choose(choice) {
    const scene2Container = document.querySelector('.scene-2');
    const hideTemplate = document.querySelector('.scene-3.hide');
    const freezeTemplate = document.querySelector('.scene-3.freeze');

    scene2Container.style.opacity = '0';

    setTimeout(() => {
        let newContent = '';
        if (choice === 'hide') {
            newContent = hideTemplate.innerHTML;
        } else if (choice === 'freeze') {
            newContent = freezeTemplate.innerHTML;
        }

        scene2Container.innerHTML = newContent;

        scene2Container.style.opacity = '1';

        hideTemplate.remove();
        freezeTemplate.remove();
        
    }, 400); 
}

document.addEventListener('DOMContentLoaded', () => {
    const firstScene = document.querySelector('.scene-1');
    if (firstScene) {
        firstScene.classList.add('visible');
    }
});