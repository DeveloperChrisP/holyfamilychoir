// Contents
// var numberOfContents = document.querySelectorAll("h4").length;
// for (i=0 ; i < numberOfContents ; i++){
//     document.querySelectorAll("h4")[i].addEventListener("click", function (){
        
//         document.querySelector("ul").classList.toggle("opaque");

//         setTimeout(() => {
            
//             document.querySelector(".massContentContainer").classList.toggle("closed");
            
            
//         }, 500);

        
//     })
// }



//Audio Player button
// var audio;
// document.querySelector("audio").addEventListener("click", playAudio);

// function playAudio () {
//     // alert ("button clicked");
//     audio.play();
// }

// 
// // Contents Selection
// Mass Setting Constructor
var count = 0;
function MassSetting(title,titleClass,contents,vocalParts,video){
    this.title = title;
    this.titleClass = titleClass;
    this.contents = contents;
    this.vocalParts = vocalParts;
    this.video = video;
    count++; 
    
}
//Full Mass setting object - to compare to//
var completeMass = {
    contents: ["gloria","alleluia","holyHoly","memorialAcc","lambOfGod"],
    vocalParts: ["satb", "melody","alto","tenor","bass","piano"]
    }

var massSetting1 = new MassSetting ("Dan Schutte Mass","Schutte",
    ["gloria","alleluia","holyHoly","memorialAcc","lambOfGod"],
    ["satb", "melody","alto","tenor","bass","piano"],
    ["https://www.youtube-nocookie.com/embed/oeKKr2xIFMg?si=SUmo87i9HKxOZ00f", 
    "https://www.youtube-nocookie.com/embed/oeKKr2xIFMg?si=SUmo87i9HKxOZ00f"]
);

var massSetting2 = new MassSetting ("Celtic Mass","Celtic",
    ["gloria","alleluia"],
    ["melody"]
);

var massSetting3 = new MassSetting ("Bernadette Farrel Mass","Farrel",
    ["gloria","holyHoly","memorialAcc","lambOfGod"],
    ["melody","alto","tenor","bass"]
);

var mass = [massSetting1, massSetting2, massSetting3];

// var CompleteContents = ["gloria","alleluia","holyHoly","memorialAcc","lambOfGod"];
// var CompleteParts = ["satb", "melody","alto","tenor","bass","piano"];


// var SchutteContents = ["gloria","alleluia","holyHoly","memorialAcc","lambOfGod"];
// var SchutteParts = ["satb", "melody","alto","tenor","bass","piano"];

// var CelticContents = ["gloria","alleluia"];
// var CelticParts = ["melody"];

// var FarrelContents = ["gloria","holyHoly","memorialAcc","lambOfGod"];
// var FarrelParts = ["melody","alto","tenor","bass"];

// var MassLitergyTitle = ["Dan Schutte Mass", "Celtic Mass", "Benadette Farrel Mass"];
// var MassLitergyTitleClass = ["Schutte","Celtic","Farrel"]

// var MassLitergyContents = [SchutteContents,CelticContents,FarrelContents];
// var MassLitergyParts = [SchutteParts,CelticParts,FarrelParts];


// Cycle through left & right buttons

var clock = 0; 


document.querySelector(".left").addEventListener("click", function (){
    clock--;
    
    if (clock == -1){
        clock = mass.length-1;
    }
    if (clock == 0){
        // document.querySelector(".dummyLeft").textContent = MassLitergyTitle[MassLitergyTitle.length-1];
        document.querySelector(".dummyLeft").textContent = mass[mass.length-1].title;
    }
    else {
        // document.querySelector(".dummyLeft").textContent = MassLitergyTitle[clock-1];
        document.querySelector(".dummyLeft").textContent = mass[clock-1].title;
    }
    
    if (clock == mass.length-1){
        // document.querySelector(".dummyRight").textContent = MassLitergyTitle[0];
        document.querySelector(".dummyRight").textContent = mass[0].title;
    }
    else{
        // document.querySelector(".dummyRight").textContent = MassLitergyTitle[clock+1];
        document.querySelector(".dummyRight").textContent = mass[clock+1].title;
    }
    

    visualizeContents(mass[clock].contents,mass[clock].vocalParts);
    document.querySelector("#title").textContent=mass[clock].title;
    // For left & right cards - could do title textcontent = clock -1 / clock +1 (opaque)

        document.querySelector("#title").removeAttribute("class");
        document.querySelector("#title").classList.add(mass[clock].titleClass);
});

document.querySelector(".right").addEventListener("click", function(){
    clock++;
    if (clock == mass.length){
        clock = 0;
    }
    if (clock == 0){
        // document.querySelector(".dummyLeft").textContent = MassLitergyTitle[MassLitergyTitle.length-1];
        document.querySelector(".dummyLeft").textContent = mass[mass.length-1].title;
    }
    else {
        // document.querySelector(".dummyLeft").textContent = MassLitergyTitle[clock-1];
        document.querySelector(".dummyLeft").textContent = mass[clock-1].title;
    }
    
    if (clock == mass.length-1){
        // document.querySelector(".dummyRight").textContent = MassLitergyTitle[0];
        document.querySelector(".dummyRight").textContent = mass[0].title;
    }
    else{
        // document.querySelector(".dummyRight").textContent = MassLitergyTitle[clock+1];
        document.querySelector(".dummyRight").textContent = mass[clock+1].title;
    }
    
    visualizeContents(mass[clock].contents,mass[clock].vocalParts);
    document.querySelector("#title").textContent=mass[clock].title;

    document.querySelector("#title").removeAttribute("class");
    document.querySelector("#title").classList.add(mass[clock].titleClass);
    
});
   


// visualizeContents(MassLitergyContents[1]);

//x = Mass Contents variable
function visualizeContents (x,y){
    
    for (let index = 0; index < completeMass.contents.length; index++) {
        document.querySelector(".contents."+ completeMass.contents[index]).classList.remove("hidden");
        if (!x.includes(completeMass.contents[index]))
        {
                        document.querySelector(".contents."+ completeMass.contents[index]).classList.add("hidden");
        }
    }   
    
    for (let index = 0; index < completeMass.vocalParts.length; index++) {
        document.querySelectorAll(".partTitle."+ completeMass.vocalParts[index])[0].classList.remove("hidden");
        document.querySelectorAll(".partTitle."+ completeMass.vocalParts[index])[1].classList.remove("hidden");

        if (!y.includes(completeMass.vocalParts[index]))
        {
                        document.querySelectorAll(".partTitle."+ completeMass.vocalParts[index])[0].classList.add("hidden");
                        document.querySelectorAll(".partTitle."+ completeMass.vocalParts[index])[1].classList.add("hidden");
        }       
    } 
}
// function visualizeParts (y){
    
       
// }




var title = document.querySelector("#title").classList;
// var subTitle = document.querySelector(".massContentContainer > > h4").textContent;

// Variables for filename Sub-Titles //
var gloria = "Gloria";
var alleluia = "Alleluia";
var holyHoly = "HolyHoly";
var memorialAcc = "MemorialAcc";
var lambOfGod = "LambOfGod";


var contentsContainer = document.querySelectorAll(".massContentContainer")[1];
contentsContainer.addEventListener("click", function (){
    var containsClass = event.target.classList;
    
    // var subTitle = "";
    var subTitle = document.querySelector(".audioSelector > h4").id;
    var partTitle = event.target.innerHTML;
    var audioDescription = title + " " + subTitle + " " + partTitle;
    var filename = "./audio/" + title + "-" + subTitle + "-" + partTitle + ".mp3";
    var videoDescription = title + " " + subTitle;
    // console.log (event.target.id);
    // var subTitle = "";
    // console.log(containsClass.contains("partTitle"));
    // console.log(event.target.innerHTML);
//    var element = event.target.tagName;
//    console.log(filename);
    switch (true) {
        // reset contents by clicking the title
        case event.target.id == "title":
            
            document.querySelectorAll(".massContentContainer")[1].classList.remove("closed");
            document.querySelectorAll(".massContentContainer")[1].classList.remove("closed2");
            document.querySelector("h2.audioPlayer").textContent = "Audio Player";
            document.querySelectorAll(".audioplayer iframe")[0].classList.add("hidden");
            document.querySelector("audio").classList.remove("hidden");
            document.querySelector("h3.audioDescription").textContent = title + " " + subTitle;
            document.querySelector("h2.audioPlayer").classList.remove("white");
            document.querySelector("h3.audioDescription").classList.remove("white");

            for (i=0;i<document.querySelectorAll(".audioSelector button").length;i++){
            document.querySelectorAll(".audioSelector button")[i].classList.remove("selected");
         
            }
           
            // document.querySelector(".audioSelector").classList.add("hidden");
            break;

        case containsClass.contains("gloria"):
            // document.querySelectorAll(".contents")[0].classList.add("opaque");
            // document.querySelectorAll(".contents")[1].classList.add("opaque");
            // document.querySelectorAll(".contents")[2].classList.add("opaque");
            // document.querySelectorAll(".contents")[3].classList.add("opaque");
            // document.querySelectorAll(".contents")[4].classList.add("opaque");
            document.querySelectorAll(".massContentContainer")[1].classList.add("closed");
            document.querySelector(".audioSelector > h4").textContent = "Gloria";
            document.querySelector(".audioSelector > h4").setAttribute("id", gloria);
            
            document.querySelector("h3 span").textContent = " " + title + " - " + "Gloria";
           
            document.querySelector("iframe").setAttribute("src", mass[clock].video[0]);
                // var subTitle = document.querySelector(".audioSelector > h4").textContent;
                // var filename = "./audio/" + title + "-" + subTitle + "-" + partTitle + ".mp3";
                // console.log(filename);
                // document.querySelector("audio").setAttribute("src",filename);
            
     
            
        //    document.querySelector(".audioSelector").classList.remove("hidden");
            break;
        case containsClass.contains("alleluia"):
            document.querySelector(".audioSelector > h4").textContent = "Alleluia";
            document.querySelector(".audioSelector > h4").setAttribute("id", alleluia);
            // var subTitle = "Alleluia";
            document.querySelectorAll(".massContentContainer")[1].classList.add("closed");
            // subTitle = document.querySelector(".audioSelector > h4").textContent;
            document.querySelector("h3 span").textContent = " " + title + " - " + "Alleluia";
            // console.log(filename);
            document.querySelector("iframe").setAttribute("src", mass[clock].video[1]);
            break;
        case containsClass.contains("holyHoly"):
            document.querySelector(".audioSelector > h4").textContent = "Holy Holy";
            document.querySelector(".audioSelector > h4").setAttribute("id", holyHoly);
            document.querySelectorAll(".massContentContainer")[1].classList.add("closed");
            document.querySelector("h3 span").textContent = " " + title + " - " + "Holy Holy";
            break;
        case containsClass.contains("memorialAcc"):
            document.querySelector(".audioSelector > h4").textContent = "Mem. Acc.";
            document.querySelector(".audioSelector > h4").setAttribute("id", memorialAcc);
            document.querySelectorAll(".massContentContainer")[1].classList.add("closed");
            document.querySelector("h3 span").textContent = " " + title + " - " + "Memorial Acc.";
            
            break;
        case containsClass.contains("lambOfGod"):
            document.querySelector(".audioSelector > h4").textContent = "Lamb of God";
            document.querySelector(".audioSelector > h4").setAttribute("id", lambOfGod);
            document.querySelectorAll(".massContentContainer")[1].classList.add("closed");
            document.querySelector("h3 span").textContent = " " + title + " - " + "Lamb Of God";
            
            break;
            case containsClass.contains("satb"):
                
                console.log(filename); 
                document.querySelector("audio").setAttribute("src",filename);
                document.querySelector("h3.audioDescription").textContent = audioDescription;
                document.querySelector("#audioCircle").classList.add("selected" , "satb");
                removeSelected (event.target.textContent);
                break;
            case containsClass.contains("melody"):
                
                console.log(filename); 
                document.querySelector("audio").setAttribute("src",filename);
                document.querySelector("h3.audioDescription").textContent = audioDescription;
                document.querySelector("#audioCircle").classList.add("selected" , "melody");
                removeSelected (event.target.textContent);
                break;
                case containsClass.contains("alto"):
                    
                    console.log(filename); 
                    document.querySelector("audio").setAttribute("src",filename);
                    document.querySelector("h3.audioDescription").textContent = audioDescription;
                    document.querySelector("#audioCircle").classList.add("selected" , "alto");
                    removeSelected (event.target.textContent);
                    break;
                case containsClass.contains("tenor"):
                
                console.log(filename); 
                document.querySelector("audio").setAttribute("src",filename);
                document.querySelector("h3.audioDescription").textContent = audioDescription;
                document.querySelector("#audioCircle").classList.add("selected" , "tenor");
                removeSelected (event.target.textContent);
                break;
            case containsClass.contains("bass"):
                
                console.log(filename); 
                document.querySelector("audio").setAttribute("src",filename);
                document.querySelector("h3.audioDescription").textContent = audioDescription;
                document.querySelector("#audioCircle").classList.add("selected" , "bass");
                removeSelected (event.target.textContent);
                break;
            case containsClass.contains("piano"):
               
                console.log(filename); 
                document.querySelector("audio").setAttribute("src",filename);
                document.querySelector("h3.audioDescription").textContent = audioDescription;
                document.querySelector("#audioCircle").classList.add("selected" , "piano");
                // document.querySelector("button.piano").classList.add("selected");
                removeSelected (event.target.textContent);
                break;
            case containsClass.contains("video"):
               
                 
                // document.querySelector("audio").setAttribute("src",filename);
                
                document.querySelector("h2.audioPlayer").textContent = "Video Player";
                document.querySelectorAll(".massContentContainer")[1].classList.add("closed2");
                document.querySelectorAll(".audioplayer iframe")[0].classList.remove("hidden");
                document.querySelectorAll("audio")[0].classList.add("hidden");
                document.querySelector(".container > h3").textContent = videoDescription;
                document.querySelector("#audioCircle").classList.add("selected" , "satb");
                document.querySelector("h2.audioPlayer").classList.add("white");
                document.querySelector("h3.audioDescription").classList.add("white");
                // document.querySelector("h3 span").textContent = " " + title + " - " + subTitle;
                // document.querySelector("#audioCircle").classList.add("selected" , "piano");
                // document.querySelector("button.piano").classList.add("selected");
                // removeSelected (event.target.textContent);
                break;
        default:
            
            break;
    }
    
})


// remove ".selected" from all other buttons function
// x = event.target.textContent
function removeSelected (x){
    var parts = ["satb","melody","alto","tenor","bass","piano"];
    for (i=0;i< document.querySelectorAll("button").length ;i++){
       document.querySelector("button."+ parts[i]).classList.remove("selected");
       document.querySelector("#audioCircle").classList.remove(parts[i]);
    // document.querySelector("button.satb").classList.remove("selected");
    // document.querySelector("button.melody").classList.remove("selected");
    // document.querySelector("button.alto").classList.remove("selected");
    // document.querySelector("button.tenor").classList.remove("selected");
    // document.querySelector("button.bass").classList.remove("selected");
    // document.querySelector("button.piano").classList.remove("selected");
    }
    document.querySelector("button." + x.toLowerCase()).classList.add("selected");
    document.querySelector("#audioCircle").classList.add("selected", x.toLowerCase());
}




//Gloria buttons
var numberOfButtons = document.querySelectorAll("button").length;
for (i=0 ; i<numberOfButtons ; i++){
document.querySelectorAll("button")[i].addEventListener("click", loadAudio);

}


function loadAudio () {
    // alert ("audio loaded");
    //  audio = new Audio ('./audio/Schutte - Glory - Alto.aac');
    // console.log(this.getAttribute("class"));
    var accType = this.getAttribute("class");


    switch (true) {
        // case accType.contains("satb"):
        //         document.querySelector("audio").setAttribute("src","./audio/Schutte - Glory - sab.mp3");
        //         document.querySelectorAll("h4")[0].textContent = "Schutte - Gloria - SAB";
        //     break;
            
        //     case "gloria alto":
        //         document.querySelector("audio").setAttribute("src","./audio/Schutte - Glory - Alto.aac");
        //         document.querySelectorAll("h4")[0].textContent = "Schutte - Gloria - Alto";
        //     break;
        
        default:
            break;
    }


}