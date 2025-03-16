const newsetup = document.getElementById("newsetup");


newsetup.addEventListener("click", function() {
    let gods = ["true", "false", "random"];
    let index;

    index = Math.floor(Math.random() * gods.length);
    document.getElementById("setup").innerHTML = `God A is ${gods[index]}<br>`;
    gods.splice(index, 1);

    index = Math.floor(Math.random() * gods.length);
    document.getElementById("setup").innerHTML += `God B is ${gods[index]}<br>`;
    gods.splice(index, 1);

    index = Math.floor(Math.random() * gods.length)
    document.getElementById("setup").innerHTML += `God C is ${gods[index]}<br>`;
    gods.splice(index, 1);

    let daJa = ["yes", "no"];

    index = Math.floor(Math.random() * daJa.length);
    document.getElementById("DaJaMeanings").innerHTML = `Da means ${daJa[index]}<br>`;
    daJa.splice(index, 1);

    index = Math.floor(Math.random() * daJa.length);
    document.getElementById("DaJaMeanings").innerHTML += `Ja means ${daJa[index]}<br>`;
    daJa.splice(index, 1);
});

document.getElementById("newRandomAnswer").addEventListener('click', randomAnswer);

function randomAnswer() {
    let answer;
    const daJa = ["da", "ja"];
    answer = daJa[Math.floor(Math.random() * daJa.length)];
    document.getElementById("randomAnswer").innerText = `God Random will answer with ${answer}`;
}

document.getElementById("clearButton").addEventListener('click', clear);

function clear() {
    document.getElementById("setup").innerText = "";
    document.getElementById("DaJaMeanings").innerText = "";
    document.getElementById("randomAnswer").innerText = "";
}