// const allHymns = ["Hymn0", "Hymn1", "Hymn2", "Hymn3", "Hymn4", "Hymn555555", "Hymn6", "Hymn7", "Hymn8", "Hymn9", "Hymn10000000 00000000000000", "Hymn11", "Hymn12", "Hymn13", "Hymn14", "Hymn155555555555 55555555555555", "Hymn16", "Hymn17", "Hymn18", "Hymn19"];
const firstBtn = document.querySelector(".btn")
const container = document.getElementById("hymnContainer");
let count = 0;
let start;

let windowHeightDividedByThisNumber = 86;
const allHymns = [];

let buttonNumber = Math.ceil(window.innerHeight / windowHeightDividedByThisNumber);
let numberOfDebugs = 0


new Hymn("In the Breaking of the Bread", 624, "", "", "https://www.youtube.com/embed/0H8CPadsVco?si=TEfbe6JW7aAJ_ZVA");
new Hymn("Infant Holy, Infant lowly", 138, "", ["satb", "melody", "alto", "tenor", "bass"], "https://www.youtube.com/embed/kFQMDG1j9JQ?si=SB72UyZyoQFlbOMN");
new Hymn("It came upon the midnight clear", 135, "", "", "https://www.youtube.com/embed/hx7LJZIXXJo?si=7a3g6ieIB0AZB4MY&start=6&end=129");
new Hymn("Jerusalem", "", "", "", "https://www.youtube.com/embed/KuSJFx6tuZ0?si=D81QimGli0IL0nxJ")
new Hymn("Lay your hands", 432, "", "", "https://www.youtube.com/embed/q5UvY7itnn8?si=tRTETqvYEvcjjvSg");
new Hymn("Lead us, heavenly father", 315, "", "", "https://www.youtube.com/embed/JYB2YEuKTLg?si=LSjAqn9RViSsTBHZ");
new Hymn("Let all mortal flesh", 607, "", "", "");
new Hymn("Long ago prophets knew", 116, "", "", "https://www.youtube.com/embed/OeLA1LhqFA4?si=Y_jd5YhNoRzLi9ae");
new Hymn("Love divine, all loves excelling", 801, "", "", "https://www.youtube.com/embed/cu5zgfKMbAU?si=zNiaaCx1SNydoh4F");
new Hymn("Make me a channel of your peace", 898, "", "", "https://www.youtube.com/embed/C8QYMvsp7VI?si=Jpymro5PI9Jj33jb")
new Hymn("O bread of heaven", 662, "", "", "");
new Hymn("O Come all ye faithful", 159, "", "", "https://www.youtube.com/embed/8ZYZEr3JtZY?si=ZRXVkFmw8cKqnLO1");
new Hymn("O God, our help in ages past", 955, "", "", "https://www.youtube.com/embed/9USHRbF5vbw?si=JVlRT-iodda8kmt0");
new Hymn("O God you search me", 779, "", "", "");
new Hymn("O lady, full of God's own grace", "-----", "", "", "https://www.youtube.com/embed/V2HW50l46fo?si=GxFnbCyFOqbDFbwk");
new Hymn("O let all who thirst", 408, "", "", "https://www.youtube.com/embed/MwG6PCWnih0?si=qltwXx5awggq5kJp");
new Hymn("O Mary Conceived In The Grace Of Your Son", 354, "", ["piano"], "");
new Hymn("O purest of creatures", 347, "", "", "https://www.youtube.com/embed/NFBb5g2tXgk?si=j58XTHjmY4JXkuFm");
new Hymn("On Christmas night all Christians sing", 134, "", "", "https://www.youtube.com/embed/wxaLyJ5G4zM?si=ntSZgM5_fK_rTuF-");
new Hymn("On Jordan's bank", 94, "", "", "https://www.youtube.com/embed/OVHkMWwnGWk?si=jIJKo6aQAzqYlVFL")

function Hymn(title, hymnNumber, sheetMusic, vocalPart, video) {
    this.title = title;
    this.hymnNumber = hymnNumber;
    this.sheetMusic = sheetMusic;
    this.vocalPart = vocalPart;
    this.video = video;
    count++;
    allHymns.push(this);
}


function startup() {

    const el = container;
    const testUpBtn = document.getElementById("testUp");
    const testDownBtn = document.getElementById("testDown");
    el.addEventListener('touchstart', dragButtonsStartingPosition, false);
    // el.addEventListener("touchend", handleEnd);
    // el.addEventListener("touchcancel", handleCancel);
    el.addEventListener("touchmove", dragButtons);
    el.addEventListener("pointermove", dragButtons);
    el.addEventListener('pointerdown', dragButtonsStartingPosition, false);

    el.addEventListener("click", addClassOpenToButton);

    generateButtonsOriginalButtons();

    window.addEventListener("resize", () => {
        generateButtonsOriginalButtons();
        addIDtoGeneratedButtons();
        buttonNumber = Math.ceil(window.innerHeight / windowHeightDividedByThisNumber);
        createDebugPara(1, "number of btns = " + buttonNumber);

    })
    createDebugPara(1, "number of btns = " + buttonNumber);
    createDebugPara(2, "count num = " + count)
    el.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            addButton("up");
            removeButton("up");
        }
        if (event.deltaY < 0) {
            addButton("down");
            removeButton("down");
        }

    });
    testUpBtn.addEventListener("click", () => {//buttons
        addButton("up");
        removeButton("up");

    })
    testDownBtn.addEventListener("click", () => {
        addButton("down");
        removeButton("down");
    })


}
document.addEventListener("DOMContentLoaded", startup);

function createDebugPara(lineNumber, content) {
    const outputElement = document.getElementById('output');
    const allParas = outputElement.querySelectorAll("p")
    if (allParas.length < lineNumber) {
        // numberOfDebugs++;
        const debugNumber = document.createElement("p")
        debugNumber.classList.add("p");
        // debugNumber.id = numberOfDebugs;

        outputElement.append(debugNumber);
        debugNumber.textContent = content;
    }

    else {
        allParas[lineNumber - 1].textContent = content;
    }
}

function addClassOpenToButton(orRemove) {

    const clickedButton = event.target;
    if (orRemove == "remove") {
        clickedButton.classList.remove("open");
        return;
    }
    clickedButton.classList.toggle("open");
}

//Generate the buttons
function generateButtonsOriginalButtons() {

    for (let index = 0; index < buttonNumber / 2; index++) {
        // const element = allHymns[index];
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.id = ("btn" + index);
        btn.textContent = allHymns[index].title;
        document.querySelector(".hymnContainer").append(btn);
    }
    for (let index = Math.ceil(buttonNumber / 2); index < buttonNumber; index++) {
        const element = allHymns[index];
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.id = ("btn" + (index - buttonNumber));
        btn.textContent = element.title;
        container.append(btn);

    }
}
function addIDtoGeneratedButtons() {
    let buttonNumber = Math.ceil(window.innerHeight / windowHeightDividedByThisNumber);

    for (let index = 0; index < buttonNumber / 2; index++) {
        const element = allHymns[index];
        const btn = document.getElementsByClassName("btn")[index];
        btn.id = ("btn" + index);
    }

    for (let index = Math.ceil(buttonNumber / 2); index < buttonNumber; index++) {
        const element = allHymns[index];
        const btn = document.getElementsByClassName("btn")[index];
        btn.id = ("btn" + (index - buttonNumber));
    }
}
function addButton(UpOrDown) {
    addClassOpenToButton("remove");
    const btn = document.createElement("button");
    btn.classList.add("btn");


    if (UpOrDown == "up") {
        count--;
        if (count == -1) { count = allHymns.length - 1 }
        if (count < -1) { count = count + allHymns.length }

        btn.textContent = allHymns[count].title;
        container.insertBefore(btn, document.querySelector(".btn"));

    }
    if (UpOrDown == "down") {

        if (count + buttonNumber == allHymns.length) { count = 0 - buttonNumber }
        if (count + buttonNumber > allHymns.length) {
            count = count - allHymns.length;

        }
        btn.textContent = allHymns[count + buttonNumber].title;
        container.append(btn);
        count++

    }
    createDebugPara(2, "count num = " + count)

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


//finger gestures
function dragButtonsStartingPosition(e) {
    console.log(e.type)
    start = Math.floor(e.clientY);
    createDebugPara(3, "starting press = " + start);

    if (e.pointerType == "touch") {
        createDebugPara(5, "1st touch = " + Math.floor(e.clientY))
    }

}
function dragButtons(e) {
    e.preventDefault();

    if (e.pointerType == "touch") {
        createDebugPara(6, "movement touch = " + Math.floor(e.clientY))
    }

    createDebugPara(4, "Movement num = " + Math.floor(e.clientY))
    if (e.pointerType == "mouse") {
        if (e.pressure == 0.5) {
            addClassOpenToButton("remove");
            container.removeEventListener("click", addClassOpenToButton);
        }
        if (e.pressure == 0.5 & Math.floor(e.clientY) > (start + 79.52)) {

            addButton("up");
            removeButton("up");

            start = Math.floor(e.clientY);

        }
        if (e.pressure == 0.5 & Math.floor(e.clientY) < (start - 79.52)) {

            addButton("down");
            removeButton("down");


            start = Math.floor(e.clientY);
        }


        if (e.pressure == 0) {

            createDebugPara(4, "")
            container.addEventListener("click", addClassOpenToButton);
        }
        else {
            return;
        }
    }
    if (e.pointerType == "touch") {
        addClassOpenToButton("remove");
        container.removeEventListener("click", addClassOpenToButton);

        if (Math.floor(e.clientY) > (start + 79.52)) {

            addButton("up");
            removeButton("up");

            start = Math.floor(e.clientY);
            container.addEventListener("click", addClassOpenToButton);

        }
        if (Math.floor(e.clientY) < (start - 79.52)) {

            addButton("down");
            removeButton("down");


            start = Math.floor(e.clientY);
            container.addEventListener("click", addClassOpenToButton);
        }
    }

}






