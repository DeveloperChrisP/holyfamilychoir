const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e)=> {
    
    const activePanel = e.target.closest(".accordion_panel");
    const specificClick = e.target.closest(".closePanel");
   
    if (!activePanel) return;
    if (specificClick) {
        closeAccordion(specificClick);
    }
    else{
    toggleAccordion (activePanel);
    }
})

function toggleAccordion (panelToActivate){
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents = panelToActivate.parentElement.querySelectorAll(".accordion_content p");
    const panels = panelToActivate.parentElement.querySelectorAll(".accordion_panel");
   
//     if (panelToActivate.id === "firstX"){
//     for (let index = 0; index < panels.length; index++) {
//         const element = panelToActivate.parentElement.querySelectorAll(".accordion_panel")[index];
//         element.classList.remove("accordion_open");
//     }
// } 
    // buttons.forEach(button => {
    //     button.setAttribute("aria-expanded", false);
    // });

    // contents.forEach(content => {
    //     content.setAttribute("aria-hidden", true);
        
    // });
    
    // if (panelToActivate.id == ("panel1")) {

    //     // panelToActivate.parentElement.parentElement.classList.toggle("accordion_open");
        
    //     panelToActivate.parentElement.querySelectorAll(".accordion_panel")[0].classList.toggle("accordion_open");
    //     panelToActivate.parentElement.querySelectorAll(".accordion_panel")[1].classList.toggle("accordion_open");
    //     panelToActivate.parentElement.querySelectorAll(".accordion_panel")[2].classList.toggle("accordion_open");
    //     panelToActivate.parentElement.querySelectorAll(".accordion_panel")[3].classList.toggle("accordion_open");
    //     panelToActivate.parentElement.parentElement.lastChild.previousElementSibling.classList.remove("accordion_fullyOpen");
    //     // console.log(panelToActivate.parentElement.querySelectorAll(".accordion_panel"));
    // }
    // //  else if (panelToActivate.id == ("panel4"))  {
    // //     document.querySelector("iframe").requestFullscreen();
    // //  } 
    //  else {
    //     // panelToActivate.querySelector("button").setAttribute("aria-expanded", true);
            
    //     panelToActivate.querySelector(".accordion_content").setAttribute("aria-hidden", false);
    //     panelToActivate.parentElement.parentElement.lastChild.previousElementSibling.classList.add("accordion_fullyOpen");
        
    // }
if (panelToActivate.id == "panel1"){
    for (let index = 0; index < panels.length; index++) {
                    const element = panelToActivate.parentElement.querySelectorAll(".accordion_panel")[index];
                    element.classList.add("accordion_open");
                }
                panelToActivate.querySelector("#firstX").classList.remove("hidden");
                panelToActivate.classList.add("open");
                // panelToActivate.querySelector(".closePanel").classList.remove("hidden");
} 
else {
    panelToActivate.classList.add("open");
    panelToActivate.querySelector(".closePanel").classList.remove("hidden");

    for (let index = 1; index < panels.length; index++) {
        const element = panelToActivate.parentElement.querySelectorAll(".accordion_panel")[index];
        element.classList.add("visibility");
    }
    panelToActivate.classList.remove("visibility");
}              


// else{
// switch (panelToActivate.id) {
//     case "panel1":
//         for (let index = 0; index < panels.length; index++) {
//             const element = panelToActivate.parentElement.querySelectorAll(".accordion_panel")[index];
//             element.classList.add("accordion_open");
//         }
//         panelToActivate.querySelector("#firstX").classList.remove("hidden");
//         // console.log(panelToActivate);
//         // panelToActivate.querySelector(".closePanel").classList.remove("hidden");
//         break;
 


//     case "panel2":
//         // panelToActivate.classList.add("open");
//         break;
    
//     default:
//         break;
// }

}  


function closeAccordion (closeButton){
    
    const panels = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".accordion_panel");
    const clickedPanel = closeButton.parentElement.parentElement.querySelector(".accordion_panel");
    if (closeButton.id == "firstX"){
        for (let index = 0; index < panels.length; index++) {
            const element = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".accordion_panel")[index];
            element.classList.remove("accordion_open");
            element.classList.remove("open");
        }
        closeButton.classList.add("hidden");
    }
    else {
        // console.log(clickedPanel);
        // clickedPanel.classList.add("hidden");
        closeButton.parentElement.parentElement.classList.remove("open");
        closeButton.classList.add("hidden");

        for (let index = 0; index < panels.length; index++) {
            const element = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".accordion_panel")[index];
            element.classList.remove("visibility");
        }
        
    }
}


