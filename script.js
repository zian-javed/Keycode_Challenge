const mainContainer = document.querySelector(".container");
const mainTitle = document.querySelector(".containerTitle");
const mainPreview = document.querySelector(".preview")
const eventWhich = document.querySelector("#eventWhich");
const eventKey = document.querySelector("#eventKey");
const eventCode = document.querySelector("#eventCode");



// document.addEventListener("mouseover", i => {
//     console.log(i);
//     mainContainer.remove();

// });

document.addEventListener("keydown", event => {
    console.log(event);
    mainPreview.remove();
    mainContainer.style.display = "block";
    eventKey.textContent =  `${event.key}`;
    eventWhich.textContent =  `${event.keyCode}`;
    eventCode.textContent =  `${event.code}`;
    mainTitle.textContent =  `${event.keyCode}`;

    if(event.code == "Space"){
        eventKey.textContent =  `Space Character`;
    }
});