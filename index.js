const hymns = ["Hymn0", "Hymn1", "Hymn2", "Hymn3", "Hymn4", "Hymn555555", "Hymn6", "Hymn7", "Hymn8", "Hymn9", "Hymn10000000 00000000000000", "Hymn11", "Hymn12", "Hymn13", "Hymn14", "Hymn155555555555 55555555555555", "Hymn16", "Hymn17", "Hymn18", "Hymn19"];
const firstBtn = document.querySelector(".btn")
const container = document.querySelector(".hymnContainer");
let count = 0;
let start;
var outputElement = document.getElementById('output');
let windowHeightDividedByThisNumber = 86;
// let buttonNumber = Math.ceil(window.innerHeight / 79.52);
let buttonNumber = Math.ceil(window.innerHeight / windowHeightDividedByThisNumber);
generateButtonsOriginalButtons();
window.addEventListener("resize", () => {
    generateButtonsOriginalButtons();
    addIDtoGeneratedButtons();
})

container.addEventListener("click", addClassOpenToButton);

function addClassOpenToButton() {
    console.log(event.target)
    const clickedButton = event.target;
    clickedButton.classList.toggle("open");
}
// container.removeEventListener("click",function);
//Generate the buttons
function generateButtonsOriginalButtons() {
    for (let index = 0; index < buttonNumber / 2; index++) {
        const element = hymns[index];
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.id = ("btn" + index);
        btn.textContent = element;
        document.querySelector(".hymnContainer").append(btn);
    }
    for (let index = Math.ceil(buttonNumber / 2); index < buttonNumber; index++) {
        const element = hymns[index];
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.id = ("btn" + (index - buttonNumber));
        btn.textContent = element;
        document.querySelector(".hymnContainer").append(btn);
    }
}
function addIDtoGeneratedButtons() {
    let buttonNumber = Math.ceil(window.innerHeight / windowHeightDividedByThisNumber);

    for (let index = 0; index < buttonNumber / 2; index++) {
        const element = hymns[index];
        const btn = document.getElementsByClassName("btn")[index];
        btn.id = ("btn" + index);
    }

    for (let index = Math.ceil(buttonNumber / 2); index < buttonNumber; index++) {
        const element = hymns[index];
        const btn = document.getElementsByClassName("btn")[index];
        btn.id = ("btn" + (index - buttonNumber));
    }
}
function addButton(UpOrDown) {

    const btn = document.createElement("button");
    btn.classList.add("btn");


    if (UpOrDown == "up") {
        count--;
        if (count == -1) { count = hymns.length - 1 }
        if (count < -1) { count = count + hymns.length }

        btn.textContent = hymns[count];
        container.insertBefore(btn, document.querySelector(".btn"));

    }
    if (UpOrDown == "down") {

        if (count + buttonNumber == hymns.length) { count = 0 - buttonNumber }
        if (count + buttonNumber > hymns.length) {
            count = count - hymns.length;

        }
        btn.textContent = hymns[count + buttonNumber];
        container.append(btn);
        count++

    }

    paraCount.textContent = count;
}
function removeButton(UpOrDown) {
    if (UpOrDown == "up") {
        document.querySelector(".hymnContainer").removeChild(document.querySelectorAll(".btn")[buttonNumber]);
    }
    if (UpOrDown == "down") {
        document.querySelector(".hymnContainer").removeChild(document.querySelector(".btn"));
    }
    addIDtoGeneratedButtons()
}

document.getElementById("testUp").addEventListener("click", () => {//buttons
    addButton("up");
    removeButton("up");

})
document.getElementById("testDown").addEventListener("click", () => {
    addButton("down");
    removeButton("down");
})

document.querySelector("#windowHeight").textContent = buttonNumber;
//finger gestures
function dragButtonsStartingPosition(e) {
    //prevent mouseUpListerner from firing

    start = e.layerY;
    paraStart.textContent = start;
    container.addEventListener('pointermove', dragButtons);
    container.addEventListener('touchmove', dragButtons);
}
function dragButtons(e) {
    paraMove.textContent = e.layerY;
    if (e.pressure > 0) {
        container.removeEventListener("click", addClassOpenToButton);
    }
    if (e.pressure > 0 & e.layerY > (start + 79.52)) {

        addButton("up");
        removeButton("up");
        // for (let index = 0; index < buttonNumber; index++) {
        //     document.querySelectorAll(".btn")[index].id = ("btn" + index);

        // }

        start = e.layerY;

    }
    if (e.pressure > 0 & e.layerY < (start - 79.52)) {

        addButton("down");
        removeButton("down");
        // for (let index = 0; index < buttonNumber; index++) {
        //     document.querySelectorAll(".btn")[index].id = ("btn" + index);

        // }

        start = e.layerY;
    }


    if (e.pressure == 0) {
        num = 1;
        paraMove.textContent = "";
        container.addEventListener("click", addClassOpenToButton);
    }
    else {
        return;

    }

}
container.addEventListener('pointerdown', dragButtonsStartingPosition, false);
container.addEventListener('touchstart', dragButtonsStartingPosition, false);
//

//wheel control
document.querySelector(".hymnContainer").addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        addButton("up");
        removeButton("up");
    }
    if (event.deltaY < 0) {
        addButton("down");
        removeButton("down");
    }

});



const paraStart = document.createElement("p");
paraStart.classList.add("p");
outputElement.append(paraStart);

const paraMove = document.createElement("p");
paraMove.classList.add("p");
outputElement.append(paraMove);

const paraCount = document.createElement("p");
paraCount.classList.add("p");
outputElement.append(paraCount);





