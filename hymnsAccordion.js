var accordion = document.querySelector("article.accordion");
var count = "";

function Hymn(title,vocalPart,sheetMusic,video){
    this.title = title;
    this.vocalPart = vocalPart;
    this.sheetMusic = sheetMusic;
    this.video = video;
    count++; 
 }
 const allHymns = [];

 allHymns.push(new Hymn 
    ("Silent Night",
        ["satb", "melody","alto","tenor","bass","piano"],
        "./sheetMusic/SilentNight.pdf",
        "https://www.youtube-nocookie.com/embed/POcDlbYiF9c?si=cBj0zCzSgsO6fK7T"
    ));
allHymns.push(new Hymn 
    ("Here We Bring You",
        [],
        "dfdsfd",
        "https://www.youtube-nocookie.com/embed/POcDlbYiF9c?si=cBj0zCzSgsO6fK7T"
    ));
allHymns.push (new Hymn 
    ("Hark the Herald",
        [],
        "",
        "dsfsdf"
    ));
count = 0;
const title = allHymns[count].title;

//up & down buttons
document.querySelector(".hymnSelect").addEventListener("click", (e)=> {
    
    console.log(e.target.classList);
    if (e.target.classList == "up"){
        console.log("going up");
        count--;
        if (count == -1){
            count = allHymns.length-1;
        }
    }
    else {
        console.log("going down");
        count++;
    if (count == allHymns.length){
        count = 0;
    }
    }
})

document.querySelector("#panel1_title").textContent = title;
accordion.addEventListener("click", (e)=> {

    

    const activePanel = e.target.closest(".accordion_panel");
    const specificClick = e.target.closest(".closePanel");
    const audioButton = e.target.closest(".audioSelection")
   

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
        case "SATB":
            /* Add selection light to SATB button */
            audioButton.parentElement.querySelector(".satb").classList.add("selected");
            /* Add selection light to Media Player button */
            accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "satb");
            //Add audio file + audio description
            accordionContent.querySelector("audio").setAttribute("src",filename);
            accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;
            
            break;
        case "Melody":
            /* Add selection light to SATB button */
            audioButton.parentElement.querySelector(".melody").classList.add("selected");
            /* Add selection light to Media Player button */
            accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "melody");
            //Add audio file + audio description
            accordionContent.querySelector("audio").setAttribute("src",filename);
            accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;
            
            break;
        case "Alto":
            /* Add selection light to SATB button */
            audioButton.parentElement.querySelector(".alto").classList.add("selected");
            /* Add selection light to Media Player button */
            accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "alto");
            //Add audio file + audio description
            accordionContent.querySelector("audio").setAttribute("src",filename);
            accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;
            
            break;
        case "Tenor":
            /* Add selection light to SATB button */
            audioButton.parentElement.querySelector(".tenor").classList.add("selected");
            /* Add selection light to Media Player button */
            accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "tenor");
            //Add audio file + audio description
            accordionContent.querySelector("audio").setAttribute("src",filename);
            accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;
            
            break;
        case "Bass":
            /* Add selection light to SATB button */
            audioButton.parentElement.querySelector(".bass").classList.add("selected");
            /* Add selection light to Media Player button */
            accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "bass");
            //Add audio file + audio description
            accordionContent.querySelector("audio").setAttribute("src",filename);
            accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;
            
            break;
        case "Piano":
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
    const contents = panelToActivate.parentElement.querySelectorAll(".accordion_content p");
    const panels = panelToActivate.parentElement.querySelectorAll(".accordion_panel");
    const panel1 = document.querySelector(".accordion_panel");
    const headings = panelToActivate.parentElement.querySelectorAll(".panel_heading");


//choose panels to active based on Object info
    if (panelToActivate.id == "panel1" ) {
        if (allHymns[count].sheetMusic.length == 0){
            panelToActivate.parentElement.querySelector("#panel2").classList.add("hidden");
        }
        if (allHymns[count].vocalPart.length == 0){
            panelToActivate.parentElement.querySelector("#panel3").classList.add("hidden");
        } 
        if (allHymns[count].video.length == 0){
            panelToActivate.parentElement.querySelector("#panel4").classList.add("hidden");
        }
        
        const populatedPanels = panelToActivate.parentElement.querySelectorAll(".accordion_panel");
            for (let index = 0; index < populatedPanels.length; index++) {
                const element = populatedPanels[index].classList.add("accordion_open");
              }
panelToActivate.querySelector("#firstX").classList.remove("hidden");//add 'x' to 1st panel
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

        panelToActivate.classList.add("open");//open panel
        panelToActivate.querySelector(".closePanel").classList.remove("hidden");//add "x" to panel

        //display:none to all panels except selected + panel1
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
    
    const panels = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".accordion_panel");
    const headings = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".panel_heading");
    const clickedPanel = closeButton.parentElement.parentElement.querySelector(".accordion_panel");
    if (closeButton.id == "firstX"){
        for (let index = 0; index < panels.length; index++) {
            const element = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".accordion_panel")[index];
            element.classList.remove("accordion_open");
            element.classList.remove("open");
        }
        closeButton.classList.add("hidden");
        for (let index = 0; index < panels.length; index++) { //remove margin-top to panels once open
            const element = panels[index];
            const otherElement = headings[index];
            element.classList.remove("plusGap");
            otherElement.classList.remove("visible");
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


