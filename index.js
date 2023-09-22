let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count ++;
    countEl.textContent = count;
}

function save() {
    if (saveEl.textContent !== "Previous entries: ") {
        saveEl.textContent += " - ";
    }

    saveEl.textContent += count;
    count = 0;
    countEl.textContent = count;
}