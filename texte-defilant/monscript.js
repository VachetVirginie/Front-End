{
    let text = document.querySelector('.knockout-text');
    let span = text.firstElementChild;
    let spanWidth = span.clientWidth;

    span.style.setProperty('--x', - spanWidth + 'px');

    text.classList.add('slide');
    span.addEventListener('transitionend', () => {
        text.classList.add('end');
        span.textContent = 'So young so bad';
        span.style.setProperty('--x', 0);
        setTimeout( () => {
            text.style.mixBlendMode = 'normal';
        }, 2000);
    }, false);
}