const inputEl = document.querySelector('#font-size-control');

const textSpan = document.querySelector("#text");


inputEl.addEventListener('input', function () {
    textSpan.style.fontSize = inputEl.value + "px";
});

