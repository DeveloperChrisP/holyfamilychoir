var accordion = document.querySelector("article.accordion");
var wrapper = document.querySelector(".wrapper");
var count;
var scrollSpeed = 100; //needs to match 1/2 of CSS Time

let allHymns = [];

const queuedVideos = [];
function Hymn(title,hymnNumber,sheetMusic,vocalPart,video){
    this.title = title;
    this.hymnNumber = hymnNumber;
    this.sheetMusic = sheetMusic;
    this.vocalPart = vocalPart;
    this.video = video;
    count++;
    allHymns.push(this);
}
allLitergies = [];


function Litergy (date,occasion,year,selector,hymn){
    this.date = date;
    this.occasion = occasion;
    this.year = year;
    this.selector = selector;
    this.hymn = hymn;

    date.setHours(10);date.setMinutes(30);
    allLitergies.push(this);
} 

new Hymn ("Alleluia, sing to Jesus",644,"","","https://www.youtube.com/embed/UJDWFYIkBns?si=FjlGK0j-FEm0vRXU");
new Hymn ("Amazing Grace",846,"","","https://www.youtube.com/embed/HsCp5LG_zNE?si=SVRmh5evJYOhTVy8");
new Hymn ("As I kneel before you",360,"","","https://www.youtube.com/embed/BYv6E9xnJ1U?si=W5qvVIl1dVdmlVEA");
new Hymn ("As with gladness men of old",166,"","","https://www.youtube.com/embed/y-TplMYH0Ko?si=abx_LTDZfoet_c44");
new Hymn ("Bethlehem of noblest cities",167,"","","https://www.youtube.com/embed/rlbmmn9uOLg?si=H0LS3ygSKcTXnlA6")
new Hymn ("Blessed virgin mother",361,"","[Piano]","");
new Hymn ("Blest are you, Lord",603,"","","https://www.youtube.com/embed/tsGr49LpuGI?si=p4yTl1Xy_chXtTgN");
new Hymn ("Bread of life",631,"","","https://www.youtube.com/embed/iYKxMAn3Kfo?si=Fei0At7L0HqudqQ3");
new Hymn ("Daily,daily sing to Mary",353,"","","https://www.youtube.com/embed/Xwkca-3GiM4?si=UE2_gA3FfHCirCC0");
new Hymn ("Dear Lord and Father of mankind",934,"","","https://www.youtube.com/embed/b1MN3chW1Hk?si=C30Yg9l0jHnjT-HO");
new Hymn ("Follow me, follow me",863,"","","https://www.youtube.com/embed/fzkP3jy8BEM?si=f4M8NvoxXceQJcbr");
new Hymn ("Hail Queen of heaven",356,"","","https://www.youtube.com/embed/xfkPTmry3zI?si=SkUYW9G4hlpippRf");
new Hymn ("Hark the Herald Angels Sing",155,"","","https://www.youtube.com/embed/9Bwn0k0k8xI?si=vilS4HDunUKoLrlC");
new Hymn ("Holy is his name",339,"","","https://www.youtube.com/embed/uILEUS4fyQg?si=mMs3PRADRaNuBI2s")
new Hymn ("Holy virgin by God's decree",366,"","","https://www.youtube.com/embed/aJZhYBXse2g?si=j7DLVkqiusbcid97");
new Hymn ("I heard the voice of Jesus say",795,"","","https://www.youtube.com/embed/Kh4XxlWZhMs?si=xmfUNd4cYzk_fRjQ");
new Hymn ("I'll sing a hymn to Mary",355, "","","https://www.youtube.com/embed/SB3Rc2gXGH8?si=-pVYf2yLsbBscT0e");
new Hymn ("Immaculate Mary",365,"","","https://www.youtube.com/embed/hXqTGl6mbYg?si=62ZRgf9GcBlBYmM0");
new Hymn ("In the bleak mid-winter",144,"","","https://www.youtube.com/embed/cBCYZ9jIJkI?si=7IfiGM2MqBrA1q6t");
new Hymn ("In the Breaking of the Bread",624,"","","https://www.youtube.com/embed/0H8CPadsVco?si=TEfbe6JW7aAJ_ZVA");
new Hymn ("It came upon the midnight clear",135,"","","https://www.youtube.com/embed/hx7LJZIXXJo?si=7a3g6ieIB0AZB4MY");
new Hymn ("Lay your hands",432, "","","https://www.youtube.com/embed/q5UvY7itnn8?si=tRTETqvYEvcjjvSg");
new Hymn ("Long ago prophets knew",116,"","","https://www.youtube.com/embed/OeLA1LhqFA4?si=Y_jd5YhNoRzLi9ae");
new Hymn ("O Come all ye faithful",159,"","","https://www.youtube.com/embed/8ZYZEr3JtZY?si=ZRXVkFmw8cKqnLO1");
new Hymn ("O let all who thirst",408,"","","https://www.youtube.com/embed/MwG6PCWnih0?si=qltwXx5awggq5kJp");    
new Hymn ("O Mary Conceived In The Grace Of Your Son",354,"",["Piano"],"");
new Hymn ("On Christmas night all Christians sing",134,"","","https://www.youtube.com/embed/wxaLyJ5G4zM?si=ntSZgM5_fK_rTuF-");
new Hymn ("On Jordan's bank",94,"","","https://www.youtube.com/embed/OVHkMWwnGWk?si=jIJKo6aQAzqYlVFL")
new Hymn ("One Bread, One Body",832,"","","https://www.youtube.com/embed/WHAu3fLF7NI?si=Dfu0x8PsljIxRoY0");
new Hymn ("Once in royal David's city",128,"","","https://www.youtube.com/embed/PtiCLJvyePw?si=TeMsFVrdT232gYs2");
new Hymn ("Praise my soul the King of Heaven",807,"","","https://www.youtube.com/embed/GyRIVbdsi4c?si=ittnj3ufy9aj98Nj");
new Hymn ("Praise to you o christ our saviour",200,"","","https://www.youtube.com/embed/mybxBzhONyU?si=TAS1uxRc6ZY-Bq5V");
new Hymn ("Silent Night",136,"./sheetMusic/SilentNight.pdf",["satb", "melody","alto","tenor","bass","piano"],"https://www.youtube-nocookie.com/embed/POcDlbYiF9c?si=cBj0zCzSgsO6fK7T");
new Hymn ("Sing of Mary, pure and lowly",341,"","","https://www.youtube.com/embed/Ap6Hym_ERQM?si=dN6iC0-7Wsk2DXnz");
new Hymn ("Sing of the Lord's Goodness",713,"","","https://www.youtube.com/embed/xzTXl_jA-XQ?si=4Poy3GZQvRYyieDe")
new Hymn ("Sing we of the blessed Mother",344,"","","https://www.youtube.com/embed/zYZ4MbY5kG0?si=2NTmZecGpeCPOkvP");
new Hymn ("The angel Gabriel",113,"","","https://www.youtube.com/embed/pliqObTHxUQ?si=n-iBUx5I6ggQvds1");
new Hymn ("The Church's One Foundation",830,"","","https://www.youtube.com/embed/1ooRvCyULoU?si=c381yxAE3XBSKWhi");
new Hymn ("The first Noel",150,"","","https://www.youtube.com/embed/1mItWsC8RtM?si=_cbhrtdvUladP4Yn");
new Hymn ("The king of glory comes",107,"","","https://www.youtube.com/embed/aTl1Q8yudfM?si=x0GFpzoPCkMWtZRA");
new Hymn ("The light of Christ",747,"","","https://www.youtube.com/embed/ylgeOR1LT_s?si=_01aQwXMVrFL7dOY");
new Hymn ("The Summons",877,"","","https://www.youtube.com/embed/VFXAmB_Iq7k?si=6VEiE0TBf4zx_8W0");
new Hymn ("The voice of God",108,"","","https://www.youtube.com/embed/r9EohwMRurc?si=35hV3H_r-sr145bJ")
new Hymn ("This is my body",627,"","","https://www.youtube.com/embed/O-60hfhJzqI?si=_vXX2hQT8MWV5zwl")
new Hymn ("Unto us is born a son",152,"","","https://www.youtube.com/embed/4_4xMMpcqbM?si=RhsMJeDjUpuP2bYO");
new Hymn ("Water of life",512,"","","https://www.youtube.com/embed/p153CSsGRxs?si=_yModMrXNcTu4vYm");
new Hymn ("We have a gospel to proclaim",852,"","","https://www.youtube.com/embed/OXlojQCipg4?si=fxCJvBdV-nCFq-It");
new Hymn ("We three kings",170,"","","https://www.youtube.com/embed/Lx35_DRIZ8g?si=bCTGGMdpULJm0UDc");
new Hymn ("What child is this",145,"","","https://www.youtube.com/embed/6jroBAl3WW8?si=kZEj9G4qmknU1RlB");
new Hymn ("Where are you bound, Mary?",343,"","","https://www.youtube.com/embed/rPWOEZzNhxM?si=w_alalLvviuN7AX5");

//specify litergys
new Litergy (new Date("08 dec 2024"), "2nd Sunday Advent","C","Chris",
grabHymnObject("On jordan's bank","praise to you o christ our saviour","this is my body","holy virgin by god's decree"))

new Litergy (new Date("15 dec 2024"), "3rd Sunday Advent","C","Chris",
grabHymnObject("the voice of god","holy is his name", "the king of glory comes","blessed virgin mother"));

new Litergy (new Date("22 dec 2024"), "4th Sunday Advent","C","Chris",
grabHymnObject("long ago prophets knew","the angel gabriel", "in the breaking of the bread","o mary conceived in the grace of your son"));

new Litergy (new Date("24 dec 2024"), "Christmas Eve","C","Chris",
grabHymnObject("on christmas night all christians sing","it came upon the midnight clear", "once in royal david's city","the first noel"));

new Litergy (new Date("25 dec 2024"), "Christmas Day","C","Chris",
grabHymnObject("unto us is born a son","hark the herald angels sing","silent night","o come all ye faithful"));

new Litergy (new Date("29 dec 2024"), "Feast of Holy Family","C","Chris",
grabHymnObject("what child is this","in the bleak mid-winter","bread of life","sing of mary, pure and lowly"));

new Litergy (new Date("01 jan 2025"), "Mary the Holy mother of God","C","Chris",
grabHymnObject("I'll sing a hymn to mary","hail queen of heaven","as i kneel before you","holy virgin by god's decree"));

new Litergy (new Date("5 jan 2025"), "The Epiphany","C","Chris",
grabHymnObject("bethlehem of noblest cities","As with gladness men of old","We three kings","As I kneel before you"));

new Litergy (new Date("12 jan 2025"), "The Baptism of the Lord","C","Chris",
grabHymnObject("i heard the voice of Jesus say","water of life","o let all who thirst","hail queen of heaven"));

new Litergy (new Date("19 jan 2025"), "2nd Sunday of Ordinary Time","C","Chris",
grabHymnObject("The Church's one foundation","Lay your hands","One Bread, One Body","Immaculate Mary"));

new Litergy (new Date("26 jan 2025"), "3rd Sunday of Ordinary Time","C","Chris",
grabHymnObject("We have a gospel to proclaim","Blest are you, Lord","This is my body","Where are you bound, Mary?"));

new Litergy (new Date("2 Feb 2025"), "The Presentation of the Lord","C","Chris",
grabHymnObject("Sing of the Lord's Goodness","The King of Glory Comes","The light of Christ","Daily,daily sing to Mary"));

new Litergy (new Date("9 Feb 2025"), "5th Sunday of Ordinary Time","C","Chris",
grabHymnObject("Follow me, follow me","The Summons","Dear Lord and Father of mankind","Sing we of the blessed Mother"));

new Litergy (new Date("16 Feb 2025"), "6th Sunday of Ordinary Time","C","Chris",
grabHymnObject("Praise my soul the King of Heaven","Alleluia, sing to Jesus","Amazing Grace","Sing of Mary, pure and lowly"));


allLitergies.sort(function(a,b){return a.date - b.date}); //sort Liturgy array incase not sorted manually



const todaysDate = new Date();
//next litergy will change after 10:30am
// todaysDate.setMinutes(30);
// todaysDate.setSeconds(0);
// todaysDate.setHours(10);
// todaysDate.setMilliseconds(0);

const nextLitergy = allLitergies.filter(x => x.date >= todaysDate);
const originalHymns = allHymns;
wrapper.querySelector("#nextDateButton").closest("li").addEventListener("click",function(){
    allHymns = originalHymns;
    allHymns = nextLitergy[0].hymn;
    count = 0;
    hymnSelect();
    wrapper.querySelector(".liturgyPlan").classList.add("hidden");
    
});
wrapper.querySelector(".openLiturgyPlan").addEventListener("click",function(){
    wrapper.querySelector(".liturgyPlan").classList.remove("hidden");
    
});
wrapper.querySelector(".allHymns").addEventListener("click",function(){
    allHymns = originalHymns;
    hymnSelect();
    wrapper.querySelector(".liturgyPlan").classList.add("hidden");
    
});




wrapper.querySelector("#nextDate").textContent = ordinal(nextLitergy[0].date.toLocaleDateString(undefined,{day:"numeric"})) + " of " +  nextLitergy[0].date.toLocaleDateString(undefined,{month:"long"});
wrapper.querySelector("#nextOccasion").textContent = nextLitergy[0].occasion;
wrapper.querySelector("#hymn1").textContent = nextLitergy[0].hymn[0].title;
wrapper.querySelector("#hymn2").textContent = nextLitergy[0].hymn[1].title;
wrapper.querySelector("#hymn3").textContent = nextLitergy[0].hymn[2].title;
wrapper.querySelector("#hymn4").textContent = nextLitergy[0].hymn[3].title;
    var testDate = new Date ().toLocaleDateString(undefined, {day: "numeric"});
    
// document.querySelector("#test").textContent = ordinal(testDate)
// allLitergies[0].date + " - " + allLitergies[0].occasion;
// document.querySelector("#test2").textContent = todaysDate;
// document.querySelector("#test3").textContent = nextLitergy[0].date.toDateString();

function ordinal (day){ //add 'st','nd','rd' or 'th' to date
    let nth; 
         switch (day%10) {
             case 1:
                 nth = "st";
                 break;
             case 2:
                 nth = "nd";
                 break;
             case 3:
                 nth = "rd";
                 break;
             
             default:
                nth = "th"
                 break;
         }
     if (day >= 4 && day <= 20){
         nth = "th";
     }
 return day + nth;
 }

function grabHymnObject(hymnTitle1,hymnTitle2,hymnTitle3,hymnTitle4,hymnTitle5,hymnTitle6,hymnTitle7,hymnTitle8){
    //return array of hymn objects (up to 8) depending on how many are requested in 'new litergy'
    
    var hymns =[];
   
    if (hymnTitle1 !== undefined)hymns.push(allHymns.filter(x => (x.title.toLowerCase() == hymnTitle1.toLowerCase()))[0]);  
    if (hymnTitle2 !== undefined)hymns.push(allHymns.filter(x => (x.title.toLowerCase() == hymnTitle2.toLowerCase()))[0]);  
    if (hymnTitle3 !== undefined)hymns.push(allHymns.filter(x => (x.title.toLowerCase() == hymnTitle3.toLowerCase()))[0]);  
    if (hymnTitle4 !== undefined)hymns.push(allHymns.filter(x => (x.title.toLowerCase() == hymnTitle4.toLowerCase()))[0]);  
    if (hymnTitle5 !== undefined)hymns.push(allHymns.filter(x => (x.title.toLowerCase() == hymnTitle5.toLowerCase()))[0]);  
    if (hymnTitle6 !== undefined)hymns.push(allHymns.filter(x => (x.title.toLowerCase() == hymnTitle6.toLowerCase()))[0]);  
    if (hymnTitle7 !== undefined)hymns.push(allHymns.filter(x => (x.title.toLowerCase() == hymnTitle7.toLowerCase()))[0]);  
    if (hymnTitle8 !== undefined)hymns.push(allHymns.filter(x => (x.title.toLowerCase() == hymnTitle8.toLowerCase()))[0]);  
    
    return hymns;
    
}

count = 0;

//up & down buttons
document.querySelector(".hymnSelect").addEventListener("click", (e)=> {
      
    if (e.target.classList == "up" ){
        
        count--;
        if (count == -1){
            count = allHymns.length-1;
        }
    }
    else {
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

//bottom 3 tittles//
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
    
    let partTitle = audioButton.innerHTML;
    if (partTitle == "Satb"){
        partTitle = partTitle.toUpperCase();
    }
    const audioDescription = title + " - " + partTitle;   
    const filename = "./audio/" + title + "/" + title/*.replace(/ /g, "")*/ + " - " + partTitle + ".mp3";
    

    document.querySelector("#mediaPlayer__light").removeAttribute("class");
    // document.querySelector("#title").removeAttribute("class");

    for(let index = 0; index < allLights.length; index++) {
        const element = allLights[index];
        element.classList.remove("selected");
        
    }
    switch (audioButton.innerHTML) {
        case capitalize(allHymns[count].vocalPart[0]):
            
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
    wrapper.querySelector(".hymnSelect").classList.add("hidden");    
        
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

//blur out background panels when accordion opens//
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
               
                
                for (let index = 0; index < allListItems.length; index++) { //remove any lingering audio parts
                    const element = allListItems[index];
                    element.classList.remove("visible");
                    }
                
                
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
        
        if (!panelToActivate.classList.contains("panel")){return;}; //return if main panel not clicked
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
        wrapper.querySelector(".hymnSelect").classList.remove("hidden");
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
       
    
    if (e.target.classList == "up"){
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
    else  {
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

