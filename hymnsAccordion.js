var accordion = document.querySelector("article.accordion");
var count = "";
var scrollSpeed = 150; //needs to match 1/2 of CSS Time
// const preTitle1 = allHymns[count-1].title;
// const preTitle2 = allHymns[count+1].title;
// document.querySelector("#prepanel0_title").textContent = preTitle1;
// document.querySelector("#prepanel1_title").textContent = preTitle2;


function Hymn(title,sheetMusic,vocalPart,video){
    this.title = title;
    this.sheetMusic = sheetMusic;
    this.vocalPart = vocalPart;
    this.video = video;
    count++;
}
 const allHymns = [];

 allHymns.push(new Hymn 
    ("Silent Night",
        "./sheetMusic/SilentNight.pdf",
        ["satb", "melody","alto","tenor","bass","piano"],
        "https://www.youtube-nocookie.com/embed/POcDlbYiF9c?si=cBj0zCzSgsO6fK7T"
    ));
allHymns.push(new Hymn 
    ("Here We Bring You",
        "dfdsfd",
        [],
        "https://www.youtube-nocookie.com/embed/POcDlbYiF9c?si=cBj0zCzSgsO6fK7T"
    ));
allHymns.push (new Hymn 
    ("Hark the Herald",
        "",
        ["melody","alto","bass","piano"],
        "dsfsdf"
    ));
count = 0;


//up & down buttons
document.querySelector(".hymnSelect").addEventListener("click", (e)=> {
      
    if (e.target.classList == "up"){
        count--;
        if (count == -1){
            count = allHymns.length-1;
        }
    }
    else{
        count++;
        if (count == allHymns.length){
        count = 0;
        }
    }
scroll(e);   

setTimeout(() => {hymnSelect()
}, scrollSpeed);
})

function hymnSelect (){ //populate titles based upon 'count' number//

const title = allHymns[count].title;
document.querySelector("#panel1_title").textContent = title;
var lastHymn = allHymns[allHymns.length-1].title; //Hark the herald
var secondToLastHymn = allHymns[allHymns.length-2].title; //Here we bring you
var thirdToLastHymn = allHymns[allHymns.length-3].title; // Silent night

//top 2 titles//
if (count == 0){
    document.querySelector("#prepanel1_title").textContent = lastHymn;
    document.querySelector("#prepanel0_title").textContent = secondToLastHymn;
    document.querySelector("#prepanelTop_title").textContent = thirdToLastHymn;
}
else {
    document.querySelector("#prepanel1_title").textContent = allHymns[count-1].title;
    if (count == 1){
        document.querySelector("#prepanel0_title").textContent = lastHymn;
        document.querySelector("#prepanelTop_title").textContent = secondToLastHymn;
    }
    else {
        document.querySelector("#prepanel0_title").textContent = allHymns[count-2].title;
        if (count == 2){
            document.querySelector("#prepanelTop_title").textContent = lastHymn;
        }
        else{
            document.querySelector("#prepanelTop_title").textContent = allHymns[count-3].title;
        }
    }
}

//bottom 2 tittles//
if (count == allHymns.length-1){
    document.querySelector("#prepanel2_title").textContent = allHymns[0].title;
    document.querySelector("#prepanel3_title").textContent = allHymns[1].title;
    document.querySelector("#prepanelBottom_title").textContent = allHymns[2].title;
}
else {
    document.querySelector("#prepanel2_title").textContent = allHymns[count+1].title;
    if (count == allHymns.length-2){
        document.querySelector("#prepanel3_title").textContent = allHymns[0].title;
        document.querySelector("#prepanelBottom_title").textContent = allHymns[1].title;
    }
    else {
        document.querySelector("#prepanel3_title").textContent = allHymns[count+2].title;
        if (count == allHymns.length-3){
            document.querySelector("#prepanelBottom_title").textContent = allHymns[0].title;
        }else{
            document.querySelector("#prepanelBottom_title").textContent = allHymns[count+3].title;
        }
    }
}
// document.querySelector(".countVisual").textContent = count; //debugging//
}



accordion.addEventListener("click", (e)=> {

    const activePanel = e.target.closest(".accordion_panel");
    const specificClick = e.target.closest(".closePanel");
    const audioButton = e.target.closest(".audioSelection")
    const title = allHymns[count].title;
if (!activePanel) return;
if (specificClick) {
        closeAccordion(specificClick);
    }
else if (audioButton){
    const allLights = audioButton.parentElement.parentElement.querySelectorAll(".audioCategory__light");
    const accordionContent = audioButton.parentElement.parentElement.parentElement;
    console.log(audioButton);
    const partTitle = audioButton.innerHTML;
    const audioDescription = title + " - " + partTitle;   
    const filename = "./audio/" + title.replace(/ /g, "") + "-" + partTitle + ".mp3";
    

    document.querySelector("#mediaPlayer__light").removeAttribute("class");
    // document.querySelector("#title").removeAttribute("class");

    for(let index = 0; index < allLights.length; index++) {
        const element = allLights[index];
        element.classList.remove("selected");
        
    }
    switch (audioButton.innerHTML) {
        case capitalize(allHymns[count].vocalPart[0]):
            console.log(audioButton.innerHTML)
            /* Add selection light to SATB button */
            audioButton.parentElement.querySelector(".satb").classList.add("selected");
            /* Add selection light to Media Player button */
            accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "satb");
            //Add audio file + audio description
            accordionContent.querySelector("audio").setAttribute("src",filename);
            accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;
            
            break;
        case capitalize(allHymns[count].vocalPart[1]):
            /* Add selection light to SATB button */
            audioButton.parentElement.querySelector(".melody").classList.add("selected");
            /* Add selection light to Media Player button */
            accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "melody");
            //Add audio file + audio description
            accordionContent.querySelector("audio").setAttribute("src",filename);
            accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;
            
            break;
        case capitalize(allHymns[count].vocalPart[2]):
            /* Add selection light to SATB button */
            audioButton.parentElement.querySelector(".alto").classList.add("selected");
            /* Add selection light to Media Player button */
            accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "alto");
            //Add audio file + audio description
            accordionContent.querySelector("audio").setAttribute("src",filename);
            accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;
            
            break;
        case capitalize(allHymns[count].vocalPart[3]):
            /* Add selection light to SATB button */
            audioButton.parentElement.querySelector(".tenor").classList.add("selected");
            /* Add selection light to Media Player button */
            accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "tenor");
            //Add audio file + audio description
            accordionContent.querySelector("audio").setAttribute("src",filename);
            accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;
            
            break;
        case capitalize(allHymns[count].vocalPart[4]):
            /* Add selection light to SATB button */
            audioButton.parentElement.querySelector(".bass").classList.add("selected");
            /* Add selection light to Media Player button */
            accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "bass");
            //Add audio file + audio description
            accordionContent.querySelector("audio").setAttribute("src",filename);
            accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;
            
            break;
        case capitalize(allHymns[count].vocalPart[5]):
            /* Add selection light to SATB button */
            audioButton.parentElement.querySelector(".piano").classList.add("selected");
            /* Add selection light to Media Player button */
            accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "piano");
            //Add audio file + audio description
            accordionContent.querySelector("audio").setAttribute("src",filename);
            accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;
            
            break;
        
        default:
            break;
    }
}

    else{
    toggleAccordion (activePanel);
    }
})

function toggleAccordion (panelToActivate){
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents = panelToActivate.parentElement.querySelectorAll(".accordion_content");
    const panels = panelToActivate.parentElement.querySelectorAll(".accordion_panel");
    const panel1 = document.querySelector(".accordion_panel");
    const headings = panelToActivate.parentElement.querySelectorAll(".panel_heading");
    const prepanels = panelToActivate.parentElement.parentElement.querySelectorAll(".prepanel");

//choose panels to active based on Object info
    if (panelToActivate.id == "panel1" ) {
        
        
        panelToActivate.parentElement.parentElement.lastElementChild.classList.add("hidden"); //hide hymn selection buttons
        panelToActivate.classList.add("open"); // open 1st panel to add filter effect
        if (allHymns[count].sheetMusic.length == 0){
            panelToActivate.parentElement.querySelector("#panel2").classList.add("hidden");
        }else{panelToActivate.parentElement.querySelector("#panel2").classList.remove("hidden");}
        
        if (allHymns[count].vocalPart.length == 0){
            panelToActivate.parentElement.querySelector("#panel3").classList.add("hidden");
        }else{panelToActivate.parentElement.querySelector("#panel3").classList.remove("hidden");}
        
        if (allHymns[count].video.length == 0){
            panelToActivate.parentElement.querySelector("#panel4").classList.add("hidden");
        }else{panelToActivate.parentElement.querySelector("#panel4").classList.remove("hidden");}
        
        const populatedPanels = panelToActivate.parentElement.querySelectorAll(".accordion_panel");
            for (let index = 0; index < populatedPanels.length; index++) {
                const element = populatedPanels[index].classList.add("accordion_open");
              }
panelToActivate.querySelector("#firstX").classList.remove("hidden");//add 'x' to 1st panel
//blur out background panels why accordion opens//
for (let index = 0; index < prepanels.length; index++) {
    const element = prepanels[index];
    element.classList.add("backgroundpanels");
}


for (let index = 0; index < panels.length; index++) { //add margin-top to panels once open
    const element = panels[index];
    const otherElement = headings[index];
    element.classList.add("plusGap");//adding margin-top to panels
    otherElement.classList.add("visible");//visibility for headings
}
                // panelToActivate.classList.add("open"); 
    }
    //fully open selected panel
    else {
        switch (panelToActivate.id) {
            case "panel2":
                panelToActivate.lastElementChild.firstElementChild.setAttribute("src",allHymns[count].sheetMusic);
                break;
            case "panel3":
                const allListItems = panelToActivate.lastElementChild.firstElementChild.querySelectorAll("li");
                for (let index = 0; index < allHymns[count].vocalPart.length; index++) { //populate audio parts
                    const element = allListItems[index];
                    element.classList.add("visible");
                    element.lastElementChild.innerHTML = capitalize(allHymns[count].vocalPart[index]);
                }
                
                break;
            case "panel4":
                panelToActivate.lastElementChild.firstElementChild.setAttribute("src",allHymns[count].video);
                break;
        
            default:
                break;
        }


        panelToActivate.classList.add("open");//open panel
        panelToActivate.querySelector(".closePanel").classList.remove("hidden");//add "x" to panel

        //hide all panels except selected + panel1
    for (let index = 1; index < panels.length; index++) {
        const element = panelToActivate.parentElement.querySelectorAll(".accordion_panel")[index];
        const anotherElement = headings[index];
        element.classList.add("visibility");
        element.classList.remove("plusGap");
        anotherElement.classList.remove("visible");
    }
    panelToActivate.classList.remove("visibility");//display:block to selected panel
    panelToActivate.classList.add("plusGap");//add gap to selected panel
    panelToActivate.firstElementChild.classList.add("visible");
    }
         
} 
            
 


function closeAccordion (closeButton){
    const allButtons = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".closePanel");
    const panels = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".accordion_panel");
    const headings = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".panel_heading");
    const clickedPanel = closeButton.parentElement.parentElement.querySelector(".accordion_panel");
    const prepanels = closeButton.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".prepanel");
    
    if (closeButton.id == "firstX"){
        closeButton.parentElement.parentElement.parentElement.parentElement.lastElementChild.classList.remove("hidden");

        for (let index = 0; index < panels.length; index++) {
            const element = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".accordion_panel")[index];
            const element2 = panels[index];
            const otherElement = headings[index];
            element.classList.remove("accordion_open");
            element.classList.remove("open");
            element2.classList.remove("plusGap"); //remove margin-top to panels once open
            otherElement.classList.remove("visible");
            element.classList.remove("visibility");
            allButtons[index].classList.add("hidden");
        }
        for (let index = 0; index < prepanels.length; index++) {
            const element = prepanels[index];
            element.classList.add("transition");
            element.classList.remove("backgroundpanels");
            
            }
            
    }
    else {
        // console.log(clickedPanel);
        // clickedPanel.classList.add("hidden");
        closeButton.parentElement.parentElement.classList.remove("open");
        closeButton.classList.add("hidden");
        

        for (let index = 0; index < panels.length; index++) {
            const element = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".accordion_panel")[index];
            element.classList.remove("visibility");
            element.classList.add("plusGap");
            element.firstElementChild.classList.add("visible");
        }
        
    }
}

//manipulate strings//
function capitalizer (sentence, operator){
    return operator(sentence);
}

function capitalize(sentence){ //capitalize 1st letter
   return sentence[0].toUpperCase() + sentence.substring(1);
}
function firstWord (sentence){
    return sentence[0].toUpperCase() + sentence.substring(1);
    
}
function allWords (sentence){
    let words = sentence.split(" ");
    for (let index = 0; index < words.length; index++) {
      words[index] = words[index][0].toUpperCase() + words[index].substring(1);
    }
    return words.join(" ");
}
function allLowerCase (sentence){
    return sentence.toLowerCase();
}
function removeSpaces (sentence){
    let words = sentence.split(" ");
    words = words.join("");
    return words;
}


function scroll (e){
    const allPanels = e.target.parentElement.parentElement.querySelectorAll(".accordion_panel");
    
    //add transition time for scroll function
    for (let index = 0; index < allPanels.length; index++) {
        const element = allPanels[index];
        element.classList.remove("transition")
    }
    // e.target.parentElement.parentElement.querySelectorAll(".accordion_open")[3].classList.add("transition"); //add blur filter to panels either side of panel1
       
    console.log(e.target);
    console.log(e.target.classList.value);
    console.log(e.target.parentElement.parentElement.querySelectorAll(".accordion_panel"));
    if (e.target.classList.value == "up"){
        for (let index = 0; index < allPanels.length; index++) {
            const element = allPanels[index];
            element.classList.toggle("transformDown");
        
    }
    setTimeout(() => {for (let index = 0; index < allPanels.length; index++) {
        const element = allPanels[index];
        
        element.classList.toggle("transformDown");
        // element.classList.remove("transition");
    }
    }, scrollSpeed);
    
    }
    else {
        for (let index = 0; index < allPanels.length; index++) {
            const element = allPanels[index];
            element.classList.toggle("transformUp");
            // element.classList.remove("transition");
        }
    setTimeout(() => {for (let index = 0; index < allPanels.length; index++) {
        const element = allPanels[index];
        element.classList.toggle("transformUp");
        
    }
    }, scrollSpeed);
}
}

