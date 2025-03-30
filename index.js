// const allHymns = ["Hymn0", "Hymn1", "Hymn2", "Hymn3", "Hymn4", "Hymn555555", "Hymn6", "Hymn7", "Hymn8", "Hymn9", "Hymn10000000 00000000000000", "Hymn11", "Hymn12", "Hymn13", "Hymn14", "Hymn155555555555 55555555555555", "Hymn16", "Hymn17", "Hymn18", "Hymn19"];

const container = document.getElementById("hymnContainer");
const firstBtn = container.querySelector(".btn")
const totalBtns = document.querySelectorAll(".btn");
let count = 0;
let start;


const allHymns = [];





new Hymn("Hymn 0", 624, "", "", "https://www.youtube.com/embed/0H8CPadsVco?si=TEfbe6JW7aAJ_ZVA");
new Hymn("Hymn 1", 138, "", ["satb", "melody", "alto", "tenor", "bass"], "https://www.youtube.com/embed/kFQMDG1j9JQ?si=SB72UyZyoQFlbOMN");
new Hymn("Hymn 2", 135, "", "", "");
new Hymn("Hymn 3", "", "", "", "https://www.youtube.com/embed/KuSJFx6tuZ0?si=D81QimGli0IL0nxJ")
new Hymn("Hymn 4", 432, "", "", "https://www.youtube.com/embed/q5UvY7itnn8?si=tRTETqvYEvcjjvSg");
new Hymn("Hymn 5", 315, "", "", "https://www.youtube.com/embed/JYB2YEuKTLg?si=LSjAqn9RViSsTBHZ");
new Hymn("Hymn 6", 607, "", "", "");
new Hymn("Hymn 7", 116, "", "", "https://www.youtube.com/embed/OeLA1LhqFA4?si=Y_jd5YhNoRzLi9ae");
new Hymn("Hymn 8", 801, "", "", "https://www.youtube.com/embed/cu5zgfKMbAU?si=zNiaaCx1SNydoh4F");
new Hymn("Hymn 9 me a channel of your peace", 898, "", "", "https://www.youtube.com/embed/C8QYMvsp7VI?si=Jpymro5PI9Jj33jb")
new Hymn("Hymn 10 bread of heaven", 662, "", "", "");
new Hymn("Hymn 11 all ye faithful", 159, "", "", "https://www.youtube.com/embed/8ZYZEr3JtZY?si=ZRXVkFmw8cKqnLO1");
new Hymn("Hymn 12", 955, "", "", "https://www.youtube.com/embed/9USHRbF5vbw?si=JVlRT-iodda8kmt0");
new Hymn("Hymn 13", 779, "", "", "");
new Hymn("Hymn 14", "-----", "", "", "https://www.youtube.com/embed/V2HW50l46fo?si=GxFnbCyFOqbDFbwk");
new Hymn("Hymn 15 let all who thirst", 408, "", "", "https://www.youtube.com/embed/MwG6PCWnih0?si=qltwXx5awggq5kJp");
new Hymn("Hymn 16 Mary Conceived In The Grace Of Your Son", 354, "", ["piano"], "");
new Hymn("Hymn 17", 347, "", "", "https://www.youtube.com/embed/NFBb5g2tXgk?si=j58XTHjmY4JXkuFm");
new Hymn("Hymn 18 Christmas night all Christians sing", 134, "", "", "https://www.youtube.com/embed/wxaLyJ5G4zM?si=ntSZgM5_fK_rTuF-");
new Hymn("Hymn 19 Final", 94, "", "", "https://www.youtube.com/embed/OVHkMWwnGWk?si=jIJKo6aQAzqYlVFL")

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
    el.addEventListener('pointerdown', dragButtonsStartingPosition, false);
    el.addEventListener("pointerup", endOfTouch);
    el.addEventListener("click", addClassOpenToButton);

    generateButtonsOriginalButtons();

    window.addEventListener("resize", () => {

        generateButtonsOriginalButtons();

        let buttonNumber = container.querySelectorAll(".btn").length;
        createDebugPara(1, "number of btns = " + buttonNumber);

    })


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
    let buttonNumber = container.querySelectorAll(".btn").length;
    createDebugPara(1, "number of btns = " + buttonNumber);

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
    // generateContentsStage1(event.target.textContent);
    const clickedButton = event.target;
    if (orRemove == "remove") {
        clickedButton.classList.remove("open");
        container.querySelectorAll(".btn").forEach(button => button.classList.remove("blurred"));
        return;
    }
    container.querySelectorAll(".btn").forEach(button => button.classList.toggle("blurred"));
    clickedButton.classList.toggle("open");
    clickedButton.classList.remove("blurred");

}
function generateContentsStage1(clickedButton) {
    let selectedHymn = allHymns.find(x => (x.title == clickedButton));

    console.log(selectedHymn.video)
    if (!selectedHymn.video == "") {
        const btn = document.createElement("button");
        btn.classList.add("innerStage1Btn");
        btn.textContent = "Video";
        event.target.append(btn);
    }

    // console.log(event.target.textContent.findIndex())
}
//Generate the buttons
function generateButtonsOriginalButtons() {
    let index = 0 + container.querySelectorAll(".btn").length;
    while (container.getBoundingClientRect().bottom < window.innerHeight) {


        const btn = document.createElement("button");
        btn.classList.add("btn");
        // btn.id = ("btn" + index);

        btn.textContent = allHymns[index].title;

        document.querySelector(".hymnContainer").append(btn);
        index++;
    }
    removeButton("up");
    addClassestoGeneratedButtons();
    let buttonNumber = container.querySelectorAll(".btn").length;
    createDebugPara(1, "number of btns = " + buttonNumber);

    // for (let index = 0; index < buttonNumber / 2; index++) {
    //     const btn = document.createElement("button");
    //     // const element = allHymns[index];

    //     btn.classList.add("btn");
    //     btn.id = ("btn" + index);
    //     btn.textContent = allHymns[index].title;
    //     document.querySelector(".hymnContainer").append(btn);
    //     // if (btn.getBoundingClientRect().bottom > window.innerHeight) {
    //     //     buttonNumber = index + 1;
    //     // }
    // }

    // for (let index = Math.ceil(buttonNumber / 2); index < buttonNumber; index++) {
    //     const element = allHymns[index];
    //     const btn = document.createElement("button");
    //     btn.classList.add("btn");
    //     btn.id = ("btn" + (index - buttonNumber));
    //     btn.textContent = element.title;
    //     container.append(btn);
    //     // if (btn.getBoundingClientRect().bottom > window.innerHeight) {
    //     //     buttonNumber = index + 1;
    //     // }

    // }

}
function addClassestoGeneratedButtons() {
    let buttonNumber = container.querySelectorAll(".btn").length;

    for (let index = 0; index < buttonNumber / 2; index++) {
        const element = allHymns[index];
        const btn = document.getElementsByClassName("btn")[index];
        btn.classList.add("btn" + (index + 1));
    }

    for (let index = Math.ceil(buttonNumber / 2); index < buttonNumber; index++) {
        const element = allHymns[index];
        const btn = document.getElementsByClassName("btn")[index];
        btn.classList.add("btn" + (index - buttonNumber));
    }
}
var variation = 0;
function addButton(UpOrDown) {
    let buttonNumber = container.querySelectorAll(".btn").length;

    addClassOpenToButton("remove");

    if (UpOrDown == "up") {
        count = count + variation;
        variation = 0;
        index = 0;
        count--;
        if (count == -1) { count = allHymns.length - 1 }
        if (count < -1) { count = count + allHymns.length }
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.textContent = allHymns[count].title;
        container.insertBefore(btn, document.querySelector(".btn"));

    }
    if (UpOrDown == "down") {


        count++
        if (count + buttonNumber + variation - 1 == allHymns.length) { count = 0 - buttonNumber - variation + 1 }
        if (count + buttonNumber + variation - 1 > allHymns.length) {
            count = count - allHymns.length;
        }

        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.textContent = allHymns[count + buttonNumber - 1 + variation].title;
        container.append(btn);
    }
    createDebugPara(2, "count num = " + count)

}
let index = 0;
function removeButton(UpOrDown) {
    const allbtns = container.querySelectorAll(".btn");
    const lastBtn = allbtns[allbtns.length - 1]
    if (UpOrDown == "up") {
        while (container.getBoundingClientRect().bottom > window.innerHeight) {
            container.removeChild(container.lastChild);
        }
    }
    if (UpOrDown == "down") {

        if (container.getBoundingClientRect().bottom < window.innerHeight) {
            variation--;
        }
        while (container.getBoundingClientRect().bottom > window.innerHeight) {
            container.removeChild(container.querySelector(".btn"));
            variation = index;
            index++
        }
        index = variation;
    }
    createDebugPara(5, "variation = " + variation);
    addClassestoGeneratedButtons()
    createDebugPara(1, "Number of btns = " + container.querySelectorAll(".btn").length)
}


//finger gestures
function dragButtonsStartingPosition(e) {
    start = Math.floor(e.y);

    createDebugPara(3, "starting mouse = " + start);
    container.addEventListener("pointermove", dragButtons);

    // if (e.pointerType == "touch") {
    //     createDebugPara(3, "starting touch = " + Math.floor(e.y));
    //     start = Math.floor(e.y);
    // }

}
function dragButtons(e) {
    addClassOpenToButton("remove");
    container.removeEventListener("click", addClassOpenToButton);

    createDebugPara(4, "Movement mouse = " + Math.floor(e.y))

    if (Math.floor(e.y) > (start + document.querySelector(".btn").getBoundingClientRect().bottom)) {

        addButton("up");
        removeButton("up");

        start = Math.floor(e.y);

    }
    if (Math.floor(e.y) < (start - document.querySelector(".btn").getBoundingClientRect().bottom)) {
        addButton("down");
        removeButton("down");




        start = Math.floor(e.y);
    }
}
function endOfTouch() {
    createDebugPara(4, "")
    container.removeEventListener("pointermove", dragButtons);

    setTimeout(() => {//prevent click on pointerup
        container.addEventListener("click", addClassOpenToButton);
    }, 100);
}





