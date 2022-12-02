let containerElement1 = document.getElementById("visible1");
let containerElement2 = document.getElementById("visible2");
let inputElement1 = document.getElementById("i1");
let inputElement2 = document.getElementById("i2");
let inputElement3 = document.getElementById("i3");
let inputElement4 = document.getElementById("i4");
let inputElement5 = document.getElementById("i5");
let inputElement6 = document.getElementById("i6");
let inputElement7 = document.getElementById("i7");
let inputElement8 = document.getElementById("i8");
let inputElement9 = document.getElementById("i9");
let gameScoreElement = document.getElementById("con10");
let gameElement = document.getElementById("game");
let victory = document.getElementById("right");
let histo = document.getElementById("left");
let miracle = null;
let listArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
let list3 = [];
let list4 = [];

function isSuperset(setA, subset) {
    for (var elem of subset) {
        if (!setA.has(elem)) {
            return false;
        }
    }
    return true;
}

function play(event) {
    if (event.key === "x" || event.key === "X" && miracle === null) {
        let b = event.target;
        let c = b.id;
        list3.push(parseInt(c[1]));
    }
    if (event.key === "o" || event.key === "O" && miracle === null) {
        let d = event.target;
        let e = d.id;
        list4.push(parseInt(e[1]));
    }
    if (miracle !== null) {
        alert("GAME OVER ###################### RESTART GAME");
        return;
    } else if (list3.length >= 3 || list4.length >= 3) {
        for (let a of listArray) {
            var setA = new Set(list3);
            var setB = new Set(a);
            let result = isSuperset(setA, setB);
            if (result === true) {
                miracle = "X WINS";
                gameScoreElement.textContent = "X WINS";
                return;

            }
        }
        for (let a of listArray) {
            var setC = new Set(list4);
            var setD = new Set(a);
            let result = isSuperset(setC, setD);
            if (result === true) {
                miracle = "O WINS";
                gameScoreElement.textContent = "O WINS";
                return;
            }
        }
    }
}

function rock() {
    containerElement2.classList.toggle("con11");
    gameElement.classList.toggle("gamer");
    inputElement1.value = "";
    inputElement2.value = "";
    inputElement3.value = "";
    inputElement4.value = "";
    inputElement5.value = "";
    inputElement6.value = "";
    inputElement7.value = "";
    inputElement8.value = "";
    inputElement9.value = "";
    gameScoreElement.textContent = "";
    miracle = null;
    list3 = [];
    list4 = [];
}

function startGame() {
    gameElement.classList.toggle("gamer");
    containerElement2.classList.toggle("con11");
}
inputElement1.addEventListener("keydown", play);
inputElement2.addEventListener("keydown", play);
inputElement3.addEventListener("keydown", play);
inputElement4.addEventListener("keypress", play);
inputElement5.addEventListener("keydown", play);
inputElement6.addEventListener("keydown", play);
inputElement7.addEventListener("keydown", play);
inputElement8.addEventListener("keydown", play);
inputElement9.addEventListener("keydown", play);